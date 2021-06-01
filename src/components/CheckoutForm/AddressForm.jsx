import React, { useState, useEffect } from "react";
import {
  InputLabel,
  Select,
  MenuItem,
  Grid,
  Typography,
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
} from "@material-ui/core";
import styled from "styled-components";
import { useFormContext, useForm, FormProvider } from "react-hook-form";
import { Link } from "react-router-dom";
import { commerce } from "../../lib/commerce";
// import { Button } from "../../styles";

import FormInput from "./CustomTextField";

const AddressForm = ({ checkoutToken, next }) => {
  const [shippingCountries, setShippingCountries] = useState([]);
  const [shippingCountry, setShippingCountry] = useState("");
  const [shippingSubdivisions, setShippingSubdivisions] = useState([]);
  const [shippingSubdivision, setShippingSubdivision] = useState("");
  const [shippingOptions, setShippingOptions] = useState([]);
  const [shippingOption, setShippingOption] = useState("");
  const [billingSameAsShipping, setBillingSameAsShipping] = useState(true);
  const methods = useForm();
  const countries = Object.entries(shippingCountries).map(([code, name]) => ({
    id: code,
    label: name,
  }));

  const subdivisions = Object.entries(shippingSubdivisions).map(
    ([code, name]) => ({
      id: code,
      label: name,
    })
  );

  const options = shippingOptions.map((sO) => ({
    id: sO.id,
    label: `${sO.description} - (${sO.price.formatted_with_symbol})`,
  }));

  const fetchShippingCountries = async (checkoutTokenId) => {
    const { countries } = await commerce.services.localeListShippingCountries(
      checkoutTokenId
    );

    setShippingCountries(countries);
    setShippingCountry(Object.keys(countries)[0]);
  };

  const fetchSubdivisions = async (countryCode) => {
    const { subdivisions } = await commerce.services.localeListSubdivisions(
      countryCode
    );

    setShippingSubdivisions(subdivisions);
    setShippingSubdivision(Object.keys(subdivisions)[0]);
  };

  const fetchShippingOptions = async (
    checkoutTokenId,
    country,
    region = null
  ) => {
    const options = await commerce.checkout.getShippingOptions(
      checkoutTokenId,
      { country, region }
    );

    console.log(options);
    setShippingOptions(options);
    setShippingOption(options[0].id);
  };

  useEffect(() => {
    fetchShippingCountries(checkoutToken.id);
  }, []);

  useEffect(() => {
    if (shippingCountry) fetchSubdivisions(shippingCountry);
  }, [shippingCountry]);

  useEffect(() => {
    if (shippingSubdivision) {
      console.log(shippingSubdivision);
      fetchShippingOptions(
        checkoutToken.id,
        shippingCountry,
        shippingSubdivision
      );
    }
  }, [shippingSubdivision]);

  return (
    <Container>
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit((data) =>
            next({
              ...data,
              shippingCountry,
              shippingSubdivision,
              shippingOption,
            })
          )}
        >
          <Grid container spacing={3}>
            <Typography style={{ width: "100%" }} variant="h6">
              Shipping Address
            </Typography>
            <FormInput required name="firstName" label="First name" />
            <FormInput required name="lastName" label="Last name" />
            <FormInput required name="address1" label="Address" />
            <FormInput required name="email" label="Email" />
            <FormInput required name="city" label="City" />
            <FormInput required name="zip" label="Zip / Postal code" />
            <br></br>
            <br></br>
            <FormControlLabel
              className="billing-toggle"
              control={
                <Checkbox
                  checked={billingSameAsShipping ? false : true}
                  onChange={() =>
                    setBillingSameAsShipping(!billingSameAsShipping)
                  }
                  name="checkedB"
                  color="primary"
                />
              }
              label="Billing address same as Shipping address?"
            />
            {billingSameAsShipping && (
              <>
                <Typography className="billing-title" variant="h6">
                  Billing Address
                </Typography>
                <FormInput
                  required
                  name="billing_firstName"
                  label="First name"
                />
                <FormInput required name="billing_lastName" label="Last name" />
                <FormInput required name="billing_address1" label="Address" />
                <FormInput required name="billing_email" label="Email" />
                <FormInput required name="billing_city" label="City" />
                <FormInput
                  required
                  name="billing_zip"
                  label="Zip / Postal code"
                />
              </>
            )}
            <Typography
              style={{ width: "100%", marginTop: "30px", marginBottom: "20px" }}
              variant="h6"
              gutterBottom
            >
              Delivery Method
            </Typography>
            <Grid item xs={12} sm={6}>
              <InputLabel>Shipping Country</InputLabel>
              <Select
                value={shippingCountry}
                fullWidth
                onChange={(e) => setShippingCountry(e.target.value)}
              >
                {countries.map((country) => (
                  <MenuItem key={country.id} value={country.id}>
                    {country.label}
                  </MenuItem>
                ))}
              </Select>
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputLabel>Shipping Subdivision</InputLabel>
              <Select
                value={shippingSubdivision}
                fullWidth
                onChange={(e) => setShippingSubdivision(e.target.value)}
              >
                {subdivisions.map((subdivision) => (
                  <MenuItem key={subdivision.id} value={subdivision.id}>
                    {subdivision.label}
                  </MenuItem>
                ))}
              </Select>
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputLabel>Shipping Options</InputLabel>
              <Select
                value={shippingOption}
                fullWidth
                onChange={(e) => setShippingOption(e.target.value)}
              >
                {options.map((option) => (
                  <MenuItem key={option.id} value={option.id}>
                    {option.label}
                  </MenuItem>
                ))}
              </Select>
            </Grid>
          </Grid>
          <br />
          <br></br>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Link to="/basket">
              <Button variant="outlined">Back</Button>
            </Link>
            <Button type="submit" color="primary" variant="contained">
              Next
            </Button>
          </div>
        </form>
      </FormProvider>
    </Container>
  );
};

export default AddressForm;

const Container = styled.div`
  display: block;
  .billing-title {
    margin-top: 30px;
    width: 100%;
  }
  .billing-toggle {
    margin: 20px 0px 10px 0px;
  }
  .billing-spacer {
    margin-bottom: 30px;
  }
  a {
    text-decoration: none;
  }
`;
