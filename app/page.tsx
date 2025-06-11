"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export default function LandingPage() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [currentFeature, setCurrentFeature] = useState(0)
  const [rotation, setRotation] = useState(0)
  const [floatPosition, setFloatPosition] = useState(0)

  useEffect(() => {
    setIsLoaded(true)
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % 3)
    }, 3000)

    // Animation for bottle rotation
    const rotationInterval = setInterval(() => {
      setRotation((prev) => {
        // Gentle oscillation between -5 and 5 degrees
        return Math.sin(Date.now() / 1000) * 5
      })
    }, 50)

    // Animation for floating effect
    const floatInterval = setInterval(() => {
      setFloatPosition((prev) => {
        // Gentle floating up and down
        return Math.sin(Date.now() / 1200) * 15
      })
    }, 50)

    return () => {
      clearInterval(interval)
      clearInterval(rotationInterval)
      clearInterval(floatInterval)
    }
  }, [])

  const features = [
    {
      title: "Premium Quality",
      description: "High-quality promotional products that represent your brand perfectly",
      icon: "⭐",
    },
    {
      title: "Fast Delivery",
      description: "Quick turnaround times to meet your deadlines",
      icon: "🚀",
    },
    {
      title: "Custom Design",
      description: "Personalized designs that match your brand identity",
      icon: "🎨",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div
              className={`flex items-center transition-all duration-1000 ${isLoaded ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"}`}
            >
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                SWAGIFYY
              </h1>
            </div>
            <div
              className={`flex items-center space-x-4 transition-all duration-1000 delay-300 ${isLoaded ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"}`}
            >
              <Button asChild variant="ghost" className="hover:bg-blue-50">
                <Link href="/login">Login</Link>
              </Button>
              <Button
                asChild
                className="bg-blue-600 hover:bg-blue-700 transform hover:scale-105 transition-all duration-200"
              >
                <Link href="/signup">Get Started</Link>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div
              className={`transition-all duration-1000 delay-500 ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
            >
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full text-blue-800 text-sm font-medium mb-6 animate-pulse">
                🎉 Welcome to the Future of Promotional Products
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Swag Your Brand With{" "}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent animate-gradient">
                  SWAGIFYY
                </span>
              </h1>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Transform your business with premium promotional products. Create lasting impressions with custom swag
                that represents your brand perfectly.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button
                  asChild
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  <Link href="/signup" className="flex items-center">
                    Start Your Journey
                    <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </Link>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-blue-200 hover:bg-blue-50 transform hover:scale-105 transition-all duration-200"
                >
                  <Link href="/login">Sign In</Link>
                </Button>
              </div>

              <div className="flex items-center space-x-6 text-sm text-gray-500">
                <div className="flex items-center">
                  <div className="flex -space-x-2 mr-3">
                    <div className="w-8 h-8 bg-blue-500 rounded-full border-2 border-white"></div>
                    <div className="w-8 h-8 bg-green-500 rounded-full border-2 border-white"></div>
                    <div className="w-8 h-8 bg-purple-500 rounded-full border-2 border-white"></div>
                  </div>
                  <span>Trusted by 10,000+ businesses</span>
                </div>
              </div>
            </div>

            {/* Right Content - Animated Bottle */}
            <div
              className={`relative transition-all duration-1000 delay-700 ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
            >
              <div className="relative h-[500px] flex items-center justify-center">
                {/* Animated Background Elements */}
                <div className="absolute w-64 h-64 bg-blue-100 rounded-full animate-pulse opacity-60 blur-xl"></div>
                <div className="absolute w-48 h-48 bg-purple-100 rounded-full animate-pulse delay-1000 opacity-60 blur-xl"></div>

                {/* Animated Circles */}
                <div
                  className="absolute w-8 h-8 bg-blue-300 rounded-full animate-ping opacity-30"
                  style={{
                    top: "20%",
                    left: "20%",
                    animationDuration: "3s",
                    animationDelay: "0.5s",
                  }}
                ></div>
                <div
                  className="absolute w-6 h-6 bg-purple-300 rounded-full animate-ping opacity-40"
                  style={{
                    bottom: "30%",
                    right: "25%",
                    animationDuration: "4s",
                    animationDelay: "1s",
                  }}
                ></div>
                <div
                  className="absolute w-4 h-4 bg-blue-400 rounded-full animate-ping opacity-50"
                  style={{
                    top: "60%",
                    left: "30%",
                    animationDuration: "2.5s",
                    animationDelay: "1.5s",
                  }}
                ></div>

                {/* Animated Bottle */}
                <div
                  className="relative z-10"
                  style={{
                    transform: `translateY(${floatPosition}px) rotate(${rotation}deg)`,
                    transition: "transform 0.1s ease-out",
                  }}
                >
                  {/* Reflection/Highlight Effect */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white to-transparent opacity-20 rounded-full blur-sm z-20"></div>

                  {/* Shadow Effect */}
                  <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 w-32 h-8 bg-black/20 rounded-full blur-md"></div>

                  {/* The Bottle Image */}
                  <Image
                    src="/images/blue-bottle.png"
                    alt="SWAGIFYY Premium Water Bottle"
                    width={200}
                    height={400}
                    className="relative z-10 object-contain"
                    priority
                  />

                  {/* Product Label */}
                  <div className="absolute -right-20 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm px-4 py-3 rounded-lg shadow-lg border border-blue-100 animate-pulse">
                    <div className="text-blue-600 font-bold">Premium</div>
                    <div className="text-gray-700">Insulated Bottle</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose SWAGIFYY?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide everything you need to create amazing promotional products that represent your brand
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`text-center p-8 rounded-2xl transition-all duration-500 hover:shadow-xl hover:-translate-y-2 ${
                  currentFeature === index
                    ? "bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-200 scale-105"
                    : "bg-gray-50 hover:bg-blue-50"
                }`}
              >
                <div className="text-6xl mb-4 animate-bounce">{feature.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Showcase */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-blue-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Premium Products</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              High-quality promotional items customized with your brand
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Product 1 - Blue Bottle */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="h-64 relative flex items-center justify-center mb-6">
                <div
                  className="relative"
                  style={{
                    transform: `translateY(${Math.sin(Date.now() / 1500) * 10}px) rotate(${Math.sin(Date.now() / 2000) * 3}deg)`,
                    transition: "transform 0.1s ease-out",
                  }}
                >
                  <Image
                    src="/images/blue-bottle.png"
                    alt="SWAGIFYY Blue Water Bottle"
                    width={120}
                    height={240}
                    className="object-contain"
                  />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Premium Insulated Bottle</h3>
              <p className="text-gray-600 mb-4">
                Keep your drinks at the perfect temperature with our custom branded bottles
              </p>
              <div className="flex justify-between items-center">
                <span className="text-blue-600 font-bold">$24.99</span>
                <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                  Add Brand
                </Button>
              </div>
            </div>

            {/* Product 2 - Mug */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="h-64 relative flex items-center justify-center mb-6">
                <div
                  className="relative"
                  style={{
                    transform: `translateY(${Math.sin((Date.now() + 500) / 1500) * 10}px) rotate(${Math.sin((Date.now() + 500) / 2000) * 3}deg)`,
                    transition: "transform 0.1s ease-out",
                  }}
                >
                  <div className="w-32 h-32 bg-blue-600 rounded-lg relative overflow-hidden">
                    <div className="absolute inset-2 bg-white rounded opacity-20"></div>
                    <div className="absolute bottom-2 left-2 right-2 h-3 bg-orange-400 rounded"></div>
                    <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 w-8 h-16 bg-blue-600 rounded-lg"></div>
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Custom Coffee Mug</h3>
              <p className="text-gray-600 mb-4">Start your day with a branded coffee mug that makes a statement</p>
              <div className="flex justify-between items-center">
                <span className="text-blue-600 font-bold">$14.99</span>
                <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                  Add Brand
                </Button>
              </div>
            </div>

            {/* Product 3 - T-Shirt */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="h-64 relative flex items-center justify-center mb-6">
                <div
                  className="relative"
                  style={{
                    transform: `translateY(${Math.sin((Date.now() + 1000) / 1500) * 10}px) rotate(${Math.sin((Date.now() + 1000) / 2000) * 3}deg)`,
                    transition: "transform 0.1s ease-out",
                  }}
                >
                  <div className="w-40 h-48 bg-blue-100 rounded-lg flex items-center justify-center">
                    <div className="w-32 h-32 bg-blue-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">Your Logo</span>
                    </div>
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Premium T-Shirt</h3>
              <p className="text-gray-600 mb-4">Comfortable, stylish t-shirts with your custom design</p>
              <div className="flex justify-between items-center">
                <span className="text-blue-600 font-bold">$19.99</span>
                <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                  Add Brand
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center text-white">
            {[
              { number: "10,000+", label: "Happy Clients" },
              { number: "50,000+", label: "Products Delivered" },
              { number: "99%", label: "Satisfaction Rate" },
              { number: "24/7", label: "Support Available" },
            ].map((stat, index) => (
              <div key={index} className="transform hover:scale-110 transition-all duration-300">
                <div className="text-4xl font-bold mb-2 animate-pulse">{stat.number}</div>
                <div className="text-blue-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to Transform Your Brand?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of businesses that trust SWAGIFYY for their promotional needs. Start your journey today and
            see the difference quality makes.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              <Link href="/signup" className="flex items-center">
                Get Started Now
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-blue-200 hover:bg-blue-50 transform hover:scale-105 transition-all duration-200"
            >
              <Link href="/login">Already have an account?</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                SWAGIFYY
              </h3>
              <p className="text-gray-400">
                Transform your business with premium promotional products and custom swag solutions.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Products</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Custom Apparel
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Promotional Items
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Corporate Gifts
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Support
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Get Started</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/signup" className="hover:text-white transition-colors">
                    Sign Up
                  </Link>
                </li>
                <li>
                  <Link href="/login" className="hover:text-white transition-colors">
                    Login
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 SWAGIFYY. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </div>
  )
}
