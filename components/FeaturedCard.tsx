import Link from "next/link";
import { compareDesc, format, parseISO } from "date-fns";
import { allPosts, Post } from "contentlayer/generated";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArticleCardVariant } from "config/animations";
import { ReactElement, ReactNode } from "react";
import { ImageWithFallback } from "./ImageWithFallback";

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
    <motion.div variants={ArticleCardVariant} 
        className={`flex sm:flex-row flex-col w-full sm:gap-10 gap-4 sm:max-h-[420px] ${className}`}>
          {post.image && (
      <Link
        scroll={false}
          href={post.url}
          className='sm:w-[786px]'
      >
          <ImageWithFallback
            placeholder="blur"
            blurDataURL="/images/plc_dark.webp"
            width={640}
            height={640}
            alt="Post preview"
            className="object-cover w-full sm:h-full max-h-[512px]"
            src={`/images/${post.image}`}
          />
      </Link>
        )}
        <Link
        scroll={false}
        href={post.url}
        className="flex flex-col gap-1 h-fit sm:w-1/4">
          <h1 className="text-5xl font-bold">{post.title}</h1>
          <p className="line-clamp-2">{post.description}</p>
          <time dateTime={post.date} className="text-sm text-neutral-content">
            {format(parseISO(post.date), "LLLL d, yyyy")}
          </time>
        </Link>
    </motion.div>
  );
}