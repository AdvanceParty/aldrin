export default {
  name: 'royalsPeople',
  title: 'Collection: People',
  description:
    'A group of Royals, all hanging out together. Good for project teams, gangs, assigning blame, etc.',
  type: 'document',
  preview: {
    select: {
      title: 'title',
      itemCount: 'items.length'
    },
    prepare(selection) {
      const { title, itemCount } = selection;
      const plural = itemCount == 1 ? '(lonely) person' : 'people';
      return {
        title: title || 'Untitled bunch of randos',
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
