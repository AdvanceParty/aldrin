import { GiLinkedRings } from 'react-icons/gi';
import { IoMdApps } from 'react-icons/io';

export default {
  name: 'vine',
  title: 'Vine',
  type: 'document',
  icon: IoMdApps,
  preview: {
    select: {
      title: 'title',
      subtitle: 'category',
      image: 'hero.image',
    },
    prepare(selection) {
      const { title, subtitle, image } = selection;
      return {
        title,
        subtitle,
        media: image || IoMdApps,
      };
    },
  },
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
    },
    {
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: {
        type: 'royalsPerson',
      },
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      validation: (Rule) => Rule.required(),
      options: {
        list: [
          { title: 'Page', value: 'page' },
          { title: 'Article', value: 'article' },
          { title: 'Work', value: 'work' },
          { title: 'Other', value: '' },
        ],
        layout: 'radio',
      },
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      description:
        'A unique identifier for this record, used for URL generation and SEO. Usually, you can just click the Generate button and all will be fine.',
      options: {
        source: (doc) => `${doc.category}-${doc.title}`,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'hero',
      title: 'Hero',
      type: 'hero',
    },
    {
      name: 'story',
      title: 'Story',
      description: 'Formatted text content and inline pods for a more directed content experienve.',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'Heading 1', value: 'h1' },
            { title: 'Heading 2', value: 'h2' },
            { title: 'Heading 3', value: 'h3' },
            { title: 'Blockquote', value: 'blockquote' },
          ],
          marks: {
            decorators: [
              { title: 'Bold', value: 'strong' },
              { title: 'Emphasis', value: 'em' },
            ],
          },
        },
        {
          type: 'hero',
          title: 'Hero Image',
        },
        {
          type: 'annotatedImage',
          title: 'Content Image',
        },
        {
          type: 'callout',
          title: 'Callout',
        },
      ],
    },
    {
      name: 'pods',
      title: 'Pods',
      type: 'array',
      of: [
        {
          type: 'reference',
          title: 'Pod',
          to: [
            { type: 'callout' },
            { type: 'hero' },
            { type: 'imageCollection' },
            { type: 'royalsPerson' },
            { type: 'royalsPeopleCollection' },
            { type: 'royalsPlace' },
            { type: 'imagePod' },
          ],
        },
      ],
    },
  ],
};
