/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { OzzySection } from "./components/OzzySection";
import { Features } from "./components/Features";
import { Vision, Waitlist } from "./components/Vision";
import { SpaceBackground } from "./components/SpaceBackground";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleLoad = () => {
      let currentProgress = 0;
      const interval = setInterval(() => {
        currentProgress += 1;
        setProgress(currentProgress);
        
        if (currentProgress >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsLoading(false), 200);
        }
      }, 15);
    };
    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
      return () => window.removeEventListener('load', handleLoad);
    }
  }, []);

  return (
    <>
      <div
        className={`fixed inset-0 z-[9999] bg-black flex flex-col items-center justify-center transition-opacity duration-1000 ${
          isLoading ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <h1 className="text-white text-2xl font-medium tracking-[0.4em] mb-8">
          COSMO
        </h1>
        <div className="w-48 h-[1px] bg-white/20 overflow-hidden">
          <div 
            className="h-full bg-white transition-all duration-75 ease-linear" 
            style={{ width: `${progress}%` }} 
          />
        </div>
      </div>

      <main className="relative min-h-screen text-white bg-cosmo-dark">
        <SpaceBackground />
        <Navbar />
        <Hero />
        <OzzySection />
        <Features />
        <Vision />
        <Waitlist />
      </main>
    </>
  );
}

