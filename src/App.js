import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { commerce } from "./lib/commerce";
import {
  Products,
  Navbar,
  Cart,
  Checkout,
  HomePage,
  Title,
  Images,
} from "./components";
import { createGlobalStyle } from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { set } from "react-hook-form";
import bg from "./images/bg-comp.jpg";
import bgMobile from "./images/bg-mobile-comp.jpg";
import { Parallax } from "react-parallax";
import { noise } from "./noise";
import {
  MobileView,
  isPortrait,
  isMobile,
  withOrientationChange,
} from "react-device-detect";

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});
  const [order, setOrder] = useState({});
  const [errorMessage, setErrorMessage] = useState("");
  const [windowSmall, setWindowSmall] = useState(false);

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();

    setProducts(data);
  };

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  };

  const handleAddToCart = async (productId, quantity) => {
    const { cart } = await commerce.cart.add(productId, quantity);

    setCart(cart);
  };

  const handleUpdateCartQty = async (productId, quantity) => {
    const { cart } = await commerce.cart.update(productId, { quantity });

    setCart(cart);
  };

  const handleRemoveFromCart = async (productId) => {
    const { cart } = await commerce.cart.remove(productId);

    setCart(cart);
  };

  const handleEmptyCart = async () => {
    const { cart } = await commerce.cart.empty();

    setCart(cart);
  };

  const refreshCart = async () => {
    const newCart = await commerce.cart.refresh();
    setCart(newCart);
  };

  const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
    try {
      const incomingOrder = await commerce.checkout.capture(
        checkoutTokenId,
        newOrder
      );
      setOrder(incomingOrder);
    } catch (error) {
      setErrorMessage(error);
      console.log(error);
    }
    refreshCart();
  };

  useEffect(() => {
    noise();
  });

  const checkDevice = () => {
    const windowWidth = window.innerWidth;
    setTimeout(() => {
      if (windowWidth < 800) {
        setWindowSmall(true);
      } else {
        setWindowSmall(false);
      }
    }, 500);
  };

  useEffect(() => {
    fetchProducts();
    fetchCart();
    window.addEventListener("resize", checkDevice);
    checkDevice();
    return () => window.removeEventListener("resize", checkDevice);
  }, []);

  return (
    <Router>
      <AppContainer>
        <GlobalStyle />
        <Navbar totalItems={cart.total_items} />
        <Switch>
          <Route
            render={({ location }) =>
              ["/", "/basket"].includes(location.pathname) ? (
                <Parallax
                  blur={0}
                  bgImage={`${isMobile ? bgMobile : bg}`}
                  strength={1000}
                >
                  {location.pathname === "/" && !windowSmall && (
                    <Images windowSmall={windowSmall} />
                  )}
                  <Noise id="noise" />
                  <PageContainer>
                    <Title location={location} />
                    <Switch>
                      <Route exact path="/">
                        <HomePage
                          windowSmall={windowSmall}
                          products={products}
                          onAddToCart={handleAddToCart}
                        />
                      </Route>
                      <Route exact path="/basket">
                        <Cart
                          cart={cart}
                          handleUpdateCartQty={handleUpdateCartQty}
                          handleRemoveFromCart={handleRemoveFromCart}
                          handleEmptyCart={handleEmptyCart}
                        ></Cart>
                      </Route>
                    </Switch>
                  </PageContainer>
                </Parallax>
              ) : (
                <PageContainer>
                  <Route exact path="/checkout">
                    <Title location={location} />
                    <Checkout
                      cart={cart}
                      order={order}
                      onCaptureCheckout={handleCaptureCheckout}
                      error={errorMessage}
                    />
                  </Route>
                </PageContainer>
              )
            }
          ></Route>
        </Switch>
      </AppContainer>
    </Router>
  );
};

export default App;

const AppContainer = styled.div`
  max-width: 100vw;
  background: transparent;
  .react-parallax-bgimage {
    height: 150vh !important;
    z-index: -2;
  }
`;

const PageContainer = styled.div`
  padding: 50px 30px 100px 30px;
  margin: 0 auto;
  max-width: 700px;
  position: relative;
  z-index: 1;
  @media only screen and (max-width: 500px) {
    padding: 80px 10px 100px 10px;
  }
`;

const Noise = styled.canvas`
  display: block;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
`;

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: "helvetica", "arial", san-serif;
    line-height: 1.3;
    font-size: 18px;
    
    body{
      background-color: black;
    }

    a,a:visited{
      color: inherit;
    }
    button{
      -webkit-tap-highlight-color: transparent;
      color: black;
    }



    h1{
      font-size: 1.7rem;
      line-height: 1.8rem;
    }
    h2{
      font-size: 1.2rem;
      line-height: 1.3rem;
    }
    @media only screen and (max-width: 500px) {
        h1{
        font-size: 1.5rem;
        line-height: 1.6rem;
      }
      h2{
        font-size: 1rem;
        line-height: 1.1rem;
      }
        font-size: 17px;
      }
    }
`;
