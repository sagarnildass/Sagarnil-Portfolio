import { Container } from "@/components/Container";
import { Projects } from "@/components/Projects";
import Link from "next/link";

export default function ProjectsPage() {
  return (
    <Container
      meta={{
        title: "Projects | Sagarnil Das",
        description:
          "Discover the projects of Sagarnil Das, showcasing expertise in Machine Learning, Deep Learning, and AI-powered solutions to real-world challenges.",
        image: "/images/projects/mind_matters.png",
        type: "website",
      }}
    >
      <div className="max-w-5xl mx-auto px-8 mt-10 md:mt-20 relative">
        <h1 className="font-bold text-3xl md:text-5xl md:leading-tight text-zinc-50 max-w-3xl">
          I've been building a
          <span className="text-cyan-500"> lot of things</span>
        </h1>
        <p className="text-zinc-300 text-sm md:text-base max-w-2xl mt-8 md:leading-loose tracking-wide">
          Come explore the fruits of my labor, from small experiments to
          full-blown AI based web applications, each project showcases my love
          for coding and design.
          <br></br>
          <br></br> I also love to write.{" "}
          <Link
            href="/blogs"
            className="text-cyan-500 text-sm md:text-base max-w-2xl leading-loose tracking-wide hover:underline"
          >
            You can find my technical blogs here.
          </Link>
        </p>
      </div>

      <Projects />
    </Container>
  );
}
