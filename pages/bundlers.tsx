import Link from "next/link";
import styles from "../styles/Home.module.css";
import { getAllPosts } from "../utils/mdx";

export type Frontmatter = {
  slug: string;
  title: string;
  description: string;
};

type Post = {
  code: string;
  slug: string;
  frontmatter: Frontmatter;
};
const Home: React.FC<{ posts: Post[] }> = ({ posts }) => {
  return (
    <div className={styles.container}>
      <h1>✍️ All latest Posts</h1>
      <ul>
        {posts.map((post, index) => (
          <li key={index}>
            <Link href={`posts/${post.slug}`}>{post.frontmatter.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export const getStaticProps = async () => {
  const posts = getAllPosts();

  return {
    props: { posts },
  };
};

export default Home;
