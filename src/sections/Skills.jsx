import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeading } from '../components/SectionHeading';
import { SkillItem } from '../components/SkillItem';
import { skillsData, skillCategories } from '../data/skills';
import { Layers } from 'lucide-react';

export function Skills() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredSkills = useMemo(() => {
    if (activeCategory === 'all') return skillsData;
    return skillsData.filter((s) => s.category === activeCategory);
  }, [activeCategory]);

  return (
    <section id="skills" className="section skills" aria-label="Technical Skills and Stack">
      <div className="container">
        {/* Section Heading */}
        <SectionHeading
          badge="Stack & Tools"
          title="Technical Capabilities"
          subtitle="Core technologies and modern tools I leverage to engineer robust, scalable web applications."
        />

        {/* Category Tabs */}
        <div className="skills__categories" role="tablist" aria-label="Skill categories">
          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              role="tab"
              aria-selected={activeCategory === cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`skills__category-btn ${
                activeCategory === cat.id ? 'skills__category-btn--active' : ''
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <motion.div layout className="skills__grid">
          <AnimatePresence>
            {filteredSkills.map((skill) => (
              <motion.div
                key={skill.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                <SkillItem skill={skill} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* MERN Architectural Summary Strip */}
        <div className="skills__summary-strip">
          <div>
            <div className="skills__summary-strip-title" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Layers size={18} style={{ color: 'var(--accent-primary)' }} />
              Primary Full-Stack Architecture: MERN
            </div>
            <p className="skills__summary-strip-desc">
              Unified JavaScript workflow connecting MongoDB, Express.js, React.js, and Node.js for end-to-end responsiveness and seamless data interchange.
            </p>
          </div>

          <div className="skills__summary-strip-badges">
            <span className="code-tag">MongoDB</span>
            <span className="code-tag">Express.js</span>
            <span className="code-tag">React.js</span>
            <span className="code-tag">Node.js</span>
          </div>
        </div>
      </div>
    </section>
  );
}
