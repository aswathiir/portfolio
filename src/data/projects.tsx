import AceTernityLogo from "@/components/logos/aceternity";
import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowUpRight, Link2 } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";
import { RiNextjsFill, RiNodejsFill, RiReactjsFill } from "react-icons/ri";
import {
  SiDocker,
  SiExpress,
  SiFigma,
  SiFirebase,
  SiGit,
  SiIntel,
  SiJavascript,
  SiKubernetes,
  SiMongodb,
  SiOpencv,
  SiPostgresql,
  SiPytorch,
  SiPython,
  SiReact,
  SiRos,
  SiSupabase,
  SiTailwindcss,
  SiTensorflow,
  SiTypescript,
} from "react-icons/si";
const BASE_PATH = "/assets/projects-screenshots";

const ProjectsLinks = ({ live, repo }: { live?: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      {live && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={live}
        >
          <Button variant={"default"} size={"sm"}>
            Visit Website
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
      {repo && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={repo}
        >
          <Button variant={"default"} size={"sm"}>
            Github
            <ArrowUpRight className="ml-3 w-5 h-5" />
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

const PROJECT_SKILLS = {
  python: {
    title: "Python",
    bg: "black",
    fg: "white",
    icon: <SiPython />,
  },
  tensorflow: {
    title: "TensorFlow",
    bg: "black",
    fg: "white",
    icon: <SiTensorflow />,
  },
  pytorch: {
    title: "PyTorch",
    bg: "black",
    fg: "white",
    icon: <SiPytorch />,
  },
  opencv: {
    title: "OpenCV",
    bg: "black",
    fg: "white",
    icon: <SiOpencv />,
  },
  ros2: {
    title: "ROS 2",
    bg: "black",
    fg: "white",
    icon: <SiRos />, // Assuming mapping or fallback if not found, simplified to generic if needed
  },
  intelrealsense: {
    title: "Intel RealSense",
    bg: "black",
    fg: "white",
    icon: <SiIntel />,
  },
  figma: {
    title: "Figma",
    bg: "black",
    fg: "white",
    icon: <SiFigma />,
  },
  rviz: {
    title: "Rviz",
    bg: "black",
    fg: "white",
    icon: <SiRos />, // Reusing ROS icon for Rviz as related
  },
  git: {
    title: "Git",
    bg: "black",
    fg: "white",
    icon: <SiGit />,
  },
  next: {
    title: "Next.js",
    bg: "black",
    fg: "white",
    icon: <RiNextjsFill />,
  },
  node: {
    title: "Node.js",
    bg: "black",
    fg: "white",
    icon: <RiNodejsFill />,
  },
  postgres: {
    title: "PostgreSQL",
    bg: "black",
    fg: "white",
    icon: <SiPostgresql />,
  },
  mongo: {
    title: "MongoDB",
    bg: "black",
    fg: "white",
    icon: <SiMongodb />,
  },
  express: {
    title: "Express",
    bg: "black",
    fg: "white",
    icon: <SiExpress />,
  },
  tailwind: {
    title: "Tailwind",
    bg: "black",
    fg: "white",
    icon: <SiTailwindcss />,
  },
  docker: {
    title: "Docker",
    bg: "black",
    fg: "white",
    icon: <SiDocker />,
  },
  kubernetes: {
    title: "Kubernetes",
    bg: "black",
    fg: "white",
    icon: <SiKubernetes />,
  },
  firebase: {
    title: "Firebase",
    bg: "black",
    fg: "white",
    icon: <SiFirebase />,
  },
  js: {
    title: "JavaScript",
    bg: "black",
    fg: "white",
    icon: <SiJavascript />,
  },
  ts: {
    title: "TypeScript",
    bg: "black",
    fg: "white",
    icon: <SiTypescript />,
  },
  react: {
    title: "React.js",
    bg: "black",
    fg: "white",
    icon: <RiReactjsFill />,
  },
  supabase: {
    title: "Supabase",
    bg: "black",
    fg: "white",
    icon: <SiSupabase />,
  },
};

export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live?: string;
};

const projects: Project[] = [
  {
    id: "neuromarketing",
    category: "AI & ML",
    title: "Neuromarketing Analysis",
    src: "/assets/projects-screenshots/neuromarketing/landing.png", // Placeholder path
    screenshots: ["landing.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.python,
        PROJECT_SKILLS.tensorflow,
      ],
      backend: [
        PROJECT_SKILLS.python,
      ],
    },
    live: "#",
    github: "https://github.com/aswathiir/neuromarketing_using_social_media_sentiment_analysis",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Decoding Consumer Minds with EEG & AI
          </TypographyP>
          <TypographyP className="font-mono ">
            Engineered a multimodal machine learning pipeline integrating 9,405 EEG segments with social media sentiment data across 144 supermarket products.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          
          <TypographyH3 className="my-4 mt-8">Key Features</TypographyH3>
          <ul className="list-disc ml-6 font-mono mb-2">
            <li>Implemented CNN-LSTM hybrid architecture achieving 79.2% accuracy in consumer preference prediction.</li>
            <li>Ensemble methods used: Logistic Regression, SVM, Random Forest.</li>
            <li>Designed advanced EEG signal processing pipeline: bandpass filtering, ICA artifact removal, multi-domain feature extraction.</li>
          </ul>
        </div>
      );
    },
  },
  {
    id: "road-levelling",
    category: "Computer Vision",
    title: "Road Levelling Analysis",
    src: "/assets/projects-screenshots/roadlevel/landing.png", // Placeholder
    screenshots: ["landing.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.opencv,
        PROJECT_SKILLS.ros2,
        PROJECT_SKILLS.intelrealsense,
      ],
      backend: [
        PROJECT_SKILLS.python,
        PROJECT_SKILLS.rviz,
      ],
    },
    live: "#",
    github: "https://github.com/aswathiir/rangenet-patchwork",
    get content() {
      return (
        <div>
           <TypographyP className="font-mono text-2xl text-center">
            Autonomous Road Infrastructure Classification
          </TypographyP>
          <TypographyP className="font-mono ">
            Engineered RGB-D computer vision pipeline classifying road infrastructure (potholes, speed bumps, pedestrian walkways) using Intel RealSense.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          
          <TypographyH3 className="my-4 mt-8">Key Innovations</TypographyH3>
          <ul className="list-disc ml-6 font-mono mb-2">
             <li>Implemented Patchwork++ algorithm with depth-based analysis achieving high-precision multi-class object segmentation.</li>
             <li>Developed ROS 2 and Rviz visualization system integrating multi-sensor data fusion from IMU and depth cameras.</li>
          </ul>
        </div>
      );
    },
  },
  {
    id: "legal-assistant",
    category: "LLM & NLP",
    title: "AI Legal Assistant",
    src: "/assets/projects-screenshots/legal/landing.png", // Placeholder
    screenshots: ["landing.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.python,
      ],
      backend: [
        PROJECT_SKILLS.python,
      ],
    },
    live: "#",
    github: "https://github.com/aswathiir/carla-trafficgenerator",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Know Your Rights - AI-Powered Legal Guidance
          </TypographyP>
           <TypographyP className="font-mono ">
            Integrated Large Language Models for automated legal document generation reducing preparation time by 70%.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Impact</TypographyH3>
          <ul className="list-disc ml-6 font-mono mb-2">
            <li>Architected end-to-end application providing Constitution-based legal guidance with contextual accuracy verification.</li>
            <li>Developed scalable backend APIs enabling rapid legal document customization and dynamic template generation.</li>
          </ul>
        </div>
      );
    },
  },
  {
      id: "worksync",
      category: "Cloud Native",
      title: "WorkSync Plus",
      src: "/assets/projects-screenshots/worksync/landing.png", // Placeholder
      screenshots: ["landing.png"],
      skills: {
        frontend: [
            PROJECT_SKILLS.python,
            PROJECT_SKILLS.docker,
            PROJECT_SKILLS.kubernetes,
        ],
        backend: [
            PROJECT_SKILLS.postgres,
            PROJECT_SKILLS.supabase,
        ]
      },
      live: "#",
      github: "https://github.com/aswathiir/worksyncpluspro",
       get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Cloud-Native Microservices Architecture
          </TypographyP>
           <TypographyP className="font-mono ">
            Architected production-grade cloud-native microservices ecosystem comprising five independently deployable services.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Architecture Details</TypographyH3>
          <ul className="list-disc ml-6 font-mono mb-2">
            <li>Deployed across Docker Compose and Kubernetes.</li>
            <li>Implemented comprehensive Kubernetes orchestration with ConfigMaps and JWT token validation.</li>
             <li>Designed Row-Level Security policies on Supabase PostgreSQL database supporting 10,000+ concurrent users with real-time WebSocket subscriptions.</li>
          </ul>
        </div>
      );
    },
  }
];
export default projects;
