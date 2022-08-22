import { useState} from 'react';
import { v4 as uuid } from 'uuid';
import s from './ContactForm.module.css';

import { useDispatch, useSelector } from 'react-redux/es/exports';
import { addContact } from '../../redux/contactsSlice';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contactsList = useSelector(state => state.contacts);
  const dispatch = useDispatch();

  //taking data from input
  const handleChange = ({ target }) => {
    const { name, value } = target;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const resetForm = () => {
    setName('');
    setNumber('');
  };
  
const checkNewContacts = (data) => {
    const name = data.name.toLowerCase();
    const sameContact = contactsList.some(contact => contact.name.toLowerCase().includes(name));
    if (sameContact) {
      return alert(`${data.name} is already in your contacts`)
  }
  return true;
  };

  //collecting and forwarding data to obj
  const handleSubmit = (e) => {
    e.preventDefault();
  
    const obj = {
      id: uuid(),
      name: name,
      number: number
    };

    if (checkNewContacts(obj)){
       dispatch(addContact(obj));
    };

    resetForm();
  };

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <label
        className={s.label}
        htmlFor="name">👤 Name
        <input
          className={s.input}
          id="name"
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="write the name with the use of letters, apostrophe, dash and spaces. For example, Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan, etc"
          placeholder=". . ."
          required
        />
      </label>

      <label
        className={s.label}
        htmlFor="number">☎️ Number
        <input
          className={s.input}
          id="number"
          type="tel"
          name="number"
          value={number}
          onChange={handleChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          maxLength="14"
          title="use the numeric format for the phone number"
          placeholder=". . ."
          required
        />
      </label>
      <button
        className={s.addBtn}
        type="submit"
      >
        Add contact
      </button>

    </form>

  )
};

export default ContactForm;