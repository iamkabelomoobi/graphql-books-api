import { gql } from "apollo-server-express";

export const typeDefs = gql`
  # represents the book
  type Book {
    id: ID!
    title: String!
    author: String!
    description: String!
    publishedYear: Int!
    genre: String!
  }
  # represents queries to fetch the books/book
  type Query {
    books: [Book]
    book(id: ID!): Book
  }
  # represents mutations to perfom CREATE, UPDATE, DELETE
  type Mutation {
    createBook(
      title: String!
      author: String!
      description: String!
      publishedYear: Int!
      genre: String!
    ): Book
    updateBook(
      id: ID!
      title: String
      author: String
      description: String
      publishedYear: Int
      genre: String
    ): Book
    deleteBook(id: ID!): Book
  }
`;
