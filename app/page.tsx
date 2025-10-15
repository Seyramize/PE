import { HeroSection } from "@/components/hero-section"
import { FeaturedExperiences } from "@/components/featured-experiences"
import { InviteCodeSection } from "@/components/invite-code-section"
import { CityGuides } from "@/components/city-guides"
import { CreatorsSection } from "@/components/creators-section"
import { NewsletterSection } from "@/components/newsletter-section"
import { ConciergeButton } from "@/components/concierge-button"

export default function PortalPage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <FeaturedExperiences />
      <InviteCodeSection />
      <CityGuides />
      <CreatorsSection />
      <NewsletterSection />
      <ConciergeButton />
    </main>
  )
}
