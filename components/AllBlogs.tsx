import { formatDate } from "@/lib/formatDate";
import Link from "next/link";
import Image from "next/image";

function Blog({ article }: { article: any }) {
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
        <small className="text-gray-500">{formatDate(article.date)}</small>
        <h2 className="text-gray-200 font-bold text-lg mt-1">{article.title}</h2>
        <p className="text-gray-400 font-normal text-sm mt-2 leading-relaxed line-clamp-2">
          {article.description}
        </p>
        <p className="text-cyan-400 text-sm mt-4">Read More</p>
      </div>
    </Link>
  );
}

export default function AllBlogs({ blogs }: { blogs: any[] }) {
  return (
    <div className="flex flex-col space-y-8">
      {blogs.slice(0, 2).map((article) => (
        <Blog key={article.slug} article={article} />
      ))}
    </div>
  );
}
