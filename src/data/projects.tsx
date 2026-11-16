import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";
import { RiNextjsFill } from "react-icons/ri";
import {
  SiAnthropic,
  SiDocker,
  SiFastapi,
  SiFlask,
  SiGooglegemini,
  SiKubernetes,
  SiMeta,
  SiOpencv,
  SiPostgresql,
  SiPytest,
  SiPytorch,
  SiPython,
  SiRos,
  SiSupabase,
  SiTensorflow,
  SiTypescript,
  SiWebrtc,
  SiIntel,
} from "react-icons/si";
import { TbDatabaseSearch, TbBrain, TbWaveSine, TbRoute, TbScan, TbMicrophone, TbHierarchy3 } from "react-icons/tb";

const ProjectsLinks = ({ live, repo }: { live?: string; repo?: string }) => {
  if (!live && !repo) return null;
  return (
    <div className="flex flex-wrap items-center justify-start gap-3 my-3 mb-8">
      {live && (
        <Link rel="noopener noreferrer" target="_blank" href={live}>
          <Button variant={"default"} size={"sm"}>
            Live demo
            <ArrowUpRight className="ml-2 w-4 h-4" />
          </Button>
        </Link>
      )}
      {repo && (
        <Link rel="noopener noreferrer" target="_blank" href={repo}>
          <Button variant={"outline"} size={"sm"}>
            View code on GitHub
            <ArrowUpRight className="ml-2 w-4 h-4" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};

const s = (title: string, icon: ReactNode): Skill => ({
  title,
  bg: "black",
  fg: "white",
  icon,
});

const PROJECT_SKILLS = {
  python: s("Python", <SiPython />),
  pytorch: s("PyTorch", <SiPytorch />),
  tensorflow: s("TensorFlow", <SiTensorflow />),
  opencv: s("OpenCV", <SiOpencv />),
  ros2: s("ROS 2", <SiRos />),
  realsense: s("Intel RealSense", <SiIntel />),
  fastapi: s("FastAPI", <SiFastapi />),
  flask: s("Flask", <SiFlask />),
  docker: s("Docker", <SiDocker />),
  kubernetes: s("Kubernetes", <SiKubernetes />),
  postgres: s("PostgreSQL", <SiPostgresql />),
  supabase: s("Supabase", <SiSupabase />),
  pytest: s("pytest", <SiPytest />),
  next: s("Next.js", <RiNextjsFill />),
  ts: s("TypeScript", <SiTypescript />),
  gemini: s("Gemini", <SiGooglegemini />),
  claude: s("Claude", <SiAnthropic />),
  llama: s("Llama 3.3 (Groq)", <SiMeta />),
  webrtc: s("WebRTC (Vapi)", <SiWebrtc />),
  rag: s("RAG", <TbDatabaseSearch />),
  llm: s("LLMs", <TbBrain />),
  lora: s("LoRA / GRPO", <TbBrain />),
  asr: s("ASR", <TbMicrophone />),
  signal: s("Signal processing", <TbWaveSine />),
  a2a: s("A2A agents", <TbHierarchy3 />),
  n8n: s("n8n", <TbRoute />),
  ocr: s("OCR / Donut", <TbScan />),
};

export type ProjectCategory =
  | "LLMs & Agents"
  | "Speech & Voice"
  | "Vision & Signals"
  | "Systems";

export const PROJECT_CATEGORIES: ProjectCategory[] = [
  "LLMs & Agents",
  "Speech & Voice",
  "Vision & Signals",
  "Systems",
];

export type Project = {
  id: string;
  category: ProjectCategory;
  title: string;
  tagline: string;
  year: string;
  /** Screenshot shown on the card. When missing, a generated cover is used. */
  src?: string;
  /** Accent colour for the generated cover. */
  accent: string;
  /** One headline number / fact shown on the card. */
  highlight: string;
  badge?: string;
  skills: { ai: Skill[]; eng: Skill[] };
  content: ReactNode;
  github?: string;
  live?: string;
};

const Bullets = ({ items }: { items: ReactNode[] }) => (
  <ul className="list-disc ml-6 font-mono mb-2 space-y-2 text-sm md:text-base">
    {items.map((it, i) => (
      <li key={i}>{it}</li>
    ))}
  </ul>
);

const Body = ({
  intro,
  live,
  repo,
  sections,
}: {
  intro: ReactNode;
  live?: string;
  repo?: string;
  sections: { heading: string; items: ReactNode[] }[];
}) => (
  <div>
    <TypographyP className="font-mono">{intro}</TypographyP>
    <ProjectsLinks live={live} repo={repo} />
    {sections.map((sec) => (
      <div key={sec.heading}>
        <TypographyH3 className="my-4 mt-8">{sec.heading}</TypographyH3>
        <Bullets items={sec.items} />
      </div>
    ))}
  </div>
);

const GH = "https://github.com/aswathiir";

const projects: Project[] = [
  {
    id: "sahai",
    category: "LLMs & Agents",
    title: "SAHAi",
    tagline: "An LLM tutor for coding-interview prep that never gives away the answer",
    year: "2026",
    accent: "#8b5cf6",
    highlight: "Reward spread 0 → 1.32",
    skills: {
      ai: [PROJECT_SKILLS.llm, PROJECT_SKILLS.lora, PROJECT_SKILLS.python],
      eng: [PROJECT_SKILLS.fastapi, PROJECT_SKILLS.docker, PROJECT_SKILLS.postgres, PROJECT_SKILLS.pytest],
    },
    github: `${GH}/SAHAi`,
    get content() {
      return (
        <Body
          repo={this.github}
          intro="SAHAi coaches students through DSA problems in Hinglish, Tanglish and English. The catch: it's trained with GRPO + LoRA on Qwen2.5 to nudge, not solve. The tutor is rewarded when the student solves the problem afterwards, and penalised when it leaks the answer."
          sections={[
            {
              heading: "What I built",
              items: [
                "Six Dockerised FastAPI microservices, including a sandboxed code executor, all covered by pytest.",
                "An evaluation stack with rule-based and LLM-as-a-judge pedagogy checks, execution-based leakage detection, and A/B benchmarking using McNemar's test.",
              ],
            },
            {
              heading: "What broke, and how I fixed it",
              items: [
                "Read through training transcripts to diagnose a zero-gradient reward, role inversion and truncated turns.",
                "Switched to a graded reward, which raised reward spread from 0 to 1.32 and cut truncated turns to about 5%.",
              ],
            },
          ]}
        />
      );
    },
  },
  {
    id: "voicerag",
    category: "Speech & Voice",
    title: "VoiceRAG",
    tagline: "A multi-tenant platform for voice AI agents grounded in each organisation's documents",
    year: "2026",
    accent: "#06b6d4",
    highlight: "Per-tenant RAG over voice",
    skills: {
      ai: [PROJECT_SKILLS.llama, PROJECT_SKILLS.rag, PROJECT_SKILLS.webrtc],
      eng: [PROJECT_SKILLS.next, PROJECT_SKILLS.ts, PROJECT_SKILLS.n8n],
    },
    github: `${GH}/voiceragui`,
    get content() {
      return (
        <Body
          repo={this.github}
          intro="Organisations upload their documents, and citizens can then ask questions by voice or text. Answers come only from that organisation's knowledge base. I first built it for querying Indian government welfare schemes."
          sections={[
            {
              heading: "How it works",
              items: [
                "A Vapi WebRTC voice agent backed by Groq-hosted Llama 3.3 70B, over a Pinecone RAG pipeline with per-tenant namespaces.",
                "Five-stage document ingestion (parse → chunk → embed → index) with live SSE progress in the dashboard.",
                "n8n workflows handle orchestration. The admin dashboard covers knowledge-base uploads, call monitoring and analytics.",
              ],
            },
          ]}
        />
      );
    },
  },
  {
    id: "moa-cas",
    category: "Speech & Voice",
    title: "MoA-CAS",
    tagline: "Adapter fine-tuning for code-switched Hindi-English speech recognition",
    year: "2026 – now",
    accent: "#f59e0b",
    highlight: "WER 55.4% → 45.4%",
    skills: {
      ai: [PROJECT_SKILLS.asr, PROJECT_SKILLS.pytorch, PROJECT_SKILLS.python],
      eng: [PROJECT_SKILLS.lora],
    },
    github: `${GH}/MoA-CAS`,
    get content() {
      return (
        <Body
          repo={this.github}
          intro="Indian speakers switch languages mid-sentence all the time, and ASR models struggle with it. MoA-CAS is my research project on closing that gap cheaply, using a dynamic mixture of small adapters on a frozen backbone."
          sections={[
            {
              heading: "Results so far",
              items: [
                "Benchmarked IndicConformer-600M at 7.93% WER on monolingual Hindi vs 57.14% on MUCS code-mixed speech, a 7.2× gap.",
                "Trained 1.1M-parameter bottleneck adapters (0.98% of a frozen 115M backbone), cutting WER from 55.4% to 45.4% on a speaker-disjoint test set (paired t = −4.84).",
                "Built a decode-validation gate that caught a vocabulary-mask bug hiding behind a nicely falling loss curve.",
              ],
            },
          ]}
        />
      );
    },
  },
  {
    id: "zelia",
    category: "LLMs & Agents",
    title: "ZELIA",
    tagline: "A voice-first welfare assistant for households that can't read or write",
    year: "2026",
    badge: "Springer · ICDAM 2026",
    accent: "#10b981",
    highlight: "Published at ICDAM 2026",
    skills: {
      ai: [PROJECT_SKILLS.rag, PROJECT_SKILLS.llm, PROJECT_SKILLS.ocr],
      eng: [PROJECT_SKILLS.fastapi, PROJECT_SKILLS.postgres, PROJECT_SKILLS.docker, PROJECT_SKILLS.n8n],
    },
    github: `${GH}/ZELIA`,
    get content() {
      return (
        <Body
          repo={this.github}
          intro="Millions of eligible people never claim welfare benefits because finding schemes and filling forms assumes you can read. ZELIA helps Community Health Workers go from a spoken conversation to a filled application form."
          sections={[
            {
              heading: "Under the hood",
              items: [
                "Hybrid retrieval that pairs MiniLM embeddings (FAISS) with a deterministic, rule-based eligibility engine, so the LLM never decides eligibility on its own.",
                "OCR-based PDF form-filling, with every stage running as a Dockerised microservice orchestrated by n8n.",
                "Published as ZELIA: Zero-Literacy Eligibility & Livelihood Intelligence Assistant, Proc. ICDAM 2026, Springer LNNS.",
              ],
            },
          ]}
        />
      );
    },
  },
  {
    id: "nutriguard",
    category: "Vision & Signals",
    title: "NutriGuard AI",
    tagline: "Reads a food label and tells you, personally, whether to worry",
    year: "2026",
    badge: "Springer · COMSYS 2026",
    accent: "#ef4444",
    highlight: "Published at COMSYS 2026",
    skills: {
      ai: [PROJECT_SKILLS.ocr, PROJECT_SKILLS.lora, PROJECT_SKILLS.llm],
      eng: [PROJECT_SKILLS.python],
    },
    get content() {
      return (
        <Body
          intro="Point a camera at a nutrition label and NutriGuard reads it, extracts the ingredients, and scores them against your own allergens and health profile, with an LLM explaining the result in plain language."
          sections={[
            {
              heading: "Pipeline",
              items: [
                "A LoRA-fine-tuned Donut model for OCR-free label understanding.",
                "NER over the extracted text, followed by allergen-aware health scoring.",
                "Published as NutriGuard AI: Personalized Food Label Analysis System, Proc. COMSYS 2026, Springer LNNS.",
              ],
            },
          ]}
        />
      );
    },
  },
  {
    id: "a2a-commerce",
    category: "LLMs & Agents",
    title: "Multi-Agent Commerce (A2A)",
    tagline: "AI agents added to Google's 11-service Online Boutique",
    year: "2025",
    accent: "#3b82f6",
    highlight: "11 microservices + agents",
    skills: {
      ai: [PROJECT_SKILLS.gemini, PROJECT_SKILLS.a2a, PROJECT_SKILLS.python],
      eng: [PROJECT_SKILLS.flask, PROJECT_SKILLS.docker, PROJECT_SKILLS.kubernetes],
    },
    github: `${GH}/onlineboutique-aiagent`,
    get content() {
      return (
        <Body
          repo={this.github}
          intro="I took Google's Online Boutique, a cloud-native gRPC microservices demo, and added a layer of cooperating AI agents to it."
          sections={[
            {
              heading: "What I added",
              items: [
                "An A2A coordinator that registers agents through health checks and routes search, cart and recommendation requests to them.",
                "A Gemini multimodal shopping concierge, plus sentiment/churn and styling agents, each running as its own containerised service (Flask / aiohttp) on Kubernetes.",
              ],
            },
          ]}
        />
      );
    },
  },
  {
    id: "neuromarketing",
    category: "Vision & Signals",
    title: "Neuromarketing with EEG + Sentiment",
    tagline: "Predicting consumer preference from brain signals and social media",
    year: "2025",
    src: "/assets/projects-screenshots/neuromarketing/landing.png",
    accent: "#a855f7",
    highlight: "79.2% accuracy (CNN-LSTM)",
    skills: {
      ai: [PROJECT_SKILLS.tensorflow, PROJECT_SKILLS.signal],
      eng: [PROJECT_SKILLS.python],
    },
    github: `${GH}/neuromarketing_using_social_media_sentiment_analysis`,
    get content() {
      return (
        <Body
          repo={this.github}
          intro="A multimodal pipeline that combines 9,405 EEG segments with social-media sentiment for 144 supermarket products, to predict what people will actually prefer."
          sections={[
            {
              heading: "Highlights",
              items: [
                "A CNN-LSTM hybrid that reaches 79.2% accuracy, benchmarked against Logistic Regression, SVM and Random Forest ensembles.",
                "EEG preprocessing in MATLAB: bandpass filtering, ICA artifact removal and multi-domain feature extraction.",
              ],
            },
          ]}
        />
      );
    },
  },
  {
    id: "road-levelling",
    category: "Vision & Signals",
    title: "Road Surface Perception",
    tagline: "RGB-D detection of potholes, speed bumps and walkways in ROS 2",
    year: "2025",
    src: "/assets/projects-screenshots/roadlevel/landing.png",
    accent: "#64748b",
    highlight: "Patchwork++ + RangeNet++",
    skills: {
      ai: [PROJECT_SKILLS.opencv, PROJECT_SKILLS.realsense],
      eng: [PROJECT_SKILLS.ros2, PROJECT_SKILLS.python],
    },
    github: `${GH}/rangenet-patchwork`,
    get content() {
      return (
        <Body
          repo={this.github}
          intro="A perception pipeline that classifies road infrastructure (potholes, speed bumps, pedestrian walkways) from an Intel RealSense depth camera."
          sections={[
            {
              heading: "Highlights",
              items: [
                "Combined Patchwork++ ground segmentation with RangeNet++ object segmentation and depth-based analysis.",
                "Fused IMU and depth data in ROS 2, with live visualisation in RViz.",
              ],
            },
          ]}
        />
      );
    },
  },
  {
    id: "airscript",
    category: "Vision & Signals",
    title: "AirScript",
    tagline: "Write in mid-air with your finger, using nothing but a webcam",
    year: "2025",
    accent: "#ec4899",
    highlight: "Real-time hand tracking",
    skills: {
      ai: [PROJECT_SKILLS.opencv, PROJECT_SKILLS.python],
      eng: [],
    },
    github: `${GH}/airscript`,
    get content() {
      return (
        <Body
          repo={this.github}
          intro="A real-time virtual whiteboard. A webcam tracks your hand gestures, and AirScript turns them into natural handwriting on screen, with no stylus or touchscreen needed."
          sections={[]}
        />
      );
    },
  },
  {
    id: "spotigpt",
    category: "LLMs & Agents",
    title: "SpotiGPT",
    tagline: "A music knowledge assistant built on RAG",
    year: "2025",
    accent: "#22c55e",
    highlight: "Hybrid search + RRF",
    skills: {
      ai: [PROJECT_SKILLS.rag, PROJECT_SKILLS.llm],
      eng: [PROJECT_SKILLS.python],
    },
    github: `${GH}/spotigpt`,
    get content() {
      return (
        <Body
          repo={this.github}
          intro="Ask about artists, albums or lyrics and SpotiGPT answers from real data. It pulls from the Spotify, Genius and MusicBrainz APIs, and Cohere generates the response."
          sections={[
            {
              heading: "Highlights",
              items: [
                "ChromaDB with Cohere embeddings, plus hybrid (dense + keyword) search merged with reciprocal rank fusion.",
                "Contextual chunking (512 tokens, 128 overlap) to keep answers grounded in the retrieved data.",
              ],
            },
          ]}
        />
      );
    },
  },
  {
    id: "worksync",
    category: "Systems",
    title: "WorkSync Plus",
    tagline: "A team monitoring platform built as cloud-native microservices",
    year: "2025",
    src: "/assets/projects-screenshots/worksync/landing.png",
    accent: "#0ea5e9",
    highlight: "5 services on Kubernetes",
    skills: {
      ai: [PROJECT_SKILLS.python],
      eng: [PROJECT_SKILLS.docker, PROJECT_SKILLS.kubernetes, PROJECT_SKILLS.supabase, PROJECT_SKILLS.postgres],
    },
    github: `${GH}/worksyncpluspro`,
    get content() {
      return (
        <Body
          repo={this.github}
          intro="A production-style ecosystem of five independently deployable services, running on both Docker Compose and Kubernetes."
          sections={[
            {
              heading: "Highlights",
              items: [
                "Kubernetes orchestration with ConfigMaps and JWT validation between services.",
                "Row-Level Security policies on Supabase PostgreSQL, with real-time WebSocket subscriptions.",
              ],
            },
          ]}
        />
      );
    },
  },
];

export default projects;
