'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  });

  // Flower appears first
  const flowerOpacity = useTransform(scrollYProgress, [0.12, 0.28], [0, 1]);
  const flowerScale = useTransform(scrollYProgress, [0.12, 0.28], [0.85, 1]);

  // Bottle appears after flower
  const bottleOpacity = useTransform(scrollYProgress, [0.25, 0.45], [0, 1]);
  const bottleScale = useTransform(scrollYProgress, [0.25, 0.45], [0.9, 1]);
  const bottleRotate = useTransform(scrollYProgress, [0.25, 0.45], [-6, 0]);

  return (
    <section
      ref={sectionRef}
      className="
        relative
        h-[220vh] sm:h-[260vh] lg:h-[300vh]
      "
    >
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden bg-[#5E7F57]">

        {/* depth overlay */}
        <div className="absolute inset-0 bg-[#4A6845]/35 z-0" />

        {/* subtle grain */}
        <div className="absolute inset-0 bg-[url('/assets/grain.png')] opacity-[0.12] z-0" />

        {/* TYPOGRAPHY */}
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center pointer-events-none">
          <h1
            className="
              font-serif tracking-wide leading-[0.85]
              text-[11vw] sm:text-[12vw] lg:text-[13vw]
              text-[#F5F1E8]/85
            "
          >
            SENSES WITH
          </h1>

          <h2
            className="
              font-serif leading-[0.75]
              -mt-[3vw] sm:-mt-[2.5vw] lg:-mt-[2vw]
              text-[16vw] sm:text-[17vw] lg:text-[19vw]
              text-[#F5F1E8]
            "
          >
            VHERON
          </h2>

          <h3
            className="
              font-serif leading-[0.8]
              -mt-[2vw] sm:-mt-[1.5vw] lg:-mt-[1vw]
              text-[12vw] sm:text-[13vw] lg:text-[14vw]
              text-[#F5F1E8]/70
            "
          >
            FRAGRANCES
          </h3>
        </div>

        {/* FLOWER */}
        <motion.div
          style={{ opacity: flowerOpacity, scale: flowerScale }}
          className="
            absolute z-20
            w-[60vw] sm:w-[42vw] lg:w-[32vw]
            max-w-[300px] sm:max-w-[360px] lg:max-w-[420px]
            translate-y-[8vh] sm:translate-y-[7vh] lg:translate-y-[6vh]
          "
        >
          <Image
            src="/assets/redflower.png"
            alt=""
            width={420}
            height={420}
            className="w-full h-auto"
          />
        </motion.div>

        {/* BOTTLE */}
        <motion.div
          style={{
            opacity: bottleOpacity,
            scale: bottleScale,
            rotate: bottleRotate,
          }}
          className="
            absolute z-30
            w-[46vw] sm:w-[34vw] lg:w-[26vw]
            max-w-[260px] sm:max-w-[320px] lg:max-w-[360px]
            translate-y-[-4vh] sm:translate-y-[-3vh] lg:translate-y-[-2vh]
          "
        >
          <Image
            src="/assets/WhatsApp_Image_2025-12-22_at_21.51.11-removebg-preview.png"
            alt="VHERON perfume"
            width={360}
            height={600}
            priority
            className="w-full h-auto"
          />
        </motion.div>

      </div>
    </section>
  );
};

