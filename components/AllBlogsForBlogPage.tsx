import { formatDate } from "@/lib/formatDate";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";

function Blog({ article }: any) {
  return (
    <Link
      href={`/blogs/${article.slug}`}
      className="relative p-4 flex flex-col items-start bg-neutral-800 hover:bg-neutral-700 text-gray-300 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105"
    >
      {/* Thumbnail Image */}
      {article.thumbnail && (
        <div className="w-full h-40 relative rounded-lg overflow-hidden shadow-md">
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
      <div className="mt-3">
        <small className="text-gray-500 block">{formatDate(article.date)}</small>
        <h2 className="text-gray-200 font-bold text-lg mt-1">{article.title}</h2>
        <p className="text-gray-400 font-normal text-sm mt-2 leading-relaxed line-clamp-2">
          {article.description}
        </p>
        <p className="text-cyan-400 text-sm mt-4">Read More</p>
      </div>
    </Link>
  );
}

export default function AllBlogsForBlogPage({ blogs, perPageNumber }: { blogs: any[], perPageNumber: number }) {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const blogsPerPage = perPageNumber; // Number of blogs per page
  const totalPages = Math.ceil(blogs.length / blogsPerPage);

  const currentBlogs = blogs.slice(
    (currentPage - 1) * blogsPerPage,
    currentPage * blogsPerPage
  );

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  const handlePrevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Blog Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentBlogs.map((article) => (
          <Blog key={article.slug} article={article} />
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center mt-8 space-x-4">
          <button
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            className={`p-2 rounded-full bg-neutral-700 hover:bg-neutral-600 text-gray-300 transition-colors duration-200 ${
              currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            <IconArrowLeft className="h-6 w-6" />
          </button>

          <span className="text-gray-400">
            Page {currentPage} of {totalPages}
          </span>

          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className={`p-2 rounded-full bg-neutral-700 hover:bg-neutral-600 text-gray-300 transition-colors duration-200 ${
              currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            <IconArrowRight className="h-6 w-6" />
          </button>
        </div>
      )}
    </div>
  );
}
