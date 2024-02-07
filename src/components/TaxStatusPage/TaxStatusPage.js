import { useAuth0 } from '@auth0/auth0-react';
import ButtonSkip from '../ButtonSkip/ButtonSkip';
import './TaxStatusPage.css';

const TaxStatusPage = () => {
  const { isAuthenticated } = useAuth0();

  if (!isAuthenticated) return null;
  return (
    <main className="taxstatus-container">
      <h2>TaxStatus</h2>
      <iframe
        className="taxstatus-iframe"
        title="TaxStatus"
        src="https://www.taxstatus.com"
      ></iframe>
      <ButtonSkip />
    </main>
  );
};

export default TaxStatusPage;
