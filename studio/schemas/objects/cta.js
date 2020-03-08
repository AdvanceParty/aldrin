import { MdNotifications } from 'react-icons';

export default {
  name: 'cta',
  title: 'Call To Action',
  icon: MdNotifications,
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'target',
      title: 'Click Target / Link',
      type: 'string',
      validation: Rule => Rule.required()
    }
  ]
};
