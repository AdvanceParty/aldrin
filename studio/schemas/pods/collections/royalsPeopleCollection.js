import { MdPeople } from 'react-icons/md';

export default {
  name: 'royalsPeopleCollection',
  title: 'Collection: People',
  icon: MdPeople,
  description:
    'A group of Royals, all hanging out together. Good for project teams, gangs, assigning blame, etc.',
  type: 'document',
  preview: {
    select: {
      title: 'title',
      itemCount: 'items.length',
      image: 'icon'
    },
    prepare(selection) {
      const { title, itemCount = 0, image } = selection;
      const plural = itemCount == 1 ? '(lonely) person' : 'people';
      return {
        title: title || 'Untitled bunch of randos',
        subtitle: `${itemCount} ${plural}`,
        media: image || MdPeople
      };
    }
  },
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text'
    },
    {
      name: 'icon',
      title: 'Icon',
      description:
        'A small image to represent this group in the CMS and for preview & content listings on the website.',
      type: 'image'
    },
    {
      name: 'items',
      title: 'Members',
      validation: Rule => Rule.required(),
      type: 'array',
      of: [
        {
          type: 'reference',
          to: { type: 'royalsPerson' }
        }
      ]
    }
  ]
};
