const config = {
  title: "Aswathi Ranjith | AI Engineer · LLMs, Agentic AI & Voice AI",
  description: {
    long: "Portfolio of Aswathi Ranjith, a final-year B.Tech AI student and AI Engineer building LLM, multi-agent and voice AI systems: RAG pipelines, A2A multi-agent services, LoRA/GRPO fine-tuned LLMs, multilingual speech and LLM-as-a-judge evaluation. Two Springer publications.",
    short:
      "AI Engineer building LLM, multi-agent and voice AI systems in Python.",
  },
  keywords: [
    "Aswathi Ranjith",
    "AI Engineer",
    "LLM",
    "Agentic AI",
    "Multi-Agent Systems",
    "RAG",
    "Voice AI",
    "Speech Recognition",
    "LoRA",
    "GRPO",
    "MCP",
    "FastAPI",
    "PyTorch",
    "Amrita Vishwa Vidyapeetham",
    "portfolio",
  ],
  author: "Aswathi Ranjith",
  role: "AI Engineer",
  tagline: "LLMs · Agentic AI · Voice AI",
  email: "aswathiranjikk@gmail.com",
  location: "Thrissur, Kerala, India",
  site: "https://portfolio-sandy-six-30.vercel.app",
  resume: "/assets/resume.pdf",

  // for github stars button
  githubUsername: "aswathiir",
  githubRepo: "portfolio",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    linkedin: "https://www.linkedin.com/in/aswathiranjith/",
    github: "https://github.com/aswathiir",
  },
};
export { config };
