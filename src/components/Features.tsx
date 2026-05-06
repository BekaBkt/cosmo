import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export function Features() {
  const cards = [
    {
      title: "Built with AI",
      desc: "We use the latest AI tools to build better apps, faster.",
      theory: "Smart Tech"
    },
    {
      title: "Built to Grow",
      desc: "Our software is designed to handle millions of users effortlessly.",
      theory: "Scalable"
    },
    {
      title: "Profitable by Design",
      desc: "We build premium tools that people love to subscribe to.",
      theory: "Success"
    },
    {
      title: "Beautiful UI",
      desc: "Every app we make feels like a high-end, interactive experience.",
      theory: "Polish"
    }
  ];

  return (
    <section id="ecosystem" className="py-32 px-6 max-w-7xl mx-auto">
      <div className="mb-20 text-center">
        <h2 className="text-4xl md:text-6xl font-display font-black uppercase tracking-normal mb-8 max-w-4xl mx-auto">
          The Cosmo <br />
          <span className="text-white/20 text-glow">Studio Advantage.</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {cards.map((card, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.8 }}
            className="group glass p-10 md:p-14 hover:translate-y-[-8px] hover:bg-white/[0.08] hover:border-white/20 hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)] transition-all duration-500 cursor-pointer relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-8">
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/10 group-hover:text-white/30 transition-colors">
                {card.theory}
              </span>
            </div>

            <div className="mb-12">
              <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                <ArrowRight className="w-6 h-6 text-white/40 group-hover:text-white transition-colors" />
              </div>
            </div>

            <h3 className="text-2xl md:text-3xl font-display font-black uppercase tracking-normal mb-6 group-hover:text-glow transition-all">
              {card.title}
            </h3>
            
            <p className="text-white/40 text-lg leading-relaxed max-w-sm group-hover:text-white/60 transition-colors">
              {card.desc}
            </p>

            <div className="mt-12 w-full h-[1px] bg-white/10 relative overflow-hidden">
               <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-white/40 to-transparent translate-x-[-100%] group-hover:translate-x-[300%] transition-transform duration-1000" />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
