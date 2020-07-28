import { IoIosImage } from 'react-icons/io';

export default {
  name: 'imagePod',
  title: 'Image Pod',
  type: 'document',
  icon: IoIosImage,
  preview: {
    select: {
      title: 'annotatedImage.title',
      alt: 'annotatedImage.alt',
      image: 'annotatedImage.image',
    },
    prepare(selection) {
      const { title, alt, image } = selection;
      return {
        title: title || 'Untitled Masterpiece',
        subtitle: alt || '',
        media: image || IoIosImage,
      };
    },
  },
  fields: [
    {
      name: 'annotatedImage',
      title: 'Image Details',
      type: 'annotatedImage',
      validation: (Rule) => Rule.required(),
    },
  ],
};
