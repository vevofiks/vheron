'use client'
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const AboutSection: React.FC = () => {
    return (
        <section className="relative bg-[#588157] text-[#fefae0] overflow-hidden
                        py-20 sm:py-24 md:py-28 lg:py-32">

            <div className="container mx-auto px-4 sm:px-6 lg:px-8
                      grid grid-cols-1 lg:grid-cols-2
                      gap-14 md:gap-16 lg:gap-20
                      items-center">

                {/* TEXT BLOCK */}
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.9 }}
                    className="relative z-10 text-center lg:text-left"
                >
                    <span className="inline-block text-[10px] sm:text-xs
                           font-medium tracking-[0.4em] uppercase
                           mb-4 sm:mb-6 opacity-60">
                        Our Philosophy
                    </span>

                    <h2 className="font-serif-elegant font-light leading-tight
                         text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl
                         mb-6 sm:mb-8">
                        The Alchemy of <br />
                        <span className="italic">Botanical Dreams</span>
                    </h2>

                    <p className="font-light opacity-80
                        text-base sm:text-lg md:text-xl
                        leading-relaxed
                        max-w-xl mx-auto lg:mx-0
                        mb-10">
                        Founded on the rugged cliffs of the Mediterranean, Vheron captures the essence of untamed nature. Each scent is a narrative—an olfactory journey through sun-drenched orchards and ancient forests.
                    </p>

                    <div className="flex flex-col sm:flex-row
                          gap-6 sm:gap-8
                          items-center justify-center lg:justify-start">
                        <button className="px-8 sm:px-10 py-3.5 sm:py-4
                               border border-[#fefae0]/30
                               hover:bg-[#fefae0] hover:text-[#588157]
                               transition-all duration-500
                               text-[10px] tracking-[0.3em] uppercase">
                            The Collection
                        </button>

                        <button className="text-[10px] tracking-[0.3em] uppercase
                               underline underline-offset-8
                               decoration-white/30 hover:decoration-white
                               transition-colors">
                            Our Process
                        </button>
                    </div>
                </motion.div>

                {/* IMAGE BLOCK */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="relative flex justify-center"
                >
                    <div className="relative aspect-[4/5]
                          w-full max-w-xs sm:max-w-sm md:max-w-md">
                        <Image
                            width={800}
                            height={1000}
                            src="https://images.unsplash.com/photo-1557170334-a9632e77c6e4?auto=format&fit=crop&q=80&w=800"
                            alt="Nature extraction"
                            className="w-full h-full object-cover rounded-sm shadow-2xl"
                        />

                        {/* Decorative frame – hidden on very small screens */}
                        <div className="hidden sm:block
                            absolute -inset-5
                            border border-[#fefae0]/10
                            translate-x-3 translate-y-3
                            pointer-events-none" />
                    </div>

                    {/* Floating stat – desktop only */}
                    <motion.div
                        animate={{ y: [0, -12, 0] }}
                        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                        className="hidden lg:block
                       absolute -bottom-12 -left-16
                       bg-[#3a5a40] p-8 shadow-2xl"
                    >
                        <p className="text-3xl font-serif-elegant mb-1">100%</p>
                        <p className="text-[10px] tracking-widest uppercase opacity-60">
                            Natural Origins
                        </p>
                    </motion.div>
                </motion.div>
            </div>

            {/* Background Decorative Text – desktop only */}
            <div className="hidden lg:block
                      absolute top-1/2 left-0
                      -translate-y-1/2 -translate-x-1/4
                      rotate-90 opacity-[0.04]
                      pointer-events-none whitespace-nowrap">
                <span className="text-[18vw]
                         font-serif-elegant font-bold
                         uppercase tracking-[0.45em]">
                    ALCHEMIST
                </span>
            </div>
        </section>
    );
};

export default AboutSection;
