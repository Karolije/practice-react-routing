import React from "react";
import {
  HashRouter as Router,
  Route,
  Switch,
  useParams,
} from "react-router-dom";
import products from "./../src/products.json";
import Shop from "../src/components/Shop";
import Product from "../src/components/Product";

const ShopWrapper = () => {
  const { category } = useParams();

  const filteredProducts = category
    ? products.filter(
        (p) => p.category.toLowerCase() === category.toLowerCase()
      )
    : products;

  return <Shop products={filteredProducts} />;
};

const Task03 = () => {
  return (
    <Router>
      <h1>Task03</h1>
      <Switch>
        <Route path="/task03/:alias-:idNumber">
          <Product />
        </Route>
        <Route path="/task03/:category?">
          <ShopWrapper />
        </Route>
      </Switch>
    </Router>
  );
};

export default Task03;
