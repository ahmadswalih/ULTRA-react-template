import React from "react";
import { Footer, Navbar } from "./Components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GlobalStyles from "./globalStyles";
import Home from "./Pages/HomePage/Home";
import Products from './Pages/Products/Products'
import Services from "./Pages/Services/Services";
import SignUp from "./Pages/Signup/SignUp";
import ScrollToTop from "./Components/ScrollToTop";

function App() {
  return (
    <Router>
      <GlobalStyles />
      <ScrollToTop/>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/services" exact component={Services} />
        <Route path="/products" exact component={Products} />
        <Route path="/sign-up" exact component={SignUp} />
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
