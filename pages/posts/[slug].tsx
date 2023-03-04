import Head from "next/head";
import { format, parseISO } from "date-fns";
import { allPosts, Post } from "contentlayer/generated";
import { useMDXComponent } from 'next-contentlayer/hooks'
import Image from "next/image";
import MotionWrapper from "components/MotionWrapper";
import { ArticleContentVariant } from "config/animations";
import StaggerWrapper from "components/StaggerWrapper";
import React, { Children } from "react";

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
  const MDXContent: Function = useMDXComponent(post.body.code)
  
  return (
    <>
      <Head>
        <title>{`Sivert's blog - ${post.title}`}</title>
      </Head>
      <article className="max-w-prose mx-auto py-12 m-0 prose lg:prose-xl">
        <StaggerWrapper>
        <MotionWrapper variants={ArticleContentVariant}>
      {post.image && <Image width={512} height={512} alt='Post preview' className='object-cover w-full max-h-96 rounded-xl' src={`/images/${post.image}`} />}
        <time dateTime={post.date}>
            {format(parseISO(post.date), "LLLL d, yyyy")}
          </time>
        <h1>{post.title}</h1>
          </MotionWrapper>
          {Children.map(MDXContent().props.children, (child, index) => {
            return <MotionWrapper variants={ArticleContentVariant}>{child}</MotionWrapper>
          })}
        </StaggerWrapper>
      </article>
    </>
  );
};

export default PostLayout;
