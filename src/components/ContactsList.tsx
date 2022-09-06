import React, { useState } from 'react';
import { useAppSelector } from '../hooks/defaultHooks';
import { selectors } from '../slices/contactsSlice';
import Contact from './Contact';
import SearchBar from './SearchBar';

const ContactsList: React.FC = () => {
  const contacts = useAppSelector(selectors.selectAll);
  const [searchValue, SetSearchValue] = useState('');
  const searchedContacts = contacts.filter((c) => `${c.firstName}${c.lastName}${c.phone}`.includes(searchValue));

  return (
    <>
      <SearchBar searchValue={searchValue} SetSearchValue={SetSearchValue} />
      {searchedContacts.map((contact) => (
        <Contact key={contact.id} contact={contact} />
      ))}
    </>
  );
};

export default ContactsList;
