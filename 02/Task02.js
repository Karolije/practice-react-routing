import React from "react";
import { HashRouter as Router, Route } from "react-router-dom/";
import Product from "../src/components/Product";

const Task02 = () => {
  return (
    <Router>
      <Route path="/Task02/:alias-:idNumber">
        <h1>Task02</h1>
        <Product />
      </Route>
    </Router>
  );
};

export default Task02;
