export default {
  name: 'hero',
  title: 'Hero',
  type: 'document',
  preview: {
    select: {
      title: 'title',
      description: 'description',
      alt: 'image.alt',
      cta: 'cta.title'
    },
    prepare(selection) {
      const { title, alt, cta } = selection;
      return {
        title: title || alt || cta || 'Untitled Hero Pod'
      };
    }
  },
  fields: [
    {
      name: 'title',
      title: 'Headline',
      type: 'string'
    },
    {
      name: 'description',
      title: 'Text',
      type: 'text'
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image'
    },
    {
      name: 'cta',
      title: 'Call To Action',
      type: 'cta'
    }
  ]
};
