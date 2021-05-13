import React, { useEffect, useState } from "react";
import styled from "styled-components";
import CartItem from "./CartItem/CartItem";
import { Link } from "react-router-dom";

const Cart = ({
  cart,
  handleUpdateCartQty,
  handleRemoveFromCart,
  handleEmptyCart,
}) => {
  const EmptyCart = () => {
    return (
      <>
        <p>You have no items in your cart</p>
        <Link to="/">
          <p>Start adding some items</p>
        </Link>
      </>
    );
  };

  const FilledCart = () => {
    if (!cart.line_items) {
      return "loading...";
    } else {
      return (
        <>
          {cart.line_items.map((item) => {
            return (
              <CartItem
                onUpdateCartQty={handleUpdateCartQty}
                onRemoveFromCart={handleRemoveFromCart}
                item={item}
              />
            );
          })}
          <h4>Subtotal : {cart.subtotal.formatted_with_symbol}</h4>
          <div>
            <button onClick={handleEmptyCart}>Empty Cart</button>
            <Link to="/checkout">
              <button>Checkout </button>
            </Link>
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
