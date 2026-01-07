'use client';

import React, { useState } from 'react';
import { Menu } from 'lucide-react';
import MenuOverlay from './menuoverlay';

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* DESKTOP LEFT NAV */}
      <aside
        className="
          fixed left-0 top-0 h-screen w-[90px]
          hidden md:flex flex-col items-center justify-between
          py-8 z-50 backdrop-blur-sm
          text-white/40
        "
      >
        <button
          onClick={() => setOpen(true)}
          aria-label="Open menu"
          className="hover:text-white transition"
        >
          <Menu size={30} />
        </button>

        <a
          href="#hero"
          className="
            rotate-90 tracking-[0.45em]
            text-3xl font-serif-elegant
            text-[#D4AF37]/60
            hover:text-[#D4AF37]
            transition
          "
        >
          VHERON
        </a>

        <a
          href="https://wa.me/6282699250"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs tracking-widest opacity-40 hover:opacity-90 transition"
        >
          WhatsApp
        </a>
      </aside>

      {/* MOBILE TOP NAV */}
      <nav
        className="
          fixed top-0 left-0 w-full md:hidden
          flex justify-between items-center
          px-6 py-4 z-50 backdrop-blur-sm
        "
      >
        <a
          href="#hero"
          className="tracking-[0.35em] text-sm text-[#D4AF37]/70"
        >
          VHERON
        </a>

        <button
          onClick={() => setOpen(true)}
          aria-label="Open menu"
          className="hover:text-white transition"
        >
          <Menu size={28} />
        </button>
      </nav>

      <MenuOverlay open={open} onClose={() => setOpen(false)} />
    </>
  );
};

export default Navbar;
