import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../components/SectionHeading';
import { profileData } from '../data/profile';
import { Sparkles, Terminal, Code } from 'lucide-react';

export function About() {
  const { about } = profileData;

  return (
    <section id="about" className="section about" aria-label="About Badal Pipalde">
      <div className="container">
        {/* Section Heading */}
        <SectionHeading
          badge="About Me"
          title={about.heading}
          subtitle={about.subtitle}
        />

        <div className="about__grid">
          {/* Left Column: Editorial Bio & Pillars */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="about__editorial"
          >
            <div className="about__bio">
              {about.bio.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {/* Core Engineering Pillars */}
            <div className="about__pillars">
              {about.pillars.map((pillar, idx) => (
                <div key={idx} className="about__pillar">
                  <h4>{pillar.title}</h4>
                  <p>{pillar.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Key Details & Philosophy */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="about__sidebar"
          >
            {/* Quick Metadata Panel */}
            <div className="about__details-panel">
              <div className="about__panel-title">
                <Terminal size={15} />
                <span>OVERVIEW_SPEC.JSON</span>
              </div>

              <dl>
                {about.details.map((detail, index) => (
                  <div key={index} className="about__detail-item">
                    <dt>{detail.label}</dt>
                    <dd>{detail.value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            {/* Architectural Philosophy Callout */}
            <div className="about__quote-panel">
              <blockquote>
                &quot;Good software design is about creating systems where every component has a purpose, state is predictable, and the interface feels weightless to the user.&quot;
              </blockquote>
              <cite>— Engineering Philosophy</cite>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
