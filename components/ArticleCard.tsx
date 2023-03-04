import Link from 'next/link'
import { compareDesc, format, parseISO } from 'date-fns'
import { allPosts, Post } from 'contentlayer/generated'
import Image from 'next/image'
import {motion} from 'framer-motion'
import { ArticleCardVariant } from 'config/animations'

export async function getStaticProps() {
  const posts: Post[] = allPosts.sort((a, b) => {
    return compareDesc(new Date(a.date), new Date(b.date))
  })
  return { props: { posts } }
}

export default function ArticleCard(post: Post) {
  return (
    <motion.div variants={ArticleCardVariant} className="bg-base-100 rounded-2xl max-w-prose w-full btn-ghost overflow-hidden border-0">
    <Link href={post.url}>
      {post.image && <Image width={512} height={512} alt='Post preview' className='object-cover w-full max-h-64' src={`/images/${post.image}`} />}
      <div className='p-4 flex flex-col gap-1'>
      <h2 className="text-xl">
          {post.title}
      </h2>
      <time dateTime={post.date} className="text-sm text-neutral-content">
        {format(parseISO(post.date), 'LLLL d, yyyy')}
      </time>
      <p className='line-clamp-2'>{ post.description }</p></div>
      </Link>
      </motion.div>
  );
}