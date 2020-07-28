import { MdNotifications } from 'react-icons/md';

export default {
  name: 'cta',
  title: 'Call To Action',
  icon: MdNotifications,
  description: 'Target, label, event type and tracking for a call to action.',
  type: 'object',

  fields: [
    {
      name: 'label',
      title: 'Label',
      validation: (Rule) => Rule.required(),
      type: 'string',
    },
    {
      name: 'target',
      title: 'Click Target / Link',
      validation: (Rule) => Rule.required(),
      type: 'string',
    },
    {
      name: 'isCustom',
      title: 'Custom Event',
      type: 'boolean',
      description: `Switch this on to fire a custom event instead of a URL. 99.9% of the time you can leave it off. If in doubt, have a chat with your friendly dev.`,
    },
    {
      name: 'gtmEvent',
      title: 'GTM Event',
      description: 'Optional Google Tag Manager event',
      type: 'gtmEvent',
    },
  ],
};
