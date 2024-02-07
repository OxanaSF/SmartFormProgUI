import { useAuth0 } from '@auth0/auth0-react';

const PageSix = () => {
  const { isAuthenticated } = useAuth0();
  if (!isAuthenticated) return null;
  return <main>Complete</main>;
};

export default PageSix;
