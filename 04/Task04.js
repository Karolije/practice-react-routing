import React from "react";
import {
  HashRouter as Router,
  Route,
  Switch,
  useParams,
  Redirect,
  useHistory,
} from "react-router-dom/";
import products from "../src/products.json";
import Shop from "../src/components/Shop";

const SortWrapper = () => {
  const { sortBy } = useParams();

  let sortedProducts = [...products];

  if (sortBy === "price-asc") {
    sortedProducts.sort((a, b) => a.price - b.price);
  }

  if (sortBy === "price-desc") {
    sortedProducts.sort((a, b) => b.price - a.price);
  }

  return <Shop products={sortedProducts} />;
};

const SortSelect = () => {
  const history = useHistory();

  const handleChange = (e) => {
    history.push(e.target.value ? `/task04/${e.target.value}` : `/task04`);
  };
  return (
    <select onChange={handleChange}>
      <option value="">Sortuj</option>
      <option value="price-desc">Ceny malejąco</option>
      <option value="price-asc">Ceny rosnąco</option>
    </select>
  );
};

const Task04 = () => {
  return (
    <Router>
      <h1>Task04</h1>
      <SortSelect />
      <Switch>
        <Route path="/task04/:sortBy?">
          <SortWrapper />
        </Route>
        <Route>
          <Shop products={products} />
        </Route>
      </Switch>
    </Router>
  );
};

export default Task04;
