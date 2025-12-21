
'use client';
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#a3b18a] text-[#fefae0] py-20 px-6 border-t border-white/10">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-1">
            <h2 className="text-2xl font-serif-elegant font-bold tracking-widest uppercase mb-8">VHERON</h2>
            <p className="text-sm font-light opacity-60 leading-relaxed max-w-xs">
              Crafting scents for those who seek the extraordinary in the everyday. Registered in Grasse, France.
            </p>
          </div>
          
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.4em] font-semibold mb-6 opacity-40">Navigation</h4>
            <ul className="space-y-4 text-sm font-light">
              <li><a href="#" className="hover:opacity-100 opacity-60 transition-opacity">Collections</a></li>
              <li><a href="#" className="hover:opacity-100 opacity-60 transition-opacity">Gift Sets</a></li>
              <li><a href="#" className="hover:opacity-100 opacity-60 transition-opacity">About Our Labs</a></li>
              <li><a href="#" className="hover:opacity-100 opacity-60 transition-opacity">Careers</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] uppercase tracking-[0.4em] font-semibold mb-6 opacity-40">Contact</h4>
            <ul className="space-y-4 text-sm font-light">
              <li className="opacity-60">General: hello@vheron.com</li>
              <li className="opacity-60">Press: media@vheron.com</li>
              <li className="opacity-60">+33 (0) 4 93 36 00 00</li>
              <li className="opacity-60">Boulevard du Jeu de Ballon, Grasse</li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] uppercase tracking-[0.4em] font-semibold mb-6 opacity-40">Newsletter</h4>
            <div className="relative mt-6">
              <input 
                type="email" 
                placeholder="EMAIL ADDRESS" 
                className="w-full bg-transparent border-b border-white/20 pb-4 text-xs tracking-widest focus:outline-none focus:border-white transition-colors"
              />
              <button className="absolute right-0 top-0 text-[10px] tracking-widest font-bold">JOIN</button>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 opacity-30 text-[10px] tracking-widest uppercase">
          <p>© 2024 VHERON FRAGRANCES. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-8 mt-4 md:mt-0">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Use</a>
            <a href="#">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
