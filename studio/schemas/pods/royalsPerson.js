export default {
  name: 'royalsPerson',
  title: 'Royals Person',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Full Name',
      type: 'string',
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
      validation: Rule => Rule.required(),
      type: 'baseImage'
    },
    {
      name: 'personalImage',
      title: 'Personal Pic',
      description: 'An image of something important to person',
      validation: Rule => Rule.required(),
      type: 'baseImage'
    }
  ]
};
