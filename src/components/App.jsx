import { Section } from './Section/Section';
import { Contacts } from './Contacts/Contacts';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';

export function App () {

    return (
      <>
        <Section title="Phonebook">
          <ContactForm ></ContactForm>
        </Section>
          
        <Section title="Contacts">
          <Filter></Filter>
          <Contacts > </Contacts>
        </Section> 
        
      </>
    );
  
};
