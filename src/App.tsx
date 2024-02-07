import './App.css';
import { useEffect, useState } from 'react';
import LandingPresentation from './components/LandingPresentation/LandingPresentation';
import { useAuth0 } from '@auth0/auth0-react';
import { getNormalizedContactData } from './utils/formUtils';
import { api, fetchContactData } from './core/api';
import { useContact } from './contexts/useContact';
import { AuthedRoutes } from './pages/AuthedRoutes';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Spinner } from './components/Spinner';

function App() {
  const [isApiClientReady, setIsApiClientReady] = useState(false);
  const { isAuthenticated, user, isLoading, getAccessTokenSilently } =
    useAuth0();
  const { setContact } = useContact();

  useEffect(() => {
    if (!isApiClientReady) {
      api.initializeInterceptors(getAccessTokenSilently);
      setIsApiClientReady(true);
    }
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (user && isApiClientReady) {
      fetchContactData(user.email!)
        .then((data) => {
          const contact = data.contacts[0];

          if (!contact) return;
          console.log(contact);

          setContact(getNormalizedContactData(contact.properties));
        })
        .catch((err) => {
          console.error(err);
        });
    } else {
      setContact(undefined);
    }
    // eslint-disable-next-line
  }, [user, isApiClientReady]);

  if (isLoading) {
    return <Spinner />;
  }

  if (!isAuthenticated && !isLoading) {
    return (
      <Routes>
        <Route path='/' element={<Navigate to='/landing' />} />
        <Route path='/landing' element={<LandingPresentation />} />
      </Routes>
    );
  }

  return <AuthedRoutes />;
}

export default App;
