import { useQuery } from "@apollo/client";
import { mainTitleQuery } from "./mainTitleQuery";
import React from "react";
import { SewLayout, GlobalStyle } from "./GlobalStyle";
import { Button } from "./components/styled-components/Button.styled";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/HomePage";
import About from "./pages/AboutPage";
import FabricCalculator from "./pages/FabricCalculatorPage";
import SkirtCalculator from "./pages/SkirtCalculatorPage";

function App() {
  const { loading, data } = useQuery(mainTitleQuery);
  if (loading) return <p>Loading ...</p>;
  const page = data.pageCollection.items[0];

  return (
    <React.Fragment>
      <GlobalStyle />
      <div>
        <Router>
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/About" exact component={About} />
            <Route
              path="/FabricCalculator"
              exact
              component={FabricCalculator}
            />
            <Route path="/SkirtCalculator" exact component={SkirtCalculator} />
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
