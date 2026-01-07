'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { MapPin, Compass, Camera, Heart, Eye } from 'lucide-react';

export default function Page() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-900 via-green-800 to-emerald-900 text-amber-50 overflow-x-hidden">
      {/* Subtle background texture */}
      <div className="fixed inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgb(217 119 6 / 0.4) 1px, transparent 0)`,
          backgroundSize: '48px 48px'
        }} />
      </div>

      {/* Scroll progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 z-50 origin-left"
        style={{ scaleX: scrollYProgress }}
      />

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 py-20">
        <motion.div
          style={{ opacity, scale }}
          className="space-y-10 max-w-5xl"
        >
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-block"
          >
            <Compass className="w-16 h-16 mx-auto text-amber-500 mb-6" strokeWidth={1.5} />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-7xl md:text-8xl lg:text-9xl font-light leading-none tracking-wide"
          >
            <span className="text-amber-100/90 block mb-4">RIDE FOR</span>
            <span className="text-amber-400 font-normal">ROOTS</span>
          </motion.h1>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="w-32 h-px bg-amber-600/50 mx-auto"
          />

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="max-w-3xl mx-auto text-xl md:text-2xl text-amber-50/80 leading-relaxed font-light"
          >
            A motorcycle journey across Kerala — riding through towns, plantations, workshops, and ports to document stories that usually travel without names.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="pt-4"
          >
            <p className="text-lg md:text-xl text-amber-300/70 italic leading-relaxed">
              ഓരോ യാത്രക്കും ഒരു ഉദ്ദേശ്യമുണ്ട്.<br />
              ഈ യാത്രക്ക് ഒരു ഉത്തരവാദിത്വം.
            </p>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-12 text-amber-500/60 text-sm tracking-wider"
        >
          SCROLL
        </motion.div>
      </section>

      {/* INTRO - TRAVEL WITH PURPOSE */}
      <section className="relative py-32 px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="bg-green-800/20 backdrop-blur-sm border border-amber-600/20 rounded-sm p-10 md:p-12 shadow-2xl"
        >
          <motion.h2
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl md:text-4xl font-light text-amber-400 tracking-wide"
          >
            INTRO — TRAVEL WITH PURPOSE
          </motion.h2>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="w-24 h-px bg-amber-600/40 origin-left"
          />

          <div className="space-y-6 text-lg md:text-xl text-amber-50/70 leading-relaxed font-light mt-8">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              This is not a vacation. This is not a road trip for photos.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Ride for Roots is a slow travel journey across Kerala, stopping where real work happens — farms, small factories, artisan spaces, and export hubs.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="text-amber-300/80 italic pt-4"
            >
              ഇത് സ്ഥലങ്ങൾ കാണാനുള്ള യാത്രയല്ല. ഇത് ആളുകളെ കാണാനുള്ള യാത്രയാണ്.
            </motion.p>
          </div>
        </motion.div>
      </section>

      {/* WHY TRAVEL THIS WAY */}
      <section className="relative py-32 px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="bg-green-800/20 backdrop-blur-sm border border-amber-600/20 rounded-sm p-10 md:p-12 shadow-2xl"
        >
          <motion.h2
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl md:text-4xl font-light text-amber-400 tracking-wide"
          >
            WHY TRAVEL THIS WAY?
          </motion.h2>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="w-24 h-px bg-amber-600/40 origin-left"
          />

          <div className="space-y-6 text-lg md:text-xl text-amber-50/70 leading-relaxed font-light mt-8">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Fast travel hides stories. Slow travel reveals them.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              By riding through Kerala district by district, we document how everyday products — spices, oils, coffee, coir, cashew, and fragrances — begin their journey to the world.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="text-amber-300/80 italic pt-4"
            >
              കേരളത്തിൽ നിർമ്മിക്കപ്പെടുന്ന പലതും ലോകം ഉപയോഗിക്കുന്നു. പക്ഷേ അതിന്റെ കഥകൾ കാണുന്നില്ല.
            </motion.p>
          </div>
        </motion.div>
      </section>

      {/* THE JOURNEY ROUTE */}
      <section className="py-32 px-6 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-12"
        >
          <div className="space-y-4">
            <motion.h2
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-light text-amber-400 tracking-wide"
            >
              THE JOURNEY ROUTE
            </motion.h2>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-24 h-px bg-amber-600/40 origin-left"
            />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg text-amber-50/70 font-light"
            >
              From coastal roads to forest climbs, the route follows real working landscapes.
            </motion.p>
          </div>

          <div className="grid gap-4 md:gap-6 mt-12">
            {[
              { place: 'Kochi', desc: 'ports, trade routes, spice warehouses' },
              { place: 'Wayanad', desc: 'coffee hills, pepper farms' },
              { place: 'Kozhikode', desc: 'historic trade towns' },
              { place: 'Kannur', desc: 'handloom clusters' },
              { place: 'Kollam', desc: 'cashew processing units' },
              { place: 'Alappuzha', desc: 'coir and waterways' },
              { place: 'Trivandrum', desc: 'policy, logistics, export flow' },
            ].map((location, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -40, scale: 0.95 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                whileHover={{ x: 10, borderColor: 'rgb(245 158 11 / 0.6)' }}
                className="flex items-start gap-4 border-l border-amber-600/30 pl-6 py-3 bg-green-800/10 hover:bg-green-800/20 transition-all rounded-r"
              >
                <MapPin className="w-5 h-5 text-amber-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-normal text-amber-200">{location.place}</h3>
                  <p className="text-amber-50/60 font-light">{location.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-lg text-amber-300/80 italic pt-8 font-light"
          >
            ഓരോ സ്ഥലവും ഒരു ഉൽപ്പന്നം മാത്രമല്ല. ഒരു ജീവിതരീതിയാണ്.
          </motion.p>
        </motion.div>
      </section>


      {/* WHAT WE CAPTURE */}
      <section className="relative py-32 px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-green-800/20 backdrop-blur-sm border border-amber-600/20 rounded-sm p-10 md:p-12 shadow-2xl"
        >
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-4"
          >
            <Camera className="w-8 h-8 text-amber-500" strokeWidth={1.5} />
            <h2 className="text-3xl md:text-4xl font-light text-amber-400 tracking-wide">
              WHAT WE CAPTURE ON THE ROAD
            </h2>
          </motion.div>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="w-24 h-px bg-amber-600/40 origin-left mt-8"
          />

          <ul className="space-y-4 text-lg text-amber-50/70 font-light mt-8">
            {[
              'Travel routes & landscapes',
              'Local production spaces',
              'People behind everyday exports',
              'Conversations, not interviews',
              'Movement, not poses'
            ].map((item, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -20, scale: 0.95 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + i * 0.1, duration: 0.5 }}
                className="flex items-center gap-3"
              >
                <span className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
                {item}
              </motion.li>
            ))}
          </ul>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 1 }}
            className="text-lg text-amber-300/80 italic pt-6 font-light"
          >
            Camera-ക്കായി നിൽക്കാതെ, ജീവിതം നടക്കുന്നത് പോലെ.
          </motion.p>
        </motion.div>
      </section>

      {/* WHY A PERFUME BOTTLE EXISTS */}
      <section className="relative py-32 px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div className="flex items-center gap-4">
            <Heart className="w-8 h-8 text-amber-500" strokeWidth={1.5} />
            <h2 className="text-3xl md:text-4xl font-light text-amber-400 tracking-wide">
              WHY A PERFUME BOTTLE EXISTS
            </h2>
          </div>

          <div className="w-24 h-px bg-amber-600/40" />

          <div className="space-y-6 text-lg md:text-xl text-amber-50/70 leading-relaxed font-light">
            <p>We didn&apos;t want sponsorship boards. We didn&apos;t want donation banners.</p>
            
            <p>
              Instead, a limited perfume bottle helps fund the travel, documentation, and humanitarian support connected to this journey.
            </p>

            <p className="text-amber-300/80 italic pt-4">
              ഇത് വിൽപ്പനയല്ല. ഇത് യാത്രയിൽ പങ്കാളിയാകലാണ്.
            </p>
          </div>
        </motion.div>
      </section>

      {/* IMPACT THROUGH TRAVEL */}
      <section className="py-32 px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div className="flex items-center gap-4">
            <Eye className="w-8 h-8 text-amber-500" strokeWidth={1.5} />
            <h2 className="text-3xl md:text-4xl font-light text-amber-400 tracking-wide">
              IMPACT THROUGH TRAVEL
            </h2>
          </div>

          <div className="w-24 h-px bg-amber-600/40" />

          <div className="space-y-6 text-lg text-amber-50/70 leading-relaxed font-light">
            <p>Travel has cost. Stories need time. Impact needs transparency.</p>
            
            <p>After the journey, we will publicly share:</p>
          </div>

          <ul className="space-y-3 text-lg text-amber-50/70 font-light mt-6">
            {[
              'Distance travelled',
              'Places documented',
              'Funds generated',
              'Expenses covered',
              'Amount directed to humanitarian relief'
            ].map((item, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-3"
              >
                <span className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
                {item}
              </motion.li>
            ))}
          </ul>

          <p className="text-lg text-amber-300/80 italic pt-6 font-light">
            എല്ലാം തുറന്നുവെച്ച്. ഒന്നും മറച്ച് വെക്കാതെ.
          </p>
        </motion.div>
      </section>

      {/* CLOSING STATEMENT */}
      <section className="relative py-32 px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-8 bg-green-800/20 backdrop-blur-sm border border-amber-600/20 rounded-sm p-12 md:p-16"
        >
          <h2 className="text-3xl md:text-4xl font-light text-amber-400 tracking-wide">
            CLOSING TRAVEL STATEMENT
          </h2>

          <div className="w-24 h-px bg-amber-600/40 mx-auto" />

          <div className="space-y-6 text-lg md:text-xl text-amber-50/70 leading-relaxed font-light">
            <p>The road ends somewhere. The stories don&apos;t.</p>
            
            <p>
              Ride for Roots is about slowing down, listening carefully, and showing what already exists — without exaggeration.
            </p>

            <p className="text-amber-300/80 italic pt-4">
              യാത്ര അവസാനിക്കുമ്പോൾ ഉത്തരവാദിത്വം തുടങ്ങും.
            </p>
          </div>
        </motion.div>
      </section>

      {/* FOOTER */}
      <footer className="relative py-16 text-center border-t border-amber-600/20">
        <p className="text-amber-500/60 font-light tracking-wider text-sm">
          RIDE FOR ROOTS — KERALA TO THE WORLD
        </p>
      </footer>
    </div>
  );
}