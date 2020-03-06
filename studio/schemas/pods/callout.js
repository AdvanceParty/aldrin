export default {
  name: 'callout',
  title: 'Callout',
  type: 'document',
  preview: {
    select: {
      title: 'title'
    }
  },
  fields: [
    {
      name: 'title',
      title: 'Text',
      type: 'string'
    },
    {
      name: 'text',
      title: 'Content',
      type: 'richParagraph'
    }
  ]
};
