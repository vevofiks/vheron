import Image from 'next/image';
import React, { useState, useEffect, useRef } from 'react';

export default function VheronStory() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeFeature, setActiveFeature] = useState(0);
  const [isHoveringBottle, setIsHoveringBottle] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const element = sectionRef.current;
      const rect = element.getBoundingClientRect();
      const sectionHeight = element.offsetHeight;
      const windowHeight = window.innerHeight;
      
      const scrollStart = -rect.top;
      const scrollRange = sectionHeight - windowHeight;
      const progress = Math.max(0, Math.min(1, scrollStart / scrollRange));
      
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const features = [
    { icon: "🌿", title: "Ancient Routes", text: "Inspired by historic Oud trade paths" },
    { icon: "💎", title: "Pure Craftsmanship", text: "Meticulously crafted with integrity" },
    { icon: "🌍", title: "Global Delivery", text: "Responsibly delivered worldwide" }
  ];

  // Calculate animation values
  const flowerOpacity = Math.min(0.5, scrollProgress * 2);
  const flowerScale = 0.95 + scrollProgress * 0.15;
  const flowerRotate = scrollProgress * 10;
  
  const bottleOpacity = Math.max(0, Math.min(1, (scrollProgress - 0.2) * 3));
  const bottleY = Math.max(0, (1 - scrollProgress) * 100);
  const bottleScale = 0.9 + Math.min(0.15, scrollProgress * 0.5);
  
  const textOpacity = Math.max(0, Math.min(1, (scrollProgress - 0.1) * 2.5));
  const textY = Math.max(0, (1 - scrollProgress) * 30);

  return (
    <div ref={sectionRef} className="relative h-[250vh] bg-gradient-to-br from-[#5E7F57] via-[#4A6845] to-[#2F3F2E]">
      
      {/* Sticky Container */}
      <div className="sticky top-0 h-screen overflow-hidden">
        
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, rgba(212, 175, 55, 0.1) 0%, transparent 50%),
                             radial-gradient(circle at 80% 80%, rgba(212, 175, 55, 0.1) 0%, transparent 50%)`,
            transform: `scale(${1 + scrollProgress * 0.3})`
          }} />
        </div>

        {/* Floating Particles */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-[#D4AF37] rounded-full opacity-40"
            style={{
              left: `${15 + i * 12}%`,
              top: `${20 + (i % 3) * 25}%`,
              transform: `translateY(${Math.sin(scrollProgress * Math.PI * 2 + i) * 20}px)`,
              transition: 'transform 0.3s ease-out'
            }}
          />
        ))}

        {/* Main Content Grid */}
        <div className="relative h-full max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-12 h-full items-center">
            
            {/* Left: Text Content */}
            <div
              style={{
                opacity: textOpacity,
                transform: `translateY(${textY}px)`
              }}
              className="relative z-30 space-y-8 transition-all duration-300"
            >
              {/* Decorative Line */}
              <div className="flex items-center gap-4 mb-6">
                <div 
                  className="h-px bg-gradient-to-r from-[#D4AF37] to-transparent"
                  style={{ width: `${scrollProgress * 100}px` }}
                />
                <span className="text-[#D4AF37] tracking-[0.3em] text-xs font-light">
                  VHERON
                </span>
              </div>

              <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif text-[#F5F1E8] leading-tight">
                Our Story
              </h2>

              <p className="text-[#F5F1E8]/90 text-lg md:text-xl leading-relaxed">
                VHERON was created with a belief: <span className="text-[#D4AF37] font-medium">luxury should have meaning</span>. 
                Inspired by ancient Oud trade routes and crafted with purity.
              </p>

              <p className="text-[#F5F1E8]/70 text-base md:text-lg">
                Authentic Oud and oils, delivered responsibly to the world.
              </p>

              {/* Interactive Features */}
              <div className="grid grid-cols-3 gap-4 pt-6">
                {features.map((feature, idx) => (
                  <button
                    key={idx}
                    onMouseEnter={() => setActiveFeature(idx)}
                    className={`group p-4 rounded-lg border transition-all duration-300 ${
                      activeFeature === idx 
                        ? 'bg-[#D4AF37]/10 border-[#D4AF37] scale-105' 
                        : 'bg-white/5 border-white/10 hover:border-white/30'
                    }`}
                  >
                    <div className="text-3xl mb-2 transition-transform group-hover:scale-110">
                      {feature.icon}
                    </div>
                    <div className="text-[#F5F1E8] text-xs font-medium mb-1">
                      {feature.title}
                    </div>
                    <div className={`text-[10px] text-[#F5F1E8]/60 transition-all ${
                      activeFeature === idx ? 'opacity-100' : 'opacity-0 md:opacity-100'
                    }`}>
                      {feature.text}
                    </div>
                  </button>
                ))}
              </div>

              {/* CTA Button */}
              <button 
                className="group mt-8 px-8 py-4 bg-[#D4AF37] text-[#2F3F2E] font-medium rounded-full 
                         hover:bg-[#F5F1E8] transition-all duration-300 hover:shadow-lg hover:shadow-[#D4AF37]/20
                         flex items-center gap-2"
              >
                Discover Our Collection
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </div>

            {/* Right: Visual Composition */}
            <div className="relative h-full flex items-center justify-center">
              
              {/* Background Flower Image */}
              <div
                className="absolute inset-0 flex items-center justify-center"
                style={{
                  opacity: flowerOpacity,
                  transform: `scale(${flowerScale}) rotate(${flowerRotate}deg)`,
                  transition: 'transform 0.1s ease-out'
                }}
              >
                <Image
                width={400}
                height={600}
                  src="/assets/redflower.png" 
                  alt="Red flower"
                  className="w-[500px] md:w-[650px] object-contain blur-[1px]"
                />
              </div>

              {/* Perfume Bottle Image */}
              <div
                className="relative z-20 cursor-pointer"
                style={{
                  opacity: bottleOpacity,
                  transform: `translateY(${bottleY}px) scale(${bottleScale})`,
                  transition: 'transform 0.3s ease-out'
                }}
                onMouseEnter={() => setIsHoveringBottle(true)}
                onMouseLeave={() => setIsHoveringBottle(false)}
              >
                {/* Glow Effect */}
                <div className={`absolute inset-0 bg-[#D4AF37]/20 blur-3xl rounded-full transition-all duration-500 ${
                  isHoveringBottle ? 'scale-150 opacity-100' : 'scale-100 opacity-0'
                }`} />
                
                {/* Bottle Image */}
                <Image
                  width={400}
                  height={600}
                  src="/assets/WhatsApp_Image_2025-12-22_at_21.51.11-removebg-preview.png"
                  alt="VHERON perfume bottle"
                  className={`relative w-56 md:w-72 object-contain drop-shadow-2xl transition-all duration-300 ${
                    isHoveringBottle ? 'scale-105' : 'scale-100'
                  }`}
                />

                {/* Info Tag on Hover */}
                {isHoveringBottle && (
                  <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 bg-[#F5F1E8] text-[#2F3F2E] 
                                px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap shadow-xl
                                animate-fade-in">
                    Click to explore scents
                  </div>
                )}
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-1/4 right-1/4 w-32 h-32 border border-[#D4AF37]/20 rounded-full"
                   style={{ transform: `rotate(${scrollProgress * 180}deg)` }} />
              <div className="absolute bottom-1/4 left-1/4 w-24 h-24 border border-[#D4AF37]/20 rounded-full"
                   style={{ transform: `rotate(${-scrollProgress * 180}deg)` }} />
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#F5F1E8]/50">
          <span className="text-xs tracking-wider">SCROLL</span>
          <div className="w-px h-12 bg-gradient-to-b from-[#D4AF37] to-transparent" 
               style={{ height: `${48 * (1 - scrollProgress)}px` }} />
        </div>
      </div>
    </div>
  );
}