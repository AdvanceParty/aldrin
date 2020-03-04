const validateStates = context => {
  const ausField = context.document.australianState;
  const globalField = context.document.internationalState;
  const msg =
    'Please select an Australian State state or enter an international state.';
  const hasAus = ausField !== undefined && ausField !== null;
  const hasUnAus = globalField !== undefined;
  return hasAus !== hasUnAus ? true : msg;
};

export default {
  name: 'address',
  title: 'Address',
  type: 'object',
  fields: [
    {
      name: 'address1',
      title: 'Unit/Apartment/Level',
      description: '',
      type: 'string'
    },
    {
      name: 'street',
      title: 'Street Address',
      validation: Rule => Rule.required(),
      type: 'string'
    },
    {
      name: 'region',
      title: 'Suburb',
      description: '.../town/etc as applicable.',
      validation: Rule => Rule.required(),
      type: 'string'
    },
    {
      name: 'postcode',
      title: 'Postcode',
      description: '',
      type: 'string'
    },
    {
      name: 'australianState',
      title: 'Australian State or Territory',
      type: 'string',
      options: [
        { title: 'Other (add below)', value: null },
        { title: 'ACT', value: 'act' },
        { title: 'NSW', value: 'nsw' },
        { title: 'NT', value: 'nt' },
        { title: 'QLD', value: 'qld' },
        { title: 'SA', value: 'sa' },
        { title: 'TAS', value: 'tas' },
        { title: 'VIC', value: 'vic' },
        { title: 'WA', value: 'wa' }
      ],
      validation: Rule =>
        Rule.custom((state, context) => validateStates(context))
    },
    {
      name: 'internationalState',
      title: 'International State',
      description: 'For addressese not in Australia',
      type: 'string',
      validation: Rule =>
        Rule.custom((state, context) => validateStates(context))
    }
  ]
};
