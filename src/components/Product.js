import React from "react";
import { Link, Redirect, useParams } from "react-router-dom";
import products from "../products.json";
const Product = (props) => {
  if (props.id !== undefined) {
    const { id, name, description, price, category } = props;
    return (
      <article data-id={id}>
        <Link to={`/task03/${category}-${id}`}>
          <h3>
            {name} {price}zł.
          </h3>
          <p>{description}</p>
        </Link>
      </article>
    );
  }
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
