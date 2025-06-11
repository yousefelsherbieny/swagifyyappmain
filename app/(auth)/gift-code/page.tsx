"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"

export default function GiftCodePage() {
  const [giftCode, setGiftCode] = useState("")

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
              />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Free Gift Code</h1>
          <p className="text-gray-600">Enter your gift code to unlock special offers</p>
        </div>

        <div className="space-y-6">
          <div>
            <Input
              placeholder="Enter Gift Code"
              value={giftCode}
              onChange={(e) => setGiftCode(e.target.value)}
              className="w-full text-center text-lg font-mono tracking-wider"
            />
          </div>

          <Button asChild className="w-full bg-blue-600 hover:bg-blue-700">
            <Link href="/home-panel">Redeem Gift Code</Link>
          </Button>

          <div className="text-center">
            <p className="text-sm text-gray-600 mb-4">{"Don't have a gift code?"}</p>
            <Button asChild variant="outline" className="w-full">
              <Link href="/home-panel">Skip for Now</Link>
            </Button>
          </div>
        </div>

        <div className="mt-8 p-4 bg-blue-50 rounded-lg">
          <h3 className="font-semibold text-blue-900 mb-2">🎁 Welcome Bonus!</h3>
          <p className="text-sm text-blue-700">
            As a new member, you'll receive exclusive discounts on your first order and access to premium features.
          </p>
        </div>

        <div className="text-center mt-6">
          <Link href="/company-details" className="text-sm text-gray-600 hover:underline">
            Back
          </Link>
        </div>
      </div>
    </div>
  )
}
