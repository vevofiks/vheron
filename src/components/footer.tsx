'use client';

import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer
      className="bg-[#4A6845] text-[#F5F1E8]/55
                 py-10 sm:py-12 md:py-14
                 px-4 sm:px-6"
    >
      <div
        className="max-w-6xl mx-auto
                   flex flex-col md:flex-row
                   items-center md:items-start
                   justify-between
                   gap-4 md:gap-6"
      >
        {/* Brand */}
        <h2
          className="font-serif
                     tracking-[0.35em]
                     text-xs sm:text-sm
                     text-[#F5F1E8]/70
                     text-center md:text-left"
        >
          VHERON
        </h2>

        {/* Message */}
        <p
          className="text-[11px] sm:text-xs
                     tracking-wide
                     text-center md:text-left
                     max-w-xs"
        >
          Luxury with meaning. Crafted with responsibility.
        </p>

        {/* Copyright */}
        <p
          className="text-[10px]
                     tracking-widest uppercase
                     text-[#F5F1E8]/40
                     text-center md:text-right"
        >
          © 2026 VHERON FRAGRANCES
        </p>
      </div>
    </footer>
  );
};

export default Footer;
