export enum SkillNames {
  // AI/ML Core Skills
  AGENTICAI = "agentic ai",
  NLP = "nlp",
  COMPUTERVISION = "computer vision",

  // Development Tools
  N8N = "n8n",
  GIT = "Git",
  DOCKER = "Docker",

  // Frontend
  REACT = "React",
  HTML = "HTML",
  CSS = "CSS",
  TAILWIND = "Tailwindcsss",

  // Backend/Database
  MONGODB = "MongoDB",
  FIREBASE = "Firebase",
  SQL = "sql",

  // Programming Languages
  TYPESCRIPT = "Typescript",

  // Robotics/3D
  ROS = "ROS",
  RVIZ = "RVIZ",
  MATLAB = "Matlab",
  BLENDER = "blender",

  // Design
  FIGMA = "figma",

  // Other
  MAXIMO = "maximo",
}

export type Skill = {
  id: number;
  name: string;
  label: string;
  shortDescription: string;
  color: string;
  icon: string;
};

export const SKILLS: Record<SkillNames, Skill> = {
  // AI/ML Core Skills
  [SkillNames.AGENTICAI]: {
    id: 1,
    name: "agentic ai",
    label: "Agentic AI",
    shortDescription: "Autonomous AI agents",
    color: "#7C3AED",
    icon: "https://cdn-icons-png.flaticon.com/512/8637/8637099.png",
  },
  [SkillNames.NLP]: {
    id: 2,
    name: "nlp",
    label: "NLP",
    shortDescription: "Natural language processing",
    color: "#00D4AA",
    icon: "https://cdn-icons-png.flaticon.com/512/9850/9850872.png",
  },
  [SkillNames.COMPUTERVISION]: {
    id: 3,
    name: "computer vision",
    label: "Computer Vision",
    shortDescription: "Image processing & AI",
    color: "#5C3EE8",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg",
  },

  // Development Tools
  [SkillNames.N8N]: {
    id: 4,
    name: "n8n",
    label: "n8n",
    shortDescription: "Workflow automation",
    color: "#EA4B71",
    icon: "https://n8n.io/favicon.ico",
  },
  [SkillNames.GIT]: {
    id: 5,
    name: "Git",
    label: "Git",
    shortDescription: "Version control",
    color: "#F05032",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  [SkillNames.DOCKER]: {
    id: 6,
    name: "Docker",
    label: "Docker",
    shortDescription: "Containerization",
    color: "#2496ed",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  },

  // Frontend
  [SkillNames.REACT]: {
    id: 7,
    name: "React",
    label: "React",
    shortDescription: "UI library",
    color: "#61dafb",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  [SkillNames.HTML]: {
    id: 8,
    name: "HTML",
    label: "HTML",
    shortDescription: "Markup language",
    color: "#e34c26",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  [SkillNames.CSS]: {
    id: 9,
    name: "CSS",
    label: "CSS",
    shortDescription: "Styling",
    color: "#563d7c",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  [SkillNames.TAILWIND]: {
    id: 10,
    name: "Tailwindcsss",
    label: "Tailwind CSS",
    shortDescription: "Utility-first CSS",
    color: "#38bdf8",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
  },

  // Backend/Database
  [SkillNames.MONGODB]: {
    id: 11,
    name: "MongoDB",
    label: "MongoDB",
    shortDescription: "NoSQL database",
    color: "#4db33d",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  [SkillNames.FIREBASE]: {
    id: 12,
    name: "Firebase",
    label: "Firebase",
    shortDescription: "Backend platform",
    color: "#FFCA28",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
  },
  [SkillNames.SQL]: {
    id: 13,
    name: "sql",
    label: "SQL",
    shortDescription: "Database queries",
    color: "#00758F",
    icon: "https://cdn-icons-png.flaticon.com/512/4492/4492311.png",
  },

  // Programming Languages
  [SkillNames.TYPESCRIPT]: {
    id: 14,
    name: "Typescript",
    label: "TypeScript",
    shortDescription: "Typed JavaScript",
    color: "#007acc",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },

  // Robotics/3D
  [SkillNames.ROS]: {
    id: 15,
    name: "ROS",
    label: "ROS",
    shortDescription: "Robot Operating System",
    color: "#22314E",
    icon: "https://upload.wikimedia.org/wikipedia/commons/b/bb/Ros_logo.svg",
  },
  [SkillNames.RVIZ]: {
    id: 16,
    name: "RVIZ",
    label: "RViz",
    shortDescription: "3D visualization for ROS",
    color: "#FFFFFF",
    icon: "https://upload.wikimedia.org/wikipedia/commons/b/bb/Ros_logo.svg",
  },
  [SkillNames.MATLAB]: {
    id: 17,
    name: "Matlab",
    label: "MATLAB",
    shortDescription: "Numerical computing",
    color: "#E16737",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matlab/matlab-original.svg",
  },
  [SkillNames.BLENDER]: {
    id: 18,
    name: "blender",
    label: "Blender",
    shortDescription: "3D modeling",
    color: "#F5792A",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/blender/blender-original.svg",
  },

  // Design
  [SkillNames.FIGMA]: {
    id: 19,
    name: "figma",
    label: "Figma",
    shortDescription: "UI/UX design",
    color: "#F24E1E",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
  },

  // Other
  [SkillNames.MAXIMO]: {
    id: 20,
    name: "maximo",
    label: "Maximo",
    shortDescription: "Asset management",
    color: "#054ADA",
    icon: "https://cdn-icons-png.flaticon.com/512/2920/2920277.png",
  },
};

export type Experience = {
  id: number;
  startDate: string;
  endDate: string;
  title: string;
  company: string;
  description: string[];
  skills: SkillNames[];
};

export const EXPERIENCE: Experience[] = [
  {
    id: 1,
    startDate: "Expected 2027",
    endDate: "Present",
    title: "Bachelor of Technology in Artificial Intelligence",
    company: "Amrita Vishwa Vidyapeetham",
    description: [
      "CGPA: 7.67/10",
      "Specialization in AI, Deep Learning, and Computer Vision.",
      "Coimbatore, Tamil Nadu",
    ],
    skills: [
      SkillNames.AGENTICAI,
      SkillNames.NLP,
      SkillNames.COMPUTERVISION,
      SkillNames.ROS,
    ],
  },
  {
    id: 2,
    startDate: "2023",
    endDate: "Completed",
    title: "High School Education",
    company: "Kulapati Munshi Bhavans Vidya Mandir",
    description: [
      "Class 12th - 86%",
      "Class 10th - 94.5%",
      "Kerala",
    ],
    skills: [
      SkillNames.HTML,
      SkillNames.CSS,
    ],
  },
];

export const themeDisclaimers = {
  light: [
    "Warning: Light mode emits a gazillion lumens of pure radiance!",
    "Caution: Light mode ahead! Please don't try this at home.",
    "Only trained professionals can handle this much brightness. Proceed with sunglasses!",
    "Brace yourself! Light mode is about to make everything shine brighter than your future.",
    "Flipping the switch to light mode... Are you sure your eyes are ready for this?",
  ],
  dark: [
    "Light mode? I thought you went insane... but welcome back to the dark side!",
    "Switching to dark mode... How was life on the bright side?",
    "Dark mode activated! Thanks you from the bottom of my heart, and my eyes too.",
    "Welcome back to the shadows. How was life out there in the light?",
    "Dark mode on! Finally, someone who understands true sophistication.",
  ],
};
