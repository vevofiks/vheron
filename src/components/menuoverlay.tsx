'use client';

import React from 'react';
import { X } from 'lucide-react';

interface MenuOverlayProps {
  open: boolean;
  onClose: () => void;
}

const MenuOverlay: React.FC<MenuOverlayProps> = ({ open, onClose }) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[999] bg-black text-white">
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 w-12 h-12 rounded-full bg-[#1a1a1a] flex items-center justify-center"
      >
        <X />
      </button>

      <div className="grid grid-cols-12 h-full">
        {/* ================= LEFT COLUMN ================= */}
        <div className="col-span-2 hidden md:flex flex-col justify-between px-6 py-10 border-r border-white/10">
          <div>
            <h2 className="text-lg font-semibold mb-6">Follow Us</h2>
            <ul className="space-y-2 text-sm opacity-80">
              <li>Facebook</li>
              <li>Instagram</li>
              <li>Snapchat</li>
              <li>LinkedIn</li>
              <li>Twitter</li>
            </ul>
          </div>

          <div className="text-xs opacity-50">
            <p>Our Story</p>
            <p>Contact Us</p>
            <p>Services</p>
            <p>Blog</p>
          </div>
        </div>

        {/* ================= CENTER MENU ================= */}
        <div className="col-span-12 md:col-span-7 flex items-center">
          <ul className="w-full px-10 md:px-20 space-y-8 text-4xl md:text-6xl font-light tracking-wide">
            {['HOME', 'OUR STORY', 'SERVICE', 'BLOGS', 'CONTACT'].map(
              (item) => (
                <li
                  key={item}
                  className="border-b border-white/10 pb-6 hover:opacity-60 transition-opacity cursor-pointer"
                >
                  {item}
                </li>
              )
            )}
          </ul>
        </div>

        {/* ================= RIGHT CONTACT ================= */}
        <div className="col-span-3 hidden md:flex flex-col justify-center px-8 border-l border-white/10">
          <h3 className="text-lg font-semibold mb-4">Get in touch</h3>

          <div className="text-sm space-y-3 opacity-80">
            <div>
              <p className="font-semibold">United Arab Emirates</p>
              <p>+971 54 56 55 008</p>
              <p>In5 Design Building, D3 – Dubai</p>
            </div>

            <div>
              <p className="font-semibold">Oman</p>
              <p>+968 7759 1521</p>
              <p>
                Building No. 559, Flat no.27, P.O. BOX 204, Al Khoudh, Sultanate
                of Oman
              </p>
            </div>

            <p>hello@vheron.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuOverlay;
