import { MdNotifications } from 'react-icons/md';

export default {
  name: 'cta',
  title: 'Call To Action',
  icon: MdNotifications,
  type: 'document',
  preview: {
    select: {
      title: 'title',
      subtitle: 'target'
    },
    prepare(selection) {
      const { title, subtitle } = selection;
      return {
        title: title || 'Untitled CTA',
        subtitle: subtitle || '',
        media: MdNotifications
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
      name: 'type',
      title: 'Action Type',
      type: 'string',
      validation: Rule => Rule.required(),
      description:
        'Choose link for standard URLs. If you need a custom action, have a chat with your friendly dev.',
      options: {
        list: [
          { title: 'Link', value: 'link' },
          { title: 'Custom Action', value: 'event' }
        ],
        layout: 'radio',
        direction: 'horizontal'
      }
    },
    {
      name: 'target',
      title: 'Click Target / Link',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'gtmEventName',
      title: 'GTM Event Name',
      description: 'Optional event name for Google Tag Manager',
      type: 'string'
    },
    {
      name: 'gtmEventValue',
      title: 'GTM Event Value',
      description: 'Optional event value for Google Tag Manager',
      type: 'string'
    }
  ]
};
