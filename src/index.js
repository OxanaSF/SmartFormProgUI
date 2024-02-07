import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';

import './index.css';
import App from './App';
import { ContactProvider } from './contexts/contact-context';

const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <Auth0Provider
    domain={domain}
    clientId={clientId}
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <ContactProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ContactProvider>
  </Auth0Provider>
);
