import { useAuth0 } from '@auth0/auth0-react';
import './LandingPresentation.css';

const LandingPresentation = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  if (isAuthenticated) {
    return null;
  }

  const goToAuth0 = () => {
    loginWithRedirect();
  };

  return (
    <div className='landing-page-image'>
      <div className='button-container'>
        <button onClick={goToAuth0}>Login</button>
      </div>
    </div>
  );
};

export default LandingPresentation;
