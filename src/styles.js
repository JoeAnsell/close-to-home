import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";

export const QuantityButton = styled.button`
  padding: 5px 15px;
  border-radius: 25px;
  cursor: pointer;
  transition: 0.25s;
  border: 2px solid transparent;
  border-radius: 5px;
  &:hover {
    background-color: #b9b9b9;
    border: 2px solid white;
  }
`;

export const OutlineButton = styled.button`
  padding: 5px 20px;
  cursor: pointer;
  border: none;
  background-color: rgba(255, 255, 255, 0);
  color: white;
  font-weight: light;
  transition: 0.15s;
  border-radius: 5px;
  &:hover {
    background-color: rgba(255, 255, 255, 0.5);
  }
`;

export const Button = styled.button`
  padding: 5px 20px;
  border: 10px;
  cursor: pointer;
  border-radius: 5px;
`;

export const ProductContainer = styled.div`
  display: block;
  margin-bottom: 30px;
`;
export const ProductImage = styled.div`
  display: block;
`;
export const ProductContent = styled.div`
  display: block;
`;
export const ProductActions = styled.div`
  display: block;
`;
