"use client";
import React, { useEffect, useState } from "react";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  } from "react-icons/fa6";
import {
  SiAnthropic,
  SiDocker,
  SiFastapi,
  SiFlutter,
  SiGit,
  SiKubernetes,
  SiNextdotjs,
  SiPostgresql,
  SiPython,
  SiPytorch,
  SiTensorflow,
} from "react-icons/si";
import { config } from "@/data/config";
import {
  ACHIEVEMENTS,
  CERTIFICATIONS,
  PUBLICATIONS,
} from "@/data/constants";

// @ts-ignore
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const CONTACT_LINKS = [
  {
    name: "Email",
    content: config.email,
    href: `mailto:${config.email}`,
    icon: <FaEnvelope height={"50px"} />,
  },
  {
    name: "LinkedIn",
    href: config.social.linkedin,
    content: "/in/aswathiranjith",
    icon: <FaLinkedin height={"50px"} />,
  },
  {
    name: "GitHub",
    href: config.social.github,
    content: "/aswathiir",
    icon: <FaGithub height={"50px"} />,
  },
];

const TOOLS = [
  {
    name: "Python",
    icon: <SiPython size={"50px"} color="#3776AB" />,
  },
  {
    name: "PyTorch",
    icon: <SiPytorch size={"50px"} color="#EE4C2C" />,
  },
  {
    name: "TensorFlow",
    icon: <SiTensorflow size={"50px"} color="#FF6F00" />,
  },
  {
    name: "Claude API",
    icon: <SiAnthropic size={"50px"} color="#D97757" />,
  },
  {
    name: "FastAPI",
    icon: <SiFastapi size={"50px"} color="#009688" />,
  },
  {
    name: "Docker",
    icon: <SiDocker size={"50px"} color="#2496ed" />,
  },
  {
    name: "Kubernetes",
    icon: <SiKubernetes size={"50px"} color="#326CE5" />,
  },
  {
    name: "PostgreSQL",
    icon: <SiPostgresql size={"50px"} color="#4169E1" />,
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs size={"50px"} color="#ffffff" />,
  },
  {
    name: "Flutter",
    icon: <SiFlutter size={"50px"} color="#02569B" />,
  },
  {
    name: "Git",
    icon: <SiGit size={"50px"} color="#f05032" />,
  },
];

function Page() {
  const [toolsLoaded, setToolsLoaded] = useState(false);
  useEffect(() => {
    setToolsLoaded(true);
  }, []);
  return (
    <div className="container mx-auto px-4 md:px-[50px] xl:px-[200px] text-zinc-300 pt-20 pb-20">
      <div className="flex flex-col lg:flex-row gap-5">
        <aside className="w-full lg:basis-1/4 lg:shrink-0">
          <div
            className="p-4 md:p-8 lg:p-10 rounded-2xl border-[.5px] border-zinc-600"
            style={{
              backdropFilter: "blur(2px)",
            }}
          >
            <div className="flex flex-row lg:flex-col items-center">
              <div className="flex justify-center items-center lg:w-full lg:aspect-square bg-zinc-800 rounded-xl lg:mb-5">
                <img
                  className="rounded-full p-4 lg:p-10 w-[100px] md:w-[150px] lg:w-[200px] aspect-square  bg-zinc-800"
                  alt="me"
                  src="/assets/me.jpg"
                />
              </div>
              <div className="flex flex-col gap-3 lg:items-center ml-6 md:ml-20 lg:ml-0">
                <p className="text-center text-xl">Aswathi Ranjith</p>
                <div className="text-xs bg-zinc-700 w-fit px-3 py-1 rounded-full">
                  AI Engineer · LLMs & Voice AI
                </div>
                <p className="text-xs text-zinc-500 font-sans">{config.location}</p>
              </div>
            </div>
            <div>
              <hr className="my-6 lg:my-10 border-zinc-600" />
              <ul className="flex flex-col gap-3">
                {CONTACT_LINKS.map((link) => (
                  <li key={link.name}>
                    <a
                      className="flex items-center px-3 gap-3 w-full h-12 border-zinc-700 bg-zinc-800 hover:border-zinc-600 border-[.5px] rounded-md "
                      href={link.href}
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                    >
                      <div className="w-8">{link.icon}</div>
                      <div className="flex flex-col">
                        <div className="text-sm">{link.name}</div>
                        <div className="text-xs text-zinc-500">
                          {link.content}
                        </div>
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </aside>
        <main className="basis-3/4 min-w-0">
          <div
            className="p-5 md:p-10 border-[.5px] rounded-md border-zinc-600"
            style={{ backdropFilter: "blur(2px)" }}
          >
            <h1 className="text-3xl mb-6 md:mb-10">About me</h1>
            <div className="space-y-5 mb-10 font-sans text-zinc-300 leading-relaxed">
              <p>
                Hi, I&apos;m <strong>Aswathi</strong>. I&apos;m in the final year of a B.Tech in
                Artificial Intelligence at Amrita Vishwa Vidyapeetham, Coimbatore, graduating in 2027.
                These days most of my time goes into LLMs, multi-agent systems and voice AI.
              </p>
              <p>
                This year I interned as a Backend AI/ML engineer at i-Xceed, where I helped ship a
                multilingual banking voice assistant that works in Hindi, Tamil, Telugu and Kannada.
                That covered speech recognition, translation, intent models and a real-time WebSocket
                backend, plus a lot of debugging to find out why translations were quietly going wrong.
              </p>
              <p>
                Outside work I build RAG pipelines, A2A multi-agent services and LoRA/GRPO fine-tuned
                models, and I care a lot about evaluation: LLM-as-a-judge, leakage checks, and A/B
                tests that hold up statistically. Two of my projects, ZELIA and NutriGuard AI, were
                published in Springer LNNS.
              </p>
              <p className="text-zinc-400">
                I&apos;m most interested in AI for people who usually get left out: low-literacy
                users, Indian languages, code-mixed speech. If you&apos;re working on something like
                that, I&apos;d love to hear about it.
              </p>
            </div>

            <h2 className="text-3xl mb-6 md:mb-10">Tools I reach for</h2>
            <div className="mb-5">
              {!toolsLoaded ? (
                <p className="h-[100px]"></p>
              ) : (
                <Splide
                  options={{
                    type: "loop",
                    interval: 2000,
                    autoplay: true,
                    pagination: false,
                    speed: 2000,
                    perPage: 5,
                    perMove: 1,
                    gap: "0.75rem",
                    breakpoints: { 1024: { perPage: 4 }, 640: { perPage: 3 } },
                    easing: "cubic-bezier(0.25, 1, 0.5, 1)",
                    arrows: false,
                  }}
                  aria-label="Tools I use"
                >
                  {TOOLS.map((tool) => (
                    <SplideSlide key={tool.name}>
                      <div
                        title={tool.name}
                        className="flex flex-col items-center gap-2 w-fit p-3 border-[.5px] border-zinc-600 rounded-md hover:border-zinc-400 transition-colors"
                      >
                        {tool.icon}
                        <span className="text-[10px] font-sans text-zinc-400">{tool.name}</span>
                      </div>
                    </SplideSlide>
                  ))}
                </Splide>
              )}
            </div>

            <h2 className="text-3xl mt-10 mb-6">Publications</h2>
            <ul className="list-disc ml-5 mb-10 space-y-3 text-zinc-400 font-sans">
              {PUBLICATIONS.map((p) => (
                <li key={p.title}>
                  <strong className="text-zinc-200">{p.title}</strong>
                  <br />
                  <span className="text-sm">A. Ranjith et al., {p.venue}</span>
                </li>
              ))}
            </ul>

            <h2 className="text-3xl mt-10 mb-6">Awards</h2>
            <ul className="list-disc ml-5 mb-10 space-y-2 text-zinc-400 font-sans">
              {ACHIEVEMENTS.map((a) => (
                <li key={a.detail}>
                  <strong className="text-zinc-200">{a.title}</strong>, {a.detail} ({a.year})
                </li>
              ))}
            </ul>

            <h2 className="text-3xl mt-10 mb-6">Certifications</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10 font-sans">
              {CERTIFICATIONS.map((c) => (
                <div key={c.issuer} className="rounded-md border-[.5px] border-zinc-700 p-4">
                  <p className="text-zinc-200 font-medium">
                    {c.issuer} <span className="text-xs text-zinc-500">· {c.year}</span>
                  </p>
                  <ul className="mt-2 space-y-1 text-sm text-zinc-400">
                    {c.items.map((i) => (
                      <li key={i}>{i}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <figure className="flex flex-col gap-2">
                <img
                  src="/assets/certifications/altair.png"
                  alt="Altair RapidMiner Hackathon, 1st Runner-Up certificate"
                  loading="lazy"
                  className="rounded-md border border-zinc-700 w-full"
                />
                <figcaption className="text-xs text-zinc-500 font-sans">
                  Altair RapidMiner Hackathon, 1st Runner-Up (Team Arion)
                </figcaption>
              </figure>
              <figure className="flex flex-col gap-2">
                <img
                  src="/assets/certifications/udemy.png"
                  alt="Machine Learning A-Z certificate, Udemy"
                  loading="lazy"
                  className="rounded-md border border-zinc-700 w-full"
                />
                <figcaption className="text-xs text-zinc-500 font-sans">
                  Machine Learning A-Z: AI, Python (Udemy)
                </figcaption>
              </figure>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Page;
