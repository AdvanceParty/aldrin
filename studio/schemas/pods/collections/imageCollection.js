import { IoIosImages } from 'react-icons/io';

export default {
  name: 'imageCollection',
  icon: IoIosImages,
  title: 'Collection: Images',
  description:
    'A collection of related images. May be displayed in a variety of different ways on the website. If you want more of a slideshow vibe, you should check out the Carousel pod.',
  type: 'document',
  preview: {
    select: {
      title: 'title',
      itemCount: 'items.length'
    },
    prepare(selection) {
      let { title, itemCount } = selection;
      const plural = itemCount > 1 ? 's' : '';

      return {
        title: title || 'Untitled Image Collection',
        subtitle: `${itemCount} item${plural}`,
        media: IoIosImages
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
          title: 'Add an image to this collection.'
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
