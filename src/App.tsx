import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Tools from './components/Tools';
import Projects from './components/Projects';
import InfluencerPartnerships from './components/InfluencerPartnerships';
import Contact from './components/Contact';
import SpaceBackground from './components/SpaceBackground';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-900 relative">
      <SpaceBackground />
      <div className="relative z-10">
        <Navigation />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <section id="hero">
            <Hero />
          </section>
          <section id="about">
            <About />
          </section>
          <section id="tools">
            <Tools />
          </section>
          <section id="projects">
            <Projects />
          </section>
          <section id="influencer-partnerships">
            <InfluencerPartnerships />
          </section>
          <section id="contact">
            <Contact />
          </section>
        </div>
      </div>
    </div>
  );
}