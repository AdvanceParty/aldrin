// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';

// major containers
import vine from './vine';

// pods
import callout from './pods/callout';
import hero from './pods/hero';
import imageCollection from './pods/imageCollection';
import royalsPerson from './pods/royalsPerson';
import royalsPeople from './pods/royalsPeople';
import royalsPlace from './pods/royalsPlace';
import simpleImage from './pods/simpleImage';

// objects
import simpleImageObject from './objects/simpleImageObject';
//
import address from './objects/address';
import cta from './objects/cta';
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
    //
    simpleImageObject,
    //
    vine,
    callout,
    hero,
    imageCollection,
    royalsPerson,
    royalsPeople,
    royalsPlace,
    simpleImage,
    address,
    cta,
    phoneNumber,
    richParagraph,
    richText,
    richTextMedia
  ])
});
