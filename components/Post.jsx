import Link from "next/link";

export const Post = ({ title, summary, slug }) => {
  return (
    <Link href={`/posts/${slug}`}>
      <div>
        <h4>{title}</h4>
        <p>{summary}</p>
      </div>
    </Link>
  );
};
