import { useState, useEffect } from 'react';
import CreateContactForm from './CreateContactForm';
import { useNavigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import './CreateContact.css';

const CreateContact = ({ onCloseModal }) => {
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const { user, isAuthenticated } = useAuth0();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    try {
      const yes = 'response';
      // Simulate a successful response for development purposes
      if ('yes') {
        console.log('Form submitted successfully!');
        setSubmitSuccess(true);
        onCloseModal();
      } else {
        console.error('Form submission failed!');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    isAuthenticated && (
      <main className="create-contact-container">
        <h1>ERC Eligibility</h1>
        <div className="create-contact-body">
          <CreateContactForm onSubmit={handleSubmit} />
        </div>
      </main>
    )
  );
};

export default CreateContact;
