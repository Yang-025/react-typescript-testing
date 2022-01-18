/** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
// };
// module.exports = nextConfig;

const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});
module.exports = withMDX({
  // reactStrictMode: true,
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
});


