import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const token = process.env.REACT_APP_CONTENTFUL_TOKEN;

const client = new ApolloClient({
  uri: "https://graphql.contentful.com/content/v1/spaces/hp65n3cv65kf",
  cache: new InMemoryCache(),
  headers: {
    authorization: `Bearer ${token}`,
  },
});
ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
