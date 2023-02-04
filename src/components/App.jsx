import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from "react";
import { Section } from './Section/Section';
import { Contacts } from './Contacts/Contacts';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { fetchContacts } from 'redux/operations';
import { getIsLoading, getError } from 'redux/selectors';

export function App() {
  
  const dispatch = useDispatch();
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
          {isLoading && !error && <b>Request in progress...</b>}
          <Contacts/>
        </Section> 
        
      </>
    );
  
};
