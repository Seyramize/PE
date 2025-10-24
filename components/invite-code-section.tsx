"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"

export function InviteCodeSection() {
  const [code, setCode] = useState("")

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
                className="h-10 bg-gray-50 text-gray-900 border border-gray-900 rounded-2xl px-4 text-center text-xs placeholder-gray-400"
              />
              <Button
                size="default"
                className="w-full h-10 bg-[#1A2332] text-white hover:bg-[#1A2332]/90 rounded-2xl text-xs font-medium"
              >
                Unlock Access
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
