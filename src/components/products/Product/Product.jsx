import React, { useEffect } from "react";
import styled from "styled-components";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton,
} from "@material-ui/core";
import { AddShoppingCart } from "@material-ui/icons";

const Product = ({ product, onAddToCart }) => {
  useEffect(() => {
    console.log(product);
  });

  return (
    <ProductContainer>
      <ProductActions
        aria-label="Add to Cart"
        onClick={() => onAddToCart(product.id, 1)}
      >
        <AddShoppingCart />
      </ProductActions>
    </ProductContainer>
  );
};

export default Product;

export const ProductContainer = styled.div`
  display: block;
`;
export const ProductImage = styled.div`
  display: block;
`;
export const ProductContent = styled.div`
  display: block;
`;
export const ProductActions = styled.div`
  display: block;
  cursor: pointer;
`;
