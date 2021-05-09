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
  ProcutContainer,
  ProductImage,
  ProductContent,
  ProductActions,
} from "../../../styles";

const Product = ({ product }) => {
  useEffect(() => {
    console.log(product);
  });
  return (
    <ProcutContainer>
      <ProductImage title={product.name}></ProductImage>
      <ProductContent>
        <div>
          <h5 variant="h5">{product.name}</h5>
          <h5 variant="h5">{product.price}</h5>
        </div>
        <h2 variant="h2" color="textSecondary">
          {product.description}
        </h2>
      </ProductContent>
      <ProductActions>
        <AddShoppingCart />
      </ProductActions>
    </ProcutContainer>
  );
};

export default Product;
