import s from './App.module.css';

import { useState, useEffect } from 'react';

import ContactList from './components/ContactList/ContactList';
import ContactForm from './components/ContactForm/ContactForm';
import Filter from './components/Filter/Filter';

import { defaultContacts } from './components/contactList';

const App = () => {
  const [contacts, setContacts] = useState(() => {
    const localContacts = JSON.parse(localStorage.getItem('contacts'));
    return localContacts ? localContacts : defaultContacts;
  });
  
  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);


  const addNewContacts = (data) => {
    const name = data.name.toLowerCase();
    const sameContact = contacts.some(contact => contact.name.toLowerCase().includes(name));
    if (sameContact) {
      return alert(`${data.name} is already in your contacts`)
    }
    setContacts(prev => [data, ...prev]);
  };

  const deleteContact = id => {
    setContacts(contacts.filter(contact => contact.id !== id))
  };

  const filterName = e => {
    setFilter(e.currentTarget.value);
  };

  const getFilteredContacts = () => {
    const name = filter.toLowerCase();
    const filteredContacts = contacts.filter(contact => contact.name.toLowerCase().includes(name))

    return filteredContacts;
  }

  return (
    <div className={s.App}>
      <h1 className={s.title}>Phonebook</h1>
      <ContactForm addNewContacts={addNewContacts}
      />
       <h2>Contacts</h2>
      {contacts.length > 1 && <Filter value={filter} onChange={filterName} />}
      { contacts.length > 0 && <ContactList
        contacts={getFilteredContacts()}
        onDeleteBtn={deleteContact}
        />
      }

    </div>
  )
};

export default App;