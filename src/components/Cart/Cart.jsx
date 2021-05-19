import React, { useEffect, useState } from "react";
import styled from "styled-components";
import CartItem from "./CartItem/CartItem";
import { Link } from "react-router-dom";
import { Button, QuantityButton, OutlineButton } from "../../styles";

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
          <br></br>
          <h4 style={{ color: "#d5da89" }}>
            Subtotal : {cart.subtotal.formatted_with_symbol}
          </h4>
          <ButtonContainer>
            <OutlineButton onClick={handleEmptyCart}>Empty Cart</OutlineButton>
            <Link to="/checkout">
              <Button>Checkout </Button>
            </Link>
          </ButtonContainer>
        </>
      );
    }
  };

  return (
    <Container>
      <h2>Your ShoppingCart</h2>
      <br></br>
      {!cart.line_items ? <EmptyCart /> : <FilledCart />}
    </Container>
  );
};

export default Cart;

const Container = styled.div`
  display: block;
  background-color: #151515;
  padding: 30px;
  border-radius: 30px;
  text-align: center;
  color: white;
`;

const ButtonContainer = styled.div`
  margin-top: 10px;
  > button {
    margin-right: 10px;
  }
`;
