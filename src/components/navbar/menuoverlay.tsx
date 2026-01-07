'use client';

import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { MENU_LINKS } from './menu.constants';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

interface MenuOverlayProps {
  open: boolean;
  onClose: () => void;
}

const MenuOverlay: React.FC<MenuOverlayProps> = ({ open, onClose }) => {
  /* BODY SCROLL LOCK */
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  /* ESC KEY CLOSE */
  useEffect(() => {
    if (!open) return;

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[999] bg-[#5E7F57]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* BACKDROP */}
          <div
            className="absolute inset-0 bg-[#4A6845]/50"
            onClick={onClose}
          />

          {/* CONTENT */}
          <div className="relative z-[1000] h-full overflow-y-auto px-6 py-24">
            {/* CLOSE */}
            <button
              onClick={onClose}
              aria-label="Close menu"
              className="
                fixed top-5 right-5
                w-11 h-11 rounded-full
                bg-[#4A6845]/70
                flex items-center justify-center
                text-[#F5F1E8]/70 hover:text-[#F5F1E8]
                transition
              "
            >
              <X size={24} />
            </button>

            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-16">
              {/* NAV */}
              <div className="md:col-span-6">
                <ul className="space-y-8">
                  {MENU_LINKS.map((item, i) => (
                    <motion.li
                      key={item.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.06 }}
                    >
                      <a
                        href={item.href}
                        onClick={onClose}
                        className="
                          font-serif block
                          text-4xl sm:text-5xl md:text-6xl
                          text-[#D4AF37]/60 hover:text-[#D4AF37]
                          transition
                        "
                      >
                        {item.label}
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* META */}
              <div className="md:col-span-6 space-y-12 text-sm text-[#F5F1E8]/65">
                <div>
                  <h4 className="text-xs tracking-[0.4em] mb-4">CONTACT</h4>
                  <p>hello@vheron.com</p>
                  <p>+971 54 56 55 008</p>
                </div>

                <div>
                  <h4 className="text-xs tracking-[0.4em] mb-4">LOCATIONS</h4>
                  <p>Dubai, UAE</p>
                  <p>Grasse, France</p>
                  <p>Muscat, Oman</p>
                </div>

                <div>
                  <h4 className="text-xs tracking-[0.4em] mb-4">FOLLOW</h4>
                  <div className="flex gap-6">
                    {[FaInstagram, FaFacebook, FaLinkedin].map((Icon, i) => (
                      <Icon
                        key={i}
                        size={22}
                        className="cursor-pointer hover:text-[#D4AF37] transition"
                      />
                    ))}
                  </div>
                </div>

                <div className="text-[10px] tracking-widest uppercase opacity-40">
                  Privacy · Terms · Cookies
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MenuOverlay;
