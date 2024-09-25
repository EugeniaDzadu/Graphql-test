// schema.js
const { buildSchema } = require('graphql');

// Define the schema
const schema = buildSchema(`
  type Query {
    hello: String
  }
`);

// Define the resolvers (root)
const root = {
  hello: () => 'Hello, World!',
};

// Export schema and root for use in the server
module.exports = { schema, root };
