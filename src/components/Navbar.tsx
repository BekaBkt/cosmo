import { motion } from "motion/react";
import logoUrl from './assets/Cosmo Full Logo.svg';

export function Navbar() {
  return (
    <motion.nav 
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed top-0 left-0 right-0 w-full z-50 bg-gradient-to-b from-black/90 via-black/40 to-transparent pointer-events-none px-6 md:px-12"
    >
      <div className="flex items-center justify-between max-w-7xl mx-auto w-full py-6 pointer-events-auto">
        <a href="#" className="block hover:opacity-80 transition-opacity">
          <img src={logoUrl} alt="Cosmo Code" className="h-5 md:h-6 w-auto" />
        </a>

        <div className="hidden md:flex items-center gap-12">
          <a href="#ozzy" className="text-[11px] font-semibold text-white/60 uppercase tracking-[0.25em] hover:text-white transition-colors duration-300">Ozzy</a>
          <a href="#platforms" className="text-[11px] font-semibold text-white/60 uppercase tracking-[0.25em] hover:text-white transition-colors duration-300">Platforms</a>
          <a href="#manifesto" className="text-[11px] font-semibold text-white/60 uppercase tracking-[0.25em] hover:text-white transition-colors duration-300">Manifesto</a>
        </div>

        <div>
          <button className="px-5 py-2 text-xs font-bold tracking-widest bg-white text-black rounded-full hover:bg-gray-200 transition-colors">
            Join Waitlist
          </button>
        </div>
      </div>
    </motion.nav>
  );
}
