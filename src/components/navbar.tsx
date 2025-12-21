'use client';

import React, { useState } from 'react';
import { Menu } from 'lucide-react';
import MenuOverlay from './menuoverlay';

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* DESKTOP LEFT BAR */}
      <aside className="fixed left-0 top-0 h-screen w-[90px] hidden md:flex flex-col items-center justify-between py-8 z-50 text-white">
        <button onClick={() => setOpen(true)}>
          <Menu size={26} />
        </button>

        <h1 className="rotate-90 tracking-[0.4em] font-serif-elegant text-2xl">
          VHERON
        </h1>

        <a
          href="https://wa.me/6282699250"
          target="_blank"
          className="opacity-80"
        >
          WhatsApp
        </a>
      </aside>

      {/* MOBILE TOP NAV */}
      <nav className="fixed top-0 left-0 w-full md:hidden flex justify-between items-center px-6 py-4 z-50 text-white">
        <h1 className="tracking-widest">VHERON</h1>
        <button onClick={() => setOpen(true)}>
          <Menu size={24} />
        </button>
      </nav>

      <MenuOverlay open={open} onClose={() => setOpen(false)} />
    </>
  );
};

export default Navbar;
