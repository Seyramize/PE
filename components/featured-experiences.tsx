"use client"

import { Button } from "@/components/ui/button"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import Link from "next/link"
import Image from "next/image"

export function FeaturedExperiences() {
  const experiences = [
    {
      id: "1",
      slug: "canvas-soul",
      defaultContent: {
        title: "Canvas & Soul",
        image: "/art-gallery-interior-modern-paintings.jpg",
        shortDescription: "Curated art experiences that inspire and transform",
        location: "Ghana"
      },
      tags: []
    },
    {
      id: "2", 
      slug: "desert-escape",
      defaultContent: {
        title: "Desert Escape",
        image: "/luxury-desert-resort-sunset.jpg",
        shortDescription: "Luxury retreats in stunning desert landscapes",
        location: "Namibia"
      },
      tags: []
    },
    {
      id: "3",
      slug: "coastal-retreat", 
      defaultContent: {
        title: "Coastal Retreat",
        image: "/coastal-villa-ocean-view.jpg",
        shortDescription: "Exclusive coastal villas with ocean views",
        location: "São Tomé"
      },
      tags: []
    },
    {
      id: "4",
      slug: "urban-adventure", 
      defaultContent: {
        title: "Urban Adventure",
        image: "/lagos-nigeria-cityscape-modern-skyline.jpg",
        shortDescription: "Discover vibrant city life and cultural experiences",
        location: "Nigeria"
      },
      tags: []
    },
  ]

  return (
    <section className="bg-background py-4 pl-1 pr-6">
      <div>
        <h2 className="text-3xl font-serif font-normal mb-2 px-5">Featured Experiences</h2>
        <>
          {/* Mobile: All experiences carousel */}
          <div className="mt-2">
            <Carousel opts={{ align: "start", loop: false }} className="pl-6">
              <CarouselContent className="-ml-4">
                {experiences.map((experience) => (
                  <CarouselItem key={experience.id} className="pl-4 basis-5/6">
                    <div className="relative rounded-xl overflow-hidden group h-[380px]">
                      <Image
                        src={experience.defaultContent.image}
                        alt={experience.defaultContent.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                      <div className="absolute bottom-0 left-0 right-0 px-6 pt-6 pb-2">
                        <h4 className="text-2xl font-serif font-normal text-white mt-2 mb-3">{experience.defaultContent.title}</h4>
                        <p className="text-white/90 mb-4 max-w-md font-sans leading-relaxed">
                          {experience.defaultContent.shortDescription}
                        </p>
                        <div className="space-y-6">
                          <Link href={"/book-experience"}>
                            <Button className="bg-gray-900  text-white hover:bg-gray-900/90 font-sans px-12 py-4 rounded-lg w-full mb-3">
                              Book this experience
                            </Button>
                          </Link>
                          <Link href={"/experiences"}>
                            <Button variant="outline" className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 font-sans px-12 py-4 rounded-lg w-full mb-4">
                              Explore experiences
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </>
      </div>
    </section>
  )
}
