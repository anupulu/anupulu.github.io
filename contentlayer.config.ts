import { defineDocumentType, makeSource } from 'contentlayer/source-files'
import remarkGfm from 'remark-gfm'
import rehypePrism from 'rehype-prism-plus'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'

export const Learning = defineDocumentType(() => ({
  name: 'Learning',
  filePathPattern: 'learnings/**/*.mdx',
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    date: { type: 'date', required: true },
    description: { type: 'string', required: true },
    tags: { type: 'list', of: { type: 'string' }, required: true },
    relatedManifestoPrinciples: {
      type: 'list',
      of: { type: 'string' },
      required: false
    },
    image: {
      type: 'json',
      required: false
    },
    relatedLinks: {
      type: 'list',
      of: { type: 'json' },
      required: false
    }
  },
  computedFields: {
    slug: {
      type: 'string',
      resolve: (doc) => doc._raw.flattenedPath.replace(/^learnings\//, '')
    }
  }
}))

export default makeSource({
  contentDirPath: 'content',
  documentTypes: [Learning],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypePrism,
      rehypeSlug,
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ['anchor']
          }
        }
      ]
    ]
  }
})