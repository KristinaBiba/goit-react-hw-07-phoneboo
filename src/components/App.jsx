import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from "react";
import { Section } from './Section/Section';
import { Contacts } from './Contacts/Contacts';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { fetchContacts } from 'redux/operations';
import { getIsLoading, getError, getContacts } from 'redux/selectors';

export function App() {
  
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);


    return (
      <>
        <Section title="Phonebook">
          <ContactForm/>
        </Section>
          
        <Section title="Contacts">
          <Filter/>
          {isLoading && !error && contacts.length === 0 && <b style={{paddingLeft: '12px', fontSize: '24px'}}>Request in progress...</b>}
          <Contacts/>
        </Section> 
        
      </>
    );
  
};
