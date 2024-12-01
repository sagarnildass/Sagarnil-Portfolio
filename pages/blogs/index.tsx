import { getAllBlogs } from "@/lib/getAllBlogs";
import { Container } from "@/components/Container";
import AllBlogs from "@/components/AllBlogs";

export default function BlogsPage({ blogs }: any) {
  return (
    <Container
      meta={{
        title: "Blogs | Sagarnil Das",
        description:
          "Explore insightful blogs by Sagarnil Das, covering topics on machine learning, deep learning, coding adventures, and much more.",
        image: "/images/blogs/curriculum_learning.png", // Replace with an appropriate image if available
        type: "website",
      }}
    >
      <div className="max-w-5xl mx-auto px-8 mt-10 md:mt-20 relative ">
        <div>
          <h1 className="font-bold text-3xl md:text-5xl md:leading-tight text-zinc-50 max-w-3xl">
            All of my
            <span className="text-cyan-500"> Technical Knowledge</span> in one
            place
          </h1>
          <p className="text-zinc-300 text-sm md:text-base max-w-2xl mt-8 md:leading-loose tracking-wide">
            I personally don’t believe in SEO tricks or the art of stuffing
            long-tail keywords into every corner of a page. I don’t believe in
            shortcuts or gaming the system to chase a fleeting rank on Google.
            <br></br>
            <br></br>To me, writing is sacred. It’s not about algorithms but
            about connection. I write because I want to share the raw,
            unfiltered lessons I’ve learned through my journey with code — the
            triumphs, the failures, and the moments of clarity in between.{" "}
            <br></br>
            <br></br>If my posts reach someone, it won’t be because of a
            perfectly optimized title but because the words resonate, because
            they offer real, tangible knowledge that someone can use. That’s
            what matters. Real value. Real impact. No fluffs. Just a shared love
            for the craft.
          </p>
        </div>
        <div className="mt-20">
          <AllBlogs blogs={blogs} />
        </div>
      </div>
    </Container>
  );
}

export async function getStaticProps() {
  return {
    props: {
      blogs: (await getAllBlogs()).map(({ component, ...meta }) => meta),
    },
  };
}
