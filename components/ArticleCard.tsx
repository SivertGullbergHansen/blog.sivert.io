import Link from 'next/link'
import { compareDesc, format, parseISO } from 'date-fns'
import { allPosts, Post } from 'contentlayer/generated'

export async function getStaticProps() {
  const posts: Post[] = allPosts.sort((a, b) => {
    return compareDesc(new Date(a.date), new Date(b.date))
  })
  return { props: { posts } }
}

export default function ArticleCard(post: Post) {
  return (
    <div className="p-4 bg-base-100 rounded-2xl max-w-prose">
      <h2 className="text-xl">
        <Link href={post.url}>
          {post.title}
        </Link>
      </h2>
      <time dateTime={post.date} className="text-sm text-neutral-content">
        {format(parseISO(post.date), 'LLLL d, yyyy')}
      </time>
      <div className="text-sm" dangerouslySetInnerHTML={{ __html: post.body.html }} />
    </div>
  );
}