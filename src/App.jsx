import React, { useState } from 'react';
import { useTheme } from './hooks/useTheme';
import { useScrollSpy } from './hooks/useScrollSpy';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { ResumeModal } from './components/ResumeModal';
import { Footer } from './components/Footer';

import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Projects } from './sections/Projects';
import { Skills } from './sections/Skills';
import { Contact } from './sections/Contact';

const SECTIONS = ['hero', 'about', 'projects', 'skills', 'contact'];

export default function App() {
  const { theme, toggleTheme } = useTheme();
  const activeSection = useScrollSpy(SECTIONS, 120);
  const [resumeModalOpen, setResumeModalOpen] = useState(false);

  return (
    <div className="portfolio-app">
      {/* Subtle Custom Cursor for desktop */}
      <CustomCursor />

      {/* Sticky Glass Navbar */}
      <Navbar
        activeSection={activeSection}
        theme={theme}
        toggleTheme={toggleTheme}
        onOpenResumeModal={() => setResumeModalOpen(true)}
      />

      {/* Main Content Sections */}
      <main id="main-content">
        <Hero onOpenResumeModal={() => setResumeModalOpen(true)} />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Resume Download / Configuration Modal */}
      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
      />
    </div>
  );
}
