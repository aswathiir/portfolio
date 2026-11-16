"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { TOOLKIT } from "@/data/constants";
import { cn } from "@/lib/utils";
import SectionWrapper from "../ui/section-wrapper";

const ToolkitSection = () => {
  const [active, setActive] = useState(TOOLKIT[0].id);
  const group = TOOLKIT.find((g) => g.id === active) ?? TOOLKIT[0];

  return (
    <SectionWrapper id="toolkit" className="relative z-10 px-4 md:px-8 py-16">
      <div className="pe-auto max-w-5xl mx-auto rounded-2xl border border-border bg-background/70 backdrop-blur-xl p-5 md:p-10 shadow-xl">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-2 mb-6">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-sans">
              The full toolkit
            </p>
            <h3 className="text-2xl md:text-4xl font-bold mt-1">What I actually work with</h3>
          </div>
          <p className="text-sm text-muted-foreground font-sans md:max-w-xs md:text-right">
            The keyboard is the fun version. This is the complete list.
          </p>
        </div>

        {/* Category tabs: scroll horizontally on mobile */}
        <div
          role="tablist"
          aria-label="Skill categories"
          className="flex gap-2 overflow-x-auto pb-2 -mx-1 px-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden [mask-image:linear-gradient(to_right,black_80%,transparent)] md:[mask-image:none] md:flex-wrap"
        >
          {TOOLKIT.map((g) => {
            const isActive = g.id === active;
            return (
              <button
                key={g.id}
                role="tab"
                aria-selected={isActive}
                onClick={() => setActive(g.id)}
                className={cn(
                  "relative shrink-0 rounded-lg px-3 py-2 text-sm font-sans transition-colors whitespace-nowrap",
                  isActive ? "text-background" : "text-muted-foreground hover:text-foreground"
                )}
              >
                {isActive && (
                  <motion.span
                    layoutId="toolkit-tab"
                    className="absolute inset-0 rounded-lg bg-foreground"
                    transition={{ type: "spring", stiffness: 420, damping: 34 }}
                  />
                )}
                <span className="relative z-10">{g.title}</span>
              </button>
            );
          })}
        </div>

        <div className="min-h-[180px] md:min-h-[150px] mt-5">
          <div key={group.id} className="pop-in">
            <p className="text-sm text-muted-foreground font-sans mb-4">{group.blurb}</p>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item, i) => (
                <span
                  key={item}
                  style={{ animationDelay: `${i * 25}ms` }}
                  className="pop-in cursor-default select-none rounded-md border border-border bg-secondary/60 px-3 py-1.5 text-sm font-sans text-foreground transition-all duration-200 hover:-translate-y-0.5 hover:scale-105 hover:border-primary/50 hover:bg-secondary"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default ToolkitSection;
