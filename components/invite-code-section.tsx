"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"

export function InviteCodeSection() {
  const [code, setCode] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleUnlock = async () => {
    setLoading(true)
    setError(null)

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      const inviteCodes: { [key: string]: string } = {
        travelsocial: "https://experiencesbybeyond.com/book-experience/december-in-ghana-castles-to-coastlines?code=travelsocial",
        bxnoah: "https://experiencesbybeyond.com/book-experience/december-in-ghana-castles-to-coastlines?code=bxnoah",
        // Add other codes and their corresponding URLs here
      }

      const lowercasedCode = code.toLowerCase()

      if (inviteCodes[lowercasedCode]) {
        window.location.href = inviteCodes[lowercasedCode]
      } else {
        setError("Invalid invite code. Please try again.")
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="py-8 px-6">
      <div className="mx-auto max-w-md">
        {/* Card Container */}
        <div className="bg-background rounded-2xl overflow-hidden shadow-lg">
          {/* Top Section - Desert Background */}
          <div className="relative h-36 overflow-hidden">
            <img 
              src="/desert-sand-dunes-golden-hour-landscape.jpg" 
              alt="Desert landscape" 
              className="h-full w-full object-cover" 
            />
            <div className="absolute inset-0 bg-black/20" />
            
            {/* Text Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-8">
              <h2 className="font-serif text-3xl font-light leading-tight text-white mb-0.5">Got an invite code?</h2>
              <p className="text-white/90 text-xs leading-tight whitespace-nowrap">
                Unlock invite only experiences with your curator's unique code.
              </p>
            </div>
          </div>

          {/* Bottom Section - White Background */}
          <div className="px-8 pt-8 pb-6 text-center">
            <p className="text-gray-700 text-sm leading-tight mb-3">
              Enter your invite code to unlock your experience.
            </p>
            
            <div className="space-y-2">
              <Input
                type="text"
                placeholder="Invite Code"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                disabled={loading}
                className="h-10 bg-gray-50 text-gray-900 border border-gray-900 rounded-2xl px-4 text-center text-xs placeholder-gray-400"
              />
              <Button
                size="default"
                onClick={handleUnlock}
                disabled={loading}
                className="w-full h-10 bg-[#1A2332] text-white hover:bg-[#1A2332]/90 rounded-2xl text-xs font-medium"
              >
                {loading ? "Unlocking..." : "Unlock Access"}
              </Button>
            </div>

            {error && <p className="text-red-500 text-xs mt-2">{error}</p>}
          </div>
        </div>
      </div>
    </section>
  )
}
