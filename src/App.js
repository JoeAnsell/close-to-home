import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { commerce } from "./lib/commerce";
import { Products, Navbar, Cart } from "./components";
import { createGlobalStyle } from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();

    setProducts(data);
  };

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  };

  const handleAddToCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity);

    setCart(item.cart);
  };

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  console.log(cart);

  return (
    <Router>
      <AppContainer>
        <GlobalStyle />
        <Navbar totalItems={cart.total_items} />
        <PageContainer>
          <Switch>
            <Route exact path="/">
              <Products products={products} onAddToCart={handleAddToCart} />
            </Route>
            <Route exact path="/checkout">
              <Cart cart={cart}></Cart>
            </Route>
          </Switch>
        </PageContainer>
      </AppContainer>
    </Router>
  );
};

export default App;

const AppContainer = styled.div`
  padding-top: 100px;
  max-width: 100vw;
  max-height: 100vh;
`;

const PageContainer = styled.div`
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
