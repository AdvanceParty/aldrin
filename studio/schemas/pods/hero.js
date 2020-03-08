import { MdStars } from 'react-icons/md';

export default {
  name: 'hero',
  title: 'Hero',
  type: 'document',
  icon: MdStars,
  preview: {
    select: {
      title: 'title',
      description: 'description',
      image: 'image',
      cta: 'cta.title'
    },
    prepare(selection) {
      const { title, cta, image } = selection;
      return {
        title: title || alt || cta || 'Untitled Hero Pod',
        media: image || MdStars
      };
    }
  },
  fields: [
    {
      name: 'title',
      title: 'Headline',
      type: 'string'
    },
    {
      name: 'description',
      title: 'Text',
      type: 'text'
    },
    {
      name: 'image',
      title: 'Image',
      description: 'A nice shiny image for your hero block.',
      type: 'image',
      options: [{ metadata: ['palette'] }]
    },
    {
      name: 'cta',
      title: 'Call To Action',
      type: 'cta'
    }
  ]
};
