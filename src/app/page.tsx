'use client';

import React, { useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

import Navbar from '@/components/navbar';
import Hero from '@/components/hero';
import Footer from '@/components/footer';
import ProductGrid from '@/components/productsGrid';
import AboutSection from '@/components/about';

// New luxury sections
import { ServicesSection } from '@/components/ServiceSection';
import { BlogsSection } from '@/components/BlogSection';
import { ContactSection } from '@/components/ContactSection';
import VheronStory from '@/components/StorySection';

const App: React.FC = () => {
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <div className="relative min-h-screen bg-vheron-green text-vheron-cream">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-vheron-gold origin-left z-[100]"
        style={{ scaleX }}
        aria-hidden="true"
      />

      <Navbar />

      <main>
        {/* HERO */}
        <Hero />

        {/* OUR STORY (luxury narrative) */}
        <VheronStory />

        {/* EXISTING PRODUCT / SERVICES SECTION */}
        <ProductGrid />

        {/* NEW SERVICES (export / oud focus) */}
        <ServicesSection />

        {/* ABOUT (existing brand explanation) */}
        <AboutSection />

        {/* BLOGS */}
        <BlogsSection />

        {/* CONTACT */}
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
};

export default App;
