import './index.css'
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
    "Hooks securely onto wooden play panels",
    "Simple tap design for little hands",
    "Lightweight, practical, and easy to refill",
  ];

  const steps = [
    "Add washer",
    "Attach tap",
    "Secure inside",
    "Hook on",
    "Fill with water",
    "Enjoy playtime",
  ];

  return (
    <div className="min-h-screen bg-[#f7f1e8] text-[#2b2118]">
      <header className="px-6 py-5 md:px-12 flex items-center justify-between">
       <div className="flex items-center gap-3">
  <img
    src="/images/logo.png"
    alt="Mudflow Logo"
    className="h-10 w-auto"
  />
</div>
          <span className="w-9 h-9 rounded-full bg-[#7aa36f] flex items-center justify-center text-white">
            <Droplets size={21} />
          </span>
          Mudflow
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
            <p className="inline-flex rounded-full bg-white/70 px-4 py-2 text-sm font-semibold mb-5 shadow-sm">
              Mud kitchen water dispenser
            </p>

            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight mb-6">
              More water. More mud. More fun.
            </h1>

            <p className="text-lg md:text-xl text-[#5b4a3d] max-w-xl mb-8">
              Mudflow is a simple water dispenser made for kids’ outdoor mud
              kitchens. Hook it on, fill it up, and let little chefs mix, pour,
              splash, and play.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="#buy"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#7aa36f] text-white px-7 py-4 font-bold shadow-md hover:opacity-90"
              >
                Shop Mudflow <ArrowRight size={18} />
              </a>

              <a
                href="#how"
                className="inline-flex items-center justify-center rounded-full bg-white px-7 py-4 font-bold shadow-sm hover:bg-white/80"
              >
                How it works
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="rounded-[2rem] overflow-hidden shadow-2xl bg-white">
             <div className="aspect-square overflow-hidden">
  <img
    src="/images/hero.jpg"
    alt="Mudflow"
    className="w-full h-full object-cover"
  />
</div>
                  <div className="absolute top-0 left-8 w-56 h-72 bg-[#9b9b96] rounded-b-[2rem] rounded-t-[1.2rem] shadow-2xl border border-white/40"></div>

                  <div className="absolute top-0 left-8 w-56 h-20 bg-[#b7b7b2] rounded-t-[1.2rem] border border-white/50"></div>

                  <div className="absolute top-4 right-0 w-20 h-10 bg-[#9b9b96] rounded-r-xl"></div>

                  <div className="absolute bottom-16 left-0 w-28 h-12 bg-white rounded-full shadow-lg"></div>

                  <div className="absolute bottom-10 left-2 w-16 h-20 bg-white rounded-b-2xl shadow-lg"></div>

                  <Droplets
                    className="absolute top-24 left-28 text-[#b9d9eb]"
                    size={72}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        <section className="px-6 md:px-12 py-14 bg-white">
          <div className="max-w-6xl mx-auto mb-12">
            <div className="grid md:grid-cols-3 gap-5">
              {[
                ["Real Water Flow", "Hooks onto most boards"],
                [
                  "Easy to Install",
                  "Add washer, attach tap, hook on, fill",
                ],
                [
                  "Quality Details",
                  "Easy tap, matte texture, no-drill setup",
                ],
              ].map(([title, subtitle]) => (
                <div
                  key={title}
                  className="rounded-[2rem] bg-[#f7f1e8] p-8 shadow-lg min-h-72 flex flex-col justify-between"
                >
                  <div>
                    <h3 className="text-3xl font-extrabold text-[#0d4724] mb-3">
                      {title}
                    </h3>

                    <p className="text-[#5b4a3d] font-semibold">
                      {subtitle}
                    </p>
                  </div>

                  <div className="mt-8 h-28 rounded-3xl bg-white/70 flex items-center justify-center">
                    <Droplets className="text-[#7aa36f]" size={54} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-4">
            {benefits.map((item) => (
              <div
                key={item}
                className="rounded-3xl bg-[#f7f1e8] p-6 shadow-sm"
              >
                <CheckCircle className="text-[#7aa36f] mb-4" />

                <p className="font-bold">{item}</p>
              </div>
            ))}
          </div>
        </section>

        <section
          id="how"
          className="px-6 md:px-12 py-20 max-w-7xl mx-auto"
        >
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
              Ready in minutes
            </h2>

            <p className="text-[#5b4a3d] text-lg">
              A simple setup card helps parents attach the dispenser quickly
              before playtime starts.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {steps.map((step, index) => (
              <div
                key={step}
                className="rounded-3xl bg-white p-6 shadow-sm flex gap-4 items-center"
              >
                <div className="w-12 h-12 rounded-full bg-[#7aa36f] text-white flex items-center justify-center font-extrabold">
                  {index + 1}
                </div>

                <p className="font-bold text-lg">{step}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="px-6 md:px-12 py-16 bg-[#2b2118] text-white">
          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
            <div className="rounded-3xl bg-white/10 p-7">
              <Package className="mb-4" />

              <h3 className="text-2xl font-bold mb-2">Box includes</h3>

              <p className="text-white/75">
                1 Mudflow water dispenser, removable tap, washer, and easy
                instruction card.
              </p>
            </div>

            <div className="rounded-3xl bg-white/10 p-7">
              <ShieldCheck className="mb-4" />

              <h3 className="text-2xl font-bold mb-2">Made for play</h3>

              <p className="text-white/75">
                Designed for outdoor mud kitchen use under adult supervision.
              </p>
            </div>

            <div className="rounded-3xl bg-white/10 p-7">
              <Star className="mb-4" />

              <h3 className="text-2xl font-bold mb-2">Great gift idea</h3>

              <p className="text-white/75">
                A simple add-on that makes mud kitchens feel more fun and
                interactive.
              </p>
            </div>
          </div>
        </section>

        <section className="px-6 md:px-12 py-10 max-w-7xl mx-auto">
          <div className="rounded-[2rem] overflow-hidden shadow-2xl">
            <div className="bg-[#f4eadb] p-10 md:p-16 text-center">
              <h2 className="text-5xl md:text-7xl font-extrabold text-[#0d4724] mb-4">
                OUTDOOR SENSORY PLAY
              </h2>

              <p className="text-2xl md:text-3xl font-bold text-[#2b2118]">
                Water, Mud & Imagination
              </p>
            </div>
          </div>
        </section>

        <section
          id="buy"
          className="px-6 md:px-12 py-20 text-center max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-6xl font-extrabold mb-5">
            Bring water to the mud kitchen.
          </h2>

          <p className="text-lg text-[#5b4a3d] mb-8">
            Mudflow is launching soon. Perfect for garden play, outdoor
            kitchens, and creative muddy adventures.
          </p>

          <a
            href="#"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#7aa36f] text-white px-8 py-4 font-bold shadow-md hover:opacity-90"
          >
            Buy on Amazon <ArrowRight size={18} />
          </a>

          <p className="text-sm text-[#7a6a5d] mt-5">
            Replace this button with your Amazon listing link when live.
          </p>
        </section>
      </main>

      <footer className="px-6 md:px-12 py-8 border-t border-[#ded0bd] text-center text-sm text-[#7a6a5d]">
        © {new Date().getFullYear()} Mudflow. Imported by Steiner Trading LLC.
        Made in China.
      </footer>
    </div>
  );
}
