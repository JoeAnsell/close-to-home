import React, { useEffect } from "react";
import { Grid } from "@material-ui/core";
import Product from "./Product/Product";

const products = [
  { id: 1, name: "Shoes", description: "Running shoes.", price: "$5" },
  { id: 2, name: "Macbook", description: "Apple Macbook.", price: "$10" },
];

const Products = () => {
  useEffect(() => {
    console.log(products);
  });
  return (
    <main>
      {products.map((product) => {
        return <Product product={product} />;
      })}
    </main>
  );
};

export default Products;
