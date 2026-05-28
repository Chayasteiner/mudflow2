import React from "react";
import { motion } from "framer-motion";
import {
  Droplets,
  CheckCircle,
  Package,
  ShieldCheck,
  Star,
  ArrowRight,
} from "lucide-react";

export default function App() {
  const benefits = [
    "Easy water access for mud kitchens",
    "Hooks securely onto most boards",
    "Removable tap for simple cleaning",
    "Encourages outdoor sensory play",
  ];

  return (
    <div className="min-h-screen bg-[#f6efe3] text-[#2b2118]">
      <header className="px-6 md:px-12 py-5 flex items-center justify-between max-w-7xl mx-auto">
   <div className="flex items-center">
  <img
    src="/images/logo.png"
    alt="Mudflow Logo"
     className="h-40 md:h-56 w-auto"
  />
</div>

        <a
          href="#buy"
          className="hidden md:inline-flex items-center gap-2 rounded-full bg-[#2b2118] text-white px-5 py-2.5 text-sm font-semibold shadow-sm hover:opacity-90"
        >
          Buy on Amazon <ArrowRight size={16} />
        </a>
      </header>

      <main>
        <section className="px-6 md:px-12 pt-8 pb-16 grid md:grid-cols-2 gap-10 items-center max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="uppercase tracking-[0.25em] text-sm font-semibold text-[#7aa36f] mb-4">
              Pour, play & explore
            </p>

            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-5">
              Mud Kitchen Water Dispenser
            </h1>

            <p className="text-lg md:text-xl text-[#6c5d4e] mb-8 max-w-xl">
              A simple outdoor water dispenser made for mud kitchens, sensory
              play and creative garden fun.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                id="buy"
                href="#"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#2f5b46] text-white px-7 py-3 font-semibold shadow-md hover:opacity-90"
              >
                Buy on Amazon <ArrowRight size={18} />
              </a>

              <a
                href="#features"
                className="inline-flex items-center justify-center rounded-full border border-[#2f5b46] text-[#2f5b46] px-7 py-3 font-semibold hover:bg-white"
              >
                See Features
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="rounded-[2rem] bg-white shadow-xl p-6">
              <img
                src="/images/product.png"
                alt="Mudflow water dispenser"
                className="w-full h-auto rounded-[1.5rem]"
              />
            </div>
          </motion.div>
        </section>

        <section id="features" className="px-6 md:px-12 py-14 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
              Made for easy outdoor play
            </h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((item, index) => (
                <div
                  key={index}
                  className="rounded-2xl bg-[#f6efe3] p-6 shadow-sm"
                >
                  <CheckCircle className="text-[#2f5b46] mb-4" />
                  <p className="font-semibold">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 md:px-12 py-16">
          <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6">
            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <Package className="text-[#2f5b46] mb-4" />
              <h3 className="font-bold text-xl mb-2">Simple Setup</h3>
              <p className="text-[#6c5d4e]">
                Hook it onto a mud kitchen board, fill with water and start
                playing.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <ShieldCheck className="text-[#2f5b46] mb-4" />
              <h3 className="font-bold text-xl mb-2">Outdoor Friendly</h3>
              <p className="text-[#6c5d4e]">
                Designed for garden play, mud kitchens and messy outdoor fun.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <Star className="text-[#2f5b46] mb-4" />
              <h3 className="font-bold text-xl mb-2">Perfect Gift</h3>
              <p className="text-[#6c5d4e]">
                A fun accessory for children who love mud kitchens and sensory
                play.
              </p>
            </div>
          </div>
        </section>

        <section className="px-6 md:px-12 py-16 bg-[#2f5b46] text-white text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready for muddy little adventures?
          </h2>
          <p className="mb-8 text-white/80">
            Add water, hook it on, and let the outdoor play begin.
          </p>

          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-full bg-white text-[#2f5b46] px-8 py-3 font-bold hover:opacity-90"
          >
            Buy on Amazon <ArrowRight size={18} />
          </a>
        </section>
      </main>

      <footer className="px-6 md:px-12 py-8 border-t border-[#ded0bd] text-center text-sm text-[#7a6a5d]">
        © {new Date().getFullYear()} Mudflow. Imported by Steiner Trading LLC.
        Made in China.
      </footer>
    </div>
  );
}
