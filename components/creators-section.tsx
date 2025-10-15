import { Button } from "@/components/ui/button"

export function CreatorsSection() {
  return (
    <section className="bg-background py-3 px-6">
      <div className="mx-auto max-w-4xl text-left">
        <h2 className="font-serif text-3xl font-light text-foreground mb-4">
          Creators, Curators, Influencers & Partners
        </h2>
        <p className="text-gray-600 text-sm leading-relaxed mb-4">
          We're seeking creators, influencers and partners to join our network of experience curators.
        </p>
        <p className="text-gray-600 text-sm leading-relaxed mb-4">
          Want to curate an experience or interested in selling an experience? We'd love to hear from you.
        </p>
        <div className="flex justify-center">
          <Button size="lg" className="bg-[#F5E6D3] text-gray-800 hover:bg-[#F5E6D3]/90 rounded-lg px-8 py-4 text-sm font-medium w-full">
            Get in touch
          </Button>
        </div>
      </div>
    </section>
  )
}
