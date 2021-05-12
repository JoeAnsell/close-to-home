import React from "react";
import styled from "styled-components";

const CartItem = ({ item, onUpdateCartQty, onRemoveFromCart }) => {
  return (
    <Container>
      <img src={item.media.source}></img>
      <p>{item.name}</p>
      <p>{item.line_total.formatted_with_symbol}</p>
      <div>
        <button
          onClick={() => {
            onUpdateCartQty(item.id, item.quantity - 1);
          }}
        >
          -
        </button>
        <p>{item.quantity}</p>
        <button
          onClick={() => {
            onUpdateCartQty(item.id, item.quantity + 1);
          }}
        >
          +
        </button>
      </div>
      <div>
        <button
          onClick={() => {
            onRemoveFromCart(item.id);
          }}
        >
          Remove
        </button>
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
