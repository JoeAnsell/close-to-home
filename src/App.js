import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { commerce } from "./lib/commerce";
import { Products, Navbar } from "./components";
import { createGlobalStyle } from "styled-components";

const App = () => {
  const [products, setProducts] = useState([]);
  const fetchProducts = async () => {
    const { data } = await commerce.products.list();

    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  console.log(products);

  return (
    <AppContainer>
      <GlobalStyle />
      <Navbar />
      <PageContaine>
        <Products />
      </PageContaine>
    </AppContainer>
  );
};

export default App;

const AppContainer = styled.div`
  padding-top: 100px;
  max-width: 100vw;
  max-height: 100vh;
`;

const PageContaine = styled.div`
  padding: 30px;
`;

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
