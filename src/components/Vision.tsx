import { motion } from "motion/react";
import { Send, Instagram, Linkedin, Twitter, Globe, Phone, Mail } from "lucide-react";

export function Vision() {
  return (
    <section id="vision" className="py-32 px-8 md:px-12 bg-white/[0.02] border-y border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-20 items-center justify-between">
        <div className="max-w-xl">
          <h2 className="text-3xl md:text-5xl font-display font-black mb-8 leading-tight tracking-normal uppercase text-glow">
            Apps that <br />
            feel like magic.
          </h2>
          <p className="text-white/50 text-lg mb-12">
            We believe software should be simple, helpful, and beautiful.
            That's why we spend our time obsessing over the details, so you
            can focus on what matters most to you.
          </p>
          <div className="flex gap-4">
            <button className="btn-primary !px-8 !py-3 !text-[10px]">Get in Touch</button>
          </div>
        </div>
        <div className="relative w-full md:w-1/2 aspect-square glass flex items-center justify-center overflow-hidden group">
          <div className="absolute inset-0 bg-blue-500/10 blur-[100px] rounded-full animate-pulse opacity-50" />
          <div className="relative z-10 text-[10px] uppercase font-black tracking-widest text-white/10 text-center group-hover:text-white/30 transition-colors">[PLACEHOLDER: STUDIO SHOWCASE ANIMATION]</div>
        </div>
      </div>
    </section>
  );
}

export function Waitlist() {
  return (
    <footer id="waitlist" className="bg-cosmo-dark pt-40 pb-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Big CTA Section */}
        <div className="text-center mb-40">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-7xl font-display font-black uppercase tracking-normal mb-6"
          >
            Let's build <br />
            something big.
          </motion.h2>
          <p className="text-white/40 text-xl font-medium mb-12 max-w-2xl mx-auto">
            Whether you want to collaborate, partner, or join the team, we want to hear from you.
          </p>

          <div className="flex justify-center">
            <button className="btn-primary !px-12 !py-6 !text-lg shadow-[0_0_50px_rgba(255,255,255,0.3)] hover:scale-105 active:scale-95 transition-all">
              Get in Touch
            </button>
          </div>
        </div>

        {/* Footer Area */}
        <div className="flex flex-col md:flex-row justify-between gap-16 py-20 border-t border-white/5">
          {/* Logo Column */}
          <div className="max-w-sm">
            <p className="text-white/30 text-xs font-black uppercase tracking-widest leading-loose">
              Cosmo 2026. <br />
            </p>
          </div>

          {/* Links Columns */}
          <div className="flex gap-24 md:gap-32">
            <div>
              <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-white/20 mb-6">Legal</h4>
              <ul className="space-y-4 text-xs font-bold text-white/40">
                <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Community</a></li>
              </ul>
            </div>
            <div className="flex flex-col space-y-4">
              <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-white/20 mb-6">Social</h4>
              {/* Placeholder for X */}
              <a href="#" className="text-xs font-bold text-white/40 transition-colors hover:text-white">
                X (Twitter)
              </a>
              {/* Placeholder for LinkedIn */}
              <a href="#" className="text-xs font-bold text-white/40 transition-colors hover:text-white">
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 text-[8px] font-black uppercase tracking-[0.4em] text-white/10">
          <span>Cosmo Tech Ecosystem</span>
          <div className="flex gap-8 mt-4 md:mt-0">
            <span>© 2026 Cosmo Labs</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
