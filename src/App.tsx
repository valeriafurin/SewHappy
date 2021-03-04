import { useQuery } from "@apollo/client";
import { mainTitleQuery } from "./mainTitleQuery";
import React from "react";
import GlobalStyle from "./GlobalStyle";
import { Button } from "./styled-components/Button.styled";

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
        <Button>Click me</Button>
        <Button primary>Click me now</Button>
      </div>
    </React.Fragment>
  );
}

export default App;
