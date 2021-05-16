import React from "react";
import { useFormContext, useForm, Controller } from "react-hook-form";
import { TextField, Grid } from "@material-ui/core";

const FormInput = ({ name, label, required }) => {
  const { control } = useForm();
  return (
    <Grid item xs={12} sm={6}>
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, onBlur, value, ref } }) => (
          <TextField
            fullWidth
            control={control}
            required={required}
            name={name}
            label={label}
          />
        )}
      />
    </Grid>
  );
};

export default FormInput;
