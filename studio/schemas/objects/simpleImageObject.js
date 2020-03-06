export default {
  name: 'simpleImageObject',
  title: 'Image',
  description:
    'An image, with data slots for title, caption and alternate text.',
  type: 'object',
  preview: {
    select: {
      title: 'title',
      alt: 'alt',
      image: 'image'
    },
    prepare(selection) {
      const { title, alt, image } = selection;
      return {
        title: title || 'Untitled Masterpiece',
        subtitle: alt || '',
        media: image
      };
    }
  },
  fields: [
    {
      name: 'image',
      title: 'Image File',
      type: 'image',
      validation: Rule => Rule.required()
    },
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
      name: 'description',
      title: 'Caption',
      type: 'text'
    }
  ]
};
