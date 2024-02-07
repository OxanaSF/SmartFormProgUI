import { useAuth0 } from '@auth0/auth0-react';
import './DocuSignPage.css';

const DocuSignPage = () => {
  const { isAuthenticated } = useAuth0();

  if (!isAuthenticated) return null;
  return (
    <main className='docusign-container'>
      <h2>DocuSign</h2>
      <iframe
        className='docusign-iframe'
        title='DocuSign'
        src='https://www.docusign.com'
      ></iframe>
    </main>
  );
};

export default DocuSignPage;
