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
import royalsPerson from './pods/royalsPerson';
import hero from './pods/hero';

// objects
import address from './objects/address';
import baseImage from './objects/baseImage';
import cta from './objects/cta';
import phoneNumber from './objects/phoneNumber';
import richParagraph from './objects/richParagraph';
import richText from './objects/richText';
import richTextMedia from './objects/richTextMedia';
import royalsPlace from './pods/royalsPlace';

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
    address,
    baseImage,
    cta,
    phoneNumber,
    richParagraph,
    richText,
    richTextMedia,
    // pods
    callout,
    figure,
    hero,
    imageGallery,
    royalsPerson,
    royalsPlace
  ])
});
