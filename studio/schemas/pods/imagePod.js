import { IoIosImage } from 'react-icons/io';

export default {
  name: 'imagePod',
  title: 'Image Pod',
  type: 'document',
  icon: IoIosImage,
  preview: {
    select: {
      title: 'simpleImage.title',
      alt: 'simpleImage.alt',
      image: 'simpleImage.image',
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
      name: 'simpleImage',
      title: 'Image Details',
      type: 'simpleImage',
      validation: (Rule) => Rule.required(),
    },
  ],
};
