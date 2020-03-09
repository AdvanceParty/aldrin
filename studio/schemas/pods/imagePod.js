import { IoIosImage } from 'react-icons/io';

export default {
  name: 'imagePod',
  title: 'Image Pod',
  type: 'document',
  icon: IoIosImage,
  preview: {
    select: {
      title: 'data.title',
      alt: 'data.alt',
      image: 'data.image'
    },
    prepare(selection) {
      const { title, alt, image } = selection;
      return {
        title: title || 'Untitled Masterpiece',
        subtitle: alt || '',
        media: image || IoIosImage
      };
    }
  },
  fields: [
    {
      name: 'data',
      title: 'Image Details',
      type: 'simpleImageObject',
      validation: Rule => Rule.required()
    }
  ]
};
