import React, { useState } from "react";
import {
  Paper,
  Stepper,
  Step,
  StepLabel,
  Typography,
  CircularProgress,
  Divider,
  Buttton,
} from "@material-ui/core";
// import classes from "*.module.css";
import useStyles from "./styles";

const steps = ["Shipping address", "Payment details"];

const Checkout = () => {
  const [activeStep, setActiveStep] = useState(0);
  const classes = useStyles;
  return (
    <>
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography variant="h4" align="center">
            Checkout
          </Typography>
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map((step) => {
              return (
                <Step key={step}>
                  <StepLabel>{step}</StepLabel>
                </Step>
              );
            })}
          </Stepper>
        </Paper>
      </main>
    </>
  );
};

export default Checkout;
