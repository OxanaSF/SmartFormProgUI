// import React from 'react';
// import LoginForm from './LoginForm';
// import './LoginPage.css';

// const LoginPage = ({ onLogin, oauthConfig }) => {
//   return (
//     <div className="login-page-container">
//       <div className="login-form-container">
//         <h2 className="login-form-title">Login Page</h2>
//         <LoginForm onLogin={onLogin} oauthConfig={oauthConfig} />
//       </div>
//     </div>
//   );
// };

// export default LoginPage;




// Import necessary modules
import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const LoginPage = ({ onLogin, oauthConfig }) => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  
  const { loginWithRedirect } = useAuth0();

  const handleLogin = () => {
    loginWithRedirect();
  };

  return (
    <div>
      <h2>Login Page</h2>
      {/* <h2>{user.name}</h2> */}
      <button onClick={handleLogin}>Login with Auth0</button>
    </div>
  );
};

export default LoginPage;
