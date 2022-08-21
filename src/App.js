import s from './App.module.css';
import { useState } from 'react';

import ContactForm from './components/ContactForm/ContactForm';
import Filter from './components/Filter/Filter';

import ContactList from './components/ContactList/ContactList';
import {  useSelector } from 'react-redux/es/hooks/useSelector';

const App = () => {
  const contactsList = useSelector(state => state.contacts);

  // const [contacts, setContacts] = useState(() => {
  //   const localContacts = JSON.parse(localStorage.getItem('contacts'));
  //   return localContacts ? localContacts : defaultContacts;
  // });
  
  const [filter, setFilter] = useState('');

  // useEffect(() => {
  //   window.localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);



  const filterName = e => {
    setFilter(e.currentTarget.value);
  };

  // const getFilteredContacts = () => {
  //   const name = filter.toLowerCase();
  //   const filteredContacts = contacts.filter(contact => contact.name.toLowerCase().includes(name))

  //   return filteredContacts;
  // }

  return (
    <div className={s.App}>
      <h1 className={s.title}>Phonebook</h1>
      <ContactForm />
       <h2>Contacts</h2>
      {contactsList.length > 1 && <Filter value={filter} onChange={filterName} />}
      { contactsList.length > 0 && <ContactList />
      }
    </div>
  )
};

export default App;