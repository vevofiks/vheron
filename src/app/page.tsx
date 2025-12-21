'use client'
import React, { useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Navbar from '@/components/navbar';
import Hero from '@/components/hero';
import AboutSection from '@/components/about';
import Footer from '@/components/footer';
import ProductGrid from '@/components/productsGrid';


const App: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    // Add smooth scrolling behavior
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <div className="relative min-h-screen">
      {/* Custom Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-[#fefae0] origin-left z-[100]"
        style={{ scaleX }}
      />

      <Navbar />

      <main>
        <Hero />
        
        <section id="services" className="py-20 bg-[#a3b18a]">
          <div className="container mx-auto px-4">
             <motion.div 
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8 }}
               className="text-center mb-16"
             >
               <h2 className="text-4xl md:text-6xl font-serif-elegant font-light mb-4">Our Curated Selection</h2>
               <div className="w-24 h-px bg-[#fefae0] mx-auto opacity-50" />
             </motion.div>
             <ProductGrid />
          </div>
        </section>

        <AboutSection />
      </main>

      <Footer />
    </div>
  );
};

export default App;
