export default {
  name: 'cta',
  title: 'Call To Action',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'target',
      title: 'Click Target / Link',
      type: 'string',
      validation: Rule => Rule.required()
    }
  ]
};
