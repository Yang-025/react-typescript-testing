import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import fs from "fs";
import path from "path";
import Test from "../components/test";
import Button from "../components/Button";
import matter from "gray-matter";

const components = { Test, Button };

export default function TestPage({ source, frontMatter }) {
  console.log("frontMatter", frontMatter?.title);
  return (
    <div className="wrapper">
      <h1 className="text-3xl text-green-600 font-bold underline">Hello world!TTT</h1>
      <p className="text-blue-600">The quick brown fox...</p>

      <MDXRemote {...source} components={components} />
    </div>
  );
}

export async function getStaticProps() {
  // MDX text - can be from a local file, database, anywhere
  const source = `---
  title: Test
  ---
  ## LLNNN 
  Some **mdx** text, with a component <Test />
  <Button content={"haha"} />
  `;

  const localFileSource = fs.readFileSync(
    path.join(process.cwd(), "pages", "posts", "aa" + ".mdx"),
    "utf-8"
  );
  console.log("1 localFileSource", localFileSource);
  const { data: frontMatter, content } = matter(localFileSource);
  console.log("2 frontMatter", frontMatter);

  // M1. user string
  // const mdxSource = await serialize(source);
  // M2. user local file
  const mdxSource = await serialize(localFileSource);

  return { props: { source: mdxSource, frontMatter } };
}
