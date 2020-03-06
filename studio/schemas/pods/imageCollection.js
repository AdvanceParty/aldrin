export default {
  name: 'imageCollection',
  title: 'Collection: Images',
  description:
    'A collection of related images. May be displayed in a variety of different ways on the website. If you want more of a slideshow vibe, you should check out the Carousel pod.',
  type: 'document',
  preview: {
    select: {
      title: 'title',
      itemCount: 'items.length',
      image: 'items.0.image'
    },
    prepare(selection) {
      const { title, itemCount, image } = selection;
      const plural = itemCount > 1 ? 's' : '';
      // const previewImg = items && items.length > 0 ? items[0] : null;
      console.log(image);
      return {
        title: title || 'Untitled Image Collection',
        subtitle: `${itemCount} item${plural}`,
        media: image ? image : null
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
      of: [
        {
          type: 'simpleImageObject',
          title: 'Create an Image Pod unique to this collection.'
        },
        {
          type: 'reference',
          title: 'Link to an existing Image Pod',
          to: [{ type: 'simpleImage' }]
        }
      ]
    }
  ]
};
