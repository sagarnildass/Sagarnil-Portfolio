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
      <h1 className="text-2xl md:text-3xl text-white font-bold max-w-5xl mx-auto px-8  mt-40">
        Here are some kind words from some exceptional people.
      </h1>
      <AnimatedTestimonials testimonials={testimonials} autoplay />
      <h1 className="text-2xl md:text-3xl text-white font-bold max-w-5xl mx-auto px-8  mt-40">
        I've been building a lot of things
      </h1>

      <Projects />
      <h1 className="text-2xl md:text-3xl text-white font-bold max-w-5xl mx-auto px-8 mt-40">
        Latest contributions to open source
      </h1>
      <LatestRepos repos={repos.slice(0, 9)} showMore={shouldShowMore()} />

      <div className="max-w-5xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-3 gap-10 mt-40 ">
        <div className="col-span-2">
          <AllBlogs blogs={blogs} />
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
