export default {
  name: 'baseImage',
  title: 'Base Image',
  description: 'Data structure common to all images',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      description:
        'Helps search and manage image assets in our CMS. May also be used by some UI elements on the website, such as search result listings, gallery titles, etc.',
      type: 'string'
    },
    {
      name: 'alt',
      title: 'Alt text',
      type: 'string'
    },
    {
      name: 'description',
      title: 'Caption',
      type: 'text',
      options: {
        isHighlighted: true
      }
    },
    {
      name: 'image',
      title: 'Image Information',
      type: 'image'
    }
  ]
};
