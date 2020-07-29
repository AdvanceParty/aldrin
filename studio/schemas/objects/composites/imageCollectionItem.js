import { IoIosImage } from 'react-icons/io';

export default {
  name: 'imageCollectionItem',
  title: 'Image Collection Item',
  icon: IoIosImage,
  description: 'An item that belongs to an image collection',
  type: 'object',
  preview: {
    select: {
      title: 'details.title',
      caption: 'details.caption',
      alt: 'details.alt',
      image: 'image',
    },
    prepare(selection) {
      const { title, caption, alt, image } = selection;
      return {
        title: title || 'Untitled Image',
        subtitle: caption || alt || '',
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
  ],
};
