import { AiFillTag } from 'react-icons/md';

export default {
  name: 'gtmEvent',
  title: 'GTM Event',
  icon: AiFillTag,
  description: 'Name and value pair for custom Google Tag Manager event',
  type: 'object',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'value',
      title: 'Value',
      type: 'string',
    },
  ],
};
