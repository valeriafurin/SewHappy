import { useQuery } from "@apollo/client";
import { mainTitleQuery } from "./mainTitleQuery";
import React from "react";
import GlobalStyle from "./GlobalStyle";

function App() {
  const { loading, data } = useQuery(mainTitleQuery);
  if (loading) return <p>Loading ...</p>;
  const page = data.pageCollection.items[0];

  return (
    <React.Fragment>
      <GlobalStyle />
      <div>
        <img src={page?.logo?.url} alt="logo" />
        <h1>{page?.title}</h1>
      </div>
    </React.Fragment>
  );
}

export default App;
