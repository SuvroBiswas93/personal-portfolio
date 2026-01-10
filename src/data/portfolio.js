export const personalInfo = {
  name: "Suvro Biswas",
  title: "Frontend Web Developer",
    typewriterTexts: [
    "Front End Web Developer",
    "React Developer",
    "Building modern & responsive web apps",
    'Creating clean, scalable UI',
    'Always learning. Always building.'
  ],
  email: "shuvo.249963@gmail.com",
  phone: "+8801758197272",
  location: "Nikunja-2,Khilkhet,Dhaka-1229",
  bio: "Passionate Frontend Web Developer with 1 year of experience building modern, user-friendly web interfaces. I enjoy turning complex problems into clean, intuitive, and visually appealing solutions.",
  resumeUrl: "https://drive.google.com/file/d/11br4ecxUsxQ5hQI_bOBl4C7Be4n3EF_o/viewusp=sharin",
  social: {
    github: "https://github.com/SuvroBiswas93",
    linkedin: "https://www.linkedin.com/in/the-suvro-biswas/",
    twitter: "https://x.com/",
  }
};

export const skills = [
  {
    category: "Frontend",
    items: [
      { name: "Html5", level: 95 },
      { name: "Css3", level: 95 },
      { name: "Javascript", level: 90 },
      { name: "React", level: 90 },
      { name: "Tailwind CSS", level: 92 },
      { name: "React Router", level: 90 },
      { name: "Responsive Design", level: 95 },
      { name: "Component Architecture", level: 90 },
      { name: "Web Performance Optimization", level: 80 },
    ]
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", level: 85 },
      { name: "Express.js", level: 85 },
      { name: "REST APIs", level: 88 },
      { name: "MongoDB", level: 82 },
      { name: "Firebase Authentication", level: 85 },
      { name: "JWT Authentication", level: 80 },
    ]
  },
  {
  category: "Tools & Others",
  items: [
    { name: "Git & GitHub", level: 92 },
    { name: "Vite", level: 90 },
    { name: "Vercel", level: 90 },
    { name: "Netlify", level: 88 },
    { name: "Postman", level: 85 },
    { name: "ESLint / Prettier", level: 88 },
    { name: "Figma", level: 75 },
  ]
}
];

export const education = [
  {
    id: 1,
    school: "American International University Bangladesh(AIUB)",
    degree: "Bachelor of Science in Computer Science And Engineering",
    field: "Computer Engineering",
    year: "2016 - 2022",
    description: "Completed a comprehensive Bachelor’s program in Computer Science and Engineering, gaining in-depth knowledge of programming languages, data structures, algorithms, databases, software engineering principles, and web & mobile application development. Developed strong problem-solving, analytical, and logical thinking skills, with hands-on experience in building scalable and responsive applications. Prepared to leverage this foundation to design innovative software solutions, contribute to full-stack development projects, and continuously adapt to emerging technologies in the industry."
  },
  {
    id: 2,
    school: "Programming Hero",
    degree: "Mernstack Development",
    field: "Bootcamp Certification",
    year: "2025 - 2026",
    description: "Completed an intensive MERN stack development program covering both frontend and backend development. Gained hands-on experience in building responsive and dynamic web applications using React, Redux, and React Router. Learned state management, form handling, and component-driven architecture. Implemented backend APIs with Node.js and Express, including authentication, CRUD operations, and database integration using MongoDB. Explored deployment, version control with Git, and best practices for performance optimization, responsive design, and project structuring."
  },
  
];


export const projects = [
  {
    id: 1,
    title: "Ticket Booking Platform",
    description: "Developed a full-stack ticket booking platform with role-based authentication supporting three user types: User, Vendor, and Admin. Implemented secure login, registration, and social login functionality. Built a dynamic dashboard with role-specific access controls and integrated Stripe for seamless payment processing. Designed and developed responsive UI/UX using modern frontend technologies while managing backend APIs, database operations, and authentication logic to ensure a scalable and maintainable application",
    image: "https://plus.unsplash.com/premium_photo-1663076518116-0f0637626edf?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags: ["React","Tailwind Css", "Node.js","Express.js","mongodb", "firebase-auth","firebase-token","react-hook-form","framer-motion","Swiper-js", "Stripe"],
    liveUrl: "https://online-ticket-booking-fullstack.netlify.app/",
    githubUrl: "https://github.com/SuvroBiswas93/ticket-bari-client.git",
    featured: true
  },
  {
    id: 2,
    title: "Travel and Tourism Website",
    description: "A modern, high-performance tourism and travel booking platform built with React, Vite, and Tailwind CSS. The application features destination exploration, interactive maps, user authentication, and a clean, responsive UI for an engaging travel experience.",
    image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags: ["React", "Firebase", "Tailwind","firebase-auth","googlemap","typescript","react-redux","Payment gateway"],
    liveUrl: "https://destination-travel-theta.vercel.app/",
    githubUrl: "https://github.com/SuvroBiswas93/Tourism-website",
    featured: true
  },
  {
    id: 3,
    title: "Household Service Platform",
    description: "Developed a full-stack Household Cleaner Service website, enabling users to register, log in, and book specific services seamlessly. Implemented social login functionality (Google) for improved user convenience and streamlined authentication. The platform allows authenticated users to efficiently manage and schedule service bookings, demonstrating expertise in building user-centric, responsive, and secure web applications",
    image: "https://plus.unsplash.com/premium_photo-1664910117544-5a3eed7c6413?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags: ["React", "Tailwind css","Nodejs","Express.js","Rest Api","react-router","Axios","mongodb", "firebase-auth"],
    liveUrl: "https://home-hero-clean.netlify.app/",
    githubUrl: "https://github.com/SuvroBiswas93/local-household-service-client",
    featured: false
  },
  {
    id: 4,
    title: "E-commerce Platform",
    description: "ModernShop is a responsive e-commerce web application built with React and Vite that enables users to browse products by category, search items, view product details, and manage a shopping cart. It features a modern UI, smooth animations, and efficient state management to deliver a fast and user-friendly shopping experience.",
    image: "https://plus.unsplash.com/premium_photo-1684785618727-378a3a5e91c5?q=80&w=484&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags: ["React", "Tailwind", "Typescript","Mapbox","zustand","react-router-dom","framer-motion","Swiper js","axios"],
    liveUrl: "https://modernshop-e-commerce-website.vercel.app/",
    githubUrl: "https://github.com/SuvroBiswas93/e-commerce-website",
    featured: false
  },
  {
    id: 5,
    title: "Portfolio CMS",
    description: "Content management system for creative professionals to showcase their work.",
    image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
    tags: ["Next.js", "Sanity", "Tailwind"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false
  },
  
];

export const experience = [
  {
    id: 1,
    company: "Itransition Software Development Company",
    position: "Frontend Web Developer Intern",
    period: "Jan 2025 - Apr 2025",
    description: "Worked as a Frontend Developer Intern focusing on building responsive and modern web interfaces using React and Tailwind CSS. Contributed to developing reusable UI components, implementing clean and scalable layouts, and improving overall user experience. Collaborated with team members in a remote environment, followed best practices in component-based architecture, and optimized designs for performance and responsiveness across devices."
  },
  
];
