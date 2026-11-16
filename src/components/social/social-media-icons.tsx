"use client";

import { useInView } from "framer-motion";
import React, { useRef } from "react";
import { Button } from "../ui/button";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { FileText, Mail } from "lucide-react";
import { config } from "@/data/config";
import Link from "next/link";

const BUTTONS = [
  {
    name: "GitHub",
    href: config.social.github,
    icon: <SiGithub size={"22"} />,
  },
  {
    name: "LinkedIn",
    href: config.social.linkedin,
    icon: <SiLinkedin size={"22"} />,
  },
  {
    name: "Email",
    href: `mailto:${config.email}`,
    icon: <Mail size={22} />,
  },
  {
    name: "Resume",
    href: config.resume,
    icon: <FileText size={22} />,
  },
];

const SocialMediaButtons = () => {
  const ref = useRef<HTMLDivElement>(null);
  const show = useInView(ref, { once: true });
  return (
    <div ref={ref} className="z-10">
      {show &&
        BUTTONS.map((button) => (
          <Link href={button.href} key={button.name} target="_blank" rel="noopener noreferrer" aria-label={button.name} title={button.name}>
            <Button variant={"ghost"} aria-label={button.name}>{button.icon}</Button>
          </Link>
        ))}
    </div>
  );
};

export default SocialMediaButtons;
