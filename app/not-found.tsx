import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"

export default function NotFound() {
  return (
    <>
      <Header />
      <div className="container flex flex-col items-center justify-center min-h-[calc(100vh-3.5rem)] py-12 text-center">
        <div className="mx-auto flex max-w-[800px] flex-col items-center justify-center space-y-4">
          <div className="relative h-60 w-60 text-muted-foreground">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              height="100%"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="absolute inset-0"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="m15 9-6 6" />
              <path d="m9 9 6 6" />
            </svg>
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">404 - Page Not Found</h1>
          <p className="max-w-[600px] text-lg text-muted-foreground">
            Oops! The page you're looking for doesn't exist or has been moved.
          </p>
          <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <Button asChild size="lg">
              <Link href="/">Return Home</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/courses">Browse Courses</Link>
            </Button>
          </div>
          <p className="text-sm text-muted-foreground pt-4">
            Need help?{" "}
            <Link href="/contact" className="font-medium underline underline-offset-4">
              Contact our support team
            </Link>
          </p>
        </div>
      </div>
    </>
  )
}
