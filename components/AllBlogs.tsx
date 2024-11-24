// components/AllBlogs.tsx

import { formatDate } from "@/lib/formatDate";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image"; // Import Image

function Blog({ article, hoveredIndex, setHoveredIndex, idx }: any) {
  return (
    <Link
      href={`/blogs/${article.slug}`}
      className="relative p-8 flex flex-col items-start hover:bg-zinc-800/20 rounded-lg transition-colors duration-200"
      onMouseEnter={() => setHoveredIndex(idx)}
      onMouseLeave={() => setHoveredIndex(null)}
    >
      {/* Hover Overlay */}
      <AnimatePresence>
        {hoveredIndex === idx && (
          <motion.span
            className="absolute inset-0 h-full w-full bg-zinc-800/80 rounded-lg"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{
              opacity: 1,
              scale: 1,
              transition: { duration: 0.15 },
            }}
            exit={{
              opacity: 0,
              scale: 0.95,
              transition: { duration: 0.15, delay: 0.2 },
            }}
          />
        )}
      </AnimatePresence>

      {/* Thumbnail Image */}
      {article.thumbnail && (
        <div className="w-full h-64 md:h-48 lg:h-64 relative rounded-lg overflow-hidden shadow-md">
          <Image
            src={article.thumbnail}
            alt={`Thumbnail for ${article.title}`}
            fill
            className="object-cover rounded-lg"
            priority={false} // Set to true if you want to prioritize loading
          />
        </div>
      )}

      {/* Blog Details */}
      <div className="relative z-10 mt-4 md:mt-6">
        <small className="text-zinc-500 block">
          {formatDate(article.date)}
        </small>
        <h2 className="text-zinc-200 font-bold text-2xl mt-2">
          {article.title}
        </h2>
        <p className="text-zinc-300 font-normal text-base mt-4 leading-relaxed max-w-4xl">
          {article.description}
        </p>
        <p className="text-cyan-500 text-sm mt-6 block">Read More</p>
      </div>
    </Link>
  );
}

export default function AllBlogs({ blogs }: any) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  return (
    <div>
      <div className="flex flex-col space-y-16">
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
