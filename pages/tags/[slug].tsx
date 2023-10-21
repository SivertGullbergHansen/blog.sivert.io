import { compareDesc } from 'date-fns'
import { allPosts, Post } from 'contentlayer/generated'
import ArticleCard from 'components/ArticleCard'
import StaggerWrapper from 'components/StaggerWrapper'
import { staggerTransition } from 'config/animations'
import FeaturedCard from 'components/FeaturedCard'
import { HeadMetaGenerator } from "components/HeadMetaGenerator";
import { useEffect, useState } from 'react'
import React from 'react'

export async function getStaticPaths() {
  // Create an array to store all the tags
  const allTags: {params: any}[] = [];

  // Loop through each post and extract its tags
  allPosts.forEach((post) => {
    if (post.tags && Array.isArray(post.tags)) {
      // Add each tag to the allTags array
      post.tags.forEach((tag) => allTags.push({params: { slug: tag }}))
    }
  });

  // Now you have all the tags in the stringArrayTags
  return {
    paths: allTags,
    fallback: false,
  };
}

export async function getStaticProps({ params }: {params: {slug: string}}) {
  const filteredPosts: Post[] = allPosts
    .filter(post => post.tags !== undefined && post.tags.includes(params.slug.toLowerCase()))
    .sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)));

  return { props: { posts: filteredPosts, slug: params.slug } };
}

export default function Home({ posts, slug }: { posts: Post[], slug: string }) {
  const [hidePost, sethidePost] = useState('') // Define which post is featured so we hide it in the list of smaller posts
  let post = posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())[0];
  
  useEffect(() => {    
    sethidePost(post.slug)
  }, [])

  return (
    <>
          <HeadMetaGenerator />
    <StaggerWrapper transition={staggerTransition} className="w-full h-full px-8 flex flex-col place-items-center py-28">
        <div className='flex flex-col gap-12 sm:w-full max-w-[1200px]'>
          <div className='flex flex-col gap-4'>
          <h1 className='text-xl font-bold flex items-center gap-2'>Posts related to: <span className='capitalize badge badge-lg badge-outline'>{slug}</span></h1>
      <FeaturedCard post={post} />
          </div>
      <div className='gap-12 flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3'>
            {posts.map((post, idx) => {
        
        if (post.slug !== hidePost)
        {
          return <ArticleCard key={idx} post={post} className=''/>
        }
      })}
      </div>
      </div>
    </StaggerWrapper>
      </>
  )
}
