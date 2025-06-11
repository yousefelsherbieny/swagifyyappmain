"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"

export default function CompanyInfoPage() {
  const [formData, setFormData] = useState({
    accountType: "Business",
    companyName: "",
    companyEmail: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  })
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

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

      {/* Right Side - Form */}
      <div className="flex-1 flex items-center justify-center p-8 bg-white">
        <div className="w-full max-w-md space-y-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <Link href="/signup" className="flex items-center text-gray-600 hover:text-gray-800">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back
            </Link>
            <div className="text-sm text-gray-600">Step 1 Of 3</div>
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
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Tell Us More About Company</h2>
            <p className="text-sm text-gray-600">
              Create An Account To Customize Branded Swag, Manage Bulk Orders, And Track Every Step — From Design To
              Doorstep.
            </p>
          </div>

          {/* Form */}
          <div className="space-y-6">
            {/* Account Type */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Select Account Type</label>
              <div className="flex space-x-4">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="accountType"
                    value="Business"
                    checked={formData.accountType === "Business"}
                    onChange={(e) => handleInputChange("accountType", e.target.value)}
                    className="mr-2"
                  />
                  <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-lg text-sm">Business</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="accountType"
                    value="Individual"
                    checked={formData.accountType === "Individual"}
                    onChange={(e) => handleInputChange("accountType", e.target.value)}
                    className="mr-2"
                  />
                  <span className="px-4 py-2 border border-gray-300 rounded-lg text-sm">Individual</span>
                </label>
              </div>
            </div>

            {/* Company Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Company Name</label>
              <Input
                type="text"
                placeholder="First Name"
                value={formData.companyName}
                onChange={(e) => handleInputChange("companyName", e.target.value)}
                className="w-full h-12"
              />
            </div>

            {/* Company Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Company Email</label>
              <Input
                type="email"
                placeholder="For Example: hello@company.Domain"
                value={formData.companyEmail}
                onChange={(e) => handleInputChange("companyEmail", e.target.value)}
                className="w-full h-12"
              />
            </div>

            {/* Phone Number */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number (Optional)</label>
              <Input
                type="tel"
                placeholder="For Example: hello@company.Domain"
                value={formData.phoneNumber}
                onChange={(e) => handleInputChange("phoneNumber", e.target.value)}
                className="w-full h-12"
              />
            </div>

            {/* Password */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                <div className="relative">
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    value={formData.password}
                    onChange={(e) => handleInputChange("password", e.target.value)}
                    className="w-full h-12 pr-10"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Confirm Password</label>
                <div className="relative">
                  <Input
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Confirm Password"
                    value={formData.confirmPassword}
                    onChange={(e) => handleInputChange("confirmPassword", e.target.value)}
                    className="w-full h-12 pr-10"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            <Button asChild className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white">
              <Link href="/company-details">Create Account</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
