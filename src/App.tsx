/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { CareerJourney } from './components/CareerJourney';
import { Achievements } from './components/Achievements';
import { Resume } from './components/Resume';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  useEffect(() => {
    const currentUrl = window.location.origin + window.location.pathname;
    const canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (canonical && window.location.hostname && !window.location.hostname.includes('localhost')) {
      canonical.href = currentUrl;
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#050505] text-[#FAFAFA]">
      <Navbar />
      <main id="main-content">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <CareerJourney />
        <Achievements />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
