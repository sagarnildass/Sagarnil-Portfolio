import { Container } from "@/components/Container";
import { Projects } from "@/components/Projects";
import Talks from "@/components/Talks";
import { talks } from "@/constants/events";
import Link from "next/link";

export default function EventsPge() {
  return (
    <Container
      meta={{
        title: "Media and Videos | Sagarnil Das",
        description:
          "Dive into the world of media and videos by Sagarnil Das. Explore a collection of engaging content, from music performances to creative productions.",
        image: "/images/video_thumbnails/life_flows_on_v2.png", // Update to a relevant media-related image
        type: "website",
      }}
    >
      <div className="max-w-5xl mx-auto px-8 mt-10 md:mt-20 relative">
        <h1 className="font-bold text-3xl md:text-5xl md:leading-tight text-zinc-50 max-w-3xl">
          I sometimes try to test my skills in
          <span className="text-cyan-500"> Music and Film Making</span>
        </h1>
        <p className="text-zinc-300 text-sm md:text-base max-w-2xl mt-8 md:leading-loose tracking-wide">
          Apart from my film-making passion, I am a self-taught guitarist and
          singer. I have been playing guitar for more than 10 years now. I have
          also been singing since childhood (albeit self-taught). <br></br><br></br>I have
          performed in various events and have also won some of them. I was also
          a part of a band called "Alpha To Omega", when I was in Florida. We
          performed in some really large events across various pubs and bars..{" "}
          <Link href="/about" className="text-cyan-500 hover:underline">
            You can find more about my full timeline here.
          </Link>{" "}
        </p>
        <div className="mt-20 max-w-3xl mx-auto">
          {talks.map((talk, idx) => (
            <Talks
              key={`talk-${idx}`}
              title={talk.title}
              description={talk.description}
              company={talk.company}
              image={talk.image}
              url={talk.url}
            />
          ))}
        </div>
      </div>
    </Container>
  );
}
