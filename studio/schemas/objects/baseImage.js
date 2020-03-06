export default {
  name: 'baseImage',
  title: 'Image',
  description: 'An image asset with optional title, alt text and caption data.',
  type: 'object',
  preview: {
    select: {
      title: 'title',
      subtitle: 'alt'
    }
  },
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'alt',
      title: 'Alt text',
      type: 'string'
    },
    {
      name: 'image',
      title: 'Image File',
      type: 'image'
    },
    {
      name: 'description',
      title: 'Caption',
      type: 'text',
      options: {
        isHighlighted: true
      }
    }
  ]
};
