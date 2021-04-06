import React from "react";
import { GlobalStyle } from "./GlobalStyle";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/HomePage";
import About from "./pages/AboutPage";
import FabricCalculator from "./pages/FabricCalculatorPage";
import SkirtCalculator from "./pages/SkirtCalculatorPage";
import Blog from "./pages/BlogPage";

function App() {
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
            <Route path="/Blog" exact component={Blog} />
          </Switch>
        </Router>
      </div>
    </React.Fragment>
  );
}

export default App;
