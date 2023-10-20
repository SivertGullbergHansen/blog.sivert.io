import { format, parseISO } from "date-fns";
import { allPosts, Post } from "contentlayer/generated";
import { useMDXComponent } from "next-contentlayer/hooks";
import MotionWrapper from "components/MotionWrapper";
import { ArticleContentVariant, staggerTransition } from "config/animations";
import StaggerWrapper from "components/StaggerWrapper";
import React from "react";
import { Components } from "components/MdxConvertedComponents";
import { ImageWithFallback } from "components/ImageWithFallback";
import { Comments } from "components/Comments";
import { HeadMetaGenerator } from "components/HeadMetaGenerator";

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
      <HeadMetaGenerator
        description={post.description}
        url={`posts/${post.slug}`}
        metaImg={post.image ? `${post.image}` : null}
        title={post.title}
      />
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
                className="object-cover w-full max-h-[512px]"
                imageName={post.image}
              />
            </MotionWrapper>
          )}
          <MotionWrapper
            variants={ArticleContentVariant}
            className="max-w-prose prose-h1:mb-4 mx-auto"
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
