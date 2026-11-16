/**
 * Keycap names MUST match the object names inside
 * public/assets/skills_keyboard_updated.spline exactly (case and spaces
 * included), otherwise hovering / pressing that key shows nothing.
 * The icons printed on the keys are baked into the Spline scene; to swap an
 * icon, edit the scene in the Spline editor and keep the object name in sync.
 */
export enum SkillNames {
  // Row 0
  COMPUTERVISION = "computer vision ",
  FIGMA = "figma",
  HTML = "HTML",
  CSS = "CSS",
  REACT = "React",
  MATLAB = "Matlab",
  // Row 1
  ROS = "ROS",
  TAILWIND = "tailwindcss",
  SQL = "sql",
  RVIZ = "RVIZ",
  MONGODB = "mongodb",
  // Row 2
  GIT = "Git",
  N8N = "n8n",
  NLP = "nlp",
  FIREBASE = "Firebase",
  AGENTICAI = "agentic ai",
  // Row 3
  DOCKER = "Docker",
  BLENDER = "blender",
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

const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons";

export const SKILLS: Record<SkillNames, Skill> = {
  [SkillNames.AGENTICAI]: {
    id: 1,
    name: SkillNames.AGENTICAI,
    label: "Agentic AI",
    shortDescription: "A2A multi-agent systems, MCP & tool calling",
    color: "#7C3AED",
    icon: "https://cdn-icons-png.flaticon.com/512/8637/8637099.png",
  },
  [SkillNames.NLP]: {
    id: 2,
    name: SkillNames.NLP,
    label: "NLP & Speech",
    shortDescription: "Indic ASR, IndicTrans2, NER & intent models",
    color: "#00D4AA",
    icon: "https://cdn-icons-png.flaticon.com/512/9850/9850872.png",
  },
  [SkillNames.COMPUTERVISION]: {
    id: 3,
    name: SkillNames.COMPUTERVISION,
    label: "Computer Vision",
    shortDescription: "OCR, Document AI & RGB-D perception",
    color: "#5C3EE8",
    icon: `${DEVICON}/opencv/opencv-original.svg`,
  },
  [SkillNames.N8N]: {
    id: 4,
    name: SkillNames.N8N,
    label: "n8n",
    shortDescription: "Workflow glue for RAG ingestion & agents",
    color: "#EA4B71",
    icon: "https://n8n.io/favicon.ico",
  },
  [SkillNames.GIT]: {
    id: 5,
    name: SkillNames.GIT,
    label: "Git",
    shortDescription: "Version control for every project",
    color: "#F05032",
    icon: `${DEVICON}/git/git-original.svg`,
  },
  [SkillNames.DOCKER]: {
    id: 6,
    name: SkillNames.DOCKER,
    label: "Docker",
    shortDescription: "Containerised FastAPI microservices",
    color: "#2496ed",
    icon: `${DEVICON}/docker/docker-original.svg`,
  },
  [SkillNames.REACT]: {
    id: 7,
    name: SkillNames.REACT,
    label: "React / Next.js",
    shortDescription: "Frontends for my AI products",
    color: "#61dafb",
    icon: `${DEVICON}/react/react-original.svg`,
  },
  [SkillNames.HTML]: {
    id: 8,
    name: SkillNames.HTML,
    label: "HTML",
    shortDescription: "Where it all started",
    color: "#e34c26",
    icon: `${DEVICON}/html5/html5-original.svg`,
  },
  [SkillNames.CSS]: {
    id: 9,
    name: SkillNames.CSS,
    label: "CSS",
    shortDescription: "Making demos look decent",
    color: "#563d7c",
    icon: `${DEVICON}/css3/css3-original.svg`,
  },
  [SkillNames.TAILWIND]: {
    id: 10,
    name: SkillNames.TAILWIND,
    label: "Tailwind CSS",
    shortDescription: "Fast UI for dashboards & this site",
    color: "#38bdf8",
    icon: `${DEVICON}/tailwindcss/tailwindcss-original.svg`,
  },
  [SkillNames.MONGODB]: {
    id: 11,
    name: SkillNames.MONGODB,
    label: "MongoDB",
    shortDescription: "Document storage for app data",
    color: "#4db33d",
    icon: `${DEVICON}/mongodb/mongodb-original.svg`,
  },
  [SkillNames.FIREBASE]: {
    id: 12,
    name: SkillNames.FIREBASE,
    label: "Firebase",
    shortDescription: "Quick auth & realtime prototypes",
    color: "#FFCA28",
    icon: `${DEVICON}/firebase/firebase-plain.svg`,
  },
  [SkillNames.SQL]: {
    id: 13,
    name: SkillNames.SQL,
    label: "SQL / PostgreSQL",
    shortDescription: "Supabase, Postgres & eligibility rules",
    color: "#00758F",
    icon: `${DEVICON}/postgresql/postgresql-original.svg`,
  },
  [SkillNames.ROS]: {
    id: 15,
    name: SkillNames.ROS,
    label: "ROS 2",
    shortDescription: "Robotics middleware & sensor fusion",
    color: "#22314E",
    icon: "https://upload.wikimedia.org/wikipedia/commons/b/bb/Ros_logo.svg",
  },
  [SkillNames.RVIZ]: {
    id: 16,
    name: SkillNames.RVIZ,
    label: "RViz",
    shortDescription: "3D visualisation of point clouds",
    color: "#FFFFFF",
    icon: "https://upload.wikimedia.org/wikipedia/commons/b/bb/Ros_logo.svg",
  },
  [SkillNames.MATLAB]: {
    id: 17,
    name: SkillNames.MATLAB,
    label: "MATLAB",
    shortDescription: "EEG & biosignal preprocessing",
    color: "#E16737",
    icon: `${DEVICON}/matlab/matlab-original.svg`,
  },
  [SkillNames.BLENDER]: {
    id: 18,
    name: SkillNames.BLENDER,
    label: "Blender",
    shortDescription: "3D modelling, for fun",
    color: "#F5792A",
    icon: `${DEVICON}/blender/blender-original.svg`,
  },
  [SkillNames.FIGMA]: {
    id: 19,
    name: SkillNames.FIGMA,
    label: "Figma",
    shortDescription: "Wireframes before I write code",
    color: "#F24E1E",
    icon: `${DEVICON}/figma/figma-original.svg`,
  },
  [SkillNames.MAXIMO]: {
    id: 20,
    name: SkillNames.MAXIMO,
    label: "IBM Maximo",
    shortDescription: "Enterprise asset management",
    color: "#054ADA",
    icon: "https://cdn-icons-png.flaticon.com/512/2920/2920277.png",
  },
};

/* ------------------------------------------------------------------ */
/* Full toolkit (shown as interactive chips under the 3D keyboard)    */
/* ------------------------------------------------------------------ */

export type ToolkitGroup = {
  id: string;
  title: string;
  blurb: string;
  items: string[];
};

export const TOOLKIT: ToolkitGroup[] = [
  {
    id: "genai",
    title: "Generative AI & LLMs",
    blurb: "Fine-tuning, retrieval and making sure the model actually behaves.",
    items: [
      "LLMs",
      "Prompt Engineering",
      "RAG",
      "Embeddings",
      "FAISS",
      "Pinecone",
      "ChromaDB",
      "PEFT / LoRA",
      "GRPO (RL)",
      "LLM Evaluation",
      "LLM-as-a-Judge",
    ],
  },
  {
    id: "agents",
    title: "Agentic AI & Tooling",
    blurb: "Agents that call tools, talk to each other and pick up the phone.",
    items: [
      "Multi-Agent Systems",
      "A2A",
      "Tool / Function Calling",
      "MCP",
      "Agent Skills",
      "Claude API",
      "Claude Code",
      "Gemini API",
      "n8n",
      "Vapi Voice Agents",
    ],
  },
  {
    id: "ml",
    title: "ML, NLP & Speech",
    blurb: "The modelling side: from Indic speech to document understanding.",
    items: [
      "PyTorch",
      "TensorFlow",
      "Hugging Face Transformers",
      "NLP",
      "NER",
      "Speech Recognition (ASR)",
      "IndicTrans2",
      "OCR / Document AI",
      "Computer Vision",
    ],
  },
  {
    id: "backend",
    title: "Backend, MLOps & Data",
    blurb: "Shipping models as services people can actually call.",
    items: [
      "FastAPI",
      "Flask",
      "REST APIs",
      "WebSocket",
      "Microservices",
      "Docker",
      "Kubernetes",
      "PostgreSQL",
      "Supabase",
      "pytest",
      "Git",
    ],
  },
  {
    id: "languages",
    title: "Languages",
    blurb: "Python first, everything else when the project needs it.",
    items: ["Python", "TypeScript (Next.js)", "SQL", "MATLAB", "Dart (Flutter)"],
  },
  {
    id: "learning",
    title: "Currently exploring",
    blurb: "Familiar through coursework and side experiments.",
    items: [
      "LangGraph",
      "Azure AI Foundry Agents",
      "AWS for LLM Apps",
      "CI/CD Pipelines",
    ],
  },
];

/* ------------------------------------------------------------------ */
/* Experience & education                                             */
/* ------------------------------------------------------------------ */

export type Experience = {
  id: number;
  type: "work" | "education";
  startDate: string;
  endDate: string;
  title: string;
  company: string;
  location: string;
  description: string[];
  tags: string[];
};

export const EXPERIENCE: Experience[] = [
  {
    id: 1,
    type: "work",
    startDate: "Apr 2026",
    endDate: "Jun 2026",
    title: "Backend AI / ML Intern",
    company: "i-Xceed Technology Solutions",
    location: "Bengaluru",
    description: [
      "Built a production-grade multilingual voice assistant for banking in Hindi, Tamil, Telugu and Kannada, combining IndicConformer 600M ASR, IndicTrans2 translation and Silero VAD.",
      "Wrote the NLU service: IndicBART intent classification over a 121-class banking navigation schema, routing each request to a structured app_id / screen_id action.",
      "Built a real-time FastAPI WebSocket backend with session keepalive, plus a Flutter client for low-latency voice interaction.",
      "Tracked down a wrong forced_bos_token_id in IndicTrans2 inference that was quietly breaking translations, and restored accuracy across all four languages.",
    ],
    tags: ["Python", "FastAPI", "WebSocket", "IndicConformer", "IndicTrans2", "IndicBART", "Flutter"],
  },
  {
    id: 2,
    type: "education",
    startDate: "2023",
    endDate: "2027 (expected)",
    title: "B.Tech in Artificial Intelligence",
    company: "Amrita Vishwa Vidyapeetham",
    location: "Coimbatore",
    description: [
      "CGPA 7.86 / 10.",
      "Coursework: Machine Learning, Deep Learning, NLP, Data Structures & Algorithms, Cloud Computing, Distributed Systems.",
      "Two papers accepted in Springer LNNS (ICDAM 2026 and COMSYS 2026).",
    ],
    tags: ["ML", "Deep Learning", "NLP", "DSA", "Cloud", "Distributed Systems"],
  },
];

/* ------------------------------------------------------------------ */
/* Publications, certifications, awards                               */
/* ------------------------------------------------------------------ */

export const PUBLICATIONS = [
  {
    title: "ZELIA: Zero-Literacy Eligibility & Livelihood Intelligence Assistant",
    venue: "Proc. ICDAM 2026, Springer LNNS",
  },
  {
    title: "NutriGuard AI: Personalized Food Label Analysis System",
    venue: "Proc. COMSYS 2026, Springer LNNS",
  },
];

export const ACHIEVEMENTS = [
  { title: "2nd Prize", detail: "Siemens Student Competition", year: "2026" },
  { title: "1st Runner-Up", detail: "Altair RapidMiner Hackathon", year: "2025" },
];

export const CERTIFICATIONS = [
  {
    issuer: "Anthropic",
    year: "2026",
    items: [
      "Claude API",
      "MCP (Intro + Advanced)",
      "Agent Skills",
      "Claude Code",
      "Claude on Google Cloud",
      "AI Fluency",
      "Claude 101",
    ],
  },
  {
    issuer: "Microsoft Learn",
    year: "2026",
    items: [
      "Develop AI Agents on Azure",
      "Discover Microsoft Foundry Agents with A2A",
    ],
  },
  {
    issuer: "Udemy · AWS Educate",
    year: "2025",
    items: [
      "Machine Learning A-Z: AI, Python",
      "Introduction to Generative AI",
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
    "Dark mode activated! Thank you from the bottom of my heart, and my eyes too.",
    "Welcome back to the shadows. How was life out there in the light?",
    "Dark mode on! Finally, someone who understands true sophistication.",
  ],
};
