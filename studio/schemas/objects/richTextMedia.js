import { TiNews } from 'react-icons/ti';

export default {
  name: 'richTextMedia',
  title: 'Rich Text Meddia',
  icon: TiNews,
  description:
    'Rich text wioth headings, paragraphs, inline styles, lists and a subset of embedded media/object types. Mainly used as the main content container for stories on vine/article/page views.',
  type: 'object',
  fields: [
    {
      name: 'bodyText',
      title: 'Text and Inline Content',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'Heading 1', value: 'h1' },
            { title: 'Heading 2', value: 'h2' },
            { title: 'Heading 3', value: 'h3' },
            { title: 'Blockquote', value: 'blockquote' }
          ],
          marks: {
            decorators: [
              { title: 'Bold', value: 'strong' },
              { title: 'Emphasis', value: 'emphasis' }
            ]
          }
        },
        // { type: 'simpleImage' },
        // { type: 'callout' },
        // { type: 'hero' },
        {
          type: 'reference',
          to: [{ type: 'simpleImage' }, { type: 'callout' }, { type: 'hero' }]
        }
      ]
    }
  ]
};
