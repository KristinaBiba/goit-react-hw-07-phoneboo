import { Ul } from './Contacts_css';
import { useSelector } from 'react-redux';
import { getContacts, getFilter } from "redux/selectors";
import {ContactInfo} from 'components/ContactInfo/ContactInfo';

export const Contacts = () => {

      const contacts = useSelector(getContacts);
      const filter = useSelector(getFilter);

      const toFiltredContacts = () => {
            const normalizeFilter = filter.toLowerCase();
            return (contacts.filter(contact => contact.name.toLowerCase().includes(normalizeFilter)));
      }
  
      const filtredContacts = toFiltredContacts();
     
      return (
          <Ul>
                  {filtredContacts.map(( contact ) => (
                        <ContactInfo key = {contact.id} {...contact}/>))}
          </Ul>)
};