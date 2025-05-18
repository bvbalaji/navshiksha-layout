"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { LogOut, Menu, User } from "lucide-react"

import { BrandLogo } from "@/components/brand-logo"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { StudentAvatar } from "@/components/avatars/student-avatar"
import { TeacherAvatar } from "@/components/avatars/teacher-avatar"
import { AdminAvatar } from "@/components/avatars/admin-avatar"
import { DefaultAvatar } from "@/components/avatars/default-avatar"

export function Header() {
  const pathname = usePathname()

  // Check user type based on path
  const isStudentPage = pathname?.startsWith("/student")
  const isTeacherPage = pathname?.startsWith("/teacher")
  const isAdminPage = pathname?.startsWith("/admin")

  // Check if user is logged in (simple check based on path)
  const isLoggedIn = isStudentPage || isTeacherPage || isAdminPage

  // Get the appropriate avatar component based on user type
  const AvatarComponent = () => {
    if (isStudentPage) return <StudentAvatar />
    if (isTeacherPage) return <TeacherAvatar className="bg-orange"/>
    if (isAdminPage) return <AdminAvatar />
    return <DefaultAvatar />
  }

  // Get the user role text
  const getUserRole = () => {
    if (isStudentPage) return "Student"
    if (isTeacherPage) return "Teacher"
    if (isAdminPage) return "Admin"
    return "User"
  }

  // Navigation links
  const navLinks = [
    { name: "Features", href: "/#features" },
    { name: "How It Works", href: "/#how-it-works" },
    { name: "Testimonials", href: "/#testimonials" },
    { name: "Pricing", href: "/#pricing" },
    { name: "FAQ", href: "/#faq" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center">
          <BrandLogo />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {!isLoggedIn &&
            navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.name}
              </Link>
            ))}

          {isLoggedIn ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <AvatarComponent />
                  <span className="sr-only">User menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <div className="flex items-center justify-start gap-2 p-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                    <User className="h-4 w-4 text-primary" />
                  </div>
                  <div className="flex flex-col space-y-0.5">
                    <p className="text-sm font-medium">{getUserRole()} Account</p>
                    <p className="text-xs text-muted-foreground">user@navshiksha.com</p>
                  </div>
                </div>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link href="/login">
                    <LogOut className="mr-2 h-4 w-4" />
                    Logout
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <div className="flex items-center gap-4">
              <Link
                href="/login"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                Log in
              </Link>
              <Button asChild>
                <Link href="/login?tab=signup">Sign up</Link>
              </Button>
            </div>
          )}
        </nav>

        {/* Mobile Navigation */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <div className="flex flex-col gap-4 mt-8">
              {!isLoggedIn &&
                navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-base font-medium text-foreground transition-colors hover:text-primary"
                  >
                    {link.name}
                  </Link>
                ))}

              {isLoggedIn ? (
                <>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-10 w-10">
                      <AvatarComponent className="h-10 w-10" />
                    </div>
                    <div>
                      <p className="font-medium">{getUserRole()} Account</p>
                      <p className="text-sm text-muted-foreground">user@navshiksha.com</p>
                    </div>
                  </div>
                  <Link href="/profile" className="flex items-center gap-2 text-base font-medium">
                    <User className="h-5 w-5" />
                    Profile
                  </Link>
                  <Link href="/login" className="flex items-center gap-2 text-base font-medium">
                    <LogOut className="h-5 w-5" />
                    Logout
                  </Link>
                </>
              ) : (
                <>
                  <Link href="/login" className="text-base font-medium">
                    Log in
                  </Link>
                  <Button asChild className="mt-2">
                    <Link href="/login?tab=signup">Sign up</Link>
                  </Button>
                </>
              )}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
