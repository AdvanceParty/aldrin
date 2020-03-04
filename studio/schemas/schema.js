// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';

// major containers
import vine from './vine';

// pods
import callout from './pods/callout';
import figure from './pods/figure';
import imageGallery from './pods/imageGallery';
import royal from './pods/royalsPerson';
import hero from './pods/hero';

// objects
import address from './objects/address';
import phoneNumber from './objects/phoneNumber';
import richParagraph from './objects/richParagraph';
import richText from './objects/richText';
import richTextMedia from './objects/richTextMedia';

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // containers
    vine,
    // objects,
    richTextMedia,
    hero,
    address,
    phoneNumber,
    richParagraph,
    richText,
    // pods
    callout,
    figure,
    imageGallery,
    royal
  ])
});
