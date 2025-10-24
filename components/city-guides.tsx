import { Building2 } from "lucide-react"

export function CityGuides() {
  const cities = [
    {
      name: "Accra, Ghana",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "/accra-ghana-independence-arch-monument.jpg",
      bgColor: "bg-[#F5E6D3]", // Champagne
      textColor: "text-gray-900",
    },
    {
      name: "Lagos, Nigeria",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "/lagos-nigeria-windmill-landmark.jpg",
      bgColor: "bg-[#2D5016]", // Green
      textColor: "text-white",
    },
    {
      name: "Nairobi, Kenya",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "/nairobi-kenya-skyline-cityscape.jpg",
      bgColor: "bg-[#D97642]", // Orange
      textColor: "text-white",
    },
    {
      name: "Sao Tome, Sao Tome",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "/cape-town-table-mountain-landscape.jpg",
      bgColor: "bg-[#1A2332]", // Blue-black
      textColor: "text-white",
    },
  ]

  return (
    <section className="bg-background py-2 px-6 pb-1">
      <div className="mx-auto max-w-7xl">
          <div className="flex items-center justify-between mb-2">
          <h2 className="font-serif text-3xl font-light text-foreground">City Guides</h2>
          <Building2 className="h-6 w-6 text-foreground" strokeWidth={1.5} />
        </div>

        {/* Horizontal Scrollable Cards */}
        <div className="relative">
          <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory">
            {cities.map((city, index) => (
              <div
                key={index}
                className={`flex-shrink-0 w-[250px] h-[80px] flex items-stretch shadow-sm hover:shadow-md transition-shadow overflow-hidden snap-start rounded-2xl ${city.bgColor}`}
              >
                <div className="w-[80px] h-[80px] flex-shrink-0 overflow-hidden">
                  <img
                    src={city.image || "/placeholder.svg"}
                    alt={city.name}
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className={`flex-1 px-4 py-3 flex flex-col justify-center items-start text-left ${city.textColor}`}>
                  <h3 className="font-serif text-xl font-normal leading-tight mb-0">{city.name}</h3>
                  <p
                    className={`text-[11px] leading-tight text-pretty ${city.textColor === "text-black" ? "opacity-90" : "opacity-75"}`}
                  >
                    {city.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Bar underneath cards */}
        <div className="flex justify-center mt-3">
          <div className="w-30 h-0.5 bg-black"></div>
        </div>
      </div>
    </section>
  )
}
