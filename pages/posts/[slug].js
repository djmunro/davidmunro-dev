import { MDXRemote } from "next-mdx-remote";

import { getFiles, getPostBySlug } from "@/lib/mdx";

export default function Posts({ mdxSource, frontMatter }) {
  return (
    <div>
      <MDXRemote {...mdxSource} />
    </div>
  );
}

export async function getStaticPaths() {
  const posts = await getFiles("posts");

  return {
    paths: posts.map((post) => ({
      params: {
        slug: post.replace(/\.mdx/, ""),
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const post = await getPostBySlug(params.slug);

  return { props: { ...post } };
}
