import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  MenuItem,
  Menu,
  Typography,
} from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
// import classes from "*.module.css";

const Navbar = () => {
  return (
    <>
      <AppBar position="fixed" color="inherit">
        <Toolbar>
          <h4>Close to Home</h4>
          <div>
            <IconButton arial-label="Show cart items" color="inherit">
              <Badge badgecontent={2} color="secondary">
                <ShoppingCart />
              </Badge>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
