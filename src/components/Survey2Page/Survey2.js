import { useAuth0 } from '@auth0/auth0-react';
import Survey2Form from './Survey2Form';
import './Survey2.css';
import './Survey2Placeholder.css';

const Survey2 = () => {
  const { isAuthenticated } = useAuth0();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // fictional endpoint for now
      const response = await fetch(
        'https://example.com/submit-business-survey',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          // body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        console.log('Form submitted successfully!');
      } else {
        console.error('Form submission failed!');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };
  if (!isAuthenticated) return null;

  return (
    <main className="form-container">
      <Survey2Form handleSubmit={handleSubmit} />
    </main>
  );
};

export default Survey2;
