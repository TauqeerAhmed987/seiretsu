import PageTransition from '../components/layout/PageTransition'
import Button from '../components/ui/Button'

export default function NotFound() {
  return (
    <PageTransition className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4 py-24">
      <span className="font-heading font-bold text-8xl text-primary/20">404</span>
      <h1 className="font-heading font-semibold text-3xl text-heading mt-4 mb-3">Page Not Found</h1>
      <p className="text-body max-w-md mb-8">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Button to="/" icon={false}>
        Back To Home
      </Button>
    </PageTransition>
  )
}
