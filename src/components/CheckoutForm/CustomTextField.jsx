import React from "react";
import { useFormContext, useForm, Controller } from "react-hook-form";
import { TextField, Grid } from "@material-ui/core";

const FormInput = ({ name, label, required }) => {
  const { control } = useFormContext();
  const isError = false;

  return (
    <Grid item xs={12} sm={6}>
      <Controller
        name={name}
        label={label}
        control={control}
        defaultValue=""
        render={({
          field: { onChange, onBlur, value, ref },
          fieldState: { invalid, isTouched, isDirty, error },
          formState,
        }) => (
          <TextField
            onChange={onChange}
            fullWidth
            required={required}
            name={name}
            label={label}
            value={value}
            error={isError}
          />
        )}
      />
    </Grid>
  );
};

export default FormInput;
