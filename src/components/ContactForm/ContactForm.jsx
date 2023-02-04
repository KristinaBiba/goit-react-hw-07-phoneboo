import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { Label, Input, Button } from "./ContactForm_css";
import { getContacts } from "../../redux/selectors";
import { addContact } from '../../redux/contactsSlice';

export function ContactForm () {

  const [contactName, setContactName] = useState('');
  const [contactNumber, setContactNumber] = useState('');

  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const {name, value } = e.target;
    switch (name) {
      case ('contactName'):
        setContactName(value);
        break;
      case ('contactNumber'):
        setContactNumber(value);
        break;
      default:
        setContactName('');
        setContactNumber('');
        break;
    }    
  }

  const handleAddContact = (e) => {
    e.preventDefault();

    const { contactName, contactNumber } = e.currentTarget.elements;

    const normalizeNewContactName = contactName.value.toLowerCase();

    contacts.find(contact => contact.name.toLowerCase() === normalizeNewContactName) ? alert(`${contactName.value} is already incontacts`) :
    dispatch(addContact(contactName.value, contactNumber.value));

    setContactName('');
    setContactNumber('');
  }

    return (
      <form onSubmit={handleAddContact} >
        <Label>Name <Input
          type="text"
          name="contactName"
          onChange={handleChange}
          value={contactName}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        /></Label>
        <Label>Number <Input
          type="tel"
          name="contactNumber"
          onChange={handleChange}
          value={contactNumber}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        /></Label>
            
        <Button type="submit" text="Add contact">Add contact</Button>
      </form>)
  }