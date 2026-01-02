'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { PRODUCTS } from '@/consants';

const ProductGrid: React.FC = () => {
  return (
    <section className="relative py-24 bg-[#3F5C3A] overflow-hidden">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-[#4A6845]/45 pointer-events-none" />

      {/* Content Wrapper */}
      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.header
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-serif font-light text-[#F5F1E8] mb-6">
            Our Curated Selection
          </h2>
          <div className="w-24 h-px bg-[#D4AF37] mx-auto opacity-70" />
        </motion.header>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {PRODUCTS.map((product, index) => (
            <motion.article
              key={product.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.12,
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ y: -10 }}
              className="group"
            >
              {/* Card */}
              <div className="relative bg-[#4A6845] overflow-hidden">
                {/* Image */}
                <motion.div
                  className="aspect-[4/5]"
                  whileHover={{ scale: 1.07 }}
                  transition={{ duration: 0.9, ease: 'easeOut' }}
                >
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={600}
                    height={800}
                    className="w-full h-full object-cover"
                  />
                </motion.div>

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition duration-700" />

                {/* Gold Border */}
                <div className="absolute inset-0 border border-[#D4AF37]/0 group-hover:border-[#D4AF37]/60 transition duration-500 pointer-events-none" />

                {/* CTA */}
                <div className="absolute bottom-0 left-0 w-full p-6 opacity-0 translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                  <button className="w-full py-3 border border-[#D4AF37] text-[#D4AF37] text-[10px] tracking-[0.35em] uppercase hover:bg-[#D4AF37] hover:text-[#4A6845] transition">
                    View Details
                  </button>
                </div>
              </div>

              {/* Meta */}
              <div className="mt-6 flex justify-between items-start">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.35em] text-[#F5F1E8]/50 mb-1">
                    {product.collection}
                  </p>
                  <h3 className="text-xl font-serif font-light text-[#F5F1E8]">
                    {product.name}
                  </h3>
                </div>

                <span className="text-lg font-light text-[#F5F1E8]/75">
                  {product.price}
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
