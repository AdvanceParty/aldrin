import { MdPerson } from 'react-icons/md';
import { MdShortText } from 'react-icons/md';

export default {
  name: 'royalsPerson',
  title: 'Royals Person',
  icon: MdPerson,
  type: 'document',
  preview: {
    select: {
      title: 'title',
      job: 'job',
      office: 'office.title',
      image: 'profileImage',
    },
    prepare(selection) {
      const { title, job, office, image } = selection;
      return {
        title: title || 'Captain Mysterious',
        subtitle: `${job || ''}${job && office ? ', ' : ''}${office || ''}`,
        media: image || MdPerson,
      };
    },
  },
  fieldsets: [
    {
      name: 'personal',
      title: 'Personal Info',
      options: {
        collapsible: true,
        collapsed: true,
      },
    },
    {
      name: 'work',
      title: 'Work Info',
      options: {
        collapsible: true,
        collapsed: true,
      },
    },
    {
      name: 'pics',
      title: 'Photos',
      options: {
        collapsible: true,
        collapsed: true,
        columns: 2,
      },
    },
  ],
  fields: [
    {
      name: 'title',
      title: 'Full Name',
      fieldset: 'personal',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'name',
      title: 'Preferred Name',
      type: 'string',
      fieldset: 'personal',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      fieldset: 'personal',
      description:
        'A unique identifier for this record, used for URL generation and SEO. Usually, you can just click the Generate button and all will be fine.',
      options: {
        source: (doc) => `royal-${doc.title}`,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'bodyText',
      title: 'Bio',
      icon: MdShortText,
      fieldset: 'personal',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [{ title: 'Normal', value: 'normal' }],
          marks: {
            decorators: [
              { title: 'Bold', value: 'strong' },
              { title: 'Emphasis', value: 'em' },
            ],
          },
        },
      ],
    },
    {
      name: 'job',
      title: 'Job Title',
      type: 'string',
      fieldset: 'work',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'joinedOn',
      title: 'Joined Royals On',
      fieldset: 'work',
      type: 'date',
      options: {
        dateFormat: 'DD-MM-YYYY',
        calendarTodayLabel: 'Today',
      },
    },
    {
      name: 'office',
      title: 'Main Office',
      description: '',
      fieldset: 'work',
      type: 'reference',
      to: [{ type: 'royalsPlace' }],
    },
    {
      name: 'profileImage',
      title: 'Headshot',
      fieldset: 'pics',
      description: 'A photo of the person',
      type: 'image',
    },
    {
      name: 'personalImage',
      title: 'I ♥️ this',
      fieldset: 'pics',
      description: 'Something they care about.',
      type: 'image',
    },
  ],
};
