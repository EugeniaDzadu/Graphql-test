// server.js
const express = require('express');
const { graphqlHTTP } = require('express-graphql');

// Import the schema and resolvers from schema.js
const { schema, root } = require('./schema');

const app = express();

// Set up the GraphQL endpoint
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true, // Enable GraphiQL UI for testing
}));

// Start the server
app.listen(4000, () => {
  console.log('Server is running on http://localhost:4000/graphql');
});
