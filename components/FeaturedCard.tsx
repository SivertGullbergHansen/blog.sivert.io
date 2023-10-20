import Link from "next/link";
import { compareDesc } from "date-fns";
import { allPosts, Post } from "contentlayer/generated";
import { motion } from "framer-motion";
import { ArticleCardVariant } from "config/animations";
import { ImageWithFallback } from "./ImageWithFallback";
import ReactTimeAgo from "react-time-ago";

export async function getStaticProps() {
  const posts: Post[] = allPosts.sort((a, b) => {
    return compareDesc(new Date(a.date), new Date(b.date));
  });
  return { props: { posts } };
}

export default function FeaturedCard({
  post,
  className,
}: {
  post: Post;
  className?: string;
}) {
  return (
    <motion.div
      variants={ArticleCardVariant}
      className={`flex sm:flex-row flex-col w-full sm:gap-10 gap-4 sm:max-h-[420px] ${className}`}
    >
      {post.image && (
        <Link scroll={false} href={post.url} className="sm:w-[786px]">
          <div className="rounded-2xl border-2 p-1 border-base-300">
            <ImageWithFallback
              quality={100}
              alt="Post preview"
              className="object-cover w-full sm:h-full max-h-[512px] rounded-xl"
              imageName={post.image}
            />
          </div>
        </Link>
      )}
      <Link
        scroll={false}
        href={post.url}
        className="flex flex-col gap-1 h-fit"
      >
        <h1 className="text-5xl font-bold">{post.title}</h1>
        <p className="line-clamp-2">{post.description}</p>
        <ReactTimeAgo
          className="text-sm text-primary"
          date={Date.parse(post.date)}
          locale="en-US"
        />
      </Link>
    </motion.div>
  );
}
