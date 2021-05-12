import React, { useEffect } from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton,
} from "@material-ui/core";
import { AddShoppingCart } from "@material-ui/icons";
import {
  ProductContainer,
  ProductImage,
  ProductContent,
  ProductActions,
} from "../../../styles";

const Product = ({ product, onAddToCart }) => {
  useEffect(() => {
    console.log(product);
  });

  return (
    <ProductContainer>
      <ProductImage title={product.name}></ProductImage>
      <ProductContent>
        <div>
          <h5 variant="h5">{product.name}</h5>
          <h5 variant="h5">{product.price.formatted_with_symbol}</h5>
        </div>
      </ProductContent>
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
