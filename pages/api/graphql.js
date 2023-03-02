import { ApolloClient, InMemoryCache } from "@apollo/client";

const sdk = new ApolloClient({
  uri: "http://localhost:1337/graphql",
  cache: new InMemoryCache(),
});

export default sdk;
