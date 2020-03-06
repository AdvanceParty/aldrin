export default {
  name: 'figure',
  title: 'Figure',
  description:
    'An image++. A small pod which holds title, caption and alternate text fields along with the image file itself. Helps keep track of assets in our image library over time, as well as supporting SEO and accessibility requirements.',
  type: 'document',
  fields: [
    {
      title: 'Image',
      name: 'baseImage',
      type: 'baseImage'
    }
  ],
  preview: {
    select: {
      title: 'baseImage.title',
      subtitle: 'baseImage.alt'
    }
  }
};
