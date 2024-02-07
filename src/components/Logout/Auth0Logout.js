import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import './Auth0Logout.css';

const Auth0Logout = () => {
  const { logout, isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
      <div>
        <button className="logout-btn" onClick={logout}>
          Logout
        </button>
      </div>
    )
  );
};

export default Auth0Logout;
