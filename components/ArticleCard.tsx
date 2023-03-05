import Link from 'next/link'
import { compareDesc, format, parseISO } from 'date-fns'
import { allPosts, Post } from 'contentlayer/generated'
import Image from 'next/image'
import {motion} from 'framer-motion'
import { ArticleCardVariant } from 'config/animations'
import { ImageWithFallback } from './ImageWithFallback'

export async function getStaticProps() {
  const posts: Post[] = allPosts.sort((a, b) => {
    return compareDesc(new Date(a.date), new Date(b.date))
  })
  return { props: { posts } }
}

export default function ArticleCard({post, className}: {post: Post, className?: string}) {
  return (
    <motion.div variants={ArticleCardVariant} className={`bg-base-100 rounded-2xl w-full h-fit btn-ghost overflow-hidden border-0 ${className}`}>
    <Link scroll={false} href={post.url}>
      {post.image && <ImageWithFallback placeholder='blur' blurDataURL="/images/placeholder.webp" width={640} height={640} alt='Post preview' className='object-cover w-full max-h-52' src={`/images/${post.image}`} />}
      <div className='p-4 flex flex-col gap-1'>
      <h2 className="text-xl font-semibold">
          {post.title}
      </h2>
          <p className='line-clamp-2'>{post.description}</p>
      <time dateTime={post.date} className="text-sm text-secondary">
        {format(parseISO(post.date), 'LLLL d, yyyy')}
      </time>
        </div>
      </Link>
      </motion.div>
  );
}