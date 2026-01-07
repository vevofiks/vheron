'use client';

import { motion } from 'framer-motion';

const blogs = [
  'The history and heritage of Oud',
  'Fragrance cultures around the world',
  'Natural oils vs synthetic perfumes',
  'Layering and wearing luxury scents',
  'The emotional and spiritual power of fragrance',
];

export function BlogsSection() {
  return (
    <section
      className="bg-[#5E7F57] text-[#F5F1E8]
                 py-16 sm:py-20 md:py-24
                 px-4 sm:px-6"
    >
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-12 sm:mb-16 text-center md:text-left">
          <h2
            className="font-serif font-light
                       text-3xl sm:text-4xl md:text-5xl
                       mb-4"
          >
            The World of Fragrance
          </h2>
          <p className="max-w-xl opacity-70 text-sm sm:text-base">
            Stories, rituals, and philosophies behind the scents that define identity.
          </p>
        </div>

        {/* Grid */}
        <div
          className="grid grid-cols-1
                     sm:grid-cols-2
                     md:grid-cols-3
                     gap-5 sm:gap-6"
        >
          {blogs.map((blog, i) => (
            <motion.article
              key={blog}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.6 }}
              whileHover={{ y: -6 }}
              className="group cursor-pointer
                         bg-[#4A6845]
                         border border-[#F5F1E8]/10
                         hover:border-[#D4AF37]/60
                         transition-all duration-300
                         p-6 sm:p-7"
            >
              <span
                className="block text-[10px]
                           tracking-[0.35em]
                           uppercase opacity-50
                           mb-4"
              >
                Journal
              </span>

              <p
                className="font-serif font-light
                           text-base sm:text-lg
                           leading-relaxed
                           group-hover:opacity-90
                           transition-opacity"
              >
                {blog}
              </p>

              <div className="mt-6 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-[10px] tracking-[0.3em] uppercase">
                  Read More
                </span>
                <span className="text-xs">→</span>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Footer Quote */}
        <div className="mt-14 sm:mt-16 text-center">
          <p className="italic opacity-75 text-sm sm:text-base">
            ✨ Because fragrance is not worn — it is felt.
          </p>
        </div>
      </div>
    </section>
  );
}
