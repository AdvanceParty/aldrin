import { IoIosImage } from 'react-icons/io';

export default {
  name: 'carouselItem',
  title: 'Carousel Item',
  icon: IoIosImage,
  description: 'An item that belongs to a carousel',
  type: 'object',
  preview: {
    select: {
      title: 'details.title',
      ctaCount: 'cta.length',
      image: 'image',
    },
    prepare(selection) {
      const { title, ctaCount, image } = selection;
      const plural = ctaCount != 1 ? 's' : '';
      return {
        title: title || 'Untitled Item',
        subtitle: `${ctaCount || 0} call${plural} to action.`,
        media: image || IoIosImage,
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
    {
      name: 'cta',
      title: 'Calls to action',
      description: 'Up to three calls to action to be presented with the image.',
      type: 'array',
      validation: (Rule) => Rule.max(3),
      of: [
        {
          type: 'cta',
        },
      ],
    },
  ],
};
