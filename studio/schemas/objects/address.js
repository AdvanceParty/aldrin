export default {
  name: 'address',
  title: 'Address',
  type: 'object',
  preview: {
    select: {
      title: 'street',
      australianState: 'australianState',
      internationalState: 'internationalState',
      region: 'region',
    },
    prepare(selection) {
      const { title, region, australianState, internationalState } = selection;
      return {
        title: title || 'Nowheresville',
        subtitle: `${region} ${australianState || internationalState}`,
      };
    },
  },
  options: {
    collapsible: true,
  },
  fields: [
    {
      name: 'address1',
      title: 'Unit/Apartment/Level',
      description: '',
      type: 'string',
    },
    {
      name: 'street',
      title: 'Street Address',
      validation: (Rule) => Rule.required(),
      type: 'string',
    },
    {
      name: 'region',
      title: 'Suburb',
      description: '.../town/etc as applicable.',
      validation: (Rule) => Rule.required(),
      type: 'string',
    },
    {
      name: 'postcode',
      title: 'Postcode',
      description: '',
      type: 'string',
    },
    {
      name: 'australianState',
      title: 'Australian State or Territory',
      type: 'string',
      options: {
        list: [
          { title: 'ACT', value: 'act' },
          { title: 'NSW', value: 'nsw' },
          { title: 'NT', value: 'nt' },
          { title: 'QLD', value: 'qld' },
          { title: 'SA', value: 'sa' },
          { title: 'TAS', value: 'tas' },
          { title: 'VIC', value: 'vic' },
          { title: 'WA', value: 'wa' },
          { title: 'Other', value: null },
        ],
      },
      validation: (Rule) => Rule.required(),
    },
  ],
};
