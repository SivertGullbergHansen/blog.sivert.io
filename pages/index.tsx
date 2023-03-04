import { compareDesc } from 'date-fns'
import { allPosts, Post } from 'contentlayer/generated'
import ArticleCard from 'components/ArticleCard'

export async function getStaticProps() {
  const posts: Post[] = allPosts.sort((a, b) => {
    return compareDesc(new Date(a.date), new Date(b.date))
  })
  return { props: { posts } }
}

export default function Home({ posts }: { posts: Post[] }) {
  return (
    <div className="w-full h-full flex flex-col place-items-center p-4 gap-4">
      {posts.map((post, idx) => (
        <ArticleCard key={idx} {...post} />
      ))}
    </div>
  )
}
