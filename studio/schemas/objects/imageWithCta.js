import { MdNotifications } from 'react-icons/md';

export default {
  name: 'imageWithCta',
  title: 'Image with CTA(s)',
  icon: MdNotifications,
  description:
    'Data structure with a simpleImage and one or more calls to action. Useful for carousel items, hero banners and other content which combines a feauture image with user-triggered actions.',
  type: 'object',
  preview: {
    select: {
      imgTitle: 'image.0.title',
      ctaLabel: 'cta.0.label',
      ctaCount: 'cta.length',
      image: 'image.0.image',
    },
    prepare(selection) {
      const { imgTitle, ctaLabel, ctaCount, image } = selection;
      return {
        title: imgTitle || ctaLabel || 'Image with CTA',
        subtitle: `${ctaCount || 0} call${ctaCount != 1 ? 's' : ''} to action.`,
        media: image,
      };
    },
  },
  fields: [
    {
      name: 'image',
      title: 'Image',
      validation: (Rule) => Rule.required().length(1),
      description:
        'The image to be displayed. Note: Some UI components may not display the image title and caption.',
      type: 'array',
      of: [
        {
          type: 'simpleImage',
          title: 'Add an image to this collection.',
        },
        {
          type: 'reference',
          title: 'Add a pre-existing Image Pod',
          to: [{ type: 'imagePod' }],
        },
      ],
    },
    {
      name: 'cta',
      title: 'Calls to action',
      description:
        'Up to three calls to action to be presented with the image. Note: the appearance of each call to action will vary depending on which UI component is being used.',
      type: 'array',
      validation: (Rule) => Rule.required().max(3),
      of: [
        {
          type: 'cta',
        },
      ],
    },
  ],
};
