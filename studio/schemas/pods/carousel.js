import { MdViewCarousel, MdViewColumn } from 'react-icons/md';

export default {
  name: 'carousel',
  title: 'Carousel',
  description:
    'A collection of images to be displayed one after the other. Each image can optionally have its own title, description, and call to action.',
  icon: MdViewCarousel,
  type: 'document',
  preview: {
    select: {
      title: 'title',
    },
    prepare(selection) {
      const { title } = selection;
      return {
        title: title || 'Untitled Carousel',
        media: MdViewCarousel,
      };
    },
  },
  fields: [
    {
      name: 'title',
      title: 'Title',
      description: 'For admin reference only - not displayed on website.',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Carousel Description',
      description: 'For admin reference only - not displayed on website.',
      type: 'string',
    },
    {
      name: 'shuffleItems',
      title: 'Shuffle items',
      description:
        'Enable this option to show items in random order each time a user views this carousel',
      type: 'boolean',
    },
    {
      name: 'items',
      title: 'Carousel Items',
      validation: (Rule) => Rule.required().min(1),
      type: 'array',
      of: [
        {
          type: 'imageWithCta',
          title: 'Items',
          icon: MdViewColumn,
          description: 'A list of items for your carousel.',
        },
      ],
    },
  ],
  initialValue: {
    shuffleItems: false,
  },
};
