/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { OzzySection } from "./components/OzzySection";
import { Features } from "./components/Features";
import { Vision, Waitlist } from "./components/Vision";
import { SpaceBackground } from "./components/SpaceBackground";

export default function App() {
  return (
    <main className="relative min-h-screen text-white bg-cosmo-dark">
      <SpaceBackground />
      <Navbar />
      <Hero />
      <OzzySection />
      <Features />
      <Vision />
      <Waitlist />
    </main>
  );
}

