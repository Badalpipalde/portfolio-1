/**
 * Central Profile Configuration for Badal Pipalde
 * 
 * Edit this file to customize personal details, bio, education, 
 * career interests, avatar, and resume paths without touching UI components.
 */

export const profileData = {
  name: "Badal Pipalde",
  firstName: "Badal",
  role: "Full Stack Developer",
  specialization: "MERN Stack Specialist",
  logoText: "</>",
  location: "India",
  status: "Open to Full-time Opportunities & Collaboration",

  // Hero section texts
  hero: {
    greeting: "Hi, I'm",
    headline: "Badal Pipalde",
    subheadline: "Full Stack Developer",
    description:
      "I build modern, scalable, and user-friendly web applications. I enjoy turning ideas into functional digital experiences through clean code and thoughtful design.",
    primaryCta: "Explore My Work",
    secondaryCta: "Download Resume",
  },

  // Profile image configuration
  // When you have your photograph ready:
  // 1. Place your image into `public/profile.jpg` (or `src/assets/images/`)
  // 2. Set `avatarUrl: "/profile.jpg"` below.
  // When empty (""), the sleek geometric BP monogram placeholder is displayed automatically.
  avatar: {
    avatarUrl: "/profile.jpeg",
    alt: "Badal Pipalde — Full Stack Developer",
    badgeText: "MERN Engineer",
  },

  // About Section
  about: {
    heading: "Turning Ideas Into Real Products",
    subtitle: "Architecture, execution, and attention to detail.",
    
    // Editable biography paragraphs
    bio: [
      "I am a passionate Full Stack Developer with a strong foundation in modern JavaScript technologies, especially the MERN stack (MongoDB, Express.js, React, Node.js). I thrive at the intersection of robust backend architecture and fluid, responsive user interfaces.",
      "My development philosophy revolves around writing clean, modular code, designing intuitive user experiences, and building scalable systems that solve real-world problems. Whether architecting RESTful APIs, optimizing state management, or refining micro-interactions, I treat every detail with care."
    ],

    // Highlights / Core Pillars
    pillars: [
      {
        title: "Full-Cycle Engineering",
        description: "From database modeling to interactive frontend components, crafting unified and resilient applications."
      },
      {
        title: "Clean Architecture",
        description: "Emphasizing modularity, maintainability, reusable design systems, and readable codebases."
      },
      {
        title: "Performance & Usability",
        description: "Focused on responsive layouts, fast load times, accessibility, and natural interactive feel."
      }
    ],

    // Quick configurable metadata
    details: [
      {
        label: "Location",
        value: "India (Open to Remote & Relocation)",
      },
      {
        label: "Education",
        value: "Bachelor of Technology / Computer Science (Undergraduate)",
      },
      {
        label: "Primary Focus",
        value: "Full Stack MERN, Web Applications & Modern UI/UX",
      },
      {
        label: "Career Interests",
        value: "Full Stack Engineering, Software Development, Distributed Systems",
      },
      {
        label: "Availability",
        value: "Available for internships, full-time roles & projects",
      }
    ]
  },

  // Resume configuration
  // Place your resume PDF in `public/resume.pdf` to enable one-click direct downloads.
  resume: {
    filePath: "/resume.pdf",
    fileName: "Badal_Pipalde_Resume.pdf",
    // Set to true once you put resume.pdf into the /public folder:
    isAvailable: false,
    externalUrl: "", // Optional Google Drive or LinkedIn URL
  },

  // Contact section texts
  contact: {
    heading: "Let's Build Something Meaningful",
    subheading: "Have a project in mind, an opportunity to discuss, or just want to connect? My inbox is always open.",
    email: "badalpipalde@example.com", // Replace with your real email address
    responseTime: "Typically responds within 24 hours",
  }
};
