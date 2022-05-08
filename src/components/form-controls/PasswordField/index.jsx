import React, { useState } from 'react';
import PropTypes from 'prop-types';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Controller } from 'react-hook-form';
import { FormHelperText } from '@material-ui/core';

PasswordField.propTypes = {
    form: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    label: PropTypes.string,
    disabled: PropTypes.bool,
};

function PasswordField(props) {
    const {form, name, label, disabled} = props;
    const{ errors} = form;
    const hasError = errors[name];

    const [showPassword, setShowPassword] = useState(false);

    const toggleShowPassword = () => {
        setShowPassword(x => !x);
    }

    return ( 
        <div>
        {/* <Controller
            name={name}
            control={form.control}
            render={({ onChange, onBlur, value, name }) => (
            <TextField
            margin="normal"
            variant="outlined"
            fullWidth
            label={label}
            disabled={disabled}
            error={!!hasError}
            helperText={errors[name]?.message}
            name={name}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            />
        )}
       /> */}
        <FormControl fullWidth margin="normal" variant="outlined">
        <InputLabel htmlFor={name}>{label}</InputLabel>
        <Controller
          name={name}
          control={form.control}
          as= {OutlinedInput}
          id={name}
          type={showPassword ? 'text' : 'password'}
          label={label}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={toggleShowPassword}
                edge="end"
              >
                {showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          }
          disabled={disabled}
          error={!!hasError}
        />
      </FormControl>
      <FormHelperText error={!!hasError}>{errors[name]?.message}</FormHelperText>
      </div>
       
    );
}

export default PasswordField;