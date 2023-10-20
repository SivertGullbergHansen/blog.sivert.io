import { defineDocumentType, makeSource } from "contentlayer/source-files";
import readingTime from "reading-time";
import remarkGfm from "remark-gfm";
import remarkToc from "remark-toc";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeCodeTitles from "rehype-code-titles";
import emoji from "remark-emoji";
import rehypePrettyCode from "rehype-pretty-code";
import remarkInlineLinks from "remark-inline-links";
import { rehypeAccessibleEmojis } from "rehype-accessible-emojis";
import theme from './moonlight-ii.json'

const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      description: "The title of the post",
      required: true,
    },
    short: {
      type: "string",
      description: "The short title of the post",
      required: false,
    },
    date: {
      type: "date",
      description: "The date of the post",
      required: true,
    },
    description: {
      type: "string",
      description: "The description of the post",
      required: true,
    },
    image: {
      type: "string",
      description: "The image URL of the post",
      required: false,
    },
    published: {
      type: "boolean",
      description: "If the post is visible",
      required: true,
    },
    allowComments: {
      type: "boolean",
      description: "Comments allowed?",
      required: false,
    },
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (doc) => `/posts/${doc._raw.flattenedPath}`,
    },
    readingTime: {
      type: "json",
      resolve: (doc) => readingTime(doc.body.raw),
    },
    slug: {
      type: "string",
      resolve: (doc) => doc._raw.sourceFileName.replace(".mdx", ""),
    },
  },
}));

export default makeSource({
  contentDirPath: "posts",
  documentTypes: [Post],
  mdx: {
    remarkPlugins: [remarkGfm, remarkToc, emoji, remarkInlineLinks],
    rehypePlugins: [
      rehypeSlug,
      rehypeCodeTitles,
      [
        rehypePrettyCode,
        {
          theme,
          keepBackground: true,
        },
      ],
      [rehypeAutolinkHeadings, { behavior: "prepend", content: [] }],
      rehypeAccessibleEmojis,
    ],
  },
});
