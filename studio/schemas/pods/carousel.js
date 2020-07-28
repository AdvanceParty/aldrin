import { MdViewCarousel, MdViewColumn } from 'react-icons/md';

export default {
  name: 'carousel',
  title: 'Carousel Pod',
  description:
    'A collection of items displayed one at a time. Each item can have its own title, description, call to action and image.',
  icon: MdViewCarousel,
  type: 'document',
  preview: {
    select: {
      title: 'title',
    },
    prepare(selection) {
      const { title } = selection;
      return {
        title,
        media: MdViewCarousel,
      };
    },
  },
  fields: [
    {
      name: 'title',
      title: 'Carousel Title',
      description: 'For editorial reference. Not displayed on website.',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Carousel Description',
      description: 'For editorial reference. Not displayed on website.',
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
};
