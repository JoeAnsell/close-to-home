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
import { Link, useLocation } from "react-router-dom";

const Navbar = ({ totalItems }) => {
  const location = useLocation();

  return (
    <>
      <AppBar position="fixed" color="inherit">
        <Left>
          <Link to="/">
            <h4>Close to Home</h4>
          </Link>
        </Left>
        <Right>
          {location.pathname === "/" && (
            <div>
              <Link to="/checkout">
                <IconButton arial-label="Show cart items" color="inherit">
                  <Badge badgeContent={totalItems} color="secondary">
                    <ShoppingCart />
                  </Badge>
                </IconButton>
              </Link>
            </div>
          )}
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
  align-items: center;
  border: 2px solid red;
  background-color: white;
  width: 100%;
`;

const Left = styled.div`
  ${"" /* width: 200px; */}
  margin: 10px;
`;
const Right = styled.div`
  ${"" /* width: 200px; */}
  margin: 10px;
`;
