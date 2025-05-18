"use client"

import type React from "react"

import { useState, Suspense } from "react"
import { useRouter } from "next/navigation"
import LoginTabs from "./login-tabs"

export default function LoginPage() {
  const router = useRouter()
  const [showPassword, setShowPassword] = useState(false)

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    router.push("/student/dashboard")
  }

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault()
    router.push("/student/dashboard")
  }

  return (
    <div className="min-h-[calc(100vh-8rem)] flex items-center justify-center bg-slate-50 p-4">
      <div className="w-full max-w-md">
        <Suspense fallback={<div className="w-full text-center">Loading tabs...</div>}>
          <LoginTabs
            handleLogin={handleLogin}
            handleSignup={handleSignup}
            showPassword={showPassword}
            setShowPassword={setShowPassword}
          />
        </Suspense>
      </div>
    </div>
  )
}
