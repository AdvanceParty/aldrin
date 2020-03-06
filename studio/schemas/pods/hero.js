export default {
  name: 'hero',
  title: 'Hero',
  type: 'document',
  preview: {
    select: {
      title: 'title',
      description: 'description',
      image: 'image',
      cta: 'cta.title'
    },
    prepare(selection) {
      const { title, cta, image } = selection;
      return {
        title: title || alt || cta || 'Untitled Hero Pod',
        media: image || null
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
