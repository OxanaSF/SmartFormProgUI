import * as React from 'react';

export interface Contact {
  firstname?: string;
  lastname?: string;
  phone?: string;
  company?: string;
  are_you_a_company_owner?: string;
  number_of_w_2_employees?: string;
  have_you_already_submitted_your_erc?: string;
  erc_quarters_filed?: string;
  preferred_communication_language?: string;
}

interface ContactContextValues {
  contact: Contact | undefined;
  setContact: React.Dispatch<React.SetStateAction<Contact | undefined>>;
}
export const ContactContext = React.createContext({} as ContactContextValues);

export const ContactProvider = ({ children }: React.PropsWithChildren) => {
  const [contact, setContact] = React.useState<Contact>();
  return (
    <ContactContext.Provider value={{ contact, setContact }}>
      {children}
    </ContactContext.Provider>
  );
};
