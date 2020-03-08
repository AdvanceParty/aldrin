import { MdShortText } from 'react-icons/md';

export default {
  name: 'richParagraph',
  title: 'Rich Paragraph',
  icon: MdShortText,
  description:
    'A text block which supports multiple paragraphs of normal body text (no headings), inine links, lists and bold/emphasis markings.',
  type: 'object',
  fields: [
    {
      name: 'bodyText',
      title: 'Content',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [{ title: 'Normal', value: 'normal' }],
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
