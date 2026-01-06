"use client";
import React, { useEffect, useState } from "react";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaPhone,
} from "react-icons/fa6";
import {
  SiDocker,
  SiGit,
  SiOpencv,
  SiPython,
  SiPytorch,
  SiRos,
  SiTensorflow,
  SiFigma,
} from "react-icons/si";

// @ts-ignore
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const CONTACT_LINKS = [
  {
    name: "Email",
    content: "aswathiranjikk@gmail.com",
    href: "mailto:aswathiranjikk@gmail.com",
    icon: <FaEnvelope height={"50px"} />,
  },
  {
    name: "Phone",
    content: "9746621918",
    href: "tel:9746621918",
    icon: <FaPhone height={"50px"} />,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/aswathiranjith/",
    content: "/aswathiranjith",
    icon: <FaLinkedin height={"50px"} />,
  },
  {
    name: "GitHub",
    href: "https://github.com/aswathiranjith",
    content: "/aswathiranjith",
    icon: <FaGithub height={"50px"} />,
  },
];

const TOOLS = [
  {
    name: "Python",
    content: "Programming Language",
    icon: <SiPython size={"50px"} color={"#3776AB"} />,
    color: "#3776AB",
  },
  {
    name: "TensorFlow",
    content: "ML Framework",
    icon: <SiTensorflow size={"50px"} color={"#FF6F00"} />,
    color: "#FF6F00",
  },
  {
    name: "PyTorch",
    content: "Deep Learning Framework",
    icon: <SiPytorch size={"50px"} color="#EE4C2C" />,
    color: "#EE4C2C",
  },
  {
    name: "OpenCV",
    content: "Computer Vision Library",
    icon: <SiOpencv size={"50px"} color="#5C3EE8" />,
    color: "#5C3EE8",
  },
  {
    name: "ROS 2",
    content: "Robot Operating System",
    icon: <SiRos size={"50px"} color="#22314E" />,
    color: "#22314E",
  },
  {
    name: "Docker",
    content: "Containerization",
    icon: <SiDocker size={"50px"} color="#2496ed" />,
    color: "#2496ed",
  },
  {
    name: "Git",
    content: "Version Control",
    icon: <SiGit size={"50px"} color="#f05032" />,
    color: "#f05032",
  },
  {
    name: "Figma",
    content: "Design Tool",
    icon: <SiFigma size={"50px"} color="#F24E1E" />,
    color: "#F24E1E",
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
        <aside className="w-full md:basis-1/4">
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
                  src="/assets/me.jpg" // Placeholder, user might need to upload their own image manually
                />
              </div>
              <div className="flex flex-col gap-3 lg:items-center ml-10 md:ml-20 lg:ml-0">
                <p className="text-center text-xl">Aswathi Ranjith</p>
                <div className="text-xs bg-zinc-700 w-fit px-3 py-1 rounded-full">
                  AI & ML Engineer
                </div>
              </div>
            </div>
            <div className="hidden lg:block">
              <hr className="my-10 border-zinc-600" />
              <ul className="flex flex-col gap-3">
                {CONTACT_LINKS.map((link) => (
                  <li key={link.name}>
                    <a
                      className="flex items-center px-3 gap-3 w-full h-12 border-zinc-700 bg-zinc-800 hover:border-zinc-600 border-[.5px] rounded-md "
                      href={link.href}
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
        <main className="basis-3/4 w-[500px]">
          <div
            className="p-10 border-[.5px] rounded-md border-zinc-600"
            style={{ backdropFilter: "blur(2px)" }}
          >
            <h1 className="text-3xl mb-10 lg:md-20">About me</h1>
            <p className="mb-10 text-roboto">
              I am <strong>Aswathi Ranjith</strong>, an AI Engineer specializing in Deep Learning, Computer Vision, and Real-time Image Processing. With a strong foundation in Python, TensorFlow, and PyTorch, I have engineered complex pipelines for Neuromarketing and Autonomous Robotics. I am passionate about leveraging AI to solve real-world problems.
            </p>
            <p className="mb-10">
              When I&apos;m not coding algorithms or training models, you can find me exploring new innovations in AI, participating in hackathons, or refining my skills in robotics visualization.
            </p>
            
            <h1 className="text-3xl mb-10 lg:md-20">Technical Arsenal</h1>
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
                    perPage: 4,
                    perMove: 1,
                    rewind: true,
                    easing: "cubic-bezier(0.25, 1, 0.5, 1)",
                    arrows: false,
                  }}
                  aria-label="My Favorite Images"
                >
                  {TOOLS.map((tool) => (
                    <SplideSlide key={tool.name}>
                      <div
                        key={tool.name}
                        className="w-fit p-2 border-[.5px] border-zinc-600 rounded-md"
                      >
                        {tool.icon}
                      </div>
                    </SplideSlide>
                  ))}
                </Splide>
              )}
            </div>

            <h1 className="text-3xl mt-10 mb-6">Achievements & Leadership</h1>
            <ul className="list-disc ml-5 mb-10 space-y-2 text-zinc-400">
               <li>
                 <strong>1st Runner Up - Altair RapidMiner Hackathon:</strong> Recognized for innovative data analytics and machine learning modeling approach.
               </li>
               <li>
                 <strong>Participant - Infosys Global Hackathon:</strong> Collaborated with multinational engineering team on scalable technology solutions.
               </li>
            </ul>

            <h1 className="text-3xl mt-10 mb-6">Certifications</h1>
            <div className="flex flex-col gap-8">
               <div className="flex flex-col gap-2">
                 <strong className="text-xl">Machine Learning Specialization - Udemy</strong>
                 <p className="text-zinc-400 text-sm mb-2">Hadelin de Ponteves</p>
                 <img src="/assets/certifications/udemy.png" alt="Udemy Certificate" className="rounded-md border border-zinc-700 w-full" />
               </div>
               <div className="flex flex-col gap-2">
                 <strong className="text-xl">Altair RapidMiner Hackathon - 1st Runner Up</strong>
                 <p className="text-zinc-400 text-sm mb-2">Team Arion, Nitte Meenakshi Institute of Technology</p>
                 <img src="/assets/certifications/altair.png" alt="Altair Certificate" className="rounded-md border border-zinc-700 w-full" />
               </div>
            </div>

          </div>
        </main>
      </div>
    </div>
  );
}

export default Page;
