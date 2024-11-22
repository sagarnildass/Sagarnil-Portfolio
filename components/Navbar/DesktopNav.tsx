import { CustomLink } from "@/components/CustomLink";
import { Logo } from "@/components/Logo";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import React, { useState } from "react";

export const DesktopNav = ({ navItems }: any) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  return (
    <div className="flex flex-row space-x-8 items-center antialiased border px-4 py-2 rounded-2xl border-zinc-700/60 bg-zinc-800 ">
      <Logo />
      {navItems.map((navItem: any, idx: number) => (
        <CustomLink
          key={`link=${idx}`}
          href={navItem.link}
          className="text-white text-sm relative"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0  transform  bg-zinc-700 scale-105 rounded-xl"
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
          <span className="relative z-10 px-2 py-2 inline-block">
            {navItem.name}
          </span>
        </CustomLink>
      ))}
    </div>
  );
};
