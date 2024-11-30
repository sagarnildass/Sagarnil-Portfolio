import { projects } from "@/constants/projects";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import React, { useState } from "react";
import { AiFillCode } from "react-icons/ai";

import { HiOutlineCodeBracketSquare } from "react-icons/hi2";

import { BsTerminal } from "react-icons/bs";

export const Projects = () => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="max-w-5xl mx-auto px-8">
      <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-10 mt-20">
        {projects.map((project, idx) => (
          <a
            href={project.link}
            key={project?.link}
            className="relative group  block p-2"
            target="_blank" // Opens the link in a new tab
            rel="noopener noreferrer" // Improves security
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <AnimatePresence>
              {hoveredIndex === idx && (
                <motion.span
                  className="absolute inset-0 h-full w-full bg-zinc-800/[0.8]  rounded-3xl"
                  layoutId="hoverBackground"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: { duration: 0.15 },
                  }}
                  exit={{
                    opacity: 0,
                    transition: { duration: 0.15, delay: 0.2 },
                  }}
                />
              )}
            </AnimatePresence>
            <div className=" rounded-2xl overflow-hidden bg-zinc-800 border border-transparent group-hover:border-zinc-700 relative z-50">
              <div className="relative z-50">
                <div className="h-44 sm:h-60 md:h-44 w-full relative  transition duration-500 bg-black/10 group-hover:bg-transparent">
                  {/* <div className=" group-hover:bg-zinc-800 absolute h-20 bg-zinc-900 w-full bottom-0 z-20 [mask-image:linear-gradient(to_bottom,transparent,transparent,white)] transition duration-500" /> */}
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className=" absolute inset-0 object-cover object-center  mix-blend-multiply"
                  />
                </div>
                <div className="p-4">
                  <h2 className="text-zinc-100 font-bold tracking-wide mt-4">
                    {project.title}
                  </h2>
                  <p className="mt-8 text-zinc-300 tracking-wide leading-relaxed text-sm">
                    {project.description}
                  </p>

                  <div className="flex flex-row flex-wrap mt-8">
                    {project.stack.map((stack, idx) => (
                      <div key={`stack-${idx}`}>
                        {
                          <span className="text-gray-500 mr-4 inline-block  stroke-1">
                            {stack.icon}
                          </span>
                        }
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-row space-x-2 mt-4 items-center px-0.5">
                    <BsTerminal className="h-3 w-3 stroke-1.5 text-zinc-400 group-hover:text-cyan-500" />
                    <p
                      // href={project.link}
                      className="text-zinc-400 group-hover:text-cyan-500 text-xs"
                    >
                      View Source
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};
