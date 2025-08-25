import { defineDocumentType, makeSource } from 'contentlayer2/source-files';
import remarkGfm from 'remark-gfm';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';


export const Project = defineDocumentType(() => ({
  name: 'Project',
  filePathPattern: 'projects/**/*.{md,mdx}',
  contentType: 'mdx',
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
      resolve: (doc) =>
        `/projects/${doc._raw.flattenedPath.replace('projects/', '')}`,
    },
    slug: {
      type: 'string',
      resolve: (doc) => doc._raw.flattenedPath.replace('projects/', ''),
    },
  },
}));

export const Page = defineDocumentType(() => ({
  name: 'Page',
  filePathPattern: 'pages/**/*.{md,mdx}',
  contentType: 'mdx',
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
}));

export default makeSource({
  contentDirPath: './content',
  documentTypes: [Project, Page],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ['anchor'],
          },
        },
      ],
      [
        rehypePrettyCode,
        {
          theme: {
            dark: 'github-dark',
            light: 'github-light',
          },
          keepBackground: false,
        },
      ],
    ],
  },
});
