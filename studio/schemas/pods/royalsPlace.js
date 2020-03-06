export default {
  name: 'royalsPlace',
  title: 'Royals Place',
  description: 'Most likely one of our offices',
  type: 'document',
  preview: {
    select: {
      title: 'title',
      subtitle: 'addresss.region'
    }
  },
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      description:
        'A unique identifier for this record, used for URL generation and SEO. Usually, you can just click the Generate button and all will be fine.',
      options: {
        source: doc => `places-${doc.title}`
      },
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
      name: 'baseImage',
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
