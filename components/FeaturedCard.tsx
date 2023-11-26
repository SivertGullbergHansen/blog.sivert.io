import Link from "next/link";
import { compareDesc } from "date-fns";
import { allPosts, Post } from "contentlayer/generated";
import { motion } from "framer-motion";
import { ArticleCardVariant } from "config/animations";
import { ImageWithFallback } from "./ImageWithFallback";
import ReactTimeAgo from "react-time-ago";
import { replaceEmojisInText } from "utils/emojis";

export async function getStaticProps() {
  const posts: Post[] = allPosts.sort((a, b) => {
    return compareDesc(new Date(a.date), new Date(b.date));
  });
  return { props: { posts } };
}

export default function FeaturedCard({
  post,
  className = "",
}: {
  post: Post;
  className?: string;
}) {
  return (
    <motion.div
      variants={ArticleCardVariant}
      className={`md:grid flex flex-col items-start justify-center md:grid-cols-[2.13fr_1fr] w-full gap-4 md:gap-12 ${className}`}
    >
      {post.image && (
        <Link
          scroll={false}
          href={post.url}
          className="md:max-h-[420px] sm:max-h-72 max-h-52 flex"
        >
          <div className="rounded-2xl border-2 p-1 border-base-300 flex">
            <ImageWithFallback
              quality={100}
              width={1200}
              heigth={512}
              alt={post.imageAlt || "A placeholder image"}
              className="object-cover rounded-xl"
              imageName={post.image}
            />
          </div>
        </Link>
      )}
      <Link
        scroll={false}
        href={post.url}
        className="flex flex-col gap-1 break-word hyphens-auto"
      >
        <h1 className="text-3xl sm:text-5xl font-bold">
          {replaceEmojisInText(post.title)}
        </h1>
        <p className="line-clamp-2  ">
          {replaceEmojisInText(post.description)}
        </p>
        <ReactTimeAgo
          className="text-sm text-primary"
          date={Date.parse(post.date)}
          locale="en-US"
        />
      </Link>
    </motion.div>
  );
}
