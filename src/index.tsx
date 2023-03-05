import React from "react";
import { createRoot } from "react-dom/client";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";

import { App } from "~/components";

const link = createHttpLink({
  uri: "http://localhost:1338/graphql",
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link,
  ssrMode: false,
});
const root = createRoot(document.getElementById("root")!);

root.render(
  <ApolloProvider {...{ client }}>
    <App />
  </ApolloProvider>
);
