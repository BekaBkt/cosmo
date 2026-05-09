import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import nebulaVideo from "./assets/Nebula.mp4";

export function Hero() {
  return (
    <section className="relative min-h-[120vh] flex flex-col items-center justify-center px-6 overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          src={nebulaVideo}
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vh] h-[100vw] max-w-none rotate-90 md:rotate-0 md:w-full md:h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 text-center max-w-4xl"
      >
        <h1 className="text-4xl md:text-6xl lg:text-[5.5rem] font-display font-black leading-[0.9] tracking-normal mb-8 uppercase text-glow">
          Building the <br />
          next era of apps
        </h1>
        <p className="text-xl md:text-2xl font-display font-medium text-white/40 tracking-normal mb-12 max-w-2xl mx-auto">
          Cosmo is a premium tech studio. We build beautiful, high-performance software that helps people do their best work.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <button className="btn-primary">
            Our Tech
          </button>
          <button className="px-8 py-4 rounded-[61px] border border-white/20 font-black uppercase tracking-widest text-sm hover:bg-white/5 transition-all">
            Contact Us
          </button>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute z-10 bottom-12 flex flex-col items-center gap-2 opacity-20"
      >
        <span className="text-[8px] font-black uppercase tracking-[0.5em]">Scroll to Enter</span>
        <div className="w-px h-12 bg-white" />
      </motion.div>
    </section>
  );
}
