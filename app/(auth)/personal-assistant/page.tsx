"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"

export default function PersonalAssistantPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Personal Assistant</h1>
          <p className="text-gray-600">Please fill in your details</p>
        </div>

        <form className="space-y-6">
          <div>
            <Input
              placeholder="First Name"
              value={formData.firstName}
              onChange={(e) => handleInputChange("firstName", e.target.value)}
              className="w-full"
            />
          </div>

          <div>
            <Input
              placeholder="Last Name"
              value={formData.lastName}
              onChange={(e) => handleInputChange("lastName", e.target.value)}
              className="w-full"
            />
          </div>

          <div>
            <Input
              type="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              className="w-full"
            />
          </div>

          <div>
            <Input
              type="tel"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={(e) => handleInputChange("phone", e.target.value)}
              className="w-full"
            />
          </div>

          <div>
            <Input
              placeholder="Company Name"
              value={formData.company}
              onChange={(e) => handleInputChange("company", e.target.value)}
              className="w-full"
            />
          </div>

          <Button asChild className="w-full bg-blue-600 hover:bg-blue-700">
            <Link href="/otp-verification">Continue</Link>
          </Button>
        </form>

        <div className="text-center mt-6">
          <Link href="/login" className="text-sm text-gray-600 hover:underline">
            Back to Login
          </Link>
        </div>
      </div>
    </div>
  )
}
