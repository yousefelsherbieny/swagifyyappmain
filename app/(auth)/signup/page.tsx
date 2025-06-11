"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"

export default function SignupPage() {
  const [email, setEmail] = useState("")

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Product Showcase */}
      <div className="flex-1 bg-blue-600 flex items-center justify-center p-8">
        <div className="text-center text-white max-w-sm">
          <div className="mb-8">
            <h1 className="text-2xl font-bold mb-8">SWAGIFYY</h1>

            {/* Product Image */}
            <div className="relative mb-8">
              <div className="bg-blue-500 rounded-3xl p-8 relative overflow-hidden">
                {/* Decorative patterns */}
                <div
                  className="absolute top-0 left-0 w-full h-8 bg-blue-400 opacity-50"
                  style={{
                    backgroundImage:
                      "repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.1) 10px, rgba(255,255,255,0.1) 20px)",
                  }}
                ></div>
                <div
                  className="absolute bottom-0 left-0 w-full h-8 bg-blue-400 opacity-50"
                  style={{
                    backgroundImage:
                      "repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.1) 10px, rgba(255,255,255,0.1) 20px)",
                  }}
                ></div>

                {/* Mug with logo */}
                <div className="relative z-10">
                  <div className="w-32 h-40 mx-auto bg-blue-700 rounded-2xl relative overflow-hidden">
                    {/* Mug body */}
                    <div className="absolute inset-2 bg-blue-800 rounded-xl"></div>

                    {/* Handle */}
                    <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 w-8 h-16 border-4 border-black rounded-r-full"></div>

                    {/* Logo on mug */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-8 h-8 bg-orange-400 rounded flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute top-4 right-4 w-3 h-3 bg-yellow-400 rounded-full"></div>
                <div className="absolute bottom-4 left-4 w-2 h-2 bg-green-400 rounded-full"></div>
              </div>
            </div>

            <h2 className="text-2xl font-bold mb-4">Swag That Means Business</h2>
            <p className="text-blue-100 text-sm leading-relaxed mb-6">
              Swagifyy Made It Easy To Design Our Welcome Kits And Event Giveaways. The Real-Time 3D Preview Was A
              Game-Changer!
            </p>

            {/* Rating dots */}
            <div className="flex justify-center space-x-2">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <div className="w-2 h-2 bg-white/50 rounded-full"></div>
              <div className="w-2 h-2 bg-white/50 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Signup Form */}
      <div className="flex-1 flex items-center justify-center p-8 bg-white">
        <div className="w-full max-w-sm space-y-6">
          {/* Header */}
          <div className="text-right mb-8">
            <p className="text-sm text-gray-600 mb-2">Already Have An Account?</p>
            <Link href="/login" className="text-blue-600 font-medium">
              Login
            </Link>
          </div>

          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-blue-600 mb-8">SWAGIFYY</h1>
          </div>

          {/* Content */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready To Swag Your Brand?</h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              Create An Account To Customize Branded Swag, Manage Bulk Orders, And Track Every Step — From Design To
              Doorstep.
            </p>
          </div>

          {/* Form */}
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email/Mobile Number</label>
              <Input
                type="text"
                placeholder="Enter Your Email Or Mobile Number"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full h-12"
              />
            </div>

            <Button asChild className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white">
              <Link href="/company-info">Continue</Link>
            </Button>

            {/* Divider */}
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">Or</span>
              </div>
            </div>

            {/* Social Signup */}
            <div className="space-y-3">
              <Button variant="outline" className="w-full h-10 border-gray-300 text-sm">
                <svg className="w-4 h-4 mr-2" fill="#0077B5" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn
              </Button>

              <Button variant="outline" className="w-full h-10 border-gray-300 text-sm">
                <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
                Google
              </Button>

              <Button
                variant="outline"
                className="w-full h-10 border-gray-300 text-sm bg-black text-white hover:bg-gray-800"
              >
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                Apple
              </Button>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-8">
            <p className="text-xs text-gray-500 text-center leading-relaxed">
              By Clicking "Continue With Google, Apple, Or Email," You Agree To Swagifyy's{" "}
              <Link href="/terms" className="text-blue-600">
                Terms & Conditions
              </Link>{" "}
              And{" "}
              <Link href="/privacy" className="text-blue-600">
                Privacy Policy
              </Link>
              . Having Trouble?{" "}
              <Link href="/contact" className="text-blue-600">
                Contact us
              </Link>{" "}
              — We'd Be Happy To Help.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
