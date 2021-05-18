import React, { useEffect } from "react";
import styled from "styled-components";
import Products from "./products/Products";

const HomePage = ({ products, onAddToCart }) => {
  useEffect(() => {
    console.log(products);
  });

  return (
    <Container>
      {products.length > -1 && (
        <Products products={products} onAddToCart={onAddToCart} />
      )}
    </Container>
  );
};

export default HomePage;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  border: 3px solid blue;
  background-color: blue;
`;
