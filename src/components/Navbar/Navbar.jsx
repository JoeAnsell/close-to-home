import React from "react";
import { IconButton, Badge } from "@material-ui/core";
import { ShoppingCart, Home } from "@material-ui/icons";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";

const Navbar = ({ totalItems }) => {
  const location = useLocation();

  return (
    <AppBar position="fixed" color="inherit">
      <Left>
        <Link to="/">
          {location.pathname !== "/" && location.pathname === "/checkout" ? (
            <IconButton className="dark" color="white">
              <Home className="dark" />
            </IconButton>
          ) : (
            location.pathname !== "/" && (
              <IconButton>
                <Home />
              </IconButton>
            )
          )}
        </Link>
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
  z-index: 2;
  color: #d5da89;
  ${"" /* background: rgba(0, 0, 0, 0.76); */}
`;

const Left = styled.div`
  padding: 10px;
  .dark {
    color: black;
    background-color: white;
    &:hover {
      background-color: transparent;
      svg {
        background-color: transparent;
      }
    }
  }
  svg {
    color: #d5da89;
  }
`;
const Right = styled.div`
  padding: 10px;
  button {
    background-color: black;
  }
`;
