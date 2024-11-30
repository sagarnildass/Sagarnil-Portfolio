import { timeline } from "@/constants/timeline";
import React from "react";
import { HiOutlineCheckCircle } from "react-icons/hi2";
import Beam from "./Beam/Beam";

export const Timeline = () => {
  return (
    <div className="max-w-3xl mx-auto   divide-zinc-800 relative">
      <div className="absolute h-full w-[4px] bg-gradient-to-b from-transparent via-cyan-500 to:transparent  -left-4 md:-left-10">
        <Beam showBeam={true} className={`left-1`} />
      </div>
      {timeline.map((item: any, idx: number) => (
        <div key={`timeline-item-${idx}`} className="border-b border-zinc-800">
          <h1 className="text-xl font-bold text-zinc-200 my-8 relative">
            <div className="h-3 md:h-4 w-3 md:w-4 border-2 border-cyan-500 bg-zinc-800 rounded-full absolute -left-[20px] md:-left-[46px] top-2 md:top-1" />
            {item.year}
          </h1>

          <div className="mb-8">
            {item.points.map((point: any, idx: number) => (
              <div
                key={`timeline-item-${idx}`}
                className="flex flex-row space-x-2 items-start my-2"
              >
                <HiOutlineCheckCircle className="text-cyan-500 mt-[3px] flex-shrink-0" />
                <span className="text-zinc-300 text-sm md:text-base">
                  {point}
                </span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
