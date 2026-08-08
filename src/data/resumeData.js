import flowzintImg from '../assets/certificates/flowzint-ai-hackathon.jpg';
import dockerImg from '../assets/certificates/docker-devops-infosys.jpg';
import campusCrew100kImg from '../assets/certificates/campuscrew-quizoff-100k.jpg';
import googleGeminiQuizImg from '../assets/certificates/google-gemini-quizoff-participation.jpg';
import hackerrankImg from '../assets/certificates/hackerrank-problem-solving.jpg';
import nptelFuzzyImg from '../assets/certificates/nptel-fuzzy-sets-logic.jpg';
import nitInternshipImg from '../assets/certificates/nit-trichy-internship.jpg';
import infogermInternshipImg from '../assets/certificates/infogerm-internship.jpg';
import genaiImg from '../assets/certificates/genai-product-management.jpg';
import gitGithubImg from '../assets/certificates/git-github-lewagon.jpg';
import googleCloudImg from '../assets/certificates/google-cloud-data-analytics.jpg';
import mongodbImg from '../assets/certificates/mongodb-udemy.jpg';

export const resumeData = {
  personalInfo: {
    name: "Praveen Rathinam P",
    title: "AI Engineer & Full-Stack Developer",
    subTitle: "Final-Year B.Tech Information Technology Student at SSN",
    email: "praveenrathinam2310971@ssn.edu.in",
    phone: "9042564046",
    linkedin: "https://linkedin.com/in/praveen-rathinam-p",
    github: "https://github.com/praveen-rathinam-p", // inferred standard path
    location: "Chennai, India",
    summary: "Final-year B.Tech Information Technology student with hands-on experience in AI-enabled full-stack development, Retrieval-Augmented Generation (RAG) systems, FastAPI backend development, PostgreSQL, and React. Built production-oriented AI applications using LLMs, vector databases, and computer vision. Seeking Software Engineer / AI Engineer roles to build scalable AI-native solutions.",
    recruiterSummary: "Final-year IT student (7.785 CGPA @ SSN) specializing in AI-enabled full-stack development, RAG pipelines (FastAPI, ChromaDB, Gemini), and PostgreSQL/React engineering. Seeking a Software Engineer / AI Engineer role.",
    stats: [
      { label: "CGPA", value: "7.785", sub: "SSN College" },
      { label: "12th Std", value: "93.33%", sub: "SRV Matric" },
      { label: "Internships", value: "2", sub: "Full Stack & Systems" },
      { label: "Projects", value: "4+", sub: "AI & Web Apps" }
    ]
  },
  education: [
    {
      institution: "SSN College of Engineering",
      degree: "B.Tech - Information Technology",
      period: "Jul 2023 - Jul 2027",
      grade: "CGPA: 7.785",
      highlights: [
        "Specializing in AI-enabled Full-Stack Development and RAG systems.",
        "Active member of IT department tech symposiums."
      ],
      recruiterGrade: "7.785 CGPA (Tier 1 College)"
    },
    {
      institution: "SRV Matriculation Higher Secondary School, Samayapuram",
      degree: "12th Standard (HSC)",
      period: "Apr 2021 - May 2023",
      grade: "Percentage: 93.33%",
      highlights: [
        "Major: Physics, Chemistry, Mathematics, Computer Science."
      ],
      recruiterGrade: "93.3% Score"
    }
  ],
  skills: {
    programmingLanguages: [
      { name: "Python", level: 90, color: "#306998" },
      { name: "JavaScript", level: 85, color: "#F7DF1E" },
      { name: "SQL", level: 80, color: "#4169E1" },
      { name: "HTML5/CSS3", level: 90, color: "#E34F26" },
      { name: "React", level: 80, color: "#61DAFB" },
      { name: "FastAPI", level: 85, color: "#009688" }
    ],
    databases: [
      { name: "PostgreSQL", level: 85, color: "#336791" },
      { name: "MySQL", level: 80, color: "#4479A1" },
      { name: "MongoDB", level: 80, color: "#47A248" }
    ],
    tools: [
      { name: "GitHub", color: "#F05032" },
      { name: "Docker", color: "#2496ED" },
      { name: "Claude AI", color: "#DA7756" }
    ],
    concepts: [
      "Retrieval-Augmented Generation (RAG)",
      "Prompt Engineering",
      "Gemini API",
      "Chroma DB / Vector Search",
      "JWT Authentication"
    ]
  },
  experience: [
    {
      role: "Intern, Centre for Digital Infrastructure",
      company: "National Institute of Technology, Tiruchirappalli",
      location: "Tiruchirappalli, Tamil Nadu",
      period: "May 2026 - Jun 2026",
      type: "Internship",
      details: [
        "Developed a configurable Institutional Resource and Inventory System to automate procurement and inventory management workflows.",
        "Built modules for Administrative Approval, Purchase Indent, Technical & Financial Evaluation, Purchase Order, GIN/GRN, Bill Processing, and Asset Management.",
        "Implemented role-based access control, configurable approval workflows, and database optimization to improve procurement efficiency."
      ],
      recruiterDetails: [
        "Engineered a full-stack Institutional Resource & Inventory System spanning 7 procurement workflow modules.",
        "Implemented role-based access control (RBAC) and configurable multi-stage approval workflows.",
        "Optimized database schema and queries to improve procurement processing efficiency."
      ],
      tech: ["Python", "FastAPI", "PostgreSQL", "React", "RBAC", "Workflow Automation"],
      certificateImage: nitInternshipImg
    },
    {
      role: "Full Stack Web Development Intern",
      company: "INFOGERM",
      location: "Remote",
      period: "Jun 2025 - Aug 2025",
      type: "Internship",
      details: [
        "Deployed a Todo app using Node.js–Express–MongoDB with JWT authentication, hosting the frontend on Netlify and backend on Render.",
        "Built responsive web pages using HTML, CSS, and JavaScript, improving layout compatibility across devices.",
        "Utilized Git/GitHub for collaborative version control and team code reviews."
      ],
      recruiterDetails: [
        "Deployed JWT-authenticated Todo app backend using Express.js & MongoDB.",
        "Connected React.js frontend on Netlify with REST APIs on Render.",
        "Maintained 100% version control compliance via Git/GitHub workflows."
      ],
      tech: ["Node.js", "Express.js", "React.js", "MongoDB", "JavaScript", "HTML", "CSS", "Git", "Netlify", "Render"],
      certificateImage: infogermInternshipImg,
      links: { github: "https://github.com/praveensugam-21/Daily-Task_todo-app.git" }
    }
  ],
  projects: [
    {
      title: "EVA Homes – Broker-Mediated Real Estate Marketplace",
      description: "A full-stack real estate marketplace where every buyer-seller contact is routed through a broker layer rather than direct — buyers browse and enquire, sellers list and manage properties, and admins moderate the entire marketplace.",
      details: [
        "Built a React 19 + Vite + Tailwind frontend and a FastAPI + SQLAlchemy + Alembic backend, with JWT and Google Sign-In (OAuth) authentication.",
        "Designed buyer, seller, and admin workspaces: listings with a free Leaflet/OpenStreetMap GPS picker, shortlist/enquiry/visit/offer tracking, seller verification, and a paid location-unlock flow with admin-verified UPI payments.",
        "Enforced server-side upload limits (5MB/file, 10 photos/room via byte-streaming, not client trust), per-IP rate limiting, and security headers on every request.",
        "Set up a pytest smoke suite running automatically in GitHub Actions CI on every push/PR, with Postgres-ready Alembic migrations for a Render production deploy."
      ],
      recruiterDetails: [
        "Architected a full-stack marketplace (React 19 + FastAPI) with JWT + Google OAuth auth and role-based buyer/seller/admin workspaces.",
        "Built a broker-mediated contact model with admin-verified payment unlocks for masked owner details and exact GPS locations.",
        "Set up CI (GitHub Actions) running a pytest smoke suite, with Alembic-managed schema migrations for a Postgres-ready deploy.",
        "Implemented secure file uploads with server-enforced size/count limits and per-IP rate limiting."
      ],
      tech: ["React 19", "FastAPI", "SQLAlchemy", "PostgreSQL", "Alembic", "JWT", "Google OAuth", "Leaflet", "Tailwind CSS", "GitHub Actions", "pytest"],
      links: { github: "https://github.com/praveensugam-21/EVA-HOMES-.git" }
    },
    {
      title: "IRIS AI – Secure AI Document Intelligence Platform",
      description: "A secure, local-first AI-powered document intelligence platform that processes PDFs, images, and text files, automatically classifies documents, extracts structured metadata, and generates concise summaries using OCR and NLP techniques.",
      details: [
        "Built a Retrieval-Augmented Generation (RAG) pipeline using FastAPI, ChromaDB, Sentence Transformers, spaCy, EasyOCR, and Gemini to enable natural language querying, semantic search, and interactive document-based conversations.",
        "Designed a semantic knowledge graph to visualize relationships between entities across documents.",
        "Implemented JWT authentication, document-level access control, data masking, and encryption for sensitive information, along with audit logging.",
        "Architected a Docker-based deployment for secure and scalable operation."
      ],
      recruiterDetails: [
        "Engineered a full RAG pipeline (FastAPI + ChromaDB + Sentence Transformers + Gemini) for natural language document Q&A.",
        "Automated document classification, OCR extraction (EasyOCR), and metadata generation using spaCy/NLP.",
        "Built enterprise-grade security: JWT auth, access control, encryption, data masking, and audit logging.",
        "Containerized the full stack with Docker for scalable, secure deployment."
      ],
      tech: ["FastAPI", "ChromaDB", "Gemini API", "Sentence Transformers", "spaCy", "EasyOCR", "JWT", "Docker", "RAG"],
      links: { github: "https://github.com/praveensugam-21/NeuroVault-.git" }
    },
    {
      title: "AI Powered Retinal Disease Detection",
      description: "An AI-based retinal disease detection system to identify multiple retinal diseases from fundus images.",
      details: [
        "Leveraged deep learning and transfer learning models to achieve high-accuracy multi-disease classification.",
        "Integrated the trained AI model into a user-friendly web application for efficient retinal disease prediction."
      ],
      recruiterDetails: [
        "Applied transfer learning models to classify multiple retinal diseases from fundus images.",
        "Achieved high-accuracy multi-disease classification across diagnostic categories.",
        "Deployed the model behind a user-friendly web application for real-time predictions."
      ],
      tech: ["Python", "Deep Learning", "Transfer Learning", "Computer Vision", "Web App"]
    },
    {
      title: "Higher Studies Portal",
      description: "A web portal that tracks college/university students pursuing higher studies, streamlining academic recommendations.",
      details: [
        "Implemented a system for students to request Letters of Recommendation (LOR) from up to three faculty members.",
        "Integrated secure file upload functionality to store admission letters and maintain student-university mapping data.",
        "Handled backend logic and data management using Django and Supabase for seamless record tracking."
      ],
      recruiterDetails: [
        "Automated Letters of Recommendation workflow for university faculty/students.",
        "Engineered secure document storage & student-university mapping using Supabase storage buckets.",
        "Built backend logic and relational data management using Django and Supabase."
      ],
      tech: ["Django", "Supabase", "Python", "HTML", "CSS", "PostgreSQL"],
      links: { github: "https://github.com/praveensugam-21/Higher_Studies_Portal.git" }
    }
  ],
  certifications: [
    {
      name: "Generative AI for Product Management: Gen AI for PMs",
      issuer: "Udemy",
      issued: "Jul 2026",
      credentialId: "UC-9930ea04-197e-4d4d-964c-b0b803770c76",
      image: genaiImg
    },
    {
      name: "FlowZint AI Hackathon – Edition 2026",
      issuer: "FlowZint",
      issued: "Jul 2026",
      credentialId: "FZ-72C2252F",
      skills: ["Retrieval-Augmented Generation (RAG)", "Large Language Models (LLM)"],
      skillsMore: 7,
      description: "Built IRIS (Intelligent Retrieval and Information System), a privacy-first AI document platform enabling secure upload, organization, and natural-language querying via a RAG pipeline with OCR, semantic search, vector embeddings, and a Knowledge Graph — using React, FastAPI, ChromaDB, PostgreSQL, and Google Gemini with optional offline LLM support.",
      image: flowzintImg
    },
    {
      name: "Google Gemini QuizOff 2026 – Main Quiz Participation",
      issuer: "Unstop (organised by CampusCrew)",
      image: googleGeminiQuizImg
    },
    {
      name: "CampusCrew: 100K Special Certificate Distribution of Google Gemini QuizOff 2026",
      issuer: "CampusCrew",
      issued: "Jun 2026",
      image: campusCrew100kImg
    },
    {
      name: "DevOps with Docker: Container Management",
      issuer: "Infosys Springboard",
      issued: "Jul 2026",
      skills: ["Docker"],
      image: dockerImg
    },
    {
      name: "Fuzzy Sets, Logic and Systems & Applications",
      issuer: "NPTEL (IIT Kanpur) — Elite",
      issued: "Apr 2026",
      credentialId: "NPTEL26EE38S650306077",
      skills: ["Fuzzy Logic", "Control Systems"],
      description: "12-week course, scored 68% overall (Online Assignments 16.88/25, Proctored Exam 51/75).",
      image: nptelFuzzyImg
    },
    {
      name: "Google Cloud Career Launchpad: Data Analytics Track",
      issuer: "Google Cloud Skills Boost",
      issued: "Aug 2025",
      skills: ["Data Science"],
      image: googleCloudImg
    },
    {
      name: "Problem Solving (Basic)",
      issuer: "HackerRank",
      issued: "Jul 2025",
      credentialId: "411F0CA51C3B",
      image: hackerrankImg
    },
    {
      name: "MongoDB",
      issuer: "Udemy",
      issued: "Dec 2024",
      image: mongodbImg
    },
    {
      name: "Intro to Git and GitHub",
      issuer: "Le Wagon",
      image: gitGithubImg,
      issued: "Jul 2025"
    }
  ],
  languages: ["English", "Tamil"]
};
