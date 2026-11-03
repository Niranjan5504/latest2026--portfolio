import heroVisualImg from "../assets/images/hero_architectural_optics_1793723545718.jpg";
import cookingAssistantImg from "../assets/images/project_cooking_assistant_1793723547747.jpg";
import staffPortalImg from "../assets/images/project_staff_portal_1793723548531.jpg";
import asthraSymposiumImg from "../assets/images/project_asthra_symposium_1793723549787.jpg";
import shikshaAwardsImg from "../assets/images/project_shiksha_awards_1793723551510.jpg";
import inviotPlatformImg from "../assets/images/project_inviot_platform_1793723551646.jpg";

export interface SkillGroup {
  id: "frontend" | "backend" | "programming" | "database" | "tools";
  category: string;
  summary: string;
  skills: Array<{
    name: string;
    context: string;
  }>;
}

export interface ProjectItem {
  id: string;
  index: string;
  title: string;
  category: "AI & Accessibility" | "Web Applications" | "Freelance";
  period: string;
  shortDescription: string;
  fullDescription: string;
  technologies: string[];
  features: string[];
  image: string;
  imageAlt: string;
  featuredSpan?: boolean;
  patent?: {
    statusLabel: string;
    applicationNumber: string;
    publicationDate: string;
    inventorNote: string;
  };
}

export interface ExperienceItem {
  id: string;
  company: string;
  designation: string;
  period: string;
  location?: string;
  process?: string;
  statusTag?: string;
  type: "full-time" | "internship-freelance";
  description: string;
  highlights: string[];
  technologies?: string[];
}

export interface JourneyMilestone {
  year: string;
  title: string;
  summary: string;
}

export interface AchievementItem {
  id: string;
  index: string;
  title: string;
  category: string;
  yearOrContext: string;
  detail: string;
}

export const PROFILE_DATA = {
  name: "Niranjan Kumar A",
  shortName: "Niranjan Kumar",
  monogram: "Niranjan Kumar",
  heroHeading: "Hi, I'm Niranjan Kumar.",
  heroSubtitle:
    "IT Graduate · Software Development Enthusiast · Content Moderator",
  heroIntro:
    "I'm an early-career IT professional with a background in software development and a growing professional journey in digital content moderation. I enjoy exploring technology, solving problems, and building meaningful digital experiences. I have hands-on experience working with modern web technologies, developing responsive applications, and improving user experiences. I'm passionate about continuous learning, adapting to new challenges, and expanding my technical knowledge. My goal is to contribute to impactful projects while growing into a skilled and versatile technology professional.",
  heroImage: heroVisualImg,
  heroImageAlt:
    "Minimalist obsidian glass and brushed titanium architectural optical sculpture symbolizing structured engineering and clarity",
  location: "Bengaluru, India",
  currentEmployer: "Concentrix",
  currentRole: "Content Moderator",
  currentProcess: "Google Process",
  employmentStatus: "Recently Joined",
  email: "aniranjankumar05@gmail.com",
  githubUrl: "https://github.com/Niranjan5504",
  linkedinUrl: "https://www.linkedin.com/in/niranjan-kumar-a-769696276/",
  existingPortfolioUrl: "https://niranjan55.netlify.app",
  resumePath: "/resume/NiranjankumarA_Resume.pdf",
  resumeFileName: "NiranjankumarA_Resume.pdf",
  aboutHeading: "Beyond the Code.",
  aboutParagraphs: [
    "I'm Niranjan Kumar A, an Information Technology graduate from Meenakshi Sundararajan Engineering College, Chennai.",
    "My journey began with an interest in programming and web development. Through internships, freelance assignments, and practical projects, I developed hands-on exposure to frontend and backend technologies.",
    "I have worked on web applications, management systems, and AI-powered project concepts.",
    "Currently, I'm beginning my professional journey as a Content Moderator at Concentrix in the Google Process, while continuing to build my knowledge and interest in technology.",
    "I'm an adaptable fast learner who values independent ownership, continuous improvement, and practical problem-solving.",
  ],
  education: {
    degree: "B.Tech – Information Technology",
    institution: "Meenakshi Sundararajan Engineering College",
    period: "2021 – 2025",
    location: "Chennai, Tamil Nadu, India",
  },
  heroPillars: [
    {
      label: "Current Role",
      value: "Content Moderator · Concentrix",
      meta: "Google Process · Bengaluru",
    },
    {
      label: "Academic Degree",
      value: "B.Tech Information Technology",
      meta: "MSEC Chennai · 2021 – 2025",
    },
    {
      label: "Development Exposure",
      value: "React.js · Next.js · Node.js",
      meta: "Internships & Freelance Builds",
    },
    {
      label: "Published Innovation",
      value: "Patent Application Published",
      meta: "IN202641120639 A1 · Oct 2026",
    },
  ],
} as const;

export const SKILL_GROUPS: SkillGroup[] = [
  {
    id: "frontend",
    category: "Frontend Development",
    summary:
      "Component-driven user interfaces, responsive layouts, and accessible web architecture.",
    skills: [
      {
        name: "HTML",
        context:
          "Semantic document structure applied across ShikshaSakthi Awards and frontend internships.",
      },
      {
        name: "CSS",
        context:
          "Responsive layout engineering, grid systems, and cross-viewport styling.",
      },
      {
        name: "JavaScript",
        context:
          "Interactive client-side logic across freelance websites and full-stack applications.",
      },
      {
        name: "React.js",
        context:
          "Used in Staff Profile Management System, Asthra2k24 Symposium, Inviot, and Honeycomb Technologies.",
      },
      {
        name: "Next.js",
        context:
          "Modern React framework for fast, structured, SEO-conscious web applications.",
      },
    ],
  },
  {
    id: "backend",
    category: "Backend Development",
    summary:
      "Server-side JavaScript runtimes, RESTful request handling, and application routing.",
    skills: [
      {
        name: "Node.js",
        context:
          "Applied during full-stack development tasks at Honeycomb Technologies and AICL Learning Simplified.",
      },
      {
        name: "Express.js",
        context:
          "Backend routing and API middleware exposure at Honeycomb Technologies.",
      },
    ],
  },
  {
    id: "programming",
    category: "Programming",
    summary:
      "Core algorithmic problem-solving, object-oriented principles, and structured queries.",
    skills: [
      {
        name: "Java",
        context:
          "NPTEL Programming in Java certification and Android Studio internship at Pantech E-Learning.",
      },
      {
        name: "Python",
        context:
          "Applied in AI-assisted workflows and problem-solving projects.",
      },
      {
        name: "SQL",
        context:
          "Relational data querying and structured database fundamentals.",
      },
    ],
  },
  {
    id: "database",
    category: "Database",
    summary:
      "Cloud-hosted real-time data persistence for interactive web applications.",
    skills: [
      {
        name: "Firebase",
        context:
          "Real-time database integration for Staff Profile Management System and Asthra2k24 Symposium.",
      },
      {
        name: "MongoDB",
        context:
          "NoSQL database management for storing, managing, and retrieving application data using MongoDB and Mongoose in full-stack web applications.",
      },
    ],
  },
  {
    id: "tools",
    category: "Tools",
    summary:
      "Source version control, collaborative code review, and repository workflows.",
    skills: [
      {
        name: "Git",
        context:
          "Version control, branching workflows, and collaborative source tracking.",
      },
      {
        name: "GitHub",
        context:
          "Project repository hosting and code collaboration across academic and internship builds.",
      },
    ],
  },
];

export const FEATURED_PROJECTS: ProjectItem[] = [
  {
    id: "ai-cooking-assistant",
    index: "01",
    title: "AI Interactive Cooking Assistant",
    category: "AI & Accessibility",
    period: "Academic Innovation · Patent Application Published",
    shortDescription:
      "Developed an AI-powered interactive cooking assistant designed to support deaf, hearing-impaired, and low-vision individuals with accessible and personalized cooking guidance.",
    fullDescription:
      "An accessibility-first AI cooking companion engineered to assist deaf, hearing-impaired, and low-vision users in the kitchen. By combining multimodal text and voice interaction with speech-to-text transcription, LLM-driven culinary guidance, and text-to-speech playback, the system delivers adaptive step-by-step instructions, ingredient substitutions, and safety-conscious cooking support.",
    technologies: [
      "Python",
      "Speech-to-Text",
      "LLM Response Generation",
      "Text-to-Speech",
      "Accessible Interface Design",
    ],
    features: [
      "Text and voice interaction",
      "Speech-to-text conversion",
      "LLM-based response generation",
      "Text-to-speech functionality",
      "Personalized cooking instructions",
      "Ingredient substitution suggestions",
      "Safety-oriented cooking assistance",
      "Adaptive step-by-step guidance",
    ],
    image: cookingAssistantImg,
    imageAlt:
      "Accessible modern kitchen countertop featuring a sleek matte black smart display stand beside fresh culinary ingredients",
    featuredSpan: true,
    patent: {
      statusLabel: "Published Indian Patent Application",
      applicationNumber: "IN202641120639 A1",
      publicationDate: "16 October 2026",
      inventorNote:
        "Niranjan Kumar A is listed among the inventors on this published Indian patent application (published application — not claimed as a granted patent).",
    },
  },
  {
    id: "staff-profile-management",
    index: "02",
    title: "Staff Profile Management System",
    category: "Web Applications",
    period: "Web Application · React & Firebase",
    shortDescription:
      "Developed a Staff Profile Management System using React and Firebase to support staff profile creation, management, and real-time database updates.",
    fullDescription:
      "A centralized web application built with React and Firebase that streamlines faculty and staff directory operations. Administrators and staff can create structured profiles, edit records cleanly, and rely on real-time Firebase synchronization across desktop and mobile screens.",
    technologies: ["React.js", "Firebase", "JavaScript", "CSS"],
    features: [
      "Staff profile management",
      "Profile creation and editing",
      "Firebase database integration",
      "Responsive interface",
    ],
    image: staffPortalImg,
    imageAlt:
      "Dark studio workspace featuring a sleek monitor displaying a structured organizational profile directory interface",
  },
  {
    id: "asthra2k24-symposium",
    index: "03",
    title: "Asthra2k24 Symposium Website",
    category: "Web Applications",
    period: "College Symposium Platform · React.js & Firebase",
    shortDescription:
      "Developed a dynamic college symposium website using React.js and Firebase.",
    fullDescription:
      "An interactive event portal built for the Asthra2k24 college technical symposium using React.js and Firebase. Designed to handle student event discovery, online participant registration, live schedule visibility, and responsive mobile access for attendees.",
    technologies: ["React.js", "Firebase", "JavaScript", "HTML", "CSS"],
    features: [
      "User registration",
      "Event scheduling",
      "Real-time updates",
      "Responsive user interface",
    ],
    image: asthraSymposiumImg,
    imageAlt:
      "Modern university auditorium stage illuminated by clean geometric cobalt lighting lines",
  },
  {
    id: "shikshasakthi-awards",
    index: "04",
    title: "ShikshaSakthi Awards Website",
    category: "Freelance",
    period: "Freelance Project · July – August 2025",
    shortDescription:
      "Developed a responsive freelance website using HTML, CSS, and JavaScript.",
    fullDescription:
      "A client-commissioned freelance website created for the ShikshaSakthi Awards using semantic HTML, modern CSS, and vanilla JavaScript. Focused on clean presentation of award categories, fast page load performance, and seamless responsiveness across mobile and desktop devices.",
    technologies: ["HTML", "CSS", "JavaScript"],
    features: [
      "Semantic HTML5 structure and clean visual hierarchy",
      "Responsive multi-device layout across mobile and desktop",
      "Interactive client-side navigation and section transitions",
      "Lightweight frontend build focused on fast loading",
    ],
    image: shikshaAwardsImg,
    imageAlt:
      "Minimalist optical crystal and brushed brass recognition award resting on a dark slate plinth",
  },
  {
    id: "inviot-website",
    index: "05",
    title: "Inviot Website",
    category: "Freelance",
    period: "Freelance Project · July – August 2025",
    shortDescription: "Developed a website using React.js and JSX.",
    fullDescription:
      "A modern component-based web presence engineered during freelance web development engagement using React.js and JSX. Built around modular UI sections, clean typography, and responsive layout behavior.",
    technologies: ["React.js", "JSX", "CSS", "JavaScript"],
    features: [
      "Modular component architecture built with React.js and JSX",
      "Reusable layout sections with consistent spacing and typography",
      "Responsive presentation across desktop, tablet, and mobile viewports",
      "Clean client-side navigation flow",
    ],
    image: inviotPlatformImg,
    imageAlt:
      "Precision-milled matte black connected hardware edge unit resting on a dark architectural grid",
  },
];

export const CURRENT_EMPLOYMENT: ExperienceItem = {
  id: "concentrix-content-moderator",
  company: "Concentrix",
  designation: "Content Moderator",
  process: "Google Process",
  location: "Bengaluru, India",
  statusTag: "Recently Joined",
  period: "Present · Recently Joined",
  type: "full-time",
  description:
    "Recently started my professional journey as a Content Moderator at Concentrix, working in the Google Process. This role introduces me to digital content evaluation, policy-based decision-making, quality standards, and responsible online content practices.",
  highlights: [
    "Content evaluation",
    "Understanding platform policies",
    "Community guideline awareness",
    "Attention to detail",
    "Policy-based decision-making",
    "Maintaining content quality",
  ],
};

export const PREVIOUS_EXPERIENCES: ExperienceItem[] = [
  {
    id: "honeycomb-technologies",
    company: "Honeycomb Technologies",
    designation: "Software Developer Trainee Intern",
    period: "September 2025 – April 2026",
    type: "internship-freelance",
    description:
      "Completed hands-on software development training and contributed across frontend and backend application modules.",
    highlights: [
      "Developed frontend applications using React with JSX.",
      "Worked with Node.js and Express.",
      "Contributed to ServicePros and BestinGems projects.",
      "Worked on frontend and backend development tasks.",
    ],
    technologies: ["React.js", "JSX", "Node.js", "Express.js"],
  },
  {
    id: "freelance-web-development",
    company: "Freelance Web Development",
    designation: "Independent Frontend & Web Developer",
    period: "July 2025 – August 2025",
    type: "internship-freelance",
    description:
      "Designed and delivered responsive websites for independent client engagements.",
    highlights: [
      "Developed the ShikshaSakthi Awards responsive website using HTML, CSS, and JavaScript.",
      "Developed the Inviot website using React.js and JSX.",
    ],
    technologies: ["React.js", "JSX", "HTML", "CSS", "JavaScript"],
  },
  {
    id: "aicl-learning-simplified",
    company: "AICL Learning Simplified",
    designation: "Intern",
    period: "July 2024 – August 2024",
    type: "internship-freelance",
    description:
      "Worked on full-stack web application development using React and Node.js.",
    highlights: [
      "Built interactive frontend views in React paired with Node.js backend logic.",
      "Practiced end-to-end web application structure and component integration.",
    ],
    technologies: ["React.js", "Node.js", "JavaScript"],
  },
  {
    id: "pantech-e-learning",
    company: "Pantech E-Learning",
    designation: "Intern",
    period: "June 2023 – July 2023",
    type: "internship-freelance",
    description:
      "Worked on Java and Android application development using Android Studio.",
    highlights: [
      "Explored object-oriented Java fundamentals and mobile UI layouts in Android Studio.",
      "Built foundational Android application screens and event handlers.",
    ],
    technologies: ["Java", "Android Studio"],
  },
  {
    id: "aadhithyaa-infomedia",
    company: "Aadhithyaa Infomedia Technologies",
    designation: "Intern",
    period: "February 2023",
    type: "internship-freelance",
    description:
      "Focused on frontend web development using HTML, CSS, and JavaScript.",
    highlights: [
      "Practiced semantic HTML page structuring, responsive CSS styling, and DOM scripting.",
    ],
    technologies: ["HTML", "CSS", "JavaScript"],
  },
];

export const CAREER_JOURNEY: JourneyMilestone[] = [
  {
    year: "2021 – 2025",
    title: "B.Tech Information Technology",
    summary:
      "Completed undergraduate engineering studies in Information Technology at Meenakshi Sundararajan Engineering College, Chennai.",
  },
  {
    year: "2023",
    title: "Early Web & Mobile Internships",
    summary:
      "Started gaining practical experience through internships in frontend web development (Aadhithyaa Infomedia Technologies) and Java/Android basics (Pantech E-Learning).",
  },
  {
    year: "2024",
    title: "Full-Stack Internship & Academic Projects",
    summary:
      "Worked on full-stack development internship tasks at AICL Learning Simplified alongside college web and accessibility projects.",
  },
  {
    year: "2025",
    title: "Graduation, Freelance Builds & Development Training",
    summary:
      "Graduated in Information Technology, delivered freelance websites (ShikshaSakthi Awards and Inviot), and began software development training.",
  },
  {
    year: "2025 – 2026",
    title: "Software Developer Trainee Intern",
    summary:
      "Gained hands-on exposure to React, Node.js, Express, and web application development on ServicePros and BestinGems at Honeycomb Technologies.",
  },
  {
    year: "2026",
    title: "Concentrix — Google Process",
    summary:
      "Started a professional career as a Content Moderator at Concentrix in the Google Process in Bengaluru, focusing on digital content evaluation and policy standards.",
  },
];

export const PATENT_PUBLICATION = {
  title: "AI Interactive Cooking Assistant",
  status: "Published Indian Patent Application",
  publicationNumber: "IN202641120639 A1",
  publicationDate: "16 October 2026",
  attribution: "Niranjan Kumar A is listed among the inventors.",
  disclaimer:
    "Official status: Published patent application in the Indian Patent Office journal.",
};

export const ACHIEVEMENTS_LIST: AchievementItem[] = [
  {
    id: "nptel-c",
    index: "01",
    title: "Problem Solving Through Programming in C",
    category: "NPTEL Certification",
    yearOrContext: "Academic Credential",
    detail:
      "Structured programming fundamentals, control flow, arrays, pointers, and algorithmic logic in C.",
  },
  {
    id: "nptel-java",
    index: "02",
    title: "Programming in Java",
    category: "NPTEL Certification",
    yearOrContext: "Academic Credential",
    detail:
      "Object-oriented programming concepts, inheritance, interfaces, exception handling, and core Java APIs.",
  },
  {
    id: "icsica-2025",
    index: "03",
    title:
      "International Conference on Smart Intelligent Computing and Applications",
    category: "Academic Conference",
    yearOrContext: "2025",
    detail:
      "Participation in the 2025 International Conference on Smart Intelligent Computing and Applications.",
  },
  {
    id: "power-bi-workshop",
    index: "04",
    title: "Power BI Workshop",
    category: "Technical Workshop",
    yearOrContext: "Data Visualization",
    detail:
      "Hands-on workshop exploring interactive data modeling, visual reporting, and business analytics dashboards.",
  },
  {
    id: "cloud-computing-visit",
    index: "05",
    title: "Industrial Visit – Cloud Computing",
    category: "Industry Exposure",
    yearOrContext: "Cloud Infrastructure",
    detail:
      "Practical exposure to modern cloud infrastructure concepts, deployment models, and enterprise IT operations.",
  },
];
