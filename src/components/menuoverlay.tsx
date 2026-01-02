'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface MenuOverlayProps {
  open: boolean;
  onClose: () => void;
}

const MENU_LINKS = [
  { label: 'Home', href: '#hero' },
  { label: 'Our Story', href: '#story' },
  { label: 'Services', href: '#services' },
  { label: 'Blogs', href: '#blogs' },
  { label: 'Contact', href: '#contact' },
];

const MenuOverlay: React.FC<MenuOverlayProps> = ({ open, onClose }) => {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          className="fixed inset-0 z-[999] bg-[#5E7F57]"
        >
          {/* depth */}
          <div className="absolute inset-0 bg-[#4A6845]/50 pointer-events-none" />

          {/* Close */}
          <motion.button
            onClick={onClose}
            whileHover={{ rotate: 90, scale: 1.05 }}
            transition={{ duration: 0.25 }}
            aria-label="Close menu"
            className="
              absolute top-6 right-6 z-[1001]
              w-12 h-12 rounded-full
              bg-[#4A6845]/70
              flex items-center justify-center
              text-[#F5F1E8]/60 hover:text-[#F5F1E8]
              backdrop-blur-sm
            "
          >
            <X size={26} />
          </motion.button>

          <div className="relative z-[1000] h-full grid grid-cols-1 md:grid-cols-12">

            {/* ================= LEFT META ================= */}
            <div className="hidden md:flex md:col-span-3 flex-col justify-between px-8 py-12 border-r border-[#F5F1E8]/10">
              <div>
                <h3 className="text-xs tracking-[0.4em] mb-6 text-[#F5F1E8]/45">
                  FOLLOW
                </h3>
                <ul className="space-y-3 text-sm text-[#F5F1E8]/60">
                  {['Instagram', 'Facebook', 'LinkedIn'].map((item) => (
                    <li
                      key={item}
                      className="hover:text-[#F5F1E8] transition cursor-pointer"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <p className="text-[10px] tracking-widest uppercase text-[#F5F1E8]/35">
                © 2024 VHERON FRAGRANCES
              </p>
            </div>

            {/* ================= CENTER NAV ================= */}
            <div className="col-span-1 md:col-span-5 flex items-center">
              <ul className="w-full px-10 md:px-20 space-y-8">
                {MENU_LINKS.map((item, i) => (
                  <motion.li
                    key={item.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.06 }}
                    className="border-b border-[#F5F1E8]/10 pb-6"
                  >
                    <a
                      href={item.href}
                      onClick={onClose}
                      className="
                        block font-serif
                        text-4xl md:text-6xl
                        tracking-wide
                        text-[#D4AF37]/55
                        hover:text-[#D4AF37]/90
                        transition
                      "
                    >
                      {item.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* ================= RIGHT DETAILS ================= */}
            <div className="hidden md:flex md:col-span-4 flex-col justify-between px-10 py-12 border-l border-[#F5F1E8]/10">
              <div className="space-y-10 text-sm text-[#F5F1E8]/60">
                <div>
                  <h4 className="text-xs tracking-[0.4em] mb-4 text-[#F5F1E8]/45">
                    CONTACT
                  </h4>
                  <p>hello@vheron.com</p>
                  <p>+971 54 56 55 008</p>
                </div>

                <div>
                  <h4 className="text-xs tracking-[0.4em] mb-4 text-[#F5F1E8]/45">
                    LOCATIONS
                  </h4>
                  <p>Dubai, United Arab Emirates</p>
                  <p>Grasse, France</p>
                  <p>Muscat, Oman</p>
                </div>

                <div>
                  <h4 className="text-xs tracking-[0.4em] mb-4 text-[#F5F1E8]/45">
                    NEWSLETTER
                  </h4>
                  <div className="flex gap-3">
                    <input
                      type="email"
                      placeholder="Email address"
                      className="
                        bg-transparent
                        border-b border-[#F5F1E8]/30
                        pb-2 w-full
                        text-[#F5F1E8]
                        placeholder:text-[#F5F1E8]/40
                        focus:outline-none
                        focus:border-[#D4AF37]/70
                      "
                    />
                    <button className="text-[#D4AF37]/70 hover:text-[#D4AF37] transition text-xs tracking-widest">
                      JOIN
                    </button>
                  </div>
                </div>
              </div>

              <div className="text-[10px] tracking-widest uppercase text-[#F5F1E8]/35">
                Privacy · Terms · Cookies
              </div>
            </div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MenuOverlay;
