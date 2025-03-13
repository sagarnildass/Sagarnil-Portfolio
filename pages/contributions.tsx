import { Container } from "@/components/Container";
import { getUserRepositories } from "@/lib/github";
import { LatestRepos } from "@/components/LatestRepos";
import { Repository } from "@/types/repos";
import { user } from "@/constants/user";
import Link from "next/link";

// const inter = Inter({ subsets: ["latin"] });

export default function Contributions({ repos }: { repos: Repository[] }) {
  return (
    <Container
      meta={{
        title: "GitHub Contributions | Sagarnil Das",
        description:
          "Explore the open-source contributions of Sagarnil Das. From groundbreaking projects to caffeinated commits, discover how he shapes the open-source world.",
        image: "/images/projects/filmpire.png", // Update to a relevant image if available
        type: "website",
      }}
    >
      <div className="max-w-5xl mx-auto px-8 mt-10 md:mt-20 relative">
        <h1 className="font-bold text-3xl md:text-5xl md:leading-tight text-zinc-50 max-w-3xl">
          Committing Code and Soul For{" "}
          <span className="text-cyan-500">Open Source World</span>
        </h1>
        <p className="text-zinc-300 text-sm md:text-base max-w-2xl mt-8 md:leading-loose tracking-wide">
          A place where you can witness my caffeinated coding adventures and see
          just how much coffee it takes to fuel my commits. from my first "Hello
          World" to my latest breakthrough, and everything in between.
          <br></br>
          <br></br>{" "}
          <Link href="/projects" className="text-cyan-500 text-sm md:text-base max-w-2xl leading-loose tracking-wide hover:underline">
            You can find more about some of my great projects here.
          </Link>
        </p>
      </div>
      <LatestRepos repos={repos} />

      <div className="flex justify-center relative z-[70] ">
        <Link
          href={user.github}
          target="__blank"
          className="text-zinc-200 border border-zinc-600 bg-zinc-900 px-8 py-2 rounded-lg hover:border-zinc-700 hover:bg-zinc-800/[0.8] transition duration-200"
        >
          View all on GitHub
        </Link>
      </div>
    </Container>
  );
}

// get static props

export async function getStaticProps() {
  // const res = await fetch("https://api.github.com/users/tylerdurden");
  // const data = await res.json();

  const data = await getUserRepositories("sagarnildass");

  return {
    props: {
      repos: data,
    },
  };
}
