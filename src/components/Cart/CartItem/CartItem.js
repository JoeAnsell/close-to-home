import React from "react";
import styled from "styled-components";

const CartItem = ({ item }) => {
  return (
    <Container>
      <img src={item.media.source}></img>
      <p>{item.name}</p>
      <p>{item.line_total.formatted_with_symbol}</p>
      <div>
        <button>-</button>
        <p>{item.quantity}</p>
        <button>+</button>
      </div>
      <div>
        <button>Remove</button>
      </div>
    </Container>
  );
};

export default CartItem;

const Container = styled.div`
  display: block;
  img {
    max-width: 200px;
  }
  border: 2px solid blue;
`;
