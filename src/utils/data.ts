import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import { SiLeetcode, SiHackerrank } from 'react-icons/si';

export const personalInfo = {
  name: 'Chiguru Ajay Kumar Reddy',
  title: 'Software Engineer | Full Stack Developer | AI Enthusiast | Cloud Learner',
  intro: 'I build scalable web applications, AI-powered solutions, and cloud-based systems that solve real-world problems.',
  email: 'majayreddy9@gmail.com',
  phone: '+91 9000403079',
  location: 'Hyderabad, Telangana, India',
  resumeUrl: '#',
  socials: [
    { name: 'LinkedIn', icon: FaLinkedin, url: 'https://linkedin.com/in/' },
    { name: 'GitHub', icon: FaGithub, url: 'https://github.com/' },
    { name: 'Email', icon: FaEnvelope, url: 'mailto:majayreddy9@gmail.com' },
    { name: 'LeetCode', icon: SiLeetcode, url: 'https://leetcode.com/' },
    { name: 'HackerRank', icon: SiHackerrank, url: 'https://hackerrank.com/' },
  ],
  typingTexts: [
    'Software Engineer',
    'Full Stack Developer',
    'React Developer',
    'Java Developer',
    'Python Developer',
    'AI Enthusiast',
    'Cloud Learner',
  ],
};

export const aboutCards = [
  { title: 'Education', value: 'B.Tech CSE', icon: '🎓' },
  { title: 'Experience', value: 'Intern + Training', icon: '💼' },
  { title: 'Projects', value: '22+ Completed', icon: '🚀' },
  { title: 'Certifications', value: '25+ Earned', icon: '📜' },
  { title: 'Skills', value: '32+ Technologies', icon: '⚡' },
];

export const educationTimeline = [
  {
    degree: 'Bachelor of Technology',
    field: 'Computer Science Engineering',
    institution: 'Vardhaman College of Engineering',
    period: '2022 - 2026',
  },
  {
    degree: 'Intermediate',
    field: 'MPC',
    institution: 'Alphores Junior College',
    period: '2020 - 2022',
  },
  {
    degree: 'SSC',
    field: 'Secondary School Certificate',
    institution: "St. Joseph's High School",
    period: '2020',
  },
];

export const skillCategories = [
  {
    category: 'Programming Languages',
    skills: [
      { name: 'Java', level: 90 },
      { name: 'Python', level: 88 },
      { name: 'JavaScript', level: 90 },
      { name: 'TypeScript', level: 82 },
      { name: 'SQL', level: 88 },
      { name: 'C', level: 75 },
    ],
  },
  {
    category: 'Frontend',
    skills: [
      { name: 'HTML', level: 95 },
      { name: 'CSS', level: 90 },
      { name: 'React.js', level: 88 },
      { name: 'Tailwind CSS', level: 85 },
      { name: 'Bootstrap', level: 80 },
    ],
  },
  {
    category: 'Backend',
    skills: [
      { name: 'Node.js', level: 88 },
      { name: 'Express.js', level: 86 },
      { name: 'REST APIs', level: 90 },
      { name: 'JWT Authentication', level: 85 },
      { name: 'Servlets', level: 80 },
      { name: 'JDBC', level: 82 },
    ],
  },
  {
    category: 'Database',
    skills: [
      { name: 'MongoDB', level: 82 },
      { name: 'MySQL', level: 78 },
      { name: 'PostgreSQL', level: 75 },
      { name: 'Firebase', level: 80 },
    ],
  },
   {
    category: 'Cloud',
    skills: [
      { name: 'AWS', level: 82 },
      { name: 'EC2', level: 80 },
      { name: 'S3', level: 85 },
      { name: 'CloudFront', level: 78 },
      { name: 'Route53', level: 75 },
      { name: 'Auto Scaling', level: 78 },
    ],
  },
  {
    category: 'Tools',
    skills: [
      { name: 'Git', level: 88 },
      { name: 'GitHub', level: 90 },
      { name: 'VS Code', level: 92 },
      { name: 'Postman', level: 85 },
      { name: 'Figma', level: 70 },
      { name: 'XAMPP', level: 72 },
    ],
  },
  {
    category: 'AI / Machine Learning',
    skills: [
      { name: 'Machine Learning', level: 82 },
      { name: 'Generative AI', level: 88 },
      { name: 'Prompt Engineering', level: 90 },
      { name: 'TensorFlow', level: 75 },
      { name: 'Scikit-learn', level: 80 },
      { name: 'NLTK', level: 82 },
      { name: 'LangChain', level: 80 },
      { name: 'Gemini API', level: 85 },
    ],
  },
  {
    category: 'Soft Skills',
    skills: [
      { name: 'Leadership', level: 85 },
      { name: 'Communication', level: 88 },
      { name: 'Teamwork', level: 90 },
      { name: 'Problem Solving', level: 92 },
      { name: 'Critical Thinking', level: 88 },
    ],
  },
  {
    category: 'Core Computer Science',
    skills: [
      { name: 'Data Structures', level: 88 },
      { name: 'Algorithms', level: 85 },
      { name: 'OOP', level: 90 },
      { name: 'DBMS', level: 88 },
      { name: 'Operating Systems', level: 82 },
      { name: 'Computer Networks', level: 80 },
    ],
  },
];

export const projects = [
  {
    id: 1,
    title: "WorkBridge",
    subtitle: "AI-Driven Employment Portal",
    description:
      "An AI-powered employment platform that intelligently matches skilled professionals with employers. Includes role-based dashboards, authentication, job management, AI recommendations, and real-time availability tracking.",
    image: "/images/workbridge.jpg",
    category: "Full Stack",
    tech: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "PostgreSQL",
      "Firebase"
    ],
    github: "https://github.com/yourusername/workbridge",
    live: "https://workbridge.vercel.app"
  },

  {
    id: 2,
    title: "ECOED",
    subtitle: "Emotion Aware Adaptive Learning Platform",
    description:
      "A smart e-learning platform that detects learner emotions using AI and adapts learning content dynamically. Includes emotion recognition, personalized recommendations, dashboards, and analytics.",
    image: "/images/ecoed.jpg",
    category: "AI/ML",
    tech: [
      "React",
      "Node.js",
      "Python",
      "TensorFlow",
      "MongoDB"
    ],
    github: "https://github.com/yourusername/ecoed",
    live: "https://ecoed.vercel.app"
  },

  {
    id: 3,
    title: "RAG AI Chatbot",
    subtitle: "Generative AI Knowledge Assistant",
    description:
      "A Retrieval-Augmented Generation chatbot built with LangChain, Gemini AI, ChromaDB, and Node.js capable of answering questions from uploaded documents.",
    image: "/images/rag.jpg",
    category: "AI/ML",
    tech: [
      "Node.js",
      "LangChain",
      "Gemini AI",
      "ChromaDB",
      "Express"
    ],
    github: "https://github.com/yourusername/rag-chatbot",
    live: "#"
  },

  {
    id: 4,
    title: "Weather Forecast App",
    subtitle: "Real-Time Weather Dashboard",
    description:
      "Responsive weather application using the OpenWeather API featuring current conditions, forecasts, search, and location-based weather information.",
    image: "/images/weather.jpg",
    category: "Frontend",
    tech: [
      "React",
      "JavaScript",
      "CSS",
      "OpenWeather API"
    ],
    github: "https://github.com/yourusername/weather-app",
    live: "https://weather-ajay.vercel.app"
  },

  {
    id: 5,
    title: "Farmer's Marketplace",
    subtitle: "Agriculture E-Commerce Platform",
    description:
      "A web platform connecting farmers directly with buyers. Includes authentication, product listings, order management, and responsive user dashboards.",
    image: "/images/farmers.jpg",
    category: "Full Stack",
    tech: [
      "React",
      "Node.js",
      "Express",
      "MongoDB"
    ],
    github: "https://github.com/yourusername/farmers-marketplace",
    live: "#"
  },

  {
    id: 6,
    title: "Student Portfolio Website",
    subtitle: "Modern Responsive Portfolio",
    description:
      "A personal portfolio website with animations, dark mode, responsive layouts, project showcase, certifications, and contact integration.",
    image: "/images/portfolio.jpg",
    category: "Frontend",
    tech: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion"
    ],
    github: "https://github.com/yourusername/portfolio",
    live: "https://yourportfolio.vercel.app"
  },

  {
    id: 7,
    title: "Real-Time Chat Application",
    subtitle: "MERN Stack Chat Platform",
    description:
      "Built during MERN internship. Features secure authentication, Socket.IO real-time messaging, online status, and responsive chat interface.",
    image: "/images/chat.jpg",
    category: "Full Stack",
    tech: [
      "MongoDB",
      "Express",
      "React",
      "Node.js",
      "Socket.io"
    ],
    github: "https://github.com/yourusername/chat-app",
    live: "#"
  },

  {
    id: 8,
    title: "Student Performance Prediction",
    subtitle: "Machine Learning Project",
    description:
      "Machine learning model that predicts student academic performance using historical educational data and visualizes analytical insights.",
    image: "/images/student.jpg",
    category: "AI/ML",
    tech: [
      "Python",
      "Scikit-learn",
      "Pandas",
      "Matplotlib"
    ],
    github: "https://github.com/yourusername/student-performance",
    live: "#"
  },

  {
    id: 9,
    title: "Encryption Visualizer",
    subtitle: "Cryptography Learning Platform",
    description:
      "Interactive educational website demonstrating Caesar, AES, DES, RSA, Hill Cipher, Vigenère, Playfair, and Rail Fence algorithms with encryption and decryption.",
    image: "/images/encryption.jpg",
    category: "Web",
    tech: [
      "HTML",
      "CSS",
      "JavaScript"
    ],
    github: "https://github.com/yourusername/encryption-visualizer",
    live: "#"
  },

  {
    id: 10,
    title: "AWS Auto Scaling Infrastructure",
    subtitle: "Cloud Computing Project",
    description:
      "Cloud deployment architecture using EC2, Auto Scaling Groups, Load Balancer, Route53, S3, CloudFront, and SSL for high availability and scalability.",
    image: "/images/aws.jpg",
    category: "Cloud",
    tech: [
      "AWS",
      "EC2",
      "Auto Scaling",
      "Route53",
      "CloudFront",
      "S3"
    ],
    github: "#",
    live: "#"
  },
  {
  id: 11,
  title: "Encryption & Decryption Visualizer",
  subtitle: "Cryptography Learning Platform",
  description:
    "A web-based application demonstrating classical and modern encryption algorithms including Caesar Cipher, Vigenère, Playfair, Hill Cipher, Rail Fence, AES, DES, and RSA. Users can encrypt and decrypt text while learning how each algorithm works through an interactive interface.",
  image: "/images/encryption.jpg",
  category: "Security",
  tech: [
    "HTML",
    "CSS",
    "JavaScript",
    "AES",
    "DES",
    "RSA",
    "Cryptography"
  ],
  github: "https://github.com/yourusername/encryption-visualizer",
  live: "#"
},

{
  id: 12,
  title: "Resume Parser & AI ATS Analyzer",
  subtitle: "Artificial Intelligence Project",
  description:
    "An AI-powered resume screening system that parses resumes, extracts technical skills using NLP, compares them against job descriptions, clusters relevant skills, and generates an ATS compatibility score from 0 to 10 with personalized improvement suggestions.",
  image: "/images/resume-parser.jpg",
  category: "AI/ML",
  tech: [
    "Python",
    "NLTK",
    "Scikit-learn",
    "Pandas",
    "TF-IDF",
    "Machine Learning",
    "NLP"
  ],
  github: "https://github.com/yourusername/resume-parser-ai",
  live: "#"
},

{
  id: 13,
  title: "AI Chatbot",
  subtitle: "NLP Conversational Assistant",
  description:
    "A rule-based conversational AI chatbot built using Natural Language Processing. It performs text preprocessing, intent recognition, TF-IDF vectorization, cosine similarity matching, and generates intelligent responses through an interactive Streamlit interface.",
  image: "/images/chatbot.jpg",
  category: "AI/ML",
  tech: [
    "Python",
    "NLTK",
    "Scikit-learn",
    "Streamlit",
    "TF-IDF",
    "Cosine Similarity"
  ],
  github: "https://github.com/yourusername/ai-chatbot",
  live: "#"
},

{
  id: 14,
  title: "Snake Game",
  subtitle: "Classic Arcade Game",
  description:
    "A responsive Snake Game featuring smooth controls, score tracking, high-score storage, increasing difficulty levels, sound effects, pause/resume functionality, and mobile-friendly gameplay implemented using JavaScript.",
  image: "/images/snake.jpg",
  category: "JavaScript",
  tech: [
    "HTML5",
    "CSS3",
    "JavaScript",
    "Canvas API"
  ],
  github: "https://github.com/yourusername/snake-game",
  live: "#"
},

{
  id: 15,
  title: "Multiplayer Dice Challenge",
  subtitle: "Interactive JavaScript Game",
  description:
    "A modern multiplayer dice game featuring animated dice rolls, score tracking, winning conditions, responsive design, and engaging UI interactions using vanilla JavaScript.",
  image: "/images/dice.jpg",
  category: "JavaScript",
  tech: [
    "HTML5",
    "CSS3",
    "JavaScript"
  ],
  github: "https://github.com/yourusername/dice-game",
  live: "#"
}
];

export const experiences = [
  {
    title: 'Frontend Development Intern',
    organization: 'NIELIT',
    description:
      'Completed a Frontend Development internship, building responsive web applications using HTML, CSS, JavaScript, and modern UI design principles.',
    type: 'Internship',
  },

  {
    title: 'IEEE Embedded & Application IoT Bootcamp',
    organization: 'IEEE Student Branch',
    description:
      'Participated in an intensive IoT and Embedded Systems bootcamp, gaining practical exposure to IoT applications, sensors, microcontrollers, and real-world embedded solutions.',
    type: 'Bootcamp',
  },

  {
    title: 'Full Stack Web Development',
    organization: 'Udemy',
    description:
      'Completed comprehensive Full Stack Web Development training covering React, Node.js, Express.js, MongoDB, REST APIs, authentication, and deployment.',
    type: 'Training',
  },

  {
    title: 'AWS Cloud Foundations',
    organization: 'AWS Academy',
    description:
      'Learned AWS Cloud fundamentals including EC2, S3, IAM, Route53, CloudFront, Auto Scaling, Load Balancers, and cloud architecture best practices.',
    type: 'Certification',
  },

  {
    title: 'Salesforce Developer Agentblazer Champion Program',
    organization: 'Salesforce',
    description:
      'Completed the Salesforce Developer Agentblazer Champion Program with hands-on experience in Apex, Lightning Web Components (LWC), CRM development, Salesforce automation, and Agentforce AI fundamentals.',
    type: 'Program',
  },

  {
    title: 'Generative AI & Prompt Engineering',
    organization: 'Google, Coursera & Self Learning',
    description:
      'Explored Generative AI, Prompt Engineering, Large Language Models (LLMs), Retrieval-Augmented Generation (RAG), AI chatbots, and practical AI application development using modern tools and frameworks.',
    type: 'Learning',
  },
];

export const certifications = [
  {
    title: 'AWS Academy Cloud Foundations',
    org: 'AWS Academy',
    date: '2025',
    url: '#',
  },
  {
    title: 'NPTEL Cloud Computing',
    org: 'NPTEL',
    date: '2025',
    url: '#',
  },
  {
    title: 'Salesforce Developer Agentblazer Champion Program',
    org: 'Salesforce',
    date: '2025',
    url: '#',
  },
  {
    title: 'Full Stack Web Development',
    org: 'Udemy',
    date: '2025',
    url: '#',
  },
  {
    title: 'Front-End Development Internship',
    org: 'NIELIT',
    date: '2024',
    url: '#',
  },
  {
    title: 'Front-End Web Development',
    org: 'Infosys Springboard',
    date: '2025',
    url: '#',
  },
  {
    title: 'Generative AI',
    org: 'Google / Coursera',
    date: '2025',
    url: '#',
  },
  {
    title: 'Generative AI',
    org: 'Great Learning',
    date: '2025',
    url: '#',
  },
  {
    title: 'Oracle Data Science & AI',
    org: 'Oracle',
    date: '2025',
    url: '#',
  },
  {
    title: 'MongoDB Basics',
    org: 'MongoDB University',
    date: '2025',
    url: '#',
  },
  {
    title: 'MongoDB Indexes',
    org: 'MongoDB University',
    date: '2025',
    url: '#',
  },
  {
    title: 'Java Programming',
    org: 'HackerRank',
    date: '2025',
    url: '#',
  },
  {
    title: 'SQL (Basic)',
    org: 'HackerRank',
    date: '2025',
    url: '#',
  },
  {
    title: 'Data Structures & Algorithms',
    org: 'Scalar',
    date: '2025',
    url: '#',
  },
  {
    title: 'Power BI Workshop',
    org: 'Office Master',
    date: '2025',
    url: '#',
  },
  {
    title: 'Embedded & Application IoT',
    org: 'IEEE',
    date: '2025',
    url: '#',
  },
  {
    title: 'Augmented Reality & Virtual Reality',
    org: 'Coursera',
    date: '2025',
    url: '#',
  },
  {
    title: 'Employability Skills Program',
    org: 'Wadhwani Foundation',
    date: '2025',
    url: '#',
  }
];

export const achievements = [
  { label: 'Projects Completed', value: 22, suffix: '+' },
  { label: 'Certificates', value: 25, suffix: '+' },
  { label: 'Technologies Learned', value: 32, suffix: '+' },
  { label: 'Coding Problems Solved', value: 650, suffix: '+' },
];

export const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Certificates', href: '#certificates' },
  { name: 'Contact', href: '#contact' },
];
