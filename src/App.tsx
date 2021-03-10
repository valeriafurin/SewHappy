import { useQuery } from "@apollo/client";
import { mainTitleQuery } from "./mainTitleQuery";
import React from "react";
import { SewLayout, GlobalStyle } from "./GlobalStyle";
import { Button } from "./styled-components/Button.styled";
import Navbar from "./styled-components/Navbar.index.styled";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/homepage";

function App() {
  const { loading, data } = useQuery(mainTitleQuery);
  if (loading) return <p>Loading ...</p>;
  const page = data.pageCollection.items[0];

  return (
    <React.Fragment>
      <div>
        <GlobalStyle />
        <Router>
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home} />
          </Switch>
        </Router>
        <SewLayout>
          <img src={page?.logo?.url} alt="logo" />
          <h1>{page?.title}</h1>
          <Button>Click me</Button>
          <Button primary>Click me now</Button>
        </SewLayout>
      </div>
    </React.Fragment>
  );
}

export default App;
