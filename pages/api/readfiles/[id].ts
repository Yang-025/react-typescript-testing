import type { NextApiRequest, NextApiResponse } from "next";

import fs from "fs";
import path from "path";
import getConfig from "next/config";
import { bundleMDX } from "mdx-bundler";
import readingTime from "reading-time";

import rehypeSlug from "rehype-slug";
import rehypeCodeTitles from "rehype-code-titles";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrism from "rehype-prism-plus";

const readfileById = async (req: NextApiRequest, res: NextApiResponse) => {
  const { serverRuntimeConfig } = getConfig();
  const { id } = req.query;

  const whereAreFiles = path.join(
    serverRuntimeConfig.PROJECT_ROOT,
    "pages",
    "posts"
  );
  const source = fs.readFileSync(
    path.join(whereAreFiles, `${id}.mdx`),
    "utf-8"
  );

  const result = await bundleMDX({
    source,
    cwd: path.join(whereAreFiles),
    esbuildOptions: (options) => {
      options.platform = "node";

      options.target = ["es2020"];

      return options;
    },
    xdmOptions(options) {
      options.rehypePlugins = [
        ...(options?.rehypePlugins ?? []),
        rehypeSlug,
        rehypeCodeTitles,
        rehypePrism,
        [
          rehypeAutolinkHeadings,
          {
            properties: {
              className: ["anchor"],
            },
          },
        ],
      ];

      return options;
    },
  });

  res.statusCode = 200;
  res.json({
    code: result.code,
    frontMatter: {
      wordCount: source.split(/\s+/gu).length,
      readingTime: readingTime(source),
      //   slug: slug || null,
      ...result.frontmatter,
    },
  });
};

export default readfileById;
