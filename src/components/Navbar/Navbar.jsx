import React from "react";
import {
  Toolbar,
  IconButton,
  Badge,
  MenuItem,
  Menu,
  Typography,
} from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import styled from "styled-components";
// import classes from "*.module.css";

const Navbar = () => {
  return (
    <>
      <AppBar position="fixed" color="inherit">
        <Left>
          <h4>Close to Home</h4>
        </Left>
        <Right>
          <div>
            <IconButton arial-label="Show cart items" color="inherit">
              <Badge badgecontent={2} color="secondary">
                <ShoppingCart />
              </Badge>
            </IconButton>
          </div>
        </Right>
      </AppBar>
    </>
  );
};

export default Navbar;

const AppBar = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  max-width: 100vw;
  justify-content: space-between;
  border: 2px solid red;
  background-color: white;
  width: 100%;
`;

const Left = styled.div`
  ${"" /* width: 200px; */}
  margin: 20px;
`;
const Right = styled.div`
  ${"" /* width: 200px; */}
  margin: 20px;
`;
