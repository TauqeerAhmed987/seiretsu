// Vercel serverless function: receives the contact form and emails it via Resend.
// Required env vars (set in Vercel → Project → Settings → Environment Variables):
//   RESEND_API_KEY      API key from https://resend.com
//   CONTACT_TO_EMAIL    inbox that receives messages (defaults to Info@seiretsu.io)
//   CONTACT_FROM_EMAIL  verified sender, e.g. "Seiretsu <website@seiretsu.io>"

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const PHONE_RE = /^[0-9+()\-.\s]{7,20}$/

const escapeHtml = (value) =>
  String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ success: false, error: 'Method not allowed' })
  }

  const body = req.body && typeof req.body === 'object' ? req.body : {}
  const field = (name, max) => {
    const value = body[name]
    return typeof value === 'string' && value.length <= max ? value.trim() : ''
  }
  const firstName = field('firstName', 100)
  const lastName = field('lastName', 100)
  const email = field('email', 200)
  const phone = field('phone', 20)
  const service = field('service', 100)
  const message = field('message', 5000)

  if (
    !firstName ||
    !lastName ||
    !EMAIL_RE.test(email) ||
    !PHONE_RE.test(phone) ||
    !service ||
    message.length < 10 ||
    body.consent !== true
  ) {
    return res.status(400).json({ success: false, error: 'Invalid form data' })
  }

  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    console.error('RESEND_API_KEY is not set')
    return res.status(500).json({ success: false, error: 'Email is not configured' })
  }

  const fields = {
    Name: `${firstName} ${lastName}`,
    Email: email,
    Phone: phone,
    Service: service,
    'Phone consent': 'Yes',
  }
  const rows = Object.entries(fields)
    .map(([label, value]) => `<p><strong>${label}:</strong> ${escapeHtml(value)}</p>`)
    .join('')

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: process.env.CONTACT_FROM_EMAIL || 'Seiretsu Website <onboarding@resend.dev>',
        to: [process.env.CONTACT_TO_EMAIL || 'Info@seiretsu.io'],
        reply_to: email,
        subject: `New website inquiry: ${service}`,
        html: `${rows}<p><strong>Message:</strong></p><p>${escapeHtml(message).replace(/\n/g, '<br>')}</p>`,
      }),
    })

    if (!response.ok) {
      console.error('Resend error', response.status, await response.text())
      return res.status(502).json({ success: false, error: 'Failed to send email' })
    }

    return res.status(200).json({ success: true })
  } catch (error) {
    console.error('Contact form error', error)
    return res.status(500).json({ success: false, error: 'Failed to send email' })
  }
}
