export default {
  name: 'Vine',
  title: 'vine',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: {
        type: 'royalsPerson'
      }
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Page', value: 'page' },
          { title: 'Article', value: 'article' },
          { title: 'Work', value: 'work' }
        ]
      }
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        isUnique: true
      }
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string'
    },
    {
      name: 'hero',
      title: 'Hero',
      type: 'hero'
    },
    {
      name: 'bodyText',
      title: 'Story',
      type: 'richTextMedia'
    },
    {
      name: 'pods',
      title: 'Pods',
      type: 'array',
      of: [
        //
        { type: 'callout' },
        { type: 'figure' },
        { type: 'hero' },
        { type: 'imageGallery' },
        { type: 'royalsPerson' }
      ]
    }
  ]
};
