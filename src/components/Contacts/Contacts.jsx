import { Li, Ul, P, Button } from './Contacts_css';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts, getFilter, getIsLoading } from "redux/selectors";
import { deleteContact } from 'redux/operations';

export const Contacts = () => {

      const contacts = useSelector(getContacts);
      const filter = useSelector(getFilter);
      const dispatch = useDispatch();
      const isLoading = useSelector(getIsLoading);

      
      const toFiltredContacts = () => {
            const normalizeFilter = filter.toLowerCase();
            return (contacts.filter(contact => contact.name.toLowerCase().includes(normalizeFilter)));
      }
  
      const filtredContacts = toFiltredContacts();

      const onDeliteContact = (id) => {
            dispatch(deleteContact(id));
      }
      
      return (
          <Ul>
                  {filtredContacts.map(({ id, name, phone }) => (
                  <Li key={id}>
                              <P>{name}: {phone}</P>
                              <Button disabled={isLoading} onClick={() => { onDeliteContact(id) }}>Delite</Button>
                  </Li>))}
          </Ul>)
};
