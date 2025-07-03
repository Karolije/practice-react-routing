import React from "react";
import { Redirect, useParams } from "react-router-dom";
import products from "../products.json";
const Product = () => {
  const { idNumber, alias } = useParams();
  const product = products.find((product) => product.id === parseInt(idNumber));

  if (!product) {
    return <Redirect to="/404.html" />;
  }
  const { id, name, description } = product;
  return (
    <article data-id={idNumber} data-alias={alias}>
      <li>id: {id}</li>
      <li>name: {name}</li>
      <i>description: {description}</i>
    </article>
  );
};

export default Product;
