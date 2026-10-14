/**
 * Projects Data Configuration for Badal Pipalde
 * 
 * IMPORTANT: These are clearly marked project placeholders.
 * When you are ready to add your real projects:
 * 1. Replace the titles, descriptions, and tags.
 * 2. Add your live demo URL and GitHub repo URL.
 *    (Buttons are automatically hidden if the URL is empty or null)
 * 3. Place project screenshots in `public/projects/` and update `image`.
 */

export const projectsData = [
  {
    id: "project-01",
    isPlaceholder: true,
    title: "Full Stack MERN Web Application",
    shortDescription: "A scalable full-stack application built with MongoDB, Express.js, React, and Node.js featuring secure authentication, RESTful APIs, and responsive state management.",
    category: "Full Stack",
    tags: ["MongoDB", "Express.js", "React.js", "Node.js", "JWT", "REST API"],
    
    // Replace with your real URLs when available.
    // If left empty (""), the button will gracefully remain hidden.
    liveUrl: "", 
    githubUrl: "",
    
    // Image placeholder identifier or path
    image: null, 
    placeholderVariant: "mern", // used to render sleek neutral geometric preview
    featured: true,

    caseStudy: {
      tagline: "End-to-end full stack architecture & design",
      overview: "This project serves as a cornerstone full-stack showcase demonstrating complete architectural cohesion between a React-powered frontend and an Express/Node backend backed by MongoDB.",
      challenges: [
        "Implementing secure, sessionless authentication using JSON Web Tokens with HTTP-only cookies.",
        "Structuring normalized data models in Mongoose with efficient indexing and query optimization.",
        "Designing responsive state synchronization between server and client without unnecessary rerenders."
      ],
      architecture: [
        "Client: React with component-driven architecture and modular styles",
        "Server: Express REST API with modular controllers, middleware validation, and error routing",
        "Database: MongoDB with schema enforcement and aggregation queries"
      ],
      keyTakeaways: "Demonstrates practical full-stack deployment patterns, clean separation of concerns, and production readiness."
    }
  },
  {
    id: "project-02",
    isPlaceholder: true,
    title: "Modern Interactive React Dashboard",
    shortDescription: "An interactive, high-performance web interface built with React, showcasing modular component architecture, fluid animations, and real-time data visualization.",
    category: "Frontend",
    tags: ["React.js", "JavaScript (ES6+)", "SCSS", "Framer Motion", "UI/UX"],
    
    liveUrl: "",
    githubUrl: "",
    
    image: null,
    placeholderVariant: "dashboard",
    featured: true,

    caseStudy: {
      tagline: "High-performance frontend engineering & micro-interactions",
      overview: "An exploratory interface focused on delivering 60 FPS animations, responsive data presentation, and accessible navigation across desktop and mobile devices.",
      challenges: [
        "Achieving buttery-smooth layout transitions and micro-interactions without causing layout thrashing.",
        "Building accessible custom controls and keyboard navigation compliance.",
        "Managing dark/light theming cleanly through CSS variables and localStorage persistence."
      ],
      architecture: [
        "Component Library: Custom reusable design system components",
        "Animation Layer: Declarative motion transitions with reduced-motion fallbacks",
        "Theme Engine: Native CSS custom properties with real-time toggle"
      ],
      keyTakeaways: "Illustrates deep mastery of modern frontend styling, interactive polish, and user-centric experience design."
    }
  },
  {
    id: "project-03",
    isPlaceholder: true,
    title: "Scalable REST API & Backend Service",
    shortDescription: "A robust backend service engineered with Node.js and Express, implementing role-based access control, request validation, rate limiting, and comprehensive error handling.",
    category: "Backend",
    tags: ["Node.js", "Express.js", "MongoDB", "Mongoose", "API Design", "Postman"],
    
    liveUrl: "",
    githubUrl: "",
    
    image: null,
    placeholderVariant: "api",
    featured: false,

    caseStudy: {
      tagline: "Resilient server architecture, middleware pipelines & data integrity",
      overview: "A dedicated backend architecture designed to demonstrate clean REST standards, testable route handlers, and bulletproof error boundaries.",
      challenges: [
        "Designing centralized middleware for logging, authentication verification, and error interception.",
        "Preventing common security pitfalls including SQL/NoSQL injection, CORS misconfigurations, and brute force requests.",
        "Creating organized Postman collections with integration tests."
      ],
      architecture: [
        "Routing: Versioned API endpoints (/api/v1/...) with resource separation",
        "Security: Helmet headers, rate limiting, and Bcrypt cryptographic hashing",
        "Validation: Express-validator schema validation on all incoming payloads"
      ],
      keyTakeaways: "Validates backend engineering skills, clean code organization, and secure API design."
    }
  }
];
