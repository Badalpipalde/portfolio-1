import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeading } from '../components/SectionHeading';
import { ProjectCard } from '../components/ProjectCard';
import { ProjectModal } from '../components/ProjectModal';
import { projectsData } from '../data/projects';
import { Info } from 'lucide-react';

export function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeCaseStudyProject, setActiveCaseStudyProject] = useState(null);

  const categories = useMemo(() => {
    const set = new Set(['All']);
    projectsData.forEach((p) => {
      if (p.category) set.add(p.category);
    });
    return Array.from(set);
  }, []);

  const filteredProjects = useMemo(() => {
    if (selectedCategory === 'All') return projectsData;
    return projectsData.filter((p) => p.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <section id="projects" className="section projects" aria-label="Selected Projects">
      <div className="container">
        {/* Section Heading */}
        <SectionHeading
          badge="Portfolio"
          title="Selected Work"
          subtitle="A collection of things I've built and explored."
        />

        {/* Category Filter Pills */}
        <div className="projects__filters" role="tablist" aria-label="Project categories">
          {categories.map((category) => (
            <button
              key={category}
              role="tab"
              aria-selected={selectedCategory === category}
              onClick={() => setSelectedCategory(category)}
              className={`projects__filter-btn ${
                selectedCategory === category ? 'projects__filter-btn--active' : ''
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Showcase Grid */}
        <motion.div layout className="projects__grid">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
              >
                <ProjectCard
                  project={project}
                  onOpenCaseStudy={(proj) => setActiveCaseStudyProject(proj)}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Informative Note for Customization */}
        <div className="projects__instruction-banner">
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Info size={18} style={{ color: 'var(--accent-primary)', flexShrink: 0 }} />
            <p className="projects__instruction-banner-text">
              Project placeholders ready for your custom data. Edit titles, links, and tags anytime in <code>src/data/projects.js</code>.
            </p>
          </div>
        </div>
      </div>

      {/* Case Study Detailed Modal */}
      <ProjectModal
        project={activeCaseStudyProject}
        isOpen={Boolean(activeCaseStudyProject)}
        onClose={() => setActiveCaseStudyProject(null)}
      />
    </section>
  );
}
