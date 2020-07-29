export default {
  name: 'mediaAssetDetails',
  title: 'Title, caption and alt text',
  type: 'object',
  options: {
    collapsible: true,
    collapsed: false,
  },
  fields: [
    {
      name: 'title',
      title: 'Title',
      description:
        'Used for seo/accessibility content and may appear as a heading in some UI components.',
      type: 'string',
    },
    {
      name: 'alt',
      title: 'Alt text',
      description: 'Used for seo and accessibility.',
      type: 'string',
    },
    {
      name: 'caption',
      title: 'Caption',
      type: 'text',
      description: 'A caption or description. Not all UI components will display this content.',
    },
  ],
};
