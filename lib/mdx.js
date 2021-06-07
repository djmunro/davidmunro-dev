// import fs from "fs";
const fs = require("fs");

import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import mdxPrism from "mdx-prism";

const root = process.cwd();

export async function getFiles(type) {
  return fs.readdirSync(path.join(root, type));
}

export async function getAllPostsFrontMatter() {
  const files = fs.readdirSync(path.join(root, "posts"));

  return files.reduce((allPosts, postSlug) => {
    const source = fs.readFileSync(path.join(root, "posts", postSlug), "utf8");
    const { data } = matter(source);

    return [{ ...data, slug: postSlug.replace(".mdx", "") }, ...allPosts];
  }, []);
}

export async function getPostBySlug(slug) {
  const source = fs.readFileSync(
    path.join(root, "posts", `${slug}.mdx`),
    "utf8"
  );

  const { data, content } = matter(source);
  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [require("remark-slug"), require("remark-code-titles")],
      rehypePlugins: [mdxPrism],
    },
  });

  return {
    mdxSource,
    frontMatter: {
      slug: slug || null,
      ...data,
    },
  };
}
