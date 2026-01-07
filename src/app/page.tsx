'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { MapPin, Heart, Target, TrendingUp } from 'lucide-react';

export default function Page() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-950 via-emerald-900 to-teal-950 text-amber-50 overflow-x-hidden">
      {/* Animated background pattern */}
      <div className="fixed inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgb(251 191 36 / 0.3) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Scroll progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600 z-50 origin-left shadow-lg shadow-amber-500/50"
        style={{ scaleX: scrollYProgress }}
      />

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 py-20">
        <motion.div
          style={{ opacity, scale }}
          className="space-y-8"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="inline-block"
          >
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-amber-400 to-yellow-600 flex items-center justify-center shadow-2xl shadow-amber-500/50">
              <MapPin className="w-10 h-10 text-emerald-950" />
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-6xl md:text-8xl lg:text-9xl font-bold leading-none tracking-tight"
          >
            <span className="bg-gradient-to-r from-amber-200 via-yellow-300 to-amber-400 bg-clip-text text-transparent">
              RIDE FOR
            </span>
            <br />
            <span className="bg-gradient-to-r from-yellow-300 via-amber-400 to-orange-500 bg-clip-text text-transparent">
              ROOTS
            </span>
          </motion.h1>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="w-32 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto"
          />

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="max-w-3xl text-xl md:text-2xl text-amber-100/90 leading-relaxed font-light"
          >
            A motorcycle journey across Kerala documenting export-worthy heritage
            products and converting profit into humanitarian impact.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="pt-4"
          >
            <p className="text-lg md:text-xl text-amber-200/70 italic space-y-2">
              <span className="block">ഓരോ കിലോമീറ്ററും ഒരു കഥ.</span>
              <span className="block">ഓരോ bottle-ഉം ഒരു സഹായം.</span>
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="pt-8"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(251, 191, 36, 0.5)" }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 bg-gradient-to-r from-amber-500 to-yellow-600 text-emerald-950 font-bold text-lg rounded-full shadow-2xl shadow-amber-500/30 hover:shadow-amber-500/50 transition-all"
            >
              Join the Journey
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, repeat: Infinity, duration: 1.5, repeatType: "reverse" }}
          className="absolute bottom-10"
        >
          <div className="w-6 h-10 border-2 border-amber-400/50 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-amber-400 rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* WHY THIS EXISTS */}
      <section className="relative py-32 px-6 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-br from-emerald-900/50 to-teal-900/30 backdrop-blur-sm rounded-3xl p-12 md:p-16 border border-amber-500/20 shadow-2xl"
        >
          <div className="flex items-center gap-4 mb-8">
            <Target className="w-10 h-10 text-amber-400" />
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-200 to-yellow-400 bg-clip-text text-transparent">
              Why This Journey Exists
            </h2>
          </div>

          <div className="space-y-6 text-lg md:text-xl text-amber-100/80 leading-relaxed">
            <p>
              Kerala exports spices, oils, coffee, crafts, and fragrances worldwide —
              but the people and places behind them remain invisible.
            </p>

            <div className="my-8 pl-6 border-l-4 border-amber-500/50 space-y-3">
              <p>Ride for Roots is not tourism.</p>
              <p>ഇത് ഒരു marketing stunt അല്ല.</p>
              <p className="text-amber-300 font-semibold text-xl">
                ഇത് ഉത്തരവാദിത്വമുള്ള വ്യാപാരത്തിന്റെ യാത്രയാണ്.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* THE ROUTE */}
      <section className="py-32 px-6 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center bg-gradient-to-r from-amber-200 to-yellow-400 bg-clip-text text-transparent">
            The Route
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { name: 'Kochi', subtitle: 'Spices & Trade', icon: '🌶️' },
              { name: 'Wayanad', subtitle: 'Coffee & Pepper', icon: '☕' },
              { name: 'Kozhikode', subtitle: 'Historical Exports', icon: '🏛️' },
              { name: 'Kannur', subtitle: 'Handloom', icon: '🧵' },
              { name: 'Kollam', subtitle: 'Cashew', icon: '🥜' },
              { name: 'Alappuzha', subtitle: 'Coir', icon: '🌴' },
              { name: 'Trivandrum', subtitle: 'Policy & Ports', icon: '⚓' },
            ].map((location, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.03, borderColor: 'rgb(251 191 36)' }}
                className="bg-gradient-to-br from-emerald-800/40 to-teal-900/20 backdrop-blur-sm p-6 rounded-2xl border border-amber-500/10 hover:border-amber-500/30 transition-all cursor-pointer shadow-lg hover:shadow-amber-500/20"
              >
                <div className="flex items-center gap-4">
                  <div className="text-4xl">{location.icon}</div>
                  <div>
                    <h3 className="text-2xl font-bold text-amber-200">{location.name}</h3>
                    <p className="text-amber-100/60">{location.subtitle}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* SUPPORT SECTION */}
      <section className="relative py-32 px-6 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-br from-amber-900/30 to-orange-900/20 backdrop-blur-sm rounded-3xl p-12 md:p-16 border border-amber-500/30 shadow-2xl"
        >
          <div className="flex items-center gap-4 mb-8">
            <Heart className="w-10 h-10 text-amber-400" />
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-200 to-yellow-400 bg-clip-text text-transparent">
              Why a Perfume Bottle?
            </h2>
          </div>

          <div className="space-y-6 text-lg md:text-xl text-amber-100/80 leading-relaxed">
            <div className="space-y-3">
              <p>This is not luxury.</p>
              <p>ഇത് donation അല്ല.</p>
              <p className="text-amber-300 font-semibold text-xl">
                ഇത് പങ്കാളിത്തമാണ്.
              </p>
            </div>

            <p className="pt-4">
              A limited edition bottle funds the journey, documentation,
              and humanitarian relief for civilians affected by war —
              including Gaza.
            </p>
          </div>
        </motion.div>
      </section>

      {/* TRANSPARENCY */}
      <section className="py-32 px-6 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-br from-emerald-900/50 to-teal-900/30 backdrop-blur-sm rounded-3xl p-12 md:p-16 border border-amber-500/20 shadow-2xl"
        >
          <div className="flex items-center gap-4 mb-8">
            <TrendingUp className="w-10 h-10 text-amber-400" />
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-200 to-yellow-400 bg-clip-text text-transparent">
              Transparency
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mb-8">
            {[
              'Total bottles sold',
              'Travel & documentation expenses',
              'Amount donated',
              'Proof of transfer'
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-3 bg-emerald-800/30 p-4 rounded-xl"
              >
                <div className="w-6 h-6 rounded-full bg-amber-500 flex items-center justify-center flex-shrink-0">
                  <span className="text-emerald-950 font-bold">✓</span>
                </div>
                <span className="text-amber-100 text-lg">{item}</span>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 p-6 bg-emerald-950/50 rounded-2xl border border-amber-500/20">
            <p className="text-amber-200/70 italic text-center space-y-2">
              <span className="block">No exaggerated numbers.</span>
              <span className="block">No emotional manipulation.</span>
              <span className="block font-semibold text-amber-300">Only documented truth.</span>
            </p>
          </div>
        </motion.div>
      </section>

      {/* FOOTER */}
      <footer className="relative py-16 text-center border-t border-amber-500/20">
        <div className="space-y-4">
          <p className="text-amber-400 font-semibold text-lg">
            Ride for Roots — Kerala to the World
          </p>
          <p className="text-amber-100/50 text-sm">
            A journey of purpose, transparency, and impact
          </p>
        </div>
      </footer>
    </div>
  );
}