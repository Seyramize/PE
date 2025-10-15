"use client"

import { Button } from "@/components/ui/button"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import { TbBinoculars } from "react-icons/tb"
import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"

export function FeaturedExperiences() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

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
      <div className="md:container md:mx-auto md:px-16 lg:px-32 xl:px-40">
        <h2 className="text-2xl md:text-4xl font-serif font-normal mb-3 md:mb-12 px-6 md:px-0">Featured Experiences</h2>
        {isMobile ? (
          <>
            {/* Mobile: All experiences carousel */}
            <div className="mt-4">
              <Carousel opts={{ align: "start", loop: false }} className="pl-6">
                <CarouselContent className="-ml-4">
                  {experiences.map((experience) => (
                    <CarouselItem key={experience.id} className="pl-4 basis-5/6">
                      <div className="relative rounded-xl overflow-hidden group h-[420px]">
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
        ) : (
          // Desktop layout - keep original horizontal scroll
          <div className="relative">
            <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory">
              {experiences.map((experience, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-[400px] snap-start"
                >
                  <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={experience.defaultContent.image || "/placeholder.svg"}
                        alt={experience.defaultContent.title}
                        className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="font-serif text-2xl font-light text-gray-900 mb-3">{experience.defaultContent.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed mb-6">{experience.defaultContent.shortDescription}</p>
                      <div className="space-y-3">
                        <Button className="w-full bg-[#1A2332] text-white hover:bg-[#1A2332]/90 rounded-full py-3">
                          Book this experience
                        </Button>
                        <Button variant="outline" className="w-full bg-[#F5E6D3] text-gray-800 hover:bg-[#F5E6D3]/90 rounded-full py-3 border-0">
                          Explore experiences
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
