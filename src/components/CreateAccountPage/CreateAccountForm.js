


import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import './CreateAccountForm.css'; 



const CreateAccountForm = ({ onSignup }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const {
    loginWithRedirect,
    isAuthenticated,
    user,
    logout,
    getAccessTokenSilently,
  } = useAuth0();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleCreateAccount = async () => {
    try {
      const auth0ManagementApiToken = process.env.YOUR_AUTH0_MANAGEMENT_API_TOKEN;

      const response = await axios.post(
        'YOUR_AUTH0_MANAGEMENT_API_ENDPOINT',
        {
          email: email,
          password: password,
          connection: 'Username-Password-Authentication',
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${auth0ManagementApiToken}`,
          },
        }
      );
  
      if (response.status === 201) {
        console.log('Account created successfully');
      } else {
        console.error('Error creating account:', response.data);
      }
    } catch (error) {
      console.error('Error creating account:', error);
    }
  };

  return (
    <form>
      <Box display="flex" flexDirection="column" alignItems="flex-start">
        <InputLabel htmlFor="email">Email</InputLabel>
        <TextField
          id="email"
          variant="outlined"
          margin="normal"
          fullWidth
          value={email}
          onChange={handleEmailChange}
        />

        <InputLabel htmlFor="password">Password</InputLabel>
        <TextField
          id="password"
          variant="outlined"
          margin="normal"
          type="password"
          fullWidth
          value={password}
          onChange={handlePasswordChange}
        />
      </Box>
      <Button
        variant="contained"
        color="primary"
        className="create-account-form-button"
        onClick={handleCreateAccount}
      >
        Create Account
      </Button>
    </form>
  );
};

export default CreateAccountForm;
