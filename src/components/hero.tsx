'use client';

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

const Hero: React.FC = () => {
const { scrollYProgress } = useScroll();

const topTextY = useTransform(scrollYProgress, [0, 0.5], [0, -120]);
  const bottleY = useTransform(scrollYProgress, [0, 0.5], [0, -60]);
  const bottomTextY = useTransform(scrollYProgress, [0, 0.5], [80, -40]);

  const bottleScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.85]);
  const bottleRotate = useTransform(scrollYProgress, [0, 0.5], [0, -5]);

  const topTextOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0.6]);
  const bottomTextOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 1]);

  return (
    <section className="relative min-h-screen overflow-hidden flex items-center justify-center pt-5">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#a3b18a] to-[#92a37a]" />

      {/* ================= TOP TEXT (BACKGROUND LAYER) ================= */}
      <motion.div
        style={{ y: topTextY, opacity: topTextOpacity }}
        className="relative z-10 w-full px-4 text-center select-none"
      >
        <div className="flex flex-col items-center justify-center">
          {/* Row 1 */}
          <div className="flex items-center gap-4 mb-[-2vw]">
            <h2 className="text-[12vw] md:text-[14vw] leading-[0.8] font-serif-elegant font-black tracking-tighter uppercase text-[#fefae0]">
              SENSES
            </h2>

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="w-[8vw] h-[5vw] bg-[#fefae0] rounded-full hidden md:flex items-center justify-center overflow-hidden shadow-xl"
            >
              <Image
                width={50}
                height={80}
                src="/assets/6.webp"
                alt="Essence"
                className="w-full h-full object-cover opacity-80"
              />
            </motion.div>

            <h2 className="text-[12vw] md:text-[14vw] leading-[0.8] font-serif-elegant font-black tracking-tighter uppercase text-[#fefae0]">
              WITH
            </h2>
          </div>

          {/* Row 2 */}
          <h2 className="text-[14vw] md:text-[16vw] leading-[0.8] font-serif-elegant font-black tracking-tighter uppercase text-[#fefae0] whitespace-nowrap">
            UNFORGETTABLE
          </h2>
        </div>
      </motion.div>

      {/* ================= PERFUME BOTTLE (MIDDLE LAYER) ================= */}
      <motion.div
        style={{
          y: bottleY,
          scale: bottleScale,
          rotate: bottleRotate,
        }}
        className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none"
      >
        <motion.img
          animate={{ y: [-6, 6, -6] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          src="/assets/herosection.png"
          alt="Perfume Bottle"
          className="w-[35vw] max-w-[450px] min-w-[280px] drop-shadow-[0_35px_35px_rgba(0,0,0,0.5)] will-change-transform"
        />
      </motion.div>


      {/* ================= BOTTOM TEXT (FOREGROUND LAYER) ================= */}
      <motion.div
        style={{ y: bottomTextY, opacity: bottomTextOpacity }}
        className="absolute inset-x-0 bottom-[20%] z-30 flex justify-center pointer-events-none"
      >
        <h2 className="text-[12vw] md:text-[14vw] leading-[0.8] font-serif-elegant font-black tracking-tighter uppercase text-[#cfe8ff]">
          FRAGRANCES
        </h2>
      </motion.div>

      {/* Footer hint */}
      <div className="absolute bottom-10 right-10 text-[10px] tracking-[0.3em] font-medium opacity-40 hidden md:block z-40">
        FACEBOOK / INSTAGRAM
      </div>
    </section>
  );
};

export default Hero;
