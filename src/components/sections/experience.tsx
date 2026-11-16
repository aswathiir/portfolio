"use client";
import {
  ACHIEVEMENTS,
  CERTIFICATIONS,
  EXPERIENCE,
  Experience,
  PUBLICATIONS,
} from "@/data/constants";
import { SectionHeader } from "./section-header";
import { Badge } from "../ui/badge";
import { cn } from "@/lib/utils";
import SectionWrapper from "../ui/section-wrapper";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, BookOpen, Briefcase, GraduationCap, ScrollText } from "lucide-react";

const ExperienceSection = () => {
  return (
    <SectionWrapper id="experience" className="flex flex-col items-center justify-center py-20 z-10">
      <div className="w-full max-w-5xl px-4 md:px-8 mx-auto">
        <SectionHeader
          id="experience"
          title="Experience"
          desc="Where I've worked, what I'm studying, and what got published."
          className="mb-12 md:mb-16 mt-0 static"
        />

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-4 md:left-6 top-2 bottom-2 w-px bg-gradient-to-b from-primary/60 via-border to-transparent" />
          <div className="flex flex-col gap-8 md:gap-10">
            {EXPERIENCE.map((exp, index) => (
              <ExperienceCard key={exp.id} experience={exp} index={index} />
            ))}
          </div>
        </div>

        {/* Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
          <HighlightCard icon={<BookOpen className="w-5 h-5" />} title="Publications" delay={0}>
            <ul className="space-y-4">
              {PUBLICATIONS.map((p) => (
                <li key={p.title}>
                  <p className="text-foreground font-sans font-medium leading-snug">{p.title}</p>
                  <p className="text-xs text-muted-foreground font-sans mt-1">{p.venue}</p>
                </li>
              ))}
            </ul>
          </HighlightCard>

          <HighlightCard icon={<Award className="w-5 h-5" />} title="Awards" delay={0.1}>
            <ul className="space-y-4">
              {ACHIEVEMENTS.map((a) => (
                <li key={a.detail} className="flex items-baseline justify-between gap-3">
                  <div>
                    <p className="text-foreground font-sans font-medium">{a.title}</p>
                    <p className="text-sm text-muted-foreground font-sans">{a.detail}</p>
                  </div>
                  <span className="text-xs font-mono text-muted-foreground">{a.year}</span>
                </li>
              ))}
            </ul>
          </HighlightCard>

          <HighlightCard
            icon={<ScrollText className="w-5 h-5" />}
            title="Certifications"
            delay={0.2}
            className="md:col-span-2"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {CERTIFICATIONS.map((c) => (
                <div key={c.issuer}>
                  <p className="font-sans font-medium text-foreground">
                    {c.issuer} <span className="text-xs text-muted-foreground font-mono">· {c.year}</span>
                  </p>
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {c.items.map((i) => (
                      <Badge key={i} variant="secondary" className="font-sans font-normal text-xs">
                        {i}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </HighlightCard>
        </div>
      </div>
    </SectionWrapper>
  );
};

const HighlightCard = ({
  icon,
  title,
  children,
  delay,
  className,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
  delay: number;
  className?: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4, delay, ease: "easeOut" }}
    viewport={{ once: true, margin: "-50px" }}
    className={cn("pe-auto", className)}
  >
    <Card className="h-full bg-card/80 backdrop-blur-md border-border hover:border-primary/30 transition-colors">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-lg font-sans">
          <span className="text-primary">{icon}</span>
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  </motion.div>
);

const ExperienceCard = ({
  experience,
  index,
}: {
  experience: Experience;
  index: number;
}) => {
  const Icon = experience.type === "work" ? Briefcase : GraduationCap;
  return (
    <motion.div
      className="relative pl-12 md:pl-16 pe-auto"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.45, delay: index * 0.1, ease: "easeOut" }}
      viewport={{ once: true, margin: "-50px" }}
    >
      <div className="absolute left-0 md:left-2 top-6 flex items-center justify-center w-8 h-8 rounded-full bg-background border border-primary/40 shadow-[0_0_20px_-4px] shadow-primary/40">
        <Icon className="w-4 h-4 text-primary" />
      </div>
      <Card
        className={cn(
          "bg-card/80 backdrop-blur-md text-card-foreground border-border",
          "hover:border-primary/30 hover:-translate-y-0.5 transition-all duration-300",
          "shadow-sm hover:shadow-lg"
        )}
      >
        <CardHeader className="pb-3">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-3">
            <div className="space-y-1">
              <CardTitle className="text-xl font-bold tracking-tight font-sans">
                {experience.title}
              </CardTitle>
              <div className="text-base font-medium text-muted-foreground font-sans">
                {experience.company} · {experience.location}
              </div>
            </div>
            <Badge variant="secondary" className="w-fit font-mono text-xs font-normal shrink-0">
              {experience.startDate} – {experience.endDate}
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-5">
          <ul className="list-disc list-outside ml-4 space-y-2 text-sm md:text-base text-muted-foreground leading-relaxed font-sans">
            {experience.description.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-2">
            {experience.tags.map((tag) => (
              <Badge
                key={tag}
                variant="outline"
                className="text-xs font-normal font-sans bg-secondary/30 border-transparent"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ExperienceSection;
