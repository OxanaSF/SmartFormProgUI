import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { useAuth0 } from '@auth0/auth0-react'; 
import "./LoginForm.css";

const LoginForm = ({ onLogin, oauthConfig }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { loginWithRedirect } = useAuth0(); // Use useAuth0 hook

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = () => {
    loginWithRedirect();
  };

  return (
    <form>
      <Box display="flex" flexDirection="column" alignItems="flex-start">
        <InputLabel htmlFor="username">Username</InputLabel>
        <TextField
          id="username"
          variant="outlined"
          margin="normal"
          fullWidth
          value={username}
          onChange={handleUsernameChange}
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
        className="login-form-button"
        onClick={handleLogin}
      >
        Login
      </Button>
    </form>
  );
};

export default LoginForm;
