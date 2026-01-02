'use client';

import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#4A6845] text-[#F5F1E8]/55 py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">

        {/* Brand */}
        <h2 className="font-serif tracking-[0.4em] text-sm text-[#F5F1E8]/70">
          VHERON
        </h2>

        {/* Message */}
        <p className="text-xs tracking-wide text-center md:text-left">
          Luxury with meaning. Crafted with responsibility.
        </p>

        {/* Copyright */}
        <p className="text-[10px] tracking-widest uppercase text-[#F5F1E8]/40">
          © 2025 VHERON FRAGRANCES
        </p>
      </div>
    </footer>
  );
};

export default Footer;
