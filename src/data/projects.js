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
    id: "museum-chatbot",
    isPlaceholder: false,
    title: "Chatbot Museum Ticket Booking System",
    shortDescription: "A web-based interactive chatbot system automating museum ticket reservations, visitor FAQ guidance, and exhibit navigation with a PHP/MySQL backend.",
    category: "Full Stack",
    tags: ["HTML5", "CSS3", "JavaScript", "PHP", "MySQL", "Chatbot", "REST API"],
    
    // Live link provided by Badal
    liveUrl: "https://museum.freedev.app/index.html",
    githubUrl: "", // Will provide later
    
    image: "/projects/museum.jpg",
    placeholderVariant: "chatbot",
    featured: true,

    caseStudy: {
      tagline: "Conversational ticketing, interactive museum guidance & 60% faster query resolution",
      overview: "Designed and engineered an automated chatbot web application for museum visitors to reserve tickets and access exhibit information in real-time. Integrated a responsive vanilla JavaScript frontend with a PHP backend and MySQL database to manage visitor bookings, queries, and FAQs efficiently.",
      challenges: [
        "Designing an intuitive, conversational ticket reservation flow in pure JavaScript that handles dates, ticket tiers, and group booking counts without page reloads.",
        "Developing lightweight PHP endpoints and structured MySQL schemas to record bookings, manage visitor inquiries, and deliver 95% response accuracy.",
        "Decreasing average visitor query resolution time from 5 minutes to 2 minutes, handling 500+ monthly visitor interactions."
      ],
      architecture: [
        "Frontend: Responsive, mobile-first conversational chat interface and landing page engineered with semantic HTML5, modern CSS3 styling, and modular JavaScript.",
        "Backend: PHP REST request handlers for user message processing, query routing, and ticket reservation pipelines.",
        "Database: Relational MySQL schema managing ticket bookings, museum exhibit catalogs, pricing tiers, and FAQ knowledge base."
      ],
      keyTakeaways: "Demonstrates practical full-stack engineering with HTML, CSS, JavaScript, and PHP/MySQL, delivering real-world business value by improving visitor retrieval efficiency by 60% and successfully deployed to production."
    }
  },
  {
    id: "curl-fitness",
    isPlaceholder: false,
    title: "Curl Fitness — Premium Gym & Fitness Website",
    shortDescription: "A modern, high-impact static website for a premium gym featuring responsive multi-section navigation, membership tier showcases, program catalogs, and interactive UI styling.",
    category: "Frontend",
    tags: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "UI/UX", "GitHub Pages"],
    
    liveUrl: "https://badalpipalde.github.io/Curl_fitness/",
    githubUrl: "https://github.com/Badalpipalde/Curl_fitness",
    
    image: "/projects/curl-fitness.jpg",
    placeholderVariant: "fitness",
    featured: true,

    caseStudy: {
      tagline: "High-impact dark aesthetic, responsive fitness showcase & streamlined membership UX",
      overview: "Developed a modern, visually striking static website for Curl Fitness to establish a bold digital presence for a premium fitness club. The website highlights training programs, trainer profiles, membership options, and contact details with bold typography, dark-mode-first aesthetic, and seamless cross-device responsiveness.",
      challenges: [
        "Crafting a bold, high-contrast dark theme with energetic neon accents that captures the intensity of fitness culture while maintaining high readability.",
        "Structuring responsive layouts and fluid navigation across mobile, tablet, and desktop viewports using pure semantic HTML5 and modern CSS3.",
        "Designing intuitive visual hierarchies for membership plan tiers and program schedules to guide prospective members toward joining."
      ],
      architecture: [
        "Frontend: Pure semantic HTML5 markup with accessible landmark sections (Home, About, Programs, Membership, Trainers, Contact).",
        "Styling: Modern CSS3 grid and flexbox architectures, custom CSS variables, and fluid typography with responsive breakpoints.",
        "Interactivity: Vanilla JavaScript handling mobile menu expansion, active state tracking, and smooth in-page navigation.",
        "Deployment: Continuous production hosting via GitHub Pages with version-controlled source on GitHub."
      ],
      keyTakeaways: "Demonstrates strong frontend fundamentals, responsive design execution, and attention to brand identity and user conversion."
    }
  },
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
