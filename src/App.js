import React from "react";
// import Products from "./components/products/Products";
// import NavBar from "./components/NavBar/Navbar";

import { Products, Navbar } from "./components";
import { createGlobalStyle } from "styled-components";

const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Navbar />
      <Products />
    </div>
  );
};

export default App;

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: "futura", "arial", san-serif;
    line-height: 1.3;
    font-size: 20px;
    
    body{
      background-color: white;
    }

    a,a:visited{
      color: inherit;
    }
    button{
      -webkit-tap-highlight-color: transparent;
    }



    h1{
      font-size: 1.7rem;
      line-height: 1.8rem;
    }
    h2{
      font-size: 1.2rem;
      line-height: 1.3rem;
    }
  }
`;
