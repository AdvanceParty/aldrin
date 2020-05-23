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
      title: 'Custom Event',
      type: 'boolean',
      description: `Switch this on to fire a custom event instead of a URL. 99.9% of the time you can leave it off. If in doubt, have a chat with your friendly dev.`
    },
    {
      name: 'target',
      title: 'Click Target / Link',
      type: 'string'
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
