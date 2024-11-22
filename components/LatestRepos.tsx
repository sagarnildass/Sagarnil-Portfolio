import { Repository } from "@/types/repos";
import { truncateText } from "@/util/truncateText";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineFork, AiOutlineStar } from "react-icons/ai";

export const LatestRepos = ({
  repos,
  showMore = false,
}: {
  repos: Repository[];
  showMore?: Boolean;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="max-w-5xl mx-auto px-8 relative mb-20 overflow-hidden">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-20 mx-auto">
        {repos.map((repo: Repository, idx: number) => (
          <a
            href={repo.html_url}
            target="_blank" // Opens the link in a new tab
            rel="noopener noreferrer" // Improves security
            onMouseEnter={() => setHoveredIndex(idx)}
            key={repo?.html_url}
            onMouseLeave={() => setHoveredIndex(null)}
            className="group relative rounded-2xl border border-zinc-800 shadow-sm p-4 bg-gradient-to-b from-zinc-800 to-zinc-900 flex flex-col justify-between h-full"
          >
            <AnimatePresence>
              {hoveredIndex === idx && (
                <motion.span
                  className="absolute inset-0 h-full w-full bg-zinc-800  rounded-xl"
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
            <div className="relative z-50 flex flex-col justify-between h-full">
              <div>
                <h2 className="text-base text-zinc-100 font-bold">
                  {repo.name}
                </h2>
                <p className=" text-zinc-400 font-normal text-sm leading-loose mt-4 tracking-wide">
                  {truncateText(repo?.description, 100)}
                </p>
              </div>

              <div className="mt-4 flex flex-row space-x-4 items-center text-zinc-500 group-hover:text-cyan-500">
                <div className=" font-normal text-sm flex flex-row space-x-1 items-center ">
                  <AiOutlineFork className="h-4 w-4 stroke-1 " />
                  <span className=" group-hover:text-cyan-500">
                    {repo.forks_count}
                  </span>
                </div>
                <div className=" font-normal text-sm flex flex-row space-x-1 items-center">
                  <AiOutlineStar className="h-4 w-4 stroke-1 " />
                  <span className="">{repo.stargazers_count}</span>
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
      {showMore && (
        <div>
          <div className="absolute h-56 max-w-5xl mx-auto w-full bottom-0 bg-zinc-900 z-[60] [mask-image:linear-gradient(to_bottom,transparent,white_10rem,white)] transition duration-500 flex items-center justify-center" />

          <div className="flex justify-center relative z-[70] ">
            <Link
              href="/contributions"
              className="text-zinc-200 border border-zinc-600 bg-zinc-900 px-8 py-2 rounded-lg hover:border-zinc-700 hover:bg-zinc-800/[0.8] transition duration-200"
            >
              Show More
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};
