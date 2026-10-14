/**
 * Technical Skills Configuration for Badal Pipalde
 * 
 * Organized by category with clean metadata, descriptions, and icon tags.
 * No arbitrary percentages or fake proficiency meters.
 */

export const skillCategories = [
  { id: "all", name: "All Technologies" },
  { id: "frontend", name: "Frontend" },
  { id: "backend", name: "Backend" },
  { id: "database", name: "Database" },
  { id: "languages", name: "Programming Languages" },
  { id: "tools", name: "Tools & Platforms" },
];

export const skillsData = [
  // Frontend
  {
    id: "react",
    name: "React.js",
    category: "frontend",
    tagline: "Component-driven UI library",
    description: "Building responsive single-page applications with hooks, context, state management, and modern component architecture.",
    highlight: true,
  },
  {
    id: "html5",
    name: "HTML5",
    category: "frontend",
    tagline: "Semantic web structure",
    description: "Crafting accessible, SEO-friendly, and standards-compliant document structures with semantic markup.",
    highlight: false,
  },
  {
    id: "css3",
    name: "CSS3 / SCSS",
    category: "frontend",
    tagline: "Modern styling & responsive layouts",
    description: "Utilizing Flexbox, Grid, custom properties, animations, and modular SCSS for scalable design systems.",
    highlight: false,
  },
  {
    id: "redux-toolkit",
    name: "Redux / State Management",
    category: "frontend",
    tagline: "Predictable application state",
    description: "Managing complex client state, asynchronous thunks, and caching for seamless data flows.",
    highlight: false,
  },

  // Backend
  {
    id: "nodejs",
    name: "Node.js",
    category: "backend",
    tagline: "Asynchronous JavaScript runtime",
    description: "Architecting non-blocking, event-driven server applications and high-throughput RESTful services.",
    highlight: true,
  },
  {
    id: "express",
    name: "Express.js",
    category: "backend",
    tagline: "Fast, unopinionated web framework",
    description: "Designing structured REST APIs, route controllers, error handling middleware, and token authentication.",
    highlight: true,
  },
  {
    id: "rest-apis",
    name: "RESTful API Architecture",
    category: "backend",
    tagline: "Standardized service communication",
    description: "Developing consistent endpoints, payload validation, status code standards, and rate limiting.",
    highlight: false,
  },
  {
    id: "jwt-auth",
    name: "Authentication & Security",
    category: "backend",
    tagline: "JWT, Bcrypt, Role-Based Access",
    description: "Implementing secure sessionless authentication, password hashing, CORS policies, and protected routes.",
    highlight: false,
  },

  // Database
  {
    id: "mongodb",
    name: "MongoDB",
    category: "database",
    tagline: "NoSQL document database",
    description: "Schema modeling, indexes, aggregation pipelines, and document relationships for flexible data persistence.",
    highlight: true,
  },
  {
    id: "mongoose",
    name: "Mongoose ODM",
    category: "database",
    tagline: "Object data modeling for Node",
    description: "Defining strict schemas, virtual fields, pre/post middleware hooks, and model validations.",
    highlight: false,
  },

  // Programming Languages
  {
    id: "javascript",
    name: "JavaScript (ES6+)",
    category: "languages",
    tagline: "Core web programming language",
    description: "Deep understanding of closures, asynchronous programming, promises, event loop, and modern syntax.",
    highlight: true,
  },
  {
    id: "python-or-other",
    name: "C / C++ (Foundations)",
    category: "languages",
    tagline: "Computer science fundamentals",
    description: "Strong understanding of data structures, algorithms, memory concepts, and algorithmic problem solving.",
    highlight: false,
  },

  // Tools and Platforms
  {
    id: "git",
    name: "Git",
    category: "tools",
    tagline: "Distributed version control",
    description: "Branching strategies, commit hygiene, merge resolution, and collaborative workflow management.",
    highlight: true,
  },
  {
    id: "github",
    name: "GitHub",
    category: "tools",
    tagline: "Code repository & collaboration",
    description: "Managing open source repositories, pull requests, issue tracking, and automated CI/CD workflows.",
    highlight: true,
  },
  {
    id: "postman",
    name: "Postman",
    category: "tools",
    tagline: "API development & testing",
    description: "Creating test collections, mocking endpoints, validating response schemas, and debugging backend APIs.",
    highlight: false,
  },
  {
    id: "vite",
    name: "Vite & Modern Build Tools",
    category: "tools",
    tagline: "Next-gen frontend tooling",
    description: "Fast HMR development server, optimized production bundling, and environment configuration.",
    highlight: false,
  },
];
