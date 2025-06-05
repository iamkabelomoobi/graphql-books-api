import { gql } from "apollo-server-express";

const typeDefs = gql`
  type Book {
    id: ID!
    title: String!
    author: String!
    description: String
    publishedYear: Int
    genre: String
    createdAt: String
  }

  type Query {
    books: [Book]
  }
`;

export default typeDefs;
