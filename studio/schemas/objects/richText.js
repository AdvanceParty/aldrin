import { MdTextFields } from 'react-icons/md';

export default {
  name: 'richText',
  title: 'Rich Text',
  icon: MdTextFields,
  description:
    'A text block which supports multiple paragraphs of normal body text and headings. Supported inline elements: links, lists and bold/emphasis markings.',
  type: 'object',
  fields: [
    {
      name: 'bodyText',
      title: 'Content',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'Heading 1', value: 'h1' },
            { title: 'Heading 2', value: 'h2' }
          ],
          marks: {
            decorators: [
              { title: 'Bold', value: 'strong' },
              { title: 'Emphasis', value: 'emphasis' }
            ]
          }
        }
      ]
    }
  ]
};
