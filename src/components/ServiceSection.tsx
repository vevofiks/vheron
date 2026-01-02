'use client';

import { motion } from 'framer-motion';

const services = [
  { icon: '🌿', title: 'Oud & Oil Export', desc: 'Authentic Oud Chips, Pure Oud Oil, Premium Natural Oils' },
  { icon: '🌍', title: 'Global Export Network', desc: 'Middle East, Europe, Asia, Africa' },
  { icon: '🧴', title: 'Private Label & Bulk Supply', desc: 'Bulk supply, Custom blends, White-label solutions' },
  { icon: '✔️', title: 'Quality & Authenticity', desc: 'Ethically sourced, Export-grade packaging' },
];

export function ServicesSection() {
  return (
    <section className="relative bg-[#5E7F57] text-[#F5F1E8] py-24 px-6">
      {/* depth */}
      <div className="absolute inset-0 bg-[#4A6845]/40 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-serif text-center mb-16 tracking-wide">
          What VHERON Offers
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.7, ease: 'easeOut' }}
              className="
                bg-[#4A6845]/50
                border border-[#D4AF37]/25
                p-8
                transition
                hover:border-[#D4AF37]/60
              "
            >
              <div className="text-3xl mb-5 opacity-80">{item.icon}</div>

              <h3 className="font-serif text-2xl mb-3 tracking-wide">
                {item.title}
              </h3>

              <p className="text-sm text-[#F5F1E8]/75 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
