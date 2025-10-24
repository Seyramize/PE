"use client"

import { Button } from "@/components/ui/button"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import Link from "next/link"
import Image from "next/image"

export function FeaturedExperiences() {
  const experiences = [
    {
      id: "1",
      slug: "accra-city-tour",
      defaultContent: {
        title: "Accra City Tour",
        image: "/hero.jpg",
        shortDescription: "Accra is a city alive with history, rhythm, and everyday energy.",
        location: "Ghana"
      },
      bookingLink: "https://www.experiencesbybeyond.com/book-experience/accra-city-tour",
      tags: []
    },
    {
      id: "2", 
      slug: "sandwich-harbour-exploration",
      defaultContent: {
        title: "Sandwich Harbour Exploration",
        image: "/cover.jpg",
        shortDescription: "Where rolling dunes meet the Atlantic, Sandwich Harbour - part of the Namib Naukluft Park - feels otherworldly.",
        location: "Namibia"
      },
      bookingLink: "https://www.experiencesbybeyond.com/book-experience/sandwich-harbour-exploration",
      tags: []
    },
    {
      id: "3",
      slug: "dolphin-watching-and-snorkeling", 
      defaultContent: {
        title: "Dolphin Watching and Snorkeling",
        image: "/cover.jpeg",
        shortDescription: "The waters off São Tomé are alive with life.",
        location: "São Tomé"
      },
      bookingLink: "https://www.experiencesbybeyond.com/book-experience/dolphin-watching-and-snorkeling",
      tags: []
    },
    {
      id: "4",
      slug: "kente-and-rhythm", 
      defaultContent: {
        title: "Kente and Rhythm",
        image: "/cover1.jpg",
        shortDescription: "Dive into Ghana's cultural heartbeat at the Accra Arts Centre.",
        location: "Ghana"
      },
      bookingLink: "https://www.experiencesbybeyond.com/book-experience/kente-and-rhythm",
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
                      <div className="absolute inset-0 bg-black/30" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                      <div className="absolute bottom-0 left-0 right-0 px-6 pt-6 pb-2">
                        <h4 className="text-xl font-serif font-normal text-white mt-2 mb-2">{experience.defaultContent.title}</h4>
                        <p className="text-white/90 text-sm mb-3 max-w-md font-sans leading-relaxed">
                          {experience.defaultContent.shortDescription}
                        </p>
                        <div className="space-y-6">
                          <Link href={experience.bookingLink}>
                            <Button className="bg-gray-900  text-white hover:bg-gray-900/90 font-sans px-12 rounded-lg text-xs w-full mb-1.5">
                              Book this experience
                            </Button>
                          </Link>
                          <Link href={"https://www.experiencesbybeyond.com/experiences"}>
                            <Button variant="outline" className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 font-sans text-xs px-12 rounded-lg w-full mb-4">
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
