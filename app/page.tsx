"use client"

import { useEffect, useState } from "react"
import { HeroSection } from "@/components/hero-section"
import { FeaturedExperiences } from "@/components/featured-experiences"
import { InviteCodeSection } from "@/components/invite-code-section"
import { CityGuides } from "@/components/city-guides"
import { CreatorsSection } from "@/components/creators-section"
import { SiteFooter } from "@/components/footer"
import { ConciergeButton } from "@/components/concierge-button"
import { InviteModal } from "@/components/invite-modal"

export default function PortalPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsModalOpen(true)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <main className="min-h-screen">
      <InviteModal open={isModalOpen} onOpenChange={setIsModalOpen} />
      <HeroSection />
      <FeaturedExperiences />
      <InviteCodeSection />
      <CityGuides />
      <CreatorsSection />
      <ConciergeButton />
      <SiteFooter />
    </main>
  )
}
