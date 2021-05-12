import React, { useEffect, useState } from "react";
import styled from "styled-components";
import CartItem from "./CartItem/CartItem";

const Cart = ({ cart }) => {
  const EmptyCart = () => {
    return <p>You have no items in your cart</p>;
  };

  const FilledCart = () => {
    if (!cart.line_items) {
      return "loading...";
    } else {
      return (
        <>
          {cart.line_items.map((item) => {
            return <CartItem item={item} />;
          })}
          <h4>Subtotal : {cart.subtotal.formatted_with_symbol}</h4>
          <div>
            <button>Empty Cart</button>
            <button>Checkout </button>
          </div>
        </>
      );
    }
  };

  return (
    <Container>
      <h3>Your ShoppingCart</h3>
      {!cart.line_items ? <EmptyCart /> : <FilledCart />}
    </Container>
  );
};

export default Cart;

const Container = styled.div`
  display: block;
  border: 2px solid green;
`;
