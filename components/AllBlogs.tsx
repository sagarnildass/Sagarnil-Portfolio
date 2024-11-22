import { formatDate } from "@/lib/formatDate";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

function Blog({ article, hoveredIndex, setHoveredIndex, idx }: any) {
  return (
    <Link
      className="relative md:p-8"
      href={`/blogs/${article.slug}`}
      onMouseEnter={() => setHoveredIndex(idx)}
      onMouseLeave={() => setHoveredIndex(null)}
    >
      <AnimatePresence>
        {hoveredIndex === idx && (
          <motion.span
            className="absolute inset-0 h-full w-full bg-zinc-800/[0.8]  rounded-2xl"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{
              opacity: 1,
              scale: 1,
              transition: { duration: 0.15 },
            }}
            exit={{
              opacity: 0,
              scale: 0.9,
              transition: { duration: 0.15, delay: 0.2 },
            }}
          />
        )}
      </AnimatePresence>
      <div className="relative z-50">
        <small className="md:border-l md:border-zinc-700 md:pl-4  text-zinc-500 block">
          {formatDate(article.date)}
        </small>
        <h2 className="text-zinc-200 font-bold text-lg mt-4">
          {article.title}
        </h2>
        <p className="text-zinc-200 font-normal text-sm mt-4 leading-loose max-w-4xl">
          {article.description}
        </p>
        <p className="text-cyan-500 text-sm mt-6 block">Read More</p>
      </div>
    </Link>
  );
}

export default function AllBlogs({ blogs }: any) {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  return (
    <div className="">
      <div className="flex max-w-3xl flex-col space-y-16">
        {blogs.map((article: any, idx: number) => (
          <Blog
            key={article.slug}
            article={article}
            idx={idx}
            hoveredIndex={hoveredIndex}
            setHoveredIndex={setHoveredIndex}
          />
        ))}
      </div>
    </div>
  );
}
