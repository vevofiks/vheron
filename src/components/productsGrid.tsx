
import React from 'react';
import { motion } from 'framer-motion';
import { PRODUCTS } from '@/consants';
import Image from 'next/image';

const ProductGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
      {PRODUCTS.map((product, index) => (
        <motion.div
          key={product.id}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.2, duration: 0.8 }}
          className="group cursor-pointer"
        >
          <div className="relative overflow-hidden aspect-[4/5] bg-white/5 rounded-sm shadow-2xl">
            <Image
            width={50}
            height={80}
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
            <div className="absolute bottom-0 left-0 w-full p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 opacity-0 group-hover:opacity-100">
               <button className="w-full py-3 bg-[#fefae0] text-[#3a5a40] font-medium uppercase text-xs tracking-widest hover:bg-[#588157] hover:text-[#fefae0] transition-colors">
                 Quick View
               </button>
            </div>
          </div>
          <div className="mt-6 flex justify-between items-start">
            <div>
              <p className="text-[10px] uppercase tracking-widest text-[#fefae0]/60 mb-1">
                {product.collection}
              </p>
              <h3 className="text-xl font-serif-elegant font-light text-[#fefae0]">
                {product.name}
              </h3>
            </div>
            <span className="text-lg font-light text-[#fefae0] opacity-80">{product.price}</span>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default ProductGrid;
