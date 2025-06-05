import Book from "../models/book.js";

const resolvers = {
  Query: {
    books: async () => await Book.find(),
  },
};

export default resolvers;
