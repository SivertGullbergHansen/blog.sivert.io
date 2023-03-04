import { compareDesc } from 'date-fns'
import { allPosts, Post } from 'contentlayer/generated'
import ArticleCard from 'components/ArticleCard'
import {motion} from 'framer-motion'
import { parentArticleTransition } from 'config/animations'

export async function getStaticProps() {
  const posts: Post[] = allPosts.sort((a, b) => {
    return compareDesc(new Date(a.date), new Date(b.date))
  })
  return { props: { posts } }
}

export default function Home({ posts }: { posts: Post[] }) {
  return (
    <motion.div transition={parentArticleTransition} animate='animate' initial='initial' exit='exit' className="w-full h-full flex flex-col place-items-center p-8 gap-6">
      {posts.map((post, idx) => {
        if (post.published)
        return (
        <ArticleCard key={idx} {...post} />
      )})}
    </motion.div>
  )
}
