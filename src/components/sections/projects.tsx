"use client";
import Image from "next/image";
import React, { useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalTrigger,
} from "../ui/animated-modal";
import { FloatingDock } from "../ui/floating-dock";
import Link from "next/link";

import SmoothScroll from "../smooth-scroll";
import projects, { PROJECT_CATEGORIES, Project, ProjectCategory } from "@/data/projects";
import { cn } from "@/lib/utils";
import { SectionHeader } from "./section-header";

import SectionWrapper from "../ui/section-wrapper";

type Filter = "All" | ProjectCategory;
const FILTERS: Filter[] = ["All", ...PROJECT_CATEGORIES];

const ProjectsSection = () => {
  const [filter, setFilter] = useState<Filter>("All");
  const visible = useMemo(
    () => (filter === "All" ? projects : projects.filter((p) => p.category === filter)),
    [filter]
  );

  return (
    <SectionWrapper id="projects" className="max-w-7xl mx-auto px-4 md:px-8 pb-24">
      <SectionHeader
        id="projects"
        title="Projects"
        desc="Things I've built, broken and fixed. Tap a card for the full story."
        className="mb-10 md:mb-14 static"
      />

      <div
        role="tablist"
        aria-label="Filter projects"
        className="flex flex-wrap justify-center gap-2 mb-10"
      >
        {FILTERS.map((f) => {
          const count = f === "All" ? projects.length : projects.filter((p) => p.category === f).length;
          const active = f === filter;
          return (
            <button
              key={f}
              role="tab"
              aria-selected={active}
              onClick={() => setFilter(f)}
              className={cn(
                "relative rounded-full px-4 py-1.5 text-sm font-sans transition-colors",
                "border border-border backdrop-blur-sm",
                active
                  ? "text-background"
                  : "text-muted-foreground hover:text-foreground bg-background/90"
              )}
            >
              {active && (
                <motion.span
                  layoutId="project-filter-pill"
                  className="absolute inset-0 rounded-full bg-foreground"
                  transition={{ type: "spring", stiffness: 400, damping: 32 }}
                />
              )}
              <span className="relative z-10">
                {f} <span className="opacity-60 text-xs">{count}</span>
              </span>
            </button>
          );
        })}
      </div>

      <div key={filter} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {visible.map((project, i) => (
          <div key={project.id} className="pop-in" style={{ animationDelay: `${i * 50}ms` }}>
            <ProjectModal project={project} />
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

/** Card with a subtle 3D tilt that follows the pointer (disabled on touch). */
const TiltCard = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [style, setStyle] = useState<React.CSSProperties>({});
  const onMove = (e: React.PointerEvent) => {
    if (e.pointerType !== "mouse" || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    setStyle({
      transform: `perspective(900px) rotateX(${(-y * 8).toFixed(2)}deg) rotateY(${(x * 10).toFixed(2)}deg)`,
      ["--mx" as any]: `${((x + 0.5) * 100).toFixed(1)}%`,
      ["--my" as any]: `${((y + 0.5) * 100).toFixed(1)}%`,
    });
  };
  return (
    <div
      ref={ref}
      onPointerMove={onMove}
      onPointerLeave={() => setStyle({})}
      style={style}
      className="pe-auto group/tilt relative w-full rounded-xl overflow-hidden transition-transform duration-200 ease-out will-change-transform"
    >
      {children}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 group-hover/tilt:opacity-100 transition-opacity"
        style={{
          background:
            "radial-gradient(400px circle at var(--mx,50%) var(--my,50%), rgba(255,255,255,0.14), transparent 45%)",
        }}
      />
    </div>
  );
};

/** Generated cover for projects that don't have a screenshot yet. */
const ProjectCover = ({ project }: { project: Project }) => (
  <div
    className="absolute inset-0"
    style={{
      background: `radial-gradient(120% 90% at 0% 0%, ${project.accent}55 0%, transparent 55%),
                   radial-gradient(90% 80% at 100% 100%, ${project.accent}33 0%, transparent 60%),
                   linear-gradient(135deg, #0a0a0a 0%, #111827 100%)`,
    }}
  >
    <div
      className="absolute inset-0 opacity-[0.15]"
      style={{
        backgroundImage:
          "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
        backgroundSize: "28px 28px",
        maskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
        WebkitMaskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
      }}
    />
    <div className="absolute top-5 left-5 right-5 flex items-start justify-between">
      <span
        className={cn(
          "font-display leading-none tracking-tight text-white/90 whitespace-nowrap pr-3",
          "transition-transform duration-500 group-hover/tilt:-translate-y-1",
          project.title.split(" ")[0].length > 8
            ? "text-2xl sm:text-3xl xl:text-4xl"
            : "text-4xl xl:text-5xl"
        )}
        style={{ textShadow: `0 0 30px ${project.accent}` }}
      >
        {project.title.split(" ")[0]}
      </span>
      <div className="flex shrink-0 gap-1.5 text-xl text-white/70">
        {project.skills.ai.slice(0, 3).map((sk) => (
          <span key={sk.title} title={sk.title}>
            {sk.icon}
          </span>
        ))}
      </div>
    </div>
  </div>
);

const ProjectModal = ({ project }: { project: Project }) => {
  return (
    <Modal>
      <ModalTrigger className="bg-transparent w-full p-0 group/modal-btn text-left">
        <TiltCard>
          <div className="relative w-full" style={{ aspectRatio: "3/2" }}>
            {project.src ? (
              <Image
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover/tilt:scale-[1.05]"
                src={project.src}
                alt={project.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            ) : (
              <ProjectCover project={project} />
            )}
            <div className="absolute inset-x-0 bottom-0 h-3/4 bg-gradient-to-t from-black via-black/80 to-transparent pointer-events-none">
              <div className="flex flex-col h-full items-start justify-end p-5 gap-1.5 text-white">
                <div className="flex flex-wrap items-center gap-2 text-[11px] font-sans">
                  <span className="bg-white text-black rounded px-1.5 py-0.5">{project.category}</span>
                  <span className="text-white/60">{project.year}</span>
                  {project.badge && (
                    <span className="rounded-full border border-amber-300/60 text-amber-200 px-2 py-0.5 text-[10px] font-semibold">
                      {project.badge}
                    </span>
                  )}
                </div>
                <div className="text-lg md:text-xl leading-tight">{project.title}</div>
                <p className="text-xs font-sans text-white/70 line-clamp-2">{project.tagline}</p>
                <div className="text-[11px] font-mono mt-1 max-h-0 opacity-0 group-hover/tilt:max-h-6 group-hover/tilt:opacity-100 transition-all duration-300 text-emerald-300">
                  ▸ {project.highlight}
                </div>
              </div>
            </div>
          </div>
        </TiltCard>
      </ModalTrigger>
      <ModalBody className="md:max-w-4xl md:max-h-[85%] overflow-auto">
        <SmoothScroll isInsideModal={true}>
          <ModalContent>
            <ProjectContents project={project} />
          </ModalContent>
        </SmoothScroll>
        <ModalFooter className="gap-4">
          <ModalCloseButton className="dark:bg-black dark:text-white bg-white text-black text-sm px-2 py-1 rounded-md border border-black w-28">
            Close
          </ModalCloseButton>
          {(project.live || project.github) && (
            <Link href={(project.live || project.github)!} target="_blank" rel="noopener noreferrer">
              <span className="inline-block text-center bg-black text-white dark:bg-white dark:text-black text-sm px-2 py-1 rounded-md border border-black w-28">
                {project.live ? "Visit" : "GitHub"}
              </span>
            </Link>
          )}
        </ModalFooter>
      </ModalBody>
    </Modal>
  );
};
export default ProjectsSection;

const ProjectContents = ({ project }: { project: Project }) => {
  return (
    <>
      <h4 className="text-2xl md:text-4xl text-neutral-700 dark:text-neutral-100 font-bold text-center mb-2">
        {project.title}
      </h4>
      <p className="text-center text-sm md:text-base text-muted-foreground font-sans mb-8">
        {project.tagline}
      </p>
      <div className="flex flex-col md:flex-row md:justify-evenly max-w-screen overflow-hidden md:overflow-visible">
        {project.skills.ai.length > 0 && (
          <div className="flex flex-row md:flex-col-reverse justify-center items-center gap-2 text-3xl mb-8">
            <p className="text-sm mt-1 text-neutral-600 dark:text-neutral-500">AI / ML</p>
            <FloatingDock items={project.skills.ai} />
          </div>
        )}
        {project.skills.eng.length > 0 && (
          <div className="flex flex-row md:flex-col-reverse justify-center items-center gap-2 text-3xl mb-8">
            <p className="text-sm mt-1 text-neutral-600 dark:text-neutral-500">Engineering</p>
            <FloatingDock items={project.skills.eng} />
          </div>
        )}
      </div>
      {project.content}
    </>
  );
};
