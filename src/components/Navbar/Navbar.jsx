import React from "react";
import {
  Toolbar,
  IconButton,
  Badge,
  MenuItem,
  Menu,
  Typography,
} from "@material-ui/core";
import { ShoppingCart, Home } from "@material-ui/icons";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";

const Navbar = ({ totalItems }) => {
  const location = useLocation();

  return (
    <AppBar position="fixed" color="inherit">
      <Left>
        {location.pathname !== "/" && (
          <Link to="/">
            <Home />
          </Link>
        )}
      </Left>
      <Right>
        {location.pathname === "/" && (
          <div>
            <Link to="/basket">
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
  width: 100%;
  height: 70px;
`;

const Left = styled.div`
  ${"" /* width: 200px; */}
  margin: 10px;
`;
const Right = styled.div`
  ${"" /* width: 200px; */}
  margin: 10px;
`;
