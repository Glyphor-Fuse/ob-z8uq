import React from 'react';
import MinimalNav from './components/MinimalNav';
import HeroCover from './components/HeroCover';
import OverlappingGrid from './components/OverlappingGrid';
import MarqueeStrip from './components/MarqueeStrip';
import ImageStatement from './components/ImageStatement';
import CollectionList from './components/CollectionList';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col w-full bg-paper">
      <MinimalNav />
      
      <main className="flex-grow w-full">
        <HeroCover />
        
        <MarqueeStrip text="FALL WINTER 2025 — COLLECTION 04 — PARIS TOKYO NEW YORK — " />
        
        <OverlappingGrid />
        
        <ImageStatement />
        
        <CollectionList />
        
        <section className="py-32 px-6 flex justify-center items-center">
          <div className="max-w-4xl text-center">
            <p className="font-serif text-3xl md:text-5xl italic leading-tight">
              "Fashion is not something that exists in dresses only. Fashion is in the sky, in the street, fashion has to do with ideas, the way we live, what is happening."
            </p>
            <p className="mt-8 font-sans text-xs tracking-[0.2em] uppercase text-ink/60">
              — The Manifesto
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;