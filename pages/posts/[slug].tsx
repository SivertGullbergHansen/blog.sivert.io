import { format, parseISO } from "date-fns";
import { allPosts, Post } from "contentlayer/generated";
import { useMDXComponent } from "next-contentlayer/hooks";
import MotionWrapper from "components/MotionWrapper";
import {
  ArticleContentVariant,
  staggerTransition,
  transition,
} from "config/animations";
import StaggerWrapper from "components/StaggerWrapper";
import React, { useEffect, useState } from "react";
import { Components } from "components/MdxConvertedComponents";
import { ImageWithFallback } from "components/ImageWithFallback";
import { Comments } from "components/Comments";
import { HeadMetaGenerator } from "components/HeadMetaGenerator";
import { FaArrowUp } from "react-icons/fa";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";

export async function getStaticPaths() {
  const paths: string[] = allPosts.map((post) => post.url);
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const post: Post = allPosts.find(
    (post) => post._raw.flattenedPath === params.slug
  );
  return {
    props: {
      post,
    },
  };
}

const PostLayout = ({ post }: { post: Post }) => {
  const MDXContent = useMDXComponent(post.body.code);
  const [isOpen, setIsOpen] = useState(false);
  const scroll = useScroll();
  useMotionValueEvent(scroll.scrollY, "change", (latest) =>
    setIsOpen(latest > 360)
  );

  return (
    <>
      <HeadMetaGenerator
        description={post.description}
        url={`posts/${post.slug}`}
        metaImg={post.image ? `${post.image}` : null}
        title={post.title}
      />
      <motion.div
        initial={false}
        animate={isOpen ? "open" : "closed"}
        className="fixed bottom-64 left-0 right-0 flex justify-center px-4"
        variants={{
          open: { y: 0, opacity: 1 },
          closed: { y: "100%", opacity: 0 },
        }}
        transition={transition}
      >
        <div className="w-full max-w-[55rem] flex justify-end">
          <button
            onClick={() => {
              if (window !== undefined) {
                window.scrollTo({ top: 0 });
              }
            }}
            className={`btn btn-ghost shadow border-0 text-base-content bg-base-100 btn-square ${
              isOpen ? "pointer-events-auto" : "pointer-events-none"
            }`}
          >
            <FaArrowUp className="w-4 h-4" />
          </button>
        </div>
      </motion.div>
      <article
        className={`mx-auto ${
          post.image ? "py-12" : "py-32"
        } prose lg:prose-xl`}
      >
        <StaggerWrapper transition={staggerTransition}>
          {post.image && (
            <MotionWrapper variants={ArticleContentVariant}>
              <ImageWithFallback
                quality={100}
                alt="Post preview"
                className="object-cover w-full max-h-[512px] rounded-0 lg:rounded-xl"
                imageName={post.image}
              />
            </MotionWrapper>
          )}
          <MotionWrapper
            variants={ArticleContentVariant}
            className="max-w-prose prose-h1:mb-4 mx-auto px-4 sm:px-0"
          >
            <h1 className="not-prose text- text-[2.8em] leading-none font-bold">
              {post.title}
            </h1>
            <time dateTime={post.date}>
              {format(parseISO(post.date), "LLLL d, yyyy")}
            </time>
            <div className="max-w-prose mx-auto">
              <MDXContent components={Components} />
            </div>
            {post.allowComments ? <Comments className="pt-16" /> : null}
          </MotionWrapper>
        </StaggerWrapper>
      </article>
    </>
  );
};

export default PostLayout;
