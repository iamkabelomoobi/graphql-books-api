import { ApolloServer } from "apollo-server";
import { connect } from "mongoose";
import typeDefs from "./schemas/bookSchema.js";
import resolvers from "./resolvers/bookResolver.js";

connect("mongodb://localhost:27017/graphqlBooks", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Could not connect to MongoDB", err));

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => ({ req }),
});

server.listen({ port: 4000 }).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
