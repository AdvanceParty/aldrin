import { MdPerson } from 'react-icons/md';

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
      image: 'profileImage'
    },
    prepare(selection) {
      const { title, job, office, image } = selection;
      return {
        title: title || 'Captain Mysterious',
        subtitle: `${job || ''}${job && office ? ', ' : ''}${office || ''}`,
        media: image || MdPerson
      };
    }
  },
  fields: [
    {
      name: 'title',
      title: 'Full Name',
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
        source: doc => `royal-${doc.title}`
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'name',
      title: 'Preferred Name',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'job',
      title: 'Job Title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'bodyText',
      title: 'Bio',
      type: 'richParagraph'
    },
    {
      name: 'joinedOn',
      title: 'Joined Royals On',
      type: 'date',
      options: {
        dateFormat: 'DD-MM-YYYY',
        calendarTodayLabel: 'Today'
      }
    },
    {
      name: 'office',
      title: 'Main Office',
      description: '',
      type: 'reference',
      to: [{ type: 'royalsPlace' }]
    },
    {
      name: 'profileImage',
      title: 'Profile Photo',
      description: 'A photo of the person',
      type: 'image'
    },
    {
      name: 'personalImage',
      title: 'Personal Pic',
      description: 'An image of something important to person',
      type: 'image'
    }
  ]
};
