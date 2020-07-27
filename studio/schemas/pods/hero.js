import { MdStars } from 'react-icons/md';

export default {
  name: 'hero',
  title: 'Hero Pod',
  type: 'document',
  icon: MdStars,
  preview: {
    select: {
      title: 'title',
      description: 'description',
      image: 'image',
    },
    prepare(selection) {
      const { title, image } = selection;
      return {
        title: title || 'Untitled Hero Pod',
        media: image || MdStars,
      };
    },
  },
  fields: [
    {
      name: 'title',
      title: 'Headline',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Body Text',
      type: 'text',
    },
    {
      name: 'image',
      title: 'Image',
      description: 'A nice shiny image for your hero block.',
      type: 'image',
      options: [{ metadata: ['palette'] }],
    },
  ],
};
