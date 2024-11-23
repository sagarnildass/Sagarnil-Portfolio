import React from "react";

import { CustomLink } from "./CustomLink";
import {
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineTwitter,
} from "react-icons/ai";
import { navItems } from "@/constants/navItems";
import { Logo } from "./Logo";
import { user } from "@/constants/user";

export const Footer = () => {
  const socials = [
    {
      name: "twitter",
      icon: (
        <AiOutlineTwitter className="h-5 w-5 hover:text-primary transition duration-150" />
      ),
      link: user.twitter,
    },
    {
      name: "LinkedIn",
      icon: (
        <AiOutlineLinkedin className="h-5 w-5 hover:text-primary transition duration-150" />
      ),
      link: user.linkedin,
    },
    {
      name: "GitHub",
      icon: (
        <AiOutlineGithub className="h-5 w-5 hover:text-primary transition duration-150" />
      ),
      link: user.github,
    },
  ];
  return (
    <div className="border-t border-slate-900/5 py-10 max-w-6xl mx-auto px-8">
      <div className="flex flex-col justify-center items-center py-10 ">
        <Logo textClassName="text-white text-xl" />

        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 mt-4">
          {navItems.map((navItem: any, idx: number) => (
            <CustomLink
              key={`footer-link-${idx}`}
              href={navItem.link}
              className="text-zinc-100 text-sm relative"
            >
              <span className="relative z-10 px-2 py-2 inline-block">
                {navItem.name}
              </span>
            </CustomLink>
          ))}
        </div>
        <p className="text-zinc-200 text-sm font-light text-center mt-8 border-t border-zinc-800 pt-4">
          © {new Date().getFullYear()} Sagarnil Das. All rights
          reserved.
        </p>
        <div className="flex flex-row justify-center space-x-2 mt-2">
          {socials.map((socialLink: any, idx: number) => (
            <a
              key={`footer-link-${idx}`}
              href={socialLink.link}
              className="text-zinc-500 text-sm relative"
              target="__blank"
              aria-label={socialLink.name}
            >
              <span className="relative z-10 px-2 py-2 inline-block">
                {socialLink.icon}
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
