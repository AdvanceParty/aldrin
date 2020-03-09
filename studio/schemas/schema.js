// Import the schema creator
// and schema types from any plugins that might expose them
import createSchema from 'part:@sanity/base/schema-creator';
import schemaTypes from 'all:part:@sanity/base/schema-type';

// Import all of the schema definition files
// Note:
//  each imported file is an index.js file which returns
//  an array of schema documents. This makes it easier to
//  keep this main file updated and manage imports etc.
import vines from './vines';
import pods from './pods';
import objects from './objects';

// Spread the inported schema definition files into a single array
const allSchemas = [...vines, ...objects, ...pods];

// Export a default schema object for Sanity studio to grab onto
export default createSchema({
  name: 'default',
  types: schemaTypes.concat(allSchemas)
});
