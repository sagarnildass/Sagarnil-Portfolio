import clsx from "clsx";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { Contact } from "./Contact";
import { Footer } from "./Footer";

import Navbar from "./Navbar/Navbar";

export const Container = (props: any) => {
  const { children, className, ...customMeta } = props;
  const router = useRouter();

  const title = "Sagarnil Das | Portfolio";
  const meta = {
    title,
    description: `Sagarnil Das is a Machine Learning and Deep Learning Engineer with more than 12 years of experience in the field of AI.`,
    type: "website",
    image: "https://devpro.aceternity.com/banner.png",
    ...customMeta,
  };

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta
          property="og:url"
          content={`https://sagarnildas.com${router.asPath}`}
        />
        <link
          rel="canonical"
          href={`https://sagarnildas.com${router.asPath}`}
        />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="sagarnildas" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@sagarnildas" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
      </Head>

      <main className={clsx("min-h-screen antialiased bg-zinc-900", className)}>
        {/* <div className="bg-zinc-800 flex py-2">
          <div className="max-w-4xl mx-auto ">
            <a
              href="https://aceternity.lemonsqueezy.com/checkout/buy/f72cfb2a-7598-4e4e-8ef2-1f68c91d9414"
              target="__blank"
              className="text-zinc-300 flex flex-row space-x-1 items-center text-sm"
            >
              <span>Buy now!</span>{" "}
              <AiFillRightCircle className="inline-block" />
            </a>
          </div>
        </div> */}
        <Navbar />
        {children}
        <Footer />
        <Contact />
      </main>
    </>
  );
};
