'use client';

import { motion } from 'framer-motion';

export function ContactSection() {
  return (
    <section
      className="relative bg-[#5E7F57] text-[#F5F1E8] overflow-hidden
                 py-16 sm:py-20 md:py-24 lg:py-28
                 px-4 sm:px-6"
    >
      {/* Depth overlay */}
      <div className="absolute inset-0 bg-[#4A6845]/40 pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: 'easeOut' }}
        className="relative max-w-4xl mx-auto text-center"
      >
        {/* Heading */}
        <h2
          className="font-serif font-light tracking-wide
                     text-3xl sm:text-4xl md:text-5xl
                     mb-4 sm:mb-6"
        >
          Connect with VHERON
        </h2>

        <p
          className="max-w-md mx-auto
                     text-sm sm:text-base
                     leading-relaxed
                     text-[#F5F1E8]/75
                     mb-10 sm:mb-12"
        >
          Let fragrance build the connection.
        </p>

        {/* CTA Buttons */}
        <div
          className="flex flex-col sm:flex-row
                     justify-center items-center
                     gap-3 sm:gap-4
                     mb-12 sm:mb-14"
        >
          {['Global Enquiries', 'Bulk Orders', 'Private Label'].map((btn, i) => (
            <motion.button
              key={btn}
              whileHover={{ y: -3 }}
              transition={{ duration: 0.25 }}
              className={`
                px-7 py-3
                text-[11px] tracking-[0.25em] uppercase
                border transition-all duration-300
                ${
                  i === 0
                    ? 'border-[#D4AF37] text-[#D4AF37]'
                    : 'border-[#D4AF37]/40 text-[#D4AF37]/70'
                }
                hover:border-[#D4AF37]
                hover:text-[#D4AF37]
              `}
            >
              {btn}
            </motion.button>
          ))}
        </div>

        {/* Newsletter */}
        <motion.form
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.8 }}
          className="flex flex-col sm:flex-row
                     gap-3 sm:gap-4
                     justify-center items-center"
        >
          <input
            type="email"
            placeholder="Your email address"
            className="
              w-full sm:w-72
              px-4 py-3
              bg-transparent
              border border-[#F5F1E8]/40
              text-sm
              text-[#F5F1E8]
              placeholder:text-[#F5F1E8]/40
              focus:outline-none
              focus:border-[#D4AF37]/80
              transition
            "
          />
          <button
            type="submit"
            className="
              w-full sm:w-auto
              px-7 py-3
              text-[11px] tracking-[0.25em] uppercase
              border border-[#D4AF37]/70
              text-[#D4AF37]
              hover:bg-[#D4AF37]
              hover:text-[#4A6845]
              transition-all duration-300
            "
          >
            Subscribe
          </button>
        </motion.form>

        {/* Footer line */}
        <p
          className="mt-10 sm:mt-12
                     text-xs sm:text-sm
                     italic
                     text-[#F5F1E8]/55"
        >
          Every bottle carries a scent. Every sale carries responsibility.
        </p>
      </motion.div>
    </section>
  );
}
