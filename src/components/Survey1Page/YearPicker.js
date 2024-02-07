import React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

const years = Array.from({ length: 74 }, (_, index) => 1950 + index); // Years from 1950 to 2023

const YearPicker = ({ value, onChange }) => {
  return (
    <Autocomplete
      options={years}
      getOptionLabel={(year) => year.toString()}
      value={value || undefined}
      onChange={(event, newValue) => onChange(newValue)}
      renderInput={(params) => <TextField {...params} variant='outlined' />}
    />
  );
};

export default YearPicker;
