import React from "react";
import { GlobalStyle } from "./pages/pagesStyles/GlobalStyle.styled";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/HomePage";
import About from "./pages/AboutPage";
import FabricCalculator from "./pages/FabricCalculatorPage";
import SkirtCalculator from "./pages/SkirtCalculatorPage";
import Blog from "./pages/BlogPosts/Blog";
import FullBlogPost from "./pages/BlogPosts/FullBlogPost";

function App() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <div>
        <Router>
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" exact component={About} />
            <Route
              path="/fabric-calculator"
              exact
              component={FabricCalculator}
            />
            <Route path="/skirt-calculator" exact component={SkirtCalculator} />
            <Route path="/blog" exact component={Blog} />
            <Route path="/blog/:uid" exact component={FullBlogPost} />
          </Switch>
        </Router>
      </div>
    </React.Fragment>
  );
}

export default App;
