export default {
  name: 'mediaAssetImage',
  title: 'Media Asset - Image',
  type: 'object',
  preview: {
    select: {
      title: 'details.title',
      alt: 'details.alt',
      caption: 'details.caption',
      image: 'image',
    },
    prepare(selection) {
      const { title, alt, caption, image } = selection;
      return {
        title: title || 'Untitled Masterpiece',
        subtitle: alt || '',
        media: image,
      };
    },
  },
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        metadata: ['palette'],
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'details',
      title: 'Title, alt text & caption',
      type: 'mediaAssetDetails',
    },
  ],
};
