import React from "react";
import { HashRouter as Router, Route } from "react-router-dom/";
import Home from "../src/components/Home";
import Contact from "../src/components/Contact";

const Task01 = () => {
  return (
    <Router>
      <section>
        <h1>Task01</h1>
      </section>
      <Route path="/task01/home" component={Home} />
      <Route path="/task01/contact" component={Contact} />
    </Router>
  );
};

export default Task01;
