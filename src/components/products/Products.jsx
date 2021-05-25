import React, { useEffect } from "react";
import Product from "./Product/Product";

const Products = ({ products, onAddToCart }) => {
  return (
    <main>
      {products.map((product, index) => {
        return (
          <Product key={index} product={product} onAddToCart={onAddToCart} />
        );
      })}
    </main>
  );
};

export default Products;
