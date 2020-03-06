export default {
  name: 'imageGallery',
  title: 'Image Gallery',
  type: 'document',
  preview: {
    select: {
      title: 'title',
      items: 'items'
    },
    prepare(selection) {
      const { title, items } = selection;
      const plural = items.length > 1 ? 's' : '';
      return {
        title: title || 'Untitled Gallery',
        subtitle: `${items.length} item${plural}`
      };
    }
  },
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text'
    },
    {
      name: 'items',
      title: 'Images',
      validation: Rule => Rule.required(),
      type: 'array',
      of: [{ type: 'baseImage' }]
    }
  ]
};
