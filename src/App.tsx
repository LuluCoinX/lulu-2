import React from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './About';
import { Tokenomics } from './components/Tokenomics';
import { Roadmap } from './components/Roadmap';
import { HowToBuy } from './components/HowToBuy';
import { Features } from './components/Features';
import { TokenStats } from './components/TokenStats';
import { Community } from './components/Community';
import { CryptoNewsSection } from './components/CryptoNewsSection';

function App() {
  return (
    <main className="min-h-screen bg-purple-950">
      <Navigation />
      <Hero />
      <About />
      <Tokenomics />
      <CryptoNewsSection />
      <Roadmap />
      <HowToBuy />
      <Features />
      <TokenStats />
      <Community />
    </main>
  );
}

export default App;