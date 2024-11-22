import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { AiFillPlayCircle } from "react-icons/ai";

const Talks = ({
  url,
  company,
  image,
  title,
  description,
}: {
  url: string;
  company: string;
  image: string;
  title: string;
  description: string;
}) => {
  return (
    <a
      href={url}
      className="flex flex-col md:flex-row space-x-0 md:space-x-4 mb-20 relative justify-start items-start group"
      target="__blank"
    >
      <Image
        src={image}
        width={1024}
        height={720}
        alt="Video Thumbnail"
        className="rounded-md w-72 mb-4 md:mb-0 aspect-video object-cover"
      />
      <div className="flex flex-col justify-between">
        <div>
          {/* <div className="flex flex-row space-x-4 mb-4 relative">
            <div className="w-[2px] h-full bg-zinc-800  absolute left-0"></div>
            <p className="text-zinc-500 text-sm">{company}</p>
          </div> */}
          <h4 className="font-bold text-base md:text-xl tracking-tight text-zinc-300 mb-2">
            {title}
          </h4>
          <p className="text-zinc-400 text-sm">{description}</p>
          <p className="text-zinc-600 group-hover:text-cyan-500 transition duration-200 text-sm mt-2 inline-block">
            <AiFillPlayCircle className="inline-block mb-[2px]" />{" "}
            <span>Watch Video</span>
          </p>
        </div>
      </div>
    </a>
  );
};

export default Talks;
