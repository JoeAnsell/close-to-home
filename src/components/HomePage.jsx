import React, { useEffect } from "react";
import styled from "styled-components";
import Products from "./products/Products";
import tapeCaseBack from "../images/tape-case-back-comp.png";
import tapeCaseFront from "../images/tape-case-front-comp.png";
import tape from "../images/tape-comp.png";
import smudge from "../images/smudge.png";

const HomePage = ({ products, onAddToCart }) => {
  return (
    <Container>
      <ProductContainer>
        <PricePurchase>
          <div className="price">
            <h2>£35</h2>
          </div>
          <div className="purchase">
            {products.length > -1 && (
              <Products products={products} onAddToCart={onAddToCart} />
            )}
          </div>
        </PricePurchase>
        <ProductImageContainer>
          <img src={tapeCaseFront} className="left" />
        </ProductImageContainer>
        <ProductImageContainer className="right">
          <img src={tapeCaseBack} />
          <img src={tape} />
        </ProductImageContainer>
      </ProductContainer>
      <ProductInfo>
        <h3>
          USB CASSETE TAPE<br></br>INSIDE INCLUDES<br></br>100+ IMAGES
        </h3>
        <br></br>
        <br></br>
        <h3>CLOSE TO HOME VOL 1</h3>
        <p>
          <b>Fashion mixtape</b>
        </p>
        <br></br>
        <p>
          Northamptonshire brothers take inspiration from “close to home” which
          is the history of Northampton shoe heritage, uncle Graham and Bauhaus.
          Garments take elements from dress shoes like such as wingtip trousers
          and broguing details on garments. Also, using leather Velcro patches
          to replicate punk badges. The shoes supplied by Converse include
          details found on dress shoes such as broguing, gimping, and thonging
          on the back tag. Another shoe has a full Velcro upper making it fully
          modular when applying the Velcro patches. The patches include NANG
          paintings, uncle Graham on tour, and bands who inspired the
          collection.
        </p>
        <br></br>
        <p>
          The mixtapes consist of 6 songs which are Brogue Converse, Eyelet
          Converse, Velcro Converse, Resoleable Converse, Velcro blazer, Velcro
          trousers. Bonus tracks are wingtip trousers, a cobweb vest and a
          Velcro sweater. The collection is sustainable as the garments are made
          from recycled materials such as recycled nylon and footwear is made
          from remnants leathers from Northampton shoe factories such as
          Church’s and footwear consists of other sustainable elements like
          using crepe rubber. Bobby who is an ex-apprentice at Church’s learned
          his cordwaining skills. Nav Nangla interned at Yang Li where he
          furthered his skills and knowledge.
          <br></br>
          The mixtape includes 100+ pages which have the process from research,
          making process, studio shots, product shots, and miscellaneous images.
          USB cassette tape included.
        </p>
      </ProductInfo>
    </Container>
  );
};

export default HomePage;

const Container = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;
  margin: 0 auto;
  color: #d5da89;
`;

const ProductContainer = styled.div`
  display: flex;
  width: 100%;
  margin: 0 auto;
  margin-top: 40px;
  max-width: 600px;
  position: relative;
  align-items: center;
`;

const PricePurchase = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  transform: translateX(100%);

  .price,
  .purchase {
    position: relative;
    display: block;
    margin-bottom: 40px;
    &::after {
      display: block;
      position: absolute;
      content: "";
      background-image: url(${smudge});
      background-size: contain;
      background-position: center;
      background-repeat: no-repeat;
      width: 250%;
      height: 250%;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: -1;
    }
  }
  .purchase {
    &::after {
      transform: rotate(-180deg), translate(-50%, -50%);
    }
    &:hover {
      svg {
        path {
          color: #b4b77e;
        }
      }
    }
  }

  @media only screen and (max-width: 800px) {
    display: flex;
    right: 20px;
    transform: translateX(0%);
    .price,
    .purchase {
      margin-bottom: 0px;
      padding: 5px;
      display: table;
      &:after {
        width: 90px;
        height: 90px;
      }
    }
    .price {
      margin-right: 57px;
      margin-top: 4px;
    }
  }
`;

const ProductInfo = styled.div`
  display: block;
  margin-top: 20px;
  @media only screen and (max-width: 500px) {
    padding-left: 15px;
    padding-right: 15px;
  }
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
    margin-top: 25px;
    @media only screen and (max-width: 500px) {
      margin-top: 15px;
    }
  }
`;
