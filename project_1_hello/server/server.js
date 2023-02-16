import { ApolloServer, gql } from "apollo-server";

// string is in GraphQL Schema Definition Language
// gql function tags it as a template literal
// which means it passes the string into a graphql schema object
const typeDefs = gql`
  type Query {
    greeting: String
  }
`;

// specify how the server returns a greeting value
const resolvers = {
  Query: {
    greeting: () => "Hello",
  },
};

const server = new ApolloServer({ typeDefs, resolvers });
const { url } = await server.listen({ port: 9000 });
console.log(`Server running at ${url}`);
