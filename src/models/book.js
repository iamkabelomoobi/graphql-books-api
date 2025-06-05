import { Schema, model } from "mongoose";

const bookSchema = new Schema(
  {
    title: { type: String, required: true },
    author: { type: String, required: true },
    description: String,
    publishedYear: Number,
    genre: String,
  },
  { timestamps: true }
);

const Book = model("Book", bookSchema);

export default Book;
