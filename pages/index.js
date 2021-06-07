import { Post } from "@/components/Post";
import { getAllPostsFrontMatter } from "@/lib/mdx";

export default function Home({ posts }) {
  return (
    <div>
      Posts
      {posts.map((frontMatter) => (
        <Post key={frontMatter.title} {...frontMatter} />
      ))}
    </div>
  );
}

export async function getStaticProps() {
  const posts = await getAllPostsFrontMatter();
  return { props: { posts } };
}
