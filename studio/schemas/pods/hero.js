export default {
  name: 'hero',
  title: 'Hero',
  type: 'document',
  hidden: true,
  fields: [
    {
      name: 'title',
      title: 'Headline',
      type: 'string'
    },
    {
      name: 'description',
      title: 'Text',
      type: 'text'
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image'
    }
  ]
};
