import React from 'react';
import { Button } from '@mui/material';

const ButtonConfirm = ({ onSubmit }) => {
  return (
    <Button
      type='submit'
      variant='contained'
      color='primary'
      onClick={onSubmit}
    >
      Confirm
    </Button>
  );
};

export default ButtonConfirm;
