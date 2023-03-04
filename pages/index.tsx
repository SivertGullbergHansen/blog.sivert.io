import { compareDesc } from 'date-fns'
import { allPosts, Post } from 'contentlayer/generated'
import ArticleCard from 'components/ArticleCard'
import StaggerWrapper from 'components/StaggerWrapper'
import { frontPageTransition } from 'config/animations'
import FeaturedCard from 'components/FeaturedCard'

export async function getStaticProps() {
  const posts: Post[] = allPosts.sort((a, b) => {
    return compareDesc(new Date(a.date), new Date(b.date))
  })
  return { props: { posts } }
}

function FeaturedPost({ posts }: { posts: Post[] }) {
  let Featured = null
    posts.map((post, idx) => {
      if (Featured !== null) return null;
        if (post?.featured)
        {
          Featured = <FeaturedCard key={idx} post={post} />
      }
    })
  return (
      Featured
  )
}

export default function Home({ posts }: { posts: Post[] }) {
  return (
    <StaggerWrapper transition={frontPageTransition} className="w-full h-full px-8 flex flex-col place-items-center py-28">
      <div className='flex flex-col gap-12 sm:w-full max-w-[1200px]'>
      <FeaturedPost posts={posts} />
      <div className='gap-12 flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3'>
      {posts.map((post, idx) => {
        if (post.published && !post?.featured)
        {
          return <ArticleCard key={idx} post={post} className=''/>
        }
      })}
      </div>
      </div>
    </StaggerWrapper>
  )
}
