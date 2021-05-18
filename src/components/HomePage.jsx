import React, { useEffect } from "react";
import styled from "styled-components";
import Products from "./products/Products";
import tapeCaseBack from "../images/tape-case-back-comp.png";
import tapeCaseFront from "../images/tape-case-front-comp.png";
import tape from "../images/tape-comp.png";

const HomePage = ({ products, onAddToCart }) => {
  useEffect(() => {
    console.log(products);
  });

  return (
    <Container>
      <TitleContainer>
        <h1>CLOSE TO HOME</h1>
        <p>
          FASHION MIXTAPE<br></br>
          PRODUCED BY NAVINDER & BOBBY NANGLA
        </p>
      </TitleContainer>
      <ProductContainer>
        <ProductImageContainer>
          <img src={tapeCaseFront} className="left" />
        </ProductImageContainer>
        <ProductImageContainer className="right">
          <img src={tapeCaseBack} />
          <img src={tape} />
        </ProductImageContainer>
      </ProductContainer>
      {/* {products.length > -1 && (
        <Products products={products} onAddToCart={onAddToCart} />
      )} */}
    </Container>
  );
};

export default HomePage;

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const ProductContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  margin-top: 20px;
`;

const ProductImageContainer = styled.div`
  width: 50%;
  display: block;
  img {
    max-width: 100%;
    padding: 10px;
  }

  &.right {
    display: flex;
    flex-wrap: wrap;
    flex-direction: vertical;
    align-items: center;
    justify-content: center;
  }
`;

const TitleContainer = styled.div`
  h1 {
    font-size: 30px;
  }
  p {
    font-weight: bold;
    font-size: 15px;
  }
`;
