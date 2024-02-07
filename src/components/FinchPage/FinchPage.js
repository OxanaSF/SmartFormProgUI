import { useAuth0 } from '@auth0/auth0-react';
import ButtonSkip from '../ButtonSkip/ButtonSkip';
import './FinchPage.css';

const FinchPage = () => {
  const { isAuthenticated } = useAuth0();
  if (!isAuthenticated) return null;

  return (
    <main className="finch-container">
      <h2>Payroll</h2>
      <iframe
        className="finch-iframe"
        title="TaxStatus"
        src="https://connect.smarterc.com/"
      ></iframe>
      <ButtonSkip />
    </main>
  );
};

export default FinchPage;
