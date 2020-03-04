export default {
  name: 'imageGallery',
  title: 'Image Gallery',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text'
    },
    {
      name: 'items',
      title: 'Images',
      validation: Rule => Rule.required(),
      type: 'array',
      of: [{ type: 'baseImage' }]
    }
  ]
};
