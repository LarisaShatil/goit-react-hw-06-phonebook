import React from 'react';
import s from './ContactList.module.css';

import { useDispatch, useSelector } from 'react-redux/es/exports';
import { deleteContact } from '../../redux/store';

const ContactList = () => {
  const contactsList = useSelector(state => state.contacts);
  const dispatch = useDispatch();

  if (contactsList) {
    return (
    <ul className={s.list}>{contactsList.map( contact => {
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
}
  return;
};

export default ContactList;