import { defineDocumentType, makeSource } from 'contentlayer2/source-files'

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: 'blog/**/*.md',
  contentType: 'markdown',
  fields: {
    title: {
      type: 'string',
      description: 'The title of the post',
      required: true,
    },
    description: {
      type: 'string',
      description: 'A short description of the post',
      required: true,
    },
    date: {
      type: 'date',
      description: 'The date of the post',
      required: true,
    },
    published: {
      type: 'boolean',
      description: 'Whether the post is published',
      required: false,
      default: true,
    },
    featured: {
      type: 'boolean',
      description: 'Whether the post is featured',
      required: false,
      default: false,
    },
    tags: {
      type: 'list',
      of: { type: 'string' },
      description: 'List of tags for the post',
      required: false,
    },
    image: {
      type: 'string',
      description: 'The cover image of the post',
      required: false,
    },
    author: {
      type: 'string',
      description: 'The author of the post',
      required: false,
      default: 'Harkanwal Singh',
    },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (doc) => `/blog/${doc._raw.flattenedPath.replace('blog/', '')}`,
    },
    slug: {
      type: 'string',
      resolve: (doc) => doc._raw.flattenedPath.replace('blog/', ''),
    },
    readingTime: {
      type: 'number',
      resolve: (doc) => {
        const wordsPerMinute = 200;
        const wordCount = doc.body.raw.split(/\s+/).length;
        return Math.ceil(wordCount / wordsPerMinute);
      },
    },
  },
}))

export const Project = defineDocumentType(() => ({
  name: 'Project',
  filePathPattern: 'projects/**/*.md',
  contentType: 'markdown',
  fields: {
    title: {
      type: 'string',
      description: 'The title of the project',
      required: true,
    },
    description: {
      type: 'string',
      description: 'A short description of the project',
      required: true,
    },
    longDescription: {
      type: 'string',
      description: 'A detailed description of the project',
      required: false,
    },
    date: {
      type: 'date',
      description: 'The date when the project was completed',
      required: true,
    },
    published: {
      type: 'boolean',
      description: 'Whether the project is published',
      required: false,
      default: true,
    },
    featured: {
      type: 'boolean',
      description: 'Whether the project is featured',
      required: false,
      default: false,
    },
    technologies: {
      type: 'list',
      of: { type: 'string' },
      description: 'Technologies used in the project',
      required: true,
    },
    category: {
      type: 'string',
      description: 'Category of the project',
      required: true,
    },
    image: {
      type: 'string',
      description: 'The cover image of the project',
      required: false,
    },
    images: {
      type: 'list',
      of: { type: 'string' },
      description: 'Additional images for the project',
      required: false,
    },
    demoUrl: {
      type: 'string',
      description: 'Live demo URL',
      required: false,
    },
    githubUrl: {
      type: 'string',
      description: 'GitHub repository URL',
      required: false,
    },
    status: {
      type: 'enum',
      options: ['completed', 'in-progress', 'planning'],
      description: 'Current status of the project',
      required: false,
      default: 'completed',
    },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (doc) => `/projects/${doc._raw.flattenedPath.replace('projects/', '')}`,
    },
    slug: {
      type: 'string',
      resolve: (doc) => doc._raw.flattenedPath.replace('projects/', ''),
    },
  },
}))

export const Page = defineDocumentType(() => ({
  name: 'Page',
  filePathPattern: 'pages/**/*.md',
  contentType: 'markdown',
  fields: {
    title: {
      type: 'string',
      description: 'The title of the page',
      required: true,
    },
    description: {
      type: 'string',
      description: 'A short description of the page',
      required: true,
    },
    published: {
      type: 'boolean',
      description: 'Whether the page is published',
      required: false,
      default: true,
    },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (doc) => `/${doc._raw.flattenedPath.replace('pages/', '')}`,
    },
    slug: {
      type: 'string',
      resolve: (doc) => doc._raw.flattenedPath.replace('pages/', ''),
    },
  },
}))

export default makeSource({
  contentDirPath: './content',
  documentTypes: [Post, Project, Page],
  markdown: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
})