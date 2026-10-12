# Seiretsu Website

React rebuild of [seiretsu.io](https://seiretsu.io) — Vite, React Router, Tailwind CSS, Swiper and Framer Motion.

## Local development

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in dist/
```

## Project structure

```
api/contact.js            Vercel function that emails contact-form messages (Resend)
src/data/site.js          Nav, contact info, hero slides, FAQs, testimonials, feature lists
src/data/plans.js         All eSIM, fiber, wireless and DIRECTV plans + the tab layouts per page
src/data/business.js      Business page content and the availability-checker sample data
src/components/           layout/, sections/, ui/, business/, contact/, icons.jsx
src/pages/                One file per route
src/assets/images/        Site images
```

To change prices or plan details, edit `src/data/plans.js`.

The "Check Fiber At Your Address" tool on `/business` is a front-end simulation: it returns
fixed results for the sample ZIPs in `src/data/business.js` and a generated result for any
other ZIP. There is no carrier API behind it.

## Deployment (Vercel)

`vercel.json` routes every non-API path to `index.html` so page refreshes work.

The contact form needs these environment variables in Vercel:

| Variable             | Purpose                                         |
| -------------------- | ----------------------------------------------- |
| `RESEND_API_KEY`     | API key from resend.com                         |
| `CONTACT_TO_EMAIL`   | Inbox for messages (default `Info@seiretsu.io`) |
| `CONTACT_FROM_EMAIL` | Verified sender address on Resend               |
