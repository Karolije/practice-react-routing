import React, { use, useState } from "react";
import {
  useParams,
  useHistory,
  HashRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import products from "../src/products.json";
import Shop from "../src/components/Shop";

const FilterWrapper = () => {
  const { filter } = useParams();

  let filteredProducts = [...products];

  if (filter) {
    const [pricePart, searchTerm] = filter.split("-");
    const [minPrice, maxPrice] = pricePart.split(",");

    filteredProducts = filteredProducts.filter((product) => {
      const priceOk =
        (!minPrice || product.price >= Number(minPrice)) &&
        (!maxPrice || product.price <= Number(maxPrice));
      const textOk =
        !searchTerm ||
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase());

      return priceOk && textOk;
    });
  }

  return <Shop products={filteredProducts} />;
};

const FilterForm = () => {
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();

    const path = `/task05/${minPrice},${maxPrice}-${searchTerm}`;
    history.push(path);
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Cena minimalna:
        <input
          type="number"
          name="minPrice"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
        />
      </label>
      <label>
        Cena maksymalna:
        <input
          type="number"
          name="maxPrice"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
        />
      </label>
      <label>
        Szukana fraza:
        <input
          type="text"
          name="searchTerm"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </label>
      <button type="submit">Filtruj</button>
    </form>
  );
};
const Task05 = () => {
  return (
    <Router>
      <h1>Task05</h1>
      <FilterForm />
      <Switch>
        <Route path="/task05/:filter?">
          {" "}
          <FilterWrapper />
        </Route>
        <Route>
          <Shop products={products} />
        </Route>
      </Switch>
    </Router>
  );
};

export default Task05;
