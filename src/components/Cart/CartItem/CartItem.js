import React from "react";
import styled from "styled-components";
import { OutlineButton } from "../../../styles";

const CartItem = ({ item, onUpdateCartQty, onRemoveFromCart }) => {
  return (
    <Container>
      <img src={item.media.source}></img>
      <p>{item.name}</p>
      <p>{item.line_total.formatted_with_symbol}</p>
      <Quantity>
        <OutlineButton
          size="small"
          color="primary"
          variant="contained"
          onClick={() => {
            onUpdateCartQty(item.id, item.quantity - 1);
          }}
        >
          –
        </OutlineButton>
        <p>{item.quantity}</p>
        <OutlineButton
          size="small"
          color="primary"
          variant="contained"
          onClick={() => {
            onUpdateCartQty(item.id, item.quantity + 1);
          }}
        >
          +
        </OutlineButton>
      </Quantity>
      <div>
        <OutlineButton
          color="primary"
          variant="outlined"
          onClick={() => {
            onRemoveFromCart(item.id);
          }}
        >
          Remove
        </OutlineButton>
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
  div {
    margin-bottom: 10px;
  }
  button {
    ${"" /* padding: 5px 15px; */}
    margin: 0px 20px;
    ${"" /* color: black; */}
    span {
      color: black;
    }
  }
`;

const Quantity = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  button {
    ${"" /* padding: 5px 5px; */}
    ${"" /* border-radius: 20px; */}
  }
`;
