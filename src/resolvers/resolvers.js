import Book from "../models/Book.js";

export const resolvers = {
  // Queries to handle read operations
  Query: {
    // Resolver to fetch all books
    books: async () => {
      try {
        return await Book.find();
      } catch (error) {
        throw new Error("Failed to retrieve books .");
      }
    },
    // Resolver to fetch a single book
    book: async (parent, { id }) => {
      try {
        return await Book.findById(id);
      } catch (error) {
        throw new Error("Failed to retrieve book.");
      }
    },
  },
  // Mutations to hanle write opeations
  Mutation: {
    // resolver to create a new book
    createBook: async (
      parent,
      { title, author, description, publishedYear, genre }
    ) => {
      try {
        // create new book instance
        const book = new Book({
          title,
          author,
          description,
          publishedYear,
          genre,
        });
        // save new book to database
        return await book.save();
      } catch (error) {
        throw new Error("Sorry, failed to create book");
      }
    },
    // resolver to update a book by ID
    updateBook: async (
      parent,
      { id, title, author, description, publishedYear, genre }
    ) => {
      try {
        return await Book.findByIdAndUpdate(id, {
          title,
          author,
          description,
          publishedYear,
          genre,
        });
      } catch (error) {
        throw new Error("sorry, failed to update book.");
      }
    },
    // resolver to delete book by ID
    deleteBook: async (parent, { id }) => {
      try {
        return await Book.findByIdAndDelete(id);
      } catch (error) {
        throw new Error("Sorry, failed to delete book.");
      }
    },
  },
};
