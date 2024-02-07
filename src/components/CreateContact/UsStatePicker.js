import React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { usStates } from '../../utils/formUtils';

const UsStatePicker = ({ value, onChange }) => {
  return (
    <Autocomplete
      options={usStates}
      getOptionLabel={(state) => state}
      value={value}
      onChange={(event, newValue) => onChange(newValue)}
      renderInput={(params) => <TextField {...params} variant="outlined" />}
    />
  );
};

export default UsStatePicker;
