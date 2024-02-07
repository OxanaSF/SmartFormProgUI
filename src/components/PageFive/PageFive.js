import { useAuth0 } from '@auth0/auth0-react';

const PageFive = () => {
  const { isAuthenticated } = useAuth0();
  if (!isAuthenticated) return null;
  return <main>PageFive</main>;
};

export default PageFive;
