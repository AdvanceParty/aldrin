import { IoIosImages } from 'react-icons/io';

export default {
  name: 'imageCollection',
  icon: IoIosImages,
  title: 'Collection: Images',
  description:
    'A collection of related image pods. May be displayed in a variety of different ways on the website.</p><p>If you want more of a slideshow vibe, you should check out the Carousel pod.',
  type: 'document',
  preview: {
    select: {
      title: 'title',
      itemCount: 'items.length',
    },
    prepare(selection) {
      let { title, itemCount } = selection;
      const plural = itemCount != 1 ? 's' : '';

      return {
        title: title || 'Untitled Image Collection',
        subtitle: `${itemCount} item${plural}`,
        media: IoIosImages,
      };
    },
  },
  fieldsets: [
    {
      name: 'aboutCollection',
      title: 'About this collection',
      options: {
        collapsible: true,
        collapsed: false,
      },
    },
  ],
  fields: [
    {
      name: 'title',
      title: 'Title',
      fieldset: 'aboutCollection',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      fieldset: 'aboutCollection',
      type: 'text',
    },
    {
      name: 'items',
      title: 'Items',
      description: 'Select one or more image pods to add into your collection.',
      validation: (Rule) => Rule.required(),
      type: 'reference',
      to: [
        {
          type: 'imagePod',
        },
      ],
    },
  ],
};
