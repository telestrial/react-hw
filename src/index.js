import ReactDOM from "react-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql
} from "@apollo/client";

import App from "./App";

const rootElement = document.getElementById("root");

const client = new ApolloClient({
  uri: "https://d57hhp.sse.codesandbox.io/",
  cache: new InMemoryCache()
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  rootElement
);
