"use client"

export function FloatingElements() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-blue-300 rounded-full animate-ping opacity-30"></div>
      <div className="absolute top-3/4 right-1/4 w-6 h-6 bg-purple-300 rounded-full animate-pulse opacity-40"></div>
      <div className="absolute top-1/2 left-1/3 w-3 h-3 bg-green-300 rounded-full animate-bounce opacity-50"></div>
      <div className="absolute bottom-1/4 right-1/3 w-5 h-5 bg-yellow-300 rounded-full animate-ping opacity-30"></div>
    </div>
  )
}
