import { motion } from "motion/react";

export function Navbar() {
  return (
    <motion.nav 
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 py-8 px-6"
    >
      <div className="max-w-7xl mx-auto px-8 py-5 border border-white/10 glass-heavy rounded-[61px] flex items-center justify-between">
        <div className="font-display font-black text-2xl tracking-normal uppercase text-glow">
          Cosmo
        </div>

        <div className="hidden md:flex items-center gap-10 text-[10px] font-black tracking-[0.2em] uppercase text-white/40">
          <a href="#ozzy" className="hover:text-white transition-colors">Ozzy</a>
          <a href="#ecosystem" className="hover:text-white transition-colors">Ecosystem</a>
          <a href="#vision" className="hover:text-white transition-colors">Vision</a>
        </div>

        <div>
          <button className="px-8 py-2.5 bg-white text-cosmo-dark text-[10px] font-black tracking-widest uppercase rounded-[61px] hover:scale-105 transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)]">
            Join Waitlist
          </button>
        </div>
      </div>
    </motion.nav>
  );
}
