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
    <section className="bg-[#5E7F57] text-[#F5F1E8] py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-serif mb-10">
          The World of Fragrance
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {blogs.map((blog, i) => (
            <motion.div
              key={blog}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="bg-[#4A6845] p-6 border border-[#D4AF37]/20 hover:border-[#D4AF37] transition"
            >
              <p className="font-serif">{blog}</p>
            </motion.div>
          ))}
        </div>

        <p className="mt-10 italic opacity-80">
          ✨ Because fragrance is not worn—it is felt.
        </p>
      </div>
    </section>
  );
}
