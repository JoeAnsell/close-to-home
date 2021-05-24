import React, { useState, useEffect } from "react";
import {
  Paper,
  Stepper,
  Step,
  StepLabel,
  Typography,
  CircularProgress,
  Divider,
  CssBaseline,
} from "@material-ui/core";
// import classes from "*.module.css";
import { commerce } from "../../../lib/commerce";
import useStyles from "./styles";
import styled from "styled-components";
import AddressForm from "../AddressForm";
import PaymentForm from "../PaymentForm";
import { Link, useHistory } from "react-router-dom";
import { Button } from "../../../styles";
import { MobileView } from "react-device-detect";

const steps = [
  `Shipping ${!MobileView ? "address" : ""}`,
  `Payment ${!MobileView ? "details" : ""}`,
];

const Checkout = ({ cart, order, onCaptureCheckout, error }) => {
  const [activeStep, setActiveStep] = useState(0);
  const [checkoutToken, setCheckoutToken] = useState(null);
  const [shippingData, setShippingData] = useState({});
  const [isFinished, setIsFinished] = useState(false);
  const history = useHistory();
  const classes = useStyles();

  const nextStep = () => setActiveStep((prevActiveStep) => prevActiveStep + 1);
  const backStep = () => setActiveStep((prevActiveStep) => prevActiveStep - 1);

  const generateToken = async () => {
    try {
      const token = await commerce.checkout.generateToken(cart.id, {
        type: "cart",
      });
      setCheckoutToken(token);
    } catch (error) {
      console.log("no token");
      // history.pushState("/");
    }
  };

  useEffect(() => {
    generateToken();
  }, [cart]);

  const next = (data) => {
    console.log(data);
    setShippingData(data);
    nextStep();
  };

  const timeout = () => {
    setTimeout(() => {
      setIsFinished(true);
    }, 3000);
  };

  let Confirmation = () =>
    order.customer ? (
      <>
        <div>
          <Typography variasnt="h5">
            Thank you for your purchase, {order.customer.firstname}{" "}
            {order.customer.lastname}
          </Typography>
          <Divider className={classes.divider} />
          <Typography variant="subtitilte2">
            Order ref: {order.customer.reference}
          </Typography>
        </div>
        <br></br>
        <Link to="/">
          <Button cvariant="outlined" type="button">
            Back to Home
          </Button>
        </Link>
      </>
    ) : isFinished ? (
      <>
        <div>
          <Typography variasnt="h5">Thank you for your purchase</Typography>
          <Divider className={classes.divider} />
        </div>
        <br></br>
        <Link to="/">
          <Button cvariant="outlined" type="button">
            Back to Home
          </Button>
        </Link>
      </>
    ) : (
      <div className={classes.spinner}>
        <CircularProgress />
      </div>
    );

  if (error) {
    <>
      <Typography variant="h5">Error: {error}</Typography>
      <br></br>
      <Link to="/">
        <Button cvariant="outlined" type="button">
          Back to Home
        </Button>
      </Link>
    </>;
  }

  const Form = () =>
    activeStep === 0 ? (
      <AddressForm checkoutToken={checkoutToken} next={next} />
    ) : (
      <PaymentForm
        shippingData={shippingData}
        checkoutToken={checkoutToken}
        backStep={backStep}
        nextStep={nextStep}
        onCaptureCheckout={onCaptureCheckout}
        timeout={timeout}
      />
    );
  return (
    <Container>
      <CssBaseline />
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <h1>Checkout</h1>
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map((step) => {
              return (
                <Step key={step}>
                  <StepLabel>{step}</StepLabel>
                </Step>
              );
            })}
          </Stepper>
          <FormContent>
            {activeStep === steps.length ? (
              <Confirmation />
            ) : (
              checkoutToken && <Form />
            )}
          </FormContent>
        </Paper>
      </main>
    </Container>
  );
};

export default Checkout;

const Container = styled.div`
  max-width: 700px;
  margin: 0 auto;

  h1 {
    text-align: center;
  }
`;

const FormContent = styled.div`
  padding: 0px 25px 25px 25px;
`;
