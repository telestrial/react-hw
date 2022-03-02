import ReactDOM from "react-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { CssBaseline } from "@mui/material";

import App from "./App";

const rootElement = document.getElementById("root");

const client = new ApolloClient({
  uri: "https://d57hhp.sse.codesandbox.io/",
  cache: new InMemoryCache()
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <CssBaseline />
    <App />
  </ApolloProvider>,
  rootElement
);
