
'use client'
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const AboutSection: React.FC = () => {
    return (
        <section className="relative py-32 bg-[#588157] text-[#fefae0] overflow-hidden">
            <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="relative z-10"
                >
                    <span className="inline-block text-xs font-medium tracking-[0.5em] uppercase mb-6 opacity-60">
                        Our Philosophy
                    </span>
                    <h2 className="text-5xl md:text-7xl font-serif-elegant font-light leading-tight mb-8">
                        The Alchemy of <br />
                        <span className="italic">Botanical Dreams</span>
                    </h2>
                    <p className="text-lg md:text-xl font-light leading-relaxed opacity-80 max-w-lg mb-12">
                        Founded on the rugged cliffs of the Mediterranean, Vheron captures the essence of untamed nature. Each scent is a narrative—an olfactory journey through sun-drenched orchards and ancient forests.
                    </p>
                    <div className="flex gap-8 items-center">
                        <button className="px-10 py-4 border border-[#fefae0]/30 hover:bg-[#fefae0] hover:text-[#588157] transition-all duration-500 text-xs tracking-[0.3em] uppercase">
                            The Collection
                        </button>
                        <button className="text-xs tracking-[0.3em] uppercase underline underline-offset-8 decoration-white/30 hover:decoration-white transition-colors">
                            Our Process
                        </button>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2 }}
                    className="relative"
                >
                    <div className="relative aspect-[4/5] w-full max-w-md mx-auto">
                        <Image
                            width={800}
                            height={1000}
                            src="https://images.unsplash.com/photo-1557170334-a9632e77c6e4?auto=format&fit=crop&q=80&w=800"
                            alt="Nature extraction"
                            className="w-full h-full object-cover rounded-sm shadow-2xl"
                        />

                        {/* Decorative frame */}
                        <div className="absolute -inset-6 border border-[#fefae0]/10 pointer-events-none translate-x-4 translate-y-4" />
                    </div>

                    {/* Floating stat box */}
                    <motion.div
                        animate={{ y: [0, -15, 0] }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute -bottom-10 -left-10 md:-left-20 bg-[#3a5a40] p-8 shadow-2xl hidden md:block"
                    >
                        <p className="text-3xl font-serif-elegant mb-1">100%</p>
                        <p className="text-[10px] tracking-widest uppercase opacity-60">Natural Origins</p>
                    </motion.div>
                </motion.div>

            </div>

            {/* Background Decorative Text */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/4 rotate-90 opacity-5 pointer-events-none whitespace-nowrap">
                <span className="text-[20vw] font-serif-elegant font-bold uppercase tracking-[0.5em]">ALCHEMIST</span>
            </div>
        </section>
    );
};

export default AboutSection;
