import { Logo } from "@/components/Logo";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { IoIosCloseCircleOutline, IoIosMenu } from "react-icons/io";
import { CustomLink } from "../CustomLink";

export const MobileNav = ({ navItems }: any) => {
  const [open, setOpen] = useState(false);
  const item = {
    exit: {
      opacity: 0,
      transition: {
        ease: "easeInOut",
        duration: 0.1,
      },
    },
    show: {
      height: "100vh",
      opacity: 1,
      transition: { duration: 0.1, staggerChildren: 0.1 },
    },
    hidden: {
      opacity: 0,
      height: 0,
    },
  };

  const childItems = {
    hidden: { x: "-2vw", opacity: 0 },
    show: { x: 0, opacity: 1 },
  };
  const router = useRouter();
  return (
    <>
      <div className="flex flex-row justify-between items-center w-full">
        <Logo textClassName="text-zinc-100" />
        <IoIosMenu onClick={() => setOpen(!open)} className="text-zinc-100" />
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            variants={item}
            initial="hidden"
            animate="show"
            exit="exit"
            className="fixed inset-0 bg-zinc-800 z-50 flex flex-col justify-center items-center space-y-10  text-xl font-bold text-zinc-600  hover:text-zinc-800 transition duration-200"
          >
            <IoIosCloseCircleOutline
              className="absolute right-8 top-14 h-5 w-5 text-zinc-100"
              onClick={() => setOpen(!open)}
            />
            {navItems.map((navItem: any, idx: number) => (
              <CustomLink
                key={`link=${idx}`}
                href={navItem.link}
                className="text-zinc-200"
              >
                <motion.span variants={childItems} className="block">
                  {navItem.name}
                </motion.span>
              </CustomLink>
            ))}
            <motion.a
              variants={childItems}
              href="/cv.pdf"
              target="__blank"
              className="text-white inline-flex items-center justify-center rounded-[10px] bg-gradient-to-b from-[#464d55] to-[#25292e] text-sm px-4 py-2 shadow-[0_10px_20px_rgba(0,_0,_0,_.1),0_3px_6px_rgba(0,_0,_0,_.05)] hover:shadow-[rgba(0,_1,_0,_.2)_0_2px_8px] active:outline-none hover:opacity-80 "
            >
              Download CV
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
