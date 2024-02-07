import { useContext } from 'react';
import { ContactContext } from './contact-context';

export const useContact = () => {
  return useContext(ContactContext);
};
