import { IoIosImage } from 'react-icons/io';

export default {
  name: 'simpleImage',
  title: 'Image Pod',
  type: 'document',
  icon: IoIosImage,
  preview: {
    select: {
      title: 'image.title',
      alt: 'image.alt',
      image: 'image.image'
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
      name: 'image',
      title: 'Image',
      type: 'simpleImageObject',
      validation: Rule => Rule.required()
    }
  ]
};
