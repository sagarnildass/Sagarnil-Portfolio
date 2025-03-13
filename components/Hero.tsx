import React from "react";
import { LinkPreview } from "./LinkPreview";
import Link from "next/link";

export const Hero = () => {
  return (
    <div className="max-w-5xl mx-auto mt-10 md:mt-20 px-8 ">
      <h1 className="font-bold text-3xl md:text-5xl leading-tight text-zinc-50 max-w-3xl">
        I'm a tech-savvy dreamer on a mission to make AI less about{" "}
        <span className="text-cyan-500">robots taking over the world.</span>
      </h1>
      <p className="text-zinc-300 text-sm md:text-base max-w-2xl mt-8 md:leading-loose tracking-wide">
        Meet Sagarnil Das, the AI guy who’s spent over 12 years making
        machines smarter and lives better. Whether he's crafting scalable AI
        ecosystems, partnering with global giants like the NHS, or casually
        building a mental health app that detects emotions and suicidal
        tendencies (because why not?), Sagarnil is all about blending Machine Learning and Deep Learning with
        humanity.
      </p>
      <p className="text-zinc-300 text-sm md:text-base max-w-2xl mt-8 md:leading-loose tracking-wide">
        His journey? A mix of late-night coding, big-picture thinking, and an
        unrelenting drive to create Machine Learning and Deep Learning solutions that actually matter.
      </p>
      <p className="text-zinc-300 text-sm md:text-base max-w-2xl mt-8 md:leading-loose tracking-wide">
        When he's not strategizing technological breakthroughs at work, he delves
        into cutting-edge AI research, orchestrate cloud infrastructures, and
        explore the intersections of quantum mechanics and general relativity.
      </p>
      <div className="mt-8 text-zinc-200 text-sm md:text-base max-w-2xl leading-loose tracking-wide">
        Building{" "}
        <LinkPreview
          className={
            "text-zinc-200 font-bold hover:text-cyan-500 transition duration-150 outline-none"
          }
          url="https://mindmatters.artelus.in/"
        >
          Mind Matters
        </LinkPreview>{" "}
        and{" "}
        <LinkPreview
          className={
            "text-zinc-200 font-bold hover:text-cyan-500 transition duration-150"
          }
          url="https://app.atlassoft.com/"
        >
          Atlassoft.
        </LinkPreview>{" "}
        <br></br>
        <br></br>
        <Link href="/about" className="text-cyan-500 text-sm md:text-base max-w-2xl leading-loose tracking-wide hover:underline">
          Learn more about Sagarnil's journey.
        </Link>
      </div>
    </div>
  );
};
