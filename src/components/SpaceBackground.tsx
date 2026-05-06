import { motion, useScroll, useTransform } from "motion/react";
import { useEffect, useState } from "react";

export function SpaceBackground() {
  const { scrollYProgress } = useScroll();
  const [stars, setStars] = useState<{ id: number, top: string, left: string, size: string, duration: number }[]>([]);

  useEffect(() => {
    const newStars = Array.from({ length: 150 }).map((_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: `${Math.random() * 1 + 0.5}px`,
      duration: Math.random() * 3 + 2,
    }));
    setStars(newStars);
  }, []);

  const rotateStars = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-black pointer-events-none">
      {/* Stars Layer */}
      <motion.div 
        style={{ rotate: rotateStars }}
        className="absolute inset-[-10%] opacity-30"
      >
        {stars.map((star) => (
          <motion.div
            key={star.id}
            initial={{ opacity: 0.1 }}
            animate={{ opacity: [0.1, 0.4, 0.1] }}
            transition={{ duration: star.duration, repeat: Infinity, ease: "easeInOut" }}
            className="absolute rounded-full bg-white"
            style={{
              top: star.top,
              left: star.left,
              width: star.size,
              height: star.size,
            }}
          />
        ))}
      </motion.div>

      {/* Subtle Grain overlay */}
      <div className="absolute inset-0 opacity-[0.01] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none" />
    </div>
  );
}
