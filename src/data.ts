import { Project, Experience, SkillCategory, Education, Achievement, ContactInfo } from './types';

export const PERSONAL_INFO = {
  name: "Sushant Tiwari",
  title: "AI & Full Stack Web Developer",
  headline: "AI & Full Stack Web Developer | Specializing in Scalable Backend Systems & AI Integration.",
  tagline: "Building high-performance APIs, post-quantum cryptographic systems, and elegant, intelligence-driven interfaces.",
  profilePlaceholder: "ST",
  email: "sushanttiwari8455@gmail.com",
  phone: "+91-76449 05477",
  location: "Kanpur, India"
};

export const EDUCATION_HISTORY: Education[] = [
  {
    degree: "B.Tech in Computer Science & Engineering",
    institution: "Pranveer Singh Institute of Technology (PSIT), Kanpur",
    period: "2023 - 2027",
    gradeName: "CGPA (Current Baseline) / Percentage",
    gradeValue: "8.0 CGPA / 70%",
    highlights: [
      "President of the Entrepreneurship Cell (PSIT), directing a 30+ member cross-functional team.",
      "Student Convenor for the Institution's Innovation Council, organizing major hackathons and workshops.",
      "Primary research focus on Post-Quantum Cryptography and Scalable Distributed Architectures."
    ]
  },
  {
    degree: "Higher Secondary Education (PCM)",
    institution: "Central Board of Secondary Education",
    period: "2021 - 2022",
    gradeName: "Percentage",
    gradeValue: "66.66%"
  }
];

export const PROJECTS_LIST: Project[] = [
  {
    id: "qrypton",
    title: "QRYPTON",
    period: "Feb 2026 - Present",
    description: "Post-Quantum Secure Blockchain ledger utilizing Falcon signature cryptography.",
    highlights: [
      "Constructed using Golang and the Cosmos SDK for modular ledger customization and scalability.",
      "Implemented advanced Post-Quantum Cryptographic (PQC) signature profiles like Falcon to withstand future quantum computer decrypt vectors.",
      "Architected low-latency transaction processing channels, demonstrating distributed database proficiency and high system reliability."
    ],
    tech: ["Golang", "Cosmos SDK", "Falcon Signatures", "Post-Quantum Cryptography", "gRPC"],
    githubUrl: "https://github.com/Sushant-codewizard"
  },
  {
    id: "innoconnect",
    title: "INNOCONNECT",
    period: "Jan 2024",
    description: "An AI-powered startup incubation platform and founder toolkit designed to supercharge venture launch plans.",
    highlights: [
      "Built an interactive client portal using React and Framer Motion, presenting animated 3D modules.",
      "Integrated intelligence engines for dynamic features including a professional Branding Builder, AI Pitch Advisor, and automated roadmap milestones.",
      "Successfully mapped customized start-up resources and mentorship paths using dynamic state algorithms."
    ],
    tech: ["React.js", "Framer Motion", "Tailwind CSS", "Node.js", "AI Integration"],
    githubUrl: "https://github.com/Sushant-codewizard"
  },
  {
    id: "viksit-kanpur",
    title: "Viksit Kanpur (Civic Tech Platform)",
    period: "Oct - Dec 2025",
    description: "Civit platform allowing residents to aggregate and track local issues, awarded 1st Place at TechExpo.",
    highlights: [
      "Awarded 1st Prize in TechExpo among 130+ competing team entries.",
      "Developed using the MERN Stack (MongoDB, Express.js, React.js, Node.js) with real-time reporting workflows.",
      "Architected and deployed 20+ robust, highly performant RESTful API endpoints for report aggregation, user verification, and admin escalation.",
      "Configured high-volume collection structures reducing queries per report lookup."
    ],
    tech: ["MongoDB", "Express.js", "React.js", "Node.js", "REST APIs", "Map SDK"],
    githubUrl: "https://github.com/deltacoder2603/vikshit-bharat-backend"
  }
];

export const WORK_EXPERIENCE: Experience[] = [
  {
    role: "Software Development Engineer Intern",
    company: "Sense Original Technologies",
    period: "Dec 2025 - Present",
    location: "Remote/Hybrid",
    highlights: [
      "Optimized active relational database schemas (50,000+ transaction and asset records), successfully reducing page query retrieval latencies by 40%.",
      "Integrated advanced language/agent models via secure, key-restricted REST APIs and established fail-safe data schemas.",
      "Constructed central backend pipelines, implementing unified retry/logging rules to guarantee zero transaction data frames are lost during network surges."
    ],
    tech: ["Python", "Node.js", "FastAPI", "PostgreSQL", "REST APIs", "Model Integration"]
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "languages",
    title: "Languages",
    skills: ["Python", "C++", "JavaScript (ES6+)", "Golang", "SQL", "HTML5/CSS3"],
    doodleType: "crypto"
  },
  {
    id: "frameworks",
    title: "Frameworks & Libraries",
    skills: ["React.js", "Node.js", "Express.js", "FastAPI", "Tailwind CSS", "Redux Toolkit"],
    doodleType: "api"
  },
  {
    id: "ai-backend",
    title: "AI & Backend Architecture",
    skills: ["REST API Design", "LangChain", "Vector Databases (Pinecone/Chroma)", "System Architecture", "gRPC", "Cosmos SDK"],
    doodleType: "neural"
  },
  {
    id: "databases-tools",
    title: "Databases & Tools",
    skills: ["MongoDB", "PostgreSQL", "Git", "GitHub", "Postman", "Docker", "Vercel / Render"],
    doodleType: "database"
  }
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    title: "5-Star C Coder on HackerRank",
    description: "Ranked among top performers globally on HackerRank under C language problem-sets.",
    badge: "HackerRank 5★"
  },
  {
    title: "70+ Algorithmic Challenges Solved",
    description: "Successfully implemented optimized algorithms and database structures on Leetcode and other platforms.",
    badge: "70+ LeetCode"
  },
  {
    title: "Triple-Certified Innovation Ambassador",
    description: "Certified by the Ministry of Education (MoE), Govt. of India for entrepreneurship and innovation, scoring a 9.0 grade. Mentored 10+ campus prototype teams.",
    badge: "MoE India Certified"
  },
  {
    title: "E-Cell Presidential Conclave Director",
    description: "President of the Entrepreneurship Cell (E-Cell PSIT), directing 30+ members. Organized 'Elevate '26' conclave hosting over 250+ startups.",
    badge: "E-Cell PSIT President"
  }
];

export const CONTACT_LINKS: ContactInfo = {
  linkedin: "https://www.linkedin.com/in/sushant-tiwari-4410492a3/",
  github: "https://github.com/Sushant-codewizard",
  email: "sushanttiwari8455@gmail.com",
  phone: "+91-76449 05477"
};
