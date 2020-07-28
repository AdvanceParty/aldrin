import { AiTwotoneNotification } from 'react-icons/ai';
import { MdShortText } from 'react-icons/md';

export default {
  name: 'callout',
  title: 'Callout Pod',
  type: 'document',
  icon: AiTwotoneNotification,
  preview: {
    select: {
      textNodes: 'text.bodyText.0.children',
    },
    prepare(selection) {
      const { textNodes } = selection;
      let title = '';
      if (textNodes) {
        textNodes.forEach((node) => (title += node.text));
        title = title.length > 25 ? title.substring(0, 22) + '...' : title;
      }
      return {
        title: title || 'Untitled callout',
        media: AiTwotoneNotification,
      };
    },
  },
  fields: [
    {
      name: 'bodyText',
      title: 'Content',
      icon: MdShortText,
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'Heading 1', value: 'h1' },
            { title: 'Heading 2', value: 'h2' },
          ],
          marks: {
            decorators: [
              { title: 'Bold', value: 'strong' },
              { title: 'Emphasis', value: 'em' },
            ],
          },
        },
      ],
    },
  ],
};
