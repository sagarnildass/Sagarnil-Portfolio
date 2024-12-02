import Head from "next/head";
import { useRouter } from "next/router";
import Share from "./Share";
import { formatDate } from "@/lib/formatDate";
import { Prose } from "@/components/Prose";
import { Container } from "./Container";

function ArrowLeftIcon(props: any) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M7.25 11.25 3.75 8m0 0 3.5-3.25M3.75 8h8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function BlogLayout({
  children,
  meta,
  isRssFeed = false,
  previousPathname,
}: any) {
  let router = useRouter();

  if (isRssFeed) {
    return children;
  }
  return (
    <Container
      meta={{
        title: meta.title,
        description: meta.description,
        image: meta.thumbnail, // Use the blog-specific thumbnail
        type: "article", // Set type to article for blog posts
        slug: meta.slug,
      }}
    >
      <div className="xl:relative md:mt-20 p-8">
        <div className="mx-auto max-w-2xl">
          {previousPathname && (
            <button
              type="button"
              onClick={() => router.back()}
              aria-label="Go back to articles"
              className="group mb-8 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 transition  lg:absolute lg:-left-5 lg:mb-0 lg:-mt-2 xl:-top-1.5 xl:left-0 xl:mt-0"
            >
              <ArrowLeftIcon className="h-4 w-4 stroke-zinc-500 transition group-hover:stroke-zinc-700 d" />
            </button>
          )}
          <article>
            <header className="flex flex-col">
              <h1 className="mt-6 text-4xl font-bold tracking-tight text-zinc-200  sm:text-5xl">
                {meta.title}
              </h1>
              <time
                dateTime={meta.date}
                className="order-first flex items-center text-base text-zinc-200 "
              >
                <span className="h-4 w-0.5 rounded-full bg-zinc-200 " />
                <span className="ml-3">{formatDate(meta.date)}</span>
              </time>
            </header>
            <section className="section">
              <div className="container">
                <div className="section-title">
                  <h2 className="font-bold text-md md:text-md text-zinc-50 max-w-3xl items-center text-center mt-3 mr-4">
                    Share this article
                  </h2>
                </div>
                <Share
                  title={meta.title}
                  description={meta.description}
                  slug={meta.slug!}
                  className="mb-8 flex justify-center text-3xl mt-4"
                />
              </div>
            </section>
            <Prose className="mt-8">{children}</Prose>
            <section className="section">
              <div className="container">
                <div className="section-title">
                  <h2 className="font-bold text-md md:text-md text-zinc-50 max-w-3xl items-center text-center mt-3 mr-4">
                    Share this article
                  </h2>
                </div>
                <Share
                  title={meta.title}
                  description={meta.description}
                  slug={meta.slug!}
                  className="mb-8 flex justify-center text-3xl mt-4"
                />
              </div>
            </section>
          </article>
        </div>
      </div>
    </Container>
  );
}
