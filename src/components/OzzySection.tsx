import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import Rive, { Layout, Fit, Alignment } from "@rive-app/react-canvas";

export function OzzySection() {
  return (
    <section id="ozzy" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-display font-black uppercase tracking-normal mb-6"
          >
            Our Flagship: <span className="text-glow">Ozzy</span>
          </motion.h2>
          <p className="text-xl md:text-2xl font-display font-medium text-white/40 tracking-normal max-w-2xl mx-auto">
            A habit tracker that actually works. We turned productivity into an engaging experience.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative max-w-5xl mx-auto aspect-video group mb-12"
          style={{ clipPath: "inset(0 round 75px)" }}
        >
          <Rive
            src="/CosmoAni.riv"
            stateMachines="State Machine 1"
            autoplay={true}
            layout={new Layout({
              fit: Fit.Contain,
              alignment: Alignment.Center,
            })}
            className="w-full h-full"
          />
        </motion.div>

        <div className="flex justify-center">
          <button className="flex items-center gap-4 px-10 py-5 rounded-[61px] bg-white text-black font-black uppercase tracking-widest text-xs hover:scale-105 active:scale-95 transition-all group shadow-[0_0_40px_rgba(255,255,255,0.2)]">
            Visit Ozzy Website
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}
