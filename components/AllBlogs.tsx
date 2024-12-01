import { formatDate } from "@/lib/formatDate";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";

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
            priority={false}
          />
        </div>
      )}

      {/* Blog Details */}
      <div className="relative z-10 mt-4 md:mt-6">
        <small className="text-zinc-500 block">{formatDate(article.date)}</small>
        <h2 className="text-zinc-200 font-bold text-2xl mt-2">{article.title}</h2>
        <p className="text-zinc-300 font-normal text-base mt-4 leading-relaxed max-w-4xl">
          {article.description}
        </p>
        <p className="text-cyan-500 text-sm mt-6 block">Read More</p>
      </div>
    </Link>
  );
}

export default function AllBlogs({
  blogs,
  isPreview = false,
}: {
  blogs: any[];
  isPreview?: boolean;
}) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Pagination State
  const [currentPage, setCurrentPage] = useState<number>(1);
  const blogsPerPage = 4;
  const totalPages = Math.ceil(blogs.length / blogsPerPage);
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);

  // Handlers
  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };
  const handlePrevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  // If in preview mode, show only the last 2 blogs
  if (isPreview) {
    const latestBlogs = blogs.slice(-2);
    return (
      <div className="flex flex-col space-y-16">
        {latestBlogs.map((article, idx) => (
          <Blog
            key={article.slug}
            article={article}
            idx={idx}
            hoveredIndex={hoveredIndex}
            setHoveredIndex={setHoveredIndex}
          />
        ))}
      </div>
    );
  }

  // Full list with pagination
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="flex flex-col space-y-16">
        {currentBlogs.map((article, idx) => (
          <Blog
            key={article.slug}
            article={article}
            idx={idx}
            hoveredIndex={hoveredIndex}
            setHoveredIndex={setHoveredIndex}
          />
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center items-center mt-12 space-x-4">
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className={`p-2 rounded-full bg-gray-200 dark:bg-neutral-700 hover:bg-gray-300 dark:hover:bg-neutral-600 transition-colors duration-200 ${
            currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          <IconArrowLeft className="h-6 w-6 text-gray-800 dark:text-neutral-300" />
        </button>

        <span className="text-zinc-300 dark:text-neutral-300">
          Page {currentPage} of {totalPages}
        </span>

        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className={`p-2 rounded-full bg-gray-200 dark:bg-neutral-700 hover:bg-gray-300 dark:hover:bg-neutral-600 transition-colors duration-200 ${
            currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          <IconArrowRight className="h-6 w-6 text-gray-800 dark:text-neutral-300" />
        </button>
      </div>
    </div>
  );
}
