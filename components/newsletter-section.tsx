"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sparkles, Facebook, Instagram, MessageCircle, Twitter } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export function NewsletterSection() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  })

  return (
    <footer className="bg-[#1A2332] text-white py-20 px-6">
      <div className="mx-auto max-w-7xl">
        {/* Logo */}
        <div className="flex items-center gap-3 mb-16">
          <Sparkles className="h-8 w-8 text-white" strokeWidth={1.5} />
          <div className="text-white">
            <div className="font-serif text-xl font-light">BEYOND</div>
            <div className="font-serif text-xl font-light">EXPERIENCES</div>
          </div>
        </div>

        <div className="grid gap-12 lg:grid-cols-3 mb-16">
          {/* Stay in the Loop */}
          <div className="lg:col-span-1">
            <h3 className="font-serif text-2xl font-light text-white mb-4">Stay in the Loop</h3>
            <p className="text-white/80 text-sm leading-relaxed mb-8">
              Get curated travel inspiration, special offers, and behind-the-scenes access.
            </p>
            
            <form className="space-y-4">
              <Input
                type="text"
                placeholder="First Name"
                value={formData.firstName}
                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                className="h-12 bg-white text-gray-900 border-0 rounded-full px-4 placeholder-gray-400"
              />
              <Input
                type="text"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                className="h-12 bg-white text-gray-900 border-0 rounded-full px-4 placeholder-gray-400"
              />
              <Input
                type="email"
                placeholder="E-mail Address"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="h-12 bg-white text-gray-900 border-0 rounded-full px-4 placeholder-gray-400"
              />
              <Button
                type="submit"
                size="lg"
                className="w-full h-12 bg-[#F5E6D3] text-gray-800 hover:bg-[#F5E6D3]/90 rounded-full text-sm font-medium uppercase tracking-wide"
              >
                Stay in the Loop
              </Button>
            </form>
            
            <p className="text-white/60 text-xs mt-4">
              We may share select info with trusted partners to elevate your experience.
            </p>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-6">Connect</h3>
            <div className="flex gap-4">
              <Link href="#" className="hover:text-[#F5E6D3] transition-colors">
                <MessageCircle className="h-5 w-5" />
                <span className="sr-only">WhatsApp</span>
              </Link>
              <Link href="#" className="hover:text-[#F5E6D3] transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="hover:text-[#F5E6D3] transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="hover:text-[#F5E6D3] transition-colors">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
                <span className="sr-only">X</span>
              </Link>
              <Link href="#" className="hover:text-[#F5E6D3] transition-colors">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                <span className="sr-only">Google</span>
              </Link>
            </div>
          </div>

          {/* Explore */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-6">Explore</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="hover:text-[#F5E6D3] transition-colors">
                  Experiences
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#F5E6D3] transition-colors">
                  City Guides
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#F5E6D3] transition-colors">
                  Bespoke Travel
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#F5E6D3] transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Support */}
        <div className="mb-8">
          <h3 className="text-sm font-semibold uppercase tracking-wider mb-6">Support</h3>
          <ul className="space-y-3">
            <li>
              <Link href="#" className="hover:text-[#F5E6D3] transition-colors">
                Contact Us
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-[#F5E6D3] transition-colors">
                FAQs
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-[#F5E6D3] transition-colors">
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-[#F5E6D3] transition-colors">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/20 pt-8 text-center text-sm text-white/60">
          <p className="mb-2">© 2020-2025 Beyond Accra Concierge Company LLC. All rights reserved.</p>
          <p>CST#2007274-20</p>
        </div>
      </div>
    </footer>
  )
}
