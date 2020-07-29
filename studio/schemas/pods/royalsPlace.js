import { FaMapMarkerAlt } from 'react-icons/fa';

export default {
  name: 'royalsPlace',
  title: 'Royals Place',
  description: 'Most likely one of our offices',
  icon: FaMapMarkerAlt,
  type: 'document',
  preview: {
    select: {
      title: 'title',
      region: 'address.region',
      state: 'address.australianState',
      image: 'image',
    },
    prepare(selection) {
      console.log(selection);
      const { title, region, state, image } = selection;
      return {
        title,
        subtitle: `${region}, ${state.toUpperCase()}`,
        media: image || FaMapMarkerAlt,
      };
    },
  },
  fieldsets: [
    {
      name: 'contact',
      title: 'Contact',
      options: {
        collapsible: true,
      },
    },
  ],
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      description:
        'A unique identifier for this record, used for URL generation and SEO. Usually, you can just click the Generate button and all will be fine.',
      options: {
        source: (doc) => `places-${doc.title}`,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'address',
      title: 'Address',
      type: 'address',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'phone',
      title: 'Phone Numbers',
      fieldset: 'contact',
      type: 'array',
      of: [
        {
          type: 'phoneNumber',
        },
      ],
      validation: (Rule) => Rule.required().min(1),
    },
    {
      name: 'email',
      title: 'Email Address',
      fieldset: 'contact',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Image',
      description: 'The front of the building or a cool interior shot would be nice.',
      type: 'image',
    },
    {
      name: 'geolocation',
      title: 'Goelocation',
      description: 'Used for sticking a pin in a map.',
      type: 'geopoint',
    },
  ],
};
