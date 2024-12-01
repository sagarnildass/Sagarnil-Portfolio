import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { getUserRepositories } from "@/lib/github";
import { LatestRepos } from "@/components/LatestRepos";
import { Repository } from "@/types/repos";
import { Experience } from "@/components/Experience";
import { generateRssFeed } from "@/lib/generateRSSFeed";
import { getAllBlogs } from "@/lib/getAllBlogs";
import AllBlogs from "@/components/AllBlogs";
import { Uses } from "@/components/Uses";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { testimonials } from "@/constants/testimonials";
import Link from "next/link";
// const inter = Inter({ subsets: ["latin"] });

export default function Home({
  repos,
  blogs,
}: {
  repos: Repository[];
  blogs: any;
}) {
  const shouldShowMore = () => {
    if (repos && repos.length > 9) {
      return true;
    }
    return false;
  };
  return (
    <Container>
      <Hero />
      <Experience />
      <h2 className="text-2xl md:text-3xl text-white font-bold max-w-5xl mx-auto px-8  mt-40">
        Here are some kind words from some exceptional people.
      </h2>
      <AnimatedTestimonials testimonials={testimonials} autoplay />
      <h2 className="text-2xl md:text-3xl text-white font-bold max-w-5xl mx-auto px-8  mt-40">
        I've been building a lot of things
      </h2>

      <Projects />
      <h2 className="text-2xl md:text-3xl text-white font-bold max-w-5xl mx-auto px-8 mt-40">
        Latest contributions to open source
      </h2>
      <LatestRepos repos={repos.slice(0, 9)} showMore={shouldShowMore()} />

      <div className="max-w-5xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-3 gap-10 mt-40 ">
        <div className="col-span-2">
          <h2 className="text-2xl md:text-3xl text-white font-bold max-w-5xl mx-auto px-8">
            Recent Blogs
          </h2>
          <AllBlogs blogs={blogs} isPreview />
          <div className="flex justify-center relative z-[70] mt-4">
            <Link
              href="/blogs"
              className="text-zinc-200 border border-zinc-600 bg-zinc-900 px-8 py-2 rounded-lg hover:border-zinc-700 hover:bg-zinc-800/[0.8] transition duration-200"
            >
              View All Blogs
            </Link>
          </div>
        </div>
        <Uses />
      </div>
    </Container>
  );
}

export async function getStaticProps() {
  // FIXME: Add back the github api call
  // const res = await fetch("https://api.github.com/users/tylerdurden");
  // const data = await res.json();

  // FIXME: Add back the rss feed generation

  const data = await getUserRepositories("sagarnildass");

  return {
    props: {
      repos: data,
      blogs: (await getAllBlogs())
        .slice(0, 4)
        .map(({ component, ...meta }) => meta),
    },
  };
}
