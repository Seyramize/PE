import { Button } from "@/components/ui/button"

export function CreatorsSection() {
  return (
    <section className="bg-background py-3 px-6">
      <div className="mx-auto max-w-4xl text-left">
        <h2 className="font-serif text-3xl font-normal leading-none text-foreground mb-2 mt-2">
          Creators, Curators, Influencers & Partners
        </h2>
        <p className="text-black text-sm leading-normal mb-2">
          We're seeking creators, influencers and partners to join our network of experience curators.
        </p>
        <p className="text-black text-sm leading-normal mb-2">
          Want to curate an experience or interested in selling an experience? We'd love to hear from you.
        </p>
        <div className="flex justify-start">
          <Button
            size="default"
            className="bg-[#F5E6D3] text-black hover:bg-[#F5E6D3]/90 rounded-lg px-8 text-sm font-medium w-full"
            onClick={() => (window.location.href = "mailto:concierge@experiencesbybeyond.com")}
          >
            Get in touch
          </Button>
        </div>
      </div>
    </section>
  )
}
