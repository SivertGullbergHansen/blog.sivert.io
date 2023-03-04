import { compareDesc } from 'date-fns'
import { allPosts, Post } from 'contentlayer/generated'
import ArticleCard from 'components/ArticleCard'
import StaggerWrapper from 'components/StaggerWrapper'

export async function getStaticProps() {
  const posts: Post[] = allPosts.sort((a, b) => {
    return compareDesc(new Date(a.date), new Date(b.date))
  })
  return { props: { posts } }
}

export default function Home({ posts }: { posts: Post[] }) {
  return (
    <StaggerWrapper className="w-full h-full sm:px-0 px-4 flex flex-col place-items-center py-28 gap-6">
      {posts.map((post, idx) => {
        if (post.published)
        return (
        <ArticleCard key={idx} {...post} />
      )})}
    </StaggerWrapper>
  )
}
