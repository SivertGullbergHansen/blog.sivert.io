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

export default function ArticleCard({
  post,
  className,
}: {
  post: Post;
  className?: string;
}) {
  return (
    <motion.div
      variants={ArticleCardVariant}
      className={`w-full h-fit border-0 ${className}`}
    >
      <Link scroll={false} href={post.url}>
        {post.image && (
          <div className="rounded-2xl border-2 p-1 border-base-300">
            <ImageWithFallback
              quality={100}
              width={640}
              height={640}
              alt="Post preview"
              className="object-cover w-full max-h-52 rounded-xl"
              imageName={post.image}
            />
          </div>
        )}
        <div className="p-4 flex flex-col gap-1">
          <h2 className="text-xl font-semibold">{post.short || post.title}</h2>
          <p className="line-clamp-2">{post.description}</p>
          <ReactTimeAgo
            className="text-sm text-primary"
            date={Date.parse(post.date)}
            locale="en-US"
          />
        </div>
      </Link>
    </motion.div>
  );
}
