import React, { useEffect } from "react";
import { Grid } from "@material-ui/core";
import Product from "./Product/Product";

const products = [
  { id: 1, name: "Shoes", description: "Running shoes.", price: "$5" },
  { id: 2, name: "Macbook", description: "Apple Macbook.", price: "$10" },
];

const Products = ({ products, onAddToCart }) => {
  useEffect(() => {
    console.log(products);
  });
  return (
    <main>
      {products.map((product) => {
        return <Product product={product} onAddToCart={onAddToCart} />;
      })}
    </main>
  );
};

export default Products;
