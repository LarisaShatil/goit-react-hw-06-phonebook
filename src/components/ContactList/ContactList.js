import React from 'react';
import s from './ContactList.module.css';

import { useDispatch, useSelector } from 'react-redux/es/exports';
import { deleteContact } from '../../redux/contactsSlice'; 

const ContactList = () => {
  const contactsList = useSelector(state => state.contacts);
  const filterName = useSelector(state => state.filter).toLowerCase();
  const dispatch = useDispatch();

  const filteredList = contactsList.filter(contact => contact.name.toLowerCase().includes(filterName))

    return (
    <ul className={s.list}>{filteredList.map( contact => {
      return (
        <li key={contact.id} className={s.item}>
          <p className={s.text}>{contact.name}</p>
          <p className={s.text}>{contact.number}</p>
          <button
            className={s.deleteBtn}
            type="button"
            id={contact.id}
            onClick={() => dispatch(deleteContact(contact.id))}
          >Delete ❌</button>
        </li>);
      })}
    </ul>
  )
};

export default ContactList;