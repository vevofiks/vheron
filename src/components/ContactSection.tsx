'use client';

import { motion } from 'framer-motion';

export function ContactSection() {
  return (
    <section className="bg-[#5E7F57] text-[#F5F1E8] py-24 px-6">
      {/* depth */}
      <div className="absolute inset-0 bg-[#4A6845]/40 pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="relative max-w-4xl mx-auto text-center"
      >
        <h2 className="text-4xl md:text-5xl font-serif mb-6 tracking-wide">
          Connect with VHERON
        </h2>

        <p className="mb-12 text-[#F5F1E8]/75 max-w-xl mx-auto leading-relaxed">
          Let fragrance build the connection.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-14">
          {['Global Enquiries', 'Bulk Orders', 'Private Label'].map((btn) => (
            <motion.button
              key={btn}
              whileHover={{ y: -2 }}
              transition={{ duration: 0.25 }}
              className="
                px-6 py-3
                border border-[#D4AF37]/50
                text-[#D4AF37]/70
                tracking-wide text-sm
                hover:border-[#D4AF37]
                hover:text-[#D4AF37]
                transition
              "
            >
              {btn}
            </motion.button>
          ))}
        </div>

        {/* Newsletter */}
        <motion.form
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <input
            type="email"
            placeholder="Your email address"
            className="
              px-4 py-3
              w-full sm:w-72
              bg-transparent
              border border-[#F5F1E8]/40
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
              px-6 py-3
              border border-[#D4AF37]/70
              text-[#D4AF37]
              hover:bg-[#D4AF37]
              hover:text-[#4A6845]
              transition
            "
          >
            Subscribe
          </button>
        </motion.form>

        <p className="mt-10 text-sm italic text-[#F5F1E8]/55">
          Every bottle carries a scent. Every sale carries responsibility.
        </p>
      </motion.div>
    </section>
  );
}
