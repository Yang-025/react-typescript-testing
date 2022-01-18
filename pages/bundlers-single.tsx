import React from "react";
import Head from "next/head";
// import "twin.macro";
import rehypePrism from 'rehype-prism-plus';
import * as fs from "fs/promises";
import * as path from "path";
import { bundleMDX } from "mdx-bundler";
import { getMDXComponent } from "mdx-bundler/client";

export default function Home({ content, frontmatter }) {
  const Component = React.useMemo(() => getMDXComponent(content), [content]);
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main tw="min-h-screen flex items-center justify-center">
        <h1>{frontmatter.title}</h1>
        <Component />
      </main>
    </>
  );
}

export async function getStaticProps() {
  // const source = await fs.readFile(path.join("content", `index.mdx`), "utf-8");

  // const { code, frontmatter } = await bundleMDX({
  //   source,
  //   xdmOptions(options) {
  //     options.rehypePlugins = [...(options?.rehypePlugins ?? []), rehypePrism];
  //     return options;
  //   },
  // });

  const source = await fs.readFile(path.join("content", `index.mdx`), "utf-8");
  const { code, frontmatter } = await bundleMDX({
    source,
    cwd: path.join(process.cwd(), "content"),
  });
  return {
    props: {
      content: code,
      frontmatter,
    },
  };
}
