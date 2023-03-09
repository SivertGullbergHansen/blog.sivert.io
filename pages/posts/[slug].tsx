import Head from "next/head";
import { format, parseISO } from "date-fns";
import { allPosts, Post } from "contentlayer/generated";
import { useMDXComponent } from "next-contentlayer/hooks";
import MotionWrapper from "components/MotionWrapper";
import {
  ArticleContentVariant,
  staggerTransition,
} from "config/animations";
import StaggerWrapper from "components/StaggerWrapper";
import React from "react";
import { Components } from "components/MdxConvertedComponents";
import { ImageWithFallback } from "components/ImageWithFallback";
import { Comments } from "components/Comments";

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

  return (
    <>
      <Head>
        <title>{`Sivert's blog - ${post.title}`}</title>
      </Head>
      <article
        className={`mx-auto ${
          post.image ? "py-12" : "py-32"
        } px-4 prose lg:prose-xl max-w-[1200px]`}
      >
        <StaggerWrapper transition={staggerTransition}>
            {post.image && (<MotionWrapper variants={ArticleContentVariant}>
            <ImageWithFallback
                quality={100}
                alt="Post preview"
                className="object-cover w-full max-h-[512px]"
                src={`/images/${post.image}`}
              /></MotionWrapper>
            )}
          <MotionWrapper variants={ArticleContentVariant} className="max-w-prose mx-auto">
            <time dateTime={post.date}>
              {format(parseISO(post.date), "LLLL d, yyyy")}
            </time>
            <h1>{post.title}</h1>
            <div className="max-w-prose mx-auto">
              <MDXContent components={Components} />
            </div>
              <Comments className='pt-16'/>
          </MotionWrapper>
        </StaggerWrapper>
      </article>
    </>
  );
};

export default PostLayout;
