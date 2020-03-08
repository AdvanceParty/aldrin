import { GiOrganigram } from 'react-icons/gi';

export default {
  name: 'orgUnit',
  title: 'Organisation Unit',
  icon: GiOrganigram,
  description:
    'Describe specific business/organisational units, and identify indviduals and/or groups who belong to them.',
  type: 'document',
  preview: {
    select: {
      title: 'title',
      itemCount: 'items.length'
    },
    prepare(selection) {
      const { title, itemCount } = selection;
      const plural = itemCount != 1 ? 'members' : 'member';
      return {
        title,
        subtitle: `${itemCount} ${plural}`
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
      name: 'items',
      title: 'Members',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            {
              type: 'royalsPerson',
              title: 'Add a Person'
            },
            {
              type: 'royalsPeopleCollection',
              title: 'Add a Collection of people'
            }
          ]
        }
      ]
    }
  ]
};
