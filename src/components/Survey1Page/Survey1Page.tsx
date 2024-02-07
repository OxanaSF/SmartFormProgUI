import React, { useState } from 'react';
import ErcForm from './Survey1Form';
import { Snackbar, SnackbarContent, Button, styled } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import './Survey1Page.css';
// import { initializeFormData } from '../../utils/formUtils';

const StyledSnackbar = styled(Snackbar)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}));

const StyledSnackbarContent = styled(SnackbarContent)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  textAlign: 'center',
}));

const Survey1Page = () => {
  const [isSubmittedSuccessfully, setIsSubmittedSuccessfully] = useState(false);
  const { isAuthenticated } = useAuth0();
  const navigate = useNavigate();

  const onSuccess = () => {
    setIsSubmittedSuccessfully(true);
  };

  if (!isAuthenticated) {
    return null;
  }

  return (
    <main className='initial-survey-container'>
      <ErcForm onSuccess={onSuccess} />

      {/* Custom-styled Snackbar for success message */}
      <StyledSnackbar
        open={isSubmittedSuccessfully}
        autoHideDuration={6000}
        onClose={() => setIsSubmittedSuccessfully(false)}
      >
        <StyledSnackbarContent
          message='Form submitted successfully!'
          action={
            <Button
              color='inherit'
              size='small'
              onClick={() => navigate('/complete-docusign')}
            >
              Go to DocuSign Page
            </Button>
          }
        />
      </StyledSnackbar>
    </main>
  );
};

export default Survey1Page;
