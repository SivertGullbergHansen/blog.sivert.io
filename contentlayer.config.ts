import { defineDocumentType, makeSource } from 'contentlayer/source-files'
import readingTime from 'reading-time'
import remarkGfm from 'remark-gfm'
import remarkToc from 'remark-toc'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeCodeTitles from 'rehype-code-titles'
import rehypePrism from 'rehype-prism-plus'
import emoji from 'remark-emoji';
import remarkInlineLinks from 'remark-inline-links'
import { rehypeAccessibleEmojis } from 'rehype-accessible-emojis'

const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      description: 'The title of the post',
      required: true,
    },
    date: {
      type: 'date',
      description: 'The date of the post',
      required: true,
    },
    description: {
      type: 'string',
      description: 'The description of the post',
      required: true,
    },
    image: {
      type: 'string',
      description: 'The image URL of the post',
      required: false,
    },
    published: {
      type: 'boolean',
      description: 'If the post is visible',
      required: true,
    },
    featured: {
      type: 'boolean',
      description: 'Is this a featured post',
      required: false,
    }
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (doc) => `/posts/${doc._raw.flattenedPath}`,
    },
    readingTime: {
      type: 'json',
      resolve: (doc) => readingTime(doc.body.raw)
    },
    slug: {
      type: 'string',
      resolve: (doc) => doc._raw.sourceFileName.replace('.mdx', ''),
    },

  },
}))

export default makeSource({
  contentDirPath: 'posts',
  documentTypes: [Post],
    mdx: {
    remarkPlugins: [remarkGfm, remarkToc, emoji, remarkInlineLinks],
    rehypePlugins: [
      rehypeSlug,
      rehypeCodeTitles,
      rehypePrism,      [
        rehypeAutolinkHeadings,
      { behavior: "prepend", content: []},
      ],
      rehypeAccessibleEmojis,
    ],
  },
})
