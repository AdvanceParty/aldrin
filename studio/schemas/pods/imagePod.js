import { IoIosImage } from 'react-icons/io';

export default {
  name: 'imagePod',
  title: 'Image Pod',
  type: 'document',
  icon: IoIosImage,
  preview: {
    select: {
      title: 'title',
      caption: 'caption',
      alt: 'imageAsset.alt',
      image: 'imageAsset.image',
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
      name: 'imageAsset',
      title: ' ',
      type: 'mediaAssetImage',
      validation: (Rule) => Rule.required(),
    },
  ],
};
