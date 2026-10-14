import React from 'react';
import { motion } from 'framer-motion';
import {
  Code2,
  Layers,
  Database,
  Server,
  Terminal,
  Globe,
  FileCode,
  GitBranch,
  Box,
  Send,
  ShieldCheck,
  Cpu,
  Atom,
} from 'lucide-react';
import { GithubIcon } from './BrandIcons';

function getSkillIcon(id) {
  switch (id) {
    case 'react':
      return <Atom size={22} />;
    case 'nodejs':
      return <Server size={22} />;
    case 'express':
      return <Layers size={22} />;
    case 'mongodb':
    case 'mongoose':
      return <Database size={22} />;
    case 'javascript':
      return <Code2 size={22} />;
    case 'html5':
    case 'css3':
      return <Globe size={22} />;
    case 'redux-toolkit':
      return <Box size={22} />;
    case 'rest-apis':
      return <Send size={22} />;
    case 'jwt-auth':
      return <ShieldCheck size={22} />;
    case 'git':
      return <GitBranch size={22} />;
    case 'github':
      return <GithubIcon size={22} />;
    case 'postman':
      return <Terminal size={22} />;
    case 'vite':
      return <Cpu size={22} />;
    case 'python-or-other':
      return <FileCode size={22} />;
    default:
      return <Code2 size={22} />;
  }
}

export function SkillItem({ skill }) {
  return (
    <motion.div
      tabIndex={0}
      role="region"
      aria-label={`${skill.name} - ${skill.tagline}`}
      className="skill-item"
      whileHover={{ y: -3 }}
      transition={{ type: 'spring', stiffness: 350, damping: 20 }}
    >
      <div className="skill-item__header">
        <div className="skill-item__icon-wrapper" aria-hidden="true">
          {getSkillIcon(skill.id)}
        </div>
        <div className="skill-item__meta">
          <div className="skill-item__name">{skill.name}</div>
          <div className="skill-item__tagline">{skill.tagline}</div>
        </div>
      </div>

      <p className="skill-item__desc">{skill.description}</p>
    </motion.div>
  );
}
