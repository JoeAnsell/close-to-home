import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Cart = ({ cart }) => {
  const [isEmpty, setIsEmpty] = useState(true);
  //   const isEmpty = !cart.line_items.length;

  useEffect(() => {
    if (cart.line_items.length > 0) {
      setIsEmpty(false);
    }
  }, [cart.line_items]);

  const EmptyCart = () => {
    return <p>You have no items in your cart</p>;
  };

  const FilledCart = () => {
    return (
      <>
        {cart.line_items.map((item) => {
          return <div key={item.id}>item.name</div>;
        })}
        <h4>Subtotal : {cart.subtotal.formatted_with_symbol}</h4>
        <div>
          <button>Empty Cart</button>
          <button>Checkout </button>
        </div>
      </>
    );
  };

  return (
    <Container>
      <h3>Your ShoppingCart</h3>
      {isEmpty ? <EmptyCart /> : <FilledCart />}
    </Container>
  );
};

export default Cart;

const Container = styled.div`
  display: block;
`;
