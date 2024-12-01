// components/Container.tsx

import clsx from "clsx";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import { Contact } from "./Contact";
import { Footer } from "./Footer";
import { GoogleAnalytics } from "@next/third-parties/google";
import Navbar from "./Navbar/Navbar";

// Define the type for meta properties
interface MetaProps {
  title?: string;
  description?: string;
  type?: string;
  image?: string;
  [key: string]: any; // For any additional meta properties
}

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  meta?: MetaProps;
}

export const Container: React.FC<ContainerProps> = ({ children, className, meta: customMeta = {} }) => {
  const router = useRouter();

  // Default metadata
  const defaultMeta: MetaProps = {
    title: "Sagarnil Das | Portfolio",
    description: "Sagarnil Das is a Machine Learning and Deep Learning Engineer with more than 12 years of experience in the field of AI.",
    type: "website",
    image: "/images/avatar.jpeg",
  };

  // Merge default meta with custom meta
  const meta: MetaProps = {
    ...defaultMeta,
    ...customMeta,
  };

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta name="description" content={meta.description} />

        {/* Open Graph / Facebook */}
        <meta property="og:url" content={`https://sagarnildas.com${router.asPath}`} />
        <link rel="canonical" href={`https://sagarnildas.com${router.asPath}`} />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="sagarnildas" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@sagarnildas" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
      </Head>

      <main className={clsx("min-h-screen antialiased bg-zinc-900", className)}>
        {/* Optional Notification Bar (Commented Out) */}
        {/* 
        <div className="bg-zinc-800 flex py-2">
          <div className="max-w-4xl mx-auto">
            <a
              href="https://aceternity.lemonsqueezy.com/checkout/buy/f72cfb2a-7598-4e4e-8ef2-1f68c91d9414"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-300 flex flex-row space-x-1 items-center text-sm"
            >
              <span>Buy now!</span>
              <AiFillRightCircle className="inline-block" />
            </a>
          </div>
        </div>
        */}
        <Navbar />
        {children}
        <GoogleAnalytics gaId="G-1PE0MQWYHL" />
        <Footer />
        <Contact />
      </main>
    </>
  );
};
