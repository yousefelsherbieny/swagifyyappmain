"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"

export default function OTPVerificationPage() {
  const [otp, setOtp] = useState(["", "", ""])

  const handleOtpChange = (index: number, value: string) => {
    if (value.length <= 1) {
      const newOtp = [...otp]
      newOtp[index] = value
      setOtp(newOtp)

      // Auto focus next input
      if (value && index < 2) {
        const nextInput = document.getElementById(`otp-${index + 1}`)
        nextInput?.focus()
      }
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-blue-600 text-white p-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
            </svg>
            <span className="text-sm">Welcome Kits, Corporate Gifts, Event Swag — All Customized For Your Brand</span>
          </div>
        </div>
      </div>

      <div className="max-w-md mx-auto pt-16 px-4">
        <div className="bg-white rounded-lg shadow-lg p-8">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div className="text-sm text-gray-600">Step 3 Of 3</div>
            <div className="flex items-center text-gray-600">
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
                />
              </svg>
              <span className="text-sm">English</span>
            </div>
          </div>

          {/* Content */}
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Enter OTP Code</h2>
            <p className="text-gray-600 text-sm">
              Enter Code We Sent To Your Phone Number <span className="text-blue-600">Name@Email.Com</span>
            </p>
          </div>

          {/* OTP Inputs */}
          <div className="flex justify-center space-x-4 mb-6">
            {otp.map((digit, index) => (
              <Input
                key={index}
                id={`otp-${index}`}
                type="text"
                maxLength={1}
                value={digit}
                onChange={(e) => handleOtpChange(index, e.target.value)}
                className="w-16 h-16 text-center text-xl font-bold bg-blue-600 text-white border-blue-600"
              />
            ))}
          </div>

          <div className="text-center mb-6">
            <Link href="/forgot-password" className="text-blue-600 text-sm">
              Resend Code After 25s
            </Link>
          </div>

          <Button asChild className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white">
            <Link href="/set-new-password">Continue</Link>
          </Button>

          {/* Footer */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <p className="text-xs text-gray-500 text-center leading-relaxed">
              By Clicking "Continue With Google, Apple, Or Email," You Agree To Swagifyy's Terms & Conditions And
              Privacy Policy. Having Trouble?{" "}
              <Link href="/contact" className="text-blue-600">
                Contact us
              </Link>{" "}
              — We'd Be Happy To Help.
            </p>
          </div>
        </div>
      </div>

      {/* Background Pattern */}
      <div className="fixed bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-100 to-transparent pointer-events-none">
        <div className="absolute bottom-0 left-0 right-0 h-16 opacity-10">
          <div className="text-6xl font-bold text-gray-300 text-center">SWAGIFYY</div>
        </div>
      </div>
    </div>
  )
}
