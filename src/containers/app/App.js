import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import MainNavbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import Home from "../home/Home";
import NotFoundPage from "../404";

function App() {
  return (
    <Router>
      <Fragment>
        <ScrollToTop />
        <MainNavbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route component={NotFoundPage} />
        </Switch>
        <Footer />
      </Fragment>
    </Router>
  );
}

export default App;
