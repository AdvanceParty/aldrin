import { AiTwotoneNotification } from 'react-icons/ai';

export default {
  name: 'callout',
  title: 'Callout Pod',
  type: 'document',
  icon: AiTwotoneNotification,
  preview: {
    select: {
      textNodes: 'text.bodyText.0.children'
    },
    prepare(selection) {
      const { textNodes } = selection;
      let title = '';
      if (textNodes) {
        textNodes.forEach(node => (title += node.text));
        title = title.length > 25 ? title.substring(0, 22) + '...' : title;
      }
      return {
        title: title || 'Untitled callout',
        media: AiTwotoneNotification
      };
    }
  },
  fields: [
    {
      name: 'text',
      title: 'Content',
      type: 'richParagraph'
    }
  ]
};
