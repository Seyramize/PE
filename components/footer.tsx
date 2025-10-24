"use client"

import Link from "next/link"
import Image from "next/image"
import React, { useState } from "react"
import { FaWhatsapp, FaInstagram, FaTripadvisor } from "react-icons/fa"
import { SiFacebook, SiX, SiThreads } from "react-icons/si"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Mail as MailIcon, Phone as PhoneIcon } from "lucide-react"

export function SiteFooter() {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [message, setMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")
    setMessage("")
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ firstName, lastName, email }),
      })
      if (res.ok) {
        setStatus("success")
        setMessage("Thank you for subscribing!")
        setFirstName("")
        setLastName("")
        setEmail("")
      } else {
        const data = await res.json()
        setStatus("error")
        setMessage(data.error || "Something went wrong. Please try again.")
      }
    } catch {
      setStatus("error")
      setMessage("Something went wrong. Please try again.")
    }
  }

  return (
    <footer className="bg-[#0F1A2A] text-white">
      <div className="container mx-auto px-6 py-12">
        {/* Mobile View */}
        <div className="px-4">
          <div className="flex flex-col items-start text-left space-y-12">
            <div className="relative w-35 h-8">
              <Image src="/footer-logo.png" alt="Beyond Experiences" fill className="object-contain" priority />
            </div>
            <div className="w-full max-w-sm">
              <h3 className="text-xl font-normal font-sans mb-3">Stay in the Loop</h3>
              <p className="text-sm text-gray-400 mb-6 font-sans">
                Get curated travel inspiration, special offers, and behind-the-scenes access.
              </p>
              <form className="space-y-3" onSubmit={handleSubmit}>
                <Input type="text" placeholder="First Name" className="bg-gray-100 border-0 text-slate-800 font-sans placeholder:text-gray-500 rounded-lg py-5 placeholder:text-xs" value={firstName} onChange={e => setFirstName(e.target.value)} required />
                <Input type="text" placeholder="Last Name" className="bg-gray-100 border-0 text-slate-800 font-sans placeholder:text-gray-500 rounded-lg py-5 placeholder:text-xs" value={lastName} onChange={e => setLastName(e.target.value)} required />
                <Input type="email" placeholder="E-mail Address" className="bg-gray-100 border-0 text-slate-800 font-sans placeholder:text-gray-500 rounded-lg py-5 placeholder:text-xs" value={email} onChange={e => setEmail(e.target.value)} required />
                <Button className="w-full bg-[#F3EADF] text-slate-800 hover:bg-amber-200 font-sans font-medium rounded-lg tracking-widest" type="submit" disabled={status === "loading"}>
                  {status === "loading" ? "Subscribing..." : "STAY IN THE LOOP"}
                </Button>
              </form>
              {message && <p className={`text-xs mt-2 font-sans ${status === "success" ? "text-green-400" : "text-red-400"}`}>{message}</p>}
              <p className="text-xs text-gray-500 mt-4">We may share select info with trusted partners to elevate your experience.</p>
            </div>
            <div className="w-full max-w-sm">
              <h3 className="text-sm font-sans font-semibold uppercase tracking-wider mb-4">CONNECT</h3>
              <div className="flex justify-between">
                <a href="https://api.whatsapp.com/send?phone=233504513123&text=Hi%20beyond%20team%2C%20" className="hover:text-gray-300 transition" target="_blank" rel="noopener noreferrer"><FaWhatsapp size={24} /></a>
                <a href="https://www.instagram.com/beyondaccra/" className="hover:text-gray-300 transition" target="_blank" rel="noopener noreferrer"><FaInstagram size={24} /></a>
                <a href="https://www.facebook.com/p/Beyond-Accra-100090689846628/" className="hover:text-gray-300 transition" target="_blank" rel="noopener noreferrer"><SiFacebook size={24} /></a>
                <a href="https://www.threads.com/@beyondaccra?igshid=NTc4MTIwNjQ2YQ==" className="hover:text-gray-300 transition" target="_blank" rel="noopener noreferrer"><SiThreads size={24} /></a>
                <a href="https://x.com/beyondaccra_?s=21&t=5NaJevN87ITdu-lakIMLUg" className="hover:text-gray-300 transition" target="_blank" rel="noopener noreferrer" title="X"><SiX size={22} /></a>
              </div>
            </div>
            <div className="w-full space-y-8">
              <div>
                <h3 className="text-xs font-sans text-gray-300 font-semibold uppercase tracking-wider mb-1">EXPLORE</h3>
                <p className="text-xs text-gray-400 mb-4 font-sans">Discover our curated journeys</p>
                <ul className="space-y-0.5">
                  <li><Link href="/experiences" className="text-white hover:text-gray-300 transition-colors font-sans text-sm">Experiences</Link></li>
                  {/* <li><Link href="/city-guides" className="text-white hover:text-gray-300 transition-colors font-sans text-sm">City Guides</Link></li> */}
                  <li><Link href="https://www.beyondaccra.com/" className="text-white hover:text-gray-300 transition-colors font-sans text-sm" target="_blank" rel="noopener noreferrer" title="Bespoke Travel">Bespoke Travel</Link></li>
                  <li><Link href="/about" className="text-white hover:text-gray-300 transition-colors font-sans text-sm">About Us</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="text-xs font-sans text-gray-300 font-semibold uppercase tracking-wider mb-1">SUPPORT</h3>
                <p className="text-xs text-gray-400 mb-4 font-sans">Here when you need us</p>
                <ul className="space-y-0.5">
                  <li><Link href="/#faq" className="text-white hover:text-gray-300 transition-colors font-sans text-sm">FAQs</Link></li>
                  <li><Link href="https://www.beyondaccra.com/terms-and-conditions" className="text-white hover:text-gray-300 transition-colors font-sans text-sm" target="_blank" rel="noopener noreferrer" title="Terms & Conditions">Terms & Conditions</Link></li>
                  <li><Link href="https://www.beyondaccra.com/privacy-policy" className="text-white hover:text-gray-300 transition-colors font-sans text-sm" target="_blank" rel="noopener noreferrer" title="Privacy Policy">Privacy Policy</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="text-xs font-sans text-gray-300 font-semibold uppercase tracking-wider mb-1">CONNECT</h3>
                <p className="text-xs text-gray-400 mb-4 font-sans">Stay in touch</p>
                <ul className="space-y-0.5 text-sm">
                  <li>Nyaniba Lk, GL-016-3249</li>
                  <li>Nyaniba, Accra, Ghana</li>
                  <br />
                  <li>
                    <div className="flex items-center gap-2">
                      <a href="tel:+233504513123" className="text-white hover:text-gray-300 transition-colors border border-white/30 px-4 py-0.5 rounded-full font-sans text-lg inline-flex items-center gap-2">
                        <PhoneIcon size={14} strokeWidth={1.75} className="shrink-0" />
                        Phone
                      </a>
                      <a href="mailto:concierge@experiencesbybeyond.com" className="text-white hover:text-gray-300 transition-colors border border-white/30 px-4 py-0.5 rounded-full font-sans text-lg inline-flex items-center gap-2">
                        <MailIcon size={14} strokeWidth={1.75} className="shrink-0" />
                        E-Mail
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="text-left text-gray-400 text-xs pt-1.5 space-y-2 w-full max-w-sm">
              <p>© 2020-2025 Beyond Accra Concierge Company LLC. All rights reserved.</p>
              <p>CST#2007274-20</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
