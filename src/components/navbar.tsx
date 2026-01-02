'use client';

import React, { useState } from 'react';
import { Menu } from 'lucide-react';
import MenuOverlay from './menuoverlay';

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* ================= DESKTOP LEFT NAV ================= */}
      <aside
        className="
          fixed left-0 top-0 h-screen w-[90px]
          hidden md:flex flex-col items-center justify-between
          py-8 z-50 backdrop-blur-sm
          text-white/40
        "
      >
        {/* Menu icon */}
        <button
          onClick={() => setOpen(true)}
          aria-label="Open menu"
          className="transition hover:text-white/90"
        >
          <Menu size={30} />
        </button>

        {/* Brand */}
        <a
          href="#hero"
          className="
            rotate-90 tracking-[0.45em]
            text-3xl font-serif-elegant
            text-[#D4AF37]/45
            transition hover:text-[#D4AF37]/90
          "
        >
          VHERON
        </a>

        {/* WhatsApp */}
        <a
          href="https://wa.me/6282699250"
          target="_blank"
          rel="noopener noreferrer"
          className="
            text-xs tracking-widest
            opacity-40 transition hover:opacity-90
          "
        >
          WhatsApp
        </a>
      </aside>

      {/* ================= MOBILE TOP NAV ================= */}
      <nav
        className="
          fixed top-0 left-0 w-full md:hidden
          flex justify-between items-center
          px-6 py-4 z-50 backdrop-blur-sm
          text-white/40
        "
      >
        {/* Brand */}
        <a
          href="#hero"
          className="
            tracking-[0.35em] text-base font-light
            text-[#D4AF37]/45
            transition hover:text-[#D4AF37]/90
          "
        >
          VHERON
        </a>

        {/* Menu icon */}
        <button
          onClick={() => setOpen(true)}
          aria-label="Open menu"
          className="transition hover:text-white/90"
        >
          <Menu size={28} />
        </button>
      </nav>

      {/* Fullscreen Menu */}
      <MenuOverlay open={open} onClose={() => setOpen(false)} />
    </>
  );
};

export default Navbar;
