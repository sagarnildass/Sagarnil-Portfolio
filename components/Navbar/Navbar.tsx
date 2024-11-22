import { navItems } from "@/constants/navItems";
import Link from "next/link";

import React from "react";

import { DesktopNav } from "./DesktopNav";
import { MobileNav } from "./MobileNav";

const Navbar = () => {
  return (
    <div className="flex flex-row items-center justify-between sm:justify-between py-8 max-w-5xl mx-auto relative z-[100] px-8 ">
      <div className="hidden lg:flex w-full justify-between">
        <DesktopNav navItems={navItems} />

        <a
          href="/cv.pdf"
          target="__blank"
          className="font-medium text-white inline-flex items-center justify-center rounded-[10px] bg-gradient-to-b from-[#464d55] to-[#25292e] text-sm px-4 py-2 transition duration-150 shadow-[0_10px_20px_rgba(0,_0,_0,_.1),0_3px_6px_rgba(0,_0,_0,_.05)] hover:shadow-[rgba(0,_1,_0,_.2)_0_2px_8px] active:outline-none hover:opacity-80 "
        >
          Download CV
        </a>
      </div>

      <div className="flex lg:hidden w-full">
        <MobileNav navItems={navItems} />
      </div>
    </div>
  );
};

export default Navbar;
