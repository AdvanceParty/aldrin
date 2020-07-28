import { MdNotifications } from 'react-icons/md';

export default {
  name: 'imageWithCta',
  title: 'Image with CTA(s)',
  icon: MdNotifications,
  description:
    'Data structure for grouping an annotatedImage with up to three calls to action. Useful for carousel items, hero banners and other content which combines a feauture image with user-triggered actions.',
  type: 'object',
  preview: {
    select: {
      imgTitle: 'image.title',
      ctaLabel: 'cta.0.label',
      ctaCount: 'cta.length',
      image: 'image.image',
    },
    prepare(selection) {
      const { imgTitle, ctaLabel, ctaCount, image } = selection;
      const plural = ctaCount != 1 ? 's' : '';
      return {
        title: imgTitle || ctaLabel || 'Image with CTA',
        subtitle: `${ctaCount || 0} call${plural} to action.`,
        media: image,
      };
    },
  },
  fields: [
    {
      name: 'image',
      title: 'Image',
      validation: (Rule) => Rule.required(),
      description: 'Note: Some UI components may not display the image title and caption.',
      type: 'annotatedImage',
      title: 'Add an image to this collection.',
    },
    {
      name: 'cta',
      title: 'Calls to action',
      description: 'Up to three calls to action to be presented with the image.',
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
