export default {
  name: 'royalsPlace',
  title: 'Royals Place',
  description: 'Most likely one of our offices',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'description',
      title: 'text',
      type: 'string'
    },
    {
      name: 'address',
      title: 'Address',
      type: 'address',
      validation: Rule => Rule.required()
    },
    {
      name: 'phone1',
      title: 'Primary Phone Number',
      type: 'phoneNumber',
      validation: Rule => Rule.required()
    },
    {
      name: 'image',
      title: 'Image',
      description:
        'The front of the building or a cool interior shot would be nice.',
      type: 'baseImage'
    },
    {
      name: 'phone2',
      title: 'Secondary/Alternate Phone Number',
      type: 'phoneNumber'
    },
    {
      name: 'geolocation',
      title: 'Goelocation',
      description: 'Used for sticking a pin in a map.',
      type: 'geopoint'
    }
  ]
};
