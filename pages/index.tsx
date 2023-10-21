import { compareDesc } from 'date-fns'
import { allPosts, Post } from 'contentlayer/generated'
import ArticleCard from 'components/ArticleCard'
import StaggerWrapper from 'components/StaggerWrapper'
import { staggerTransition } from 'config/animations'
import FeaturedCard from 'components/FeaturedCard'
import { HeadMetaGenerator } from "components/HeadMetaGenerator";
import { useEffect, useState } from 'react'

export async function getStaticProps() {
  const posts: Post[] = allPosts.sort((a, b) => {
    return compareDesc(new Date(a.date), new Date(b.date))
  })
  return { props: { posts } }
}

export default function Home({ posts }: { posts: Post[] }) {
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
      <FeaturedCard post={post} />
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
