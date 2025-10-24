export function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img src="/desert-sand-dunes-golden-hour-landscape.jpg" alt="Desert landscape" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Logo at top */}
      <div className="absolute top-12 left-1/2 transform -translate-x-1/2 z-20">
        <img src="/whitelogo.png" alt="Beyond Experiences Logo" className="h-8 w-auto" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        {/* Main Heading */}
        <h1 className="font-serif text-5xl font-light leading-tight text-white text-balance mb-3">
          Unlock the extraordinary
        </h1>
        
        {/* Description */}
        <p className="max-w-2xl text-sm text-white/90 text-pretty leading-tight">
          Your beyond access card unlocks a world of curated travel, luxury events, and private invitations - all in one place.
        </p>
      </div>
    </section>
  )
}
