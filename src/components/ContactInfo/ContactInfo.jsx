import { P, Li, Button } from './ContactInfo_css';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteContact } from 'redux/operations';

export const ContactInfo = ({ id, name, phone }) => {

      const dispatch = useDispatch();

      const onDeliteContact = (id) => {
            dispatch(deleteContact(id));
      }
      
      return (
        <>
          <Li>    
            <P>{name}: {phone}</P>
            <Button onClick={() => { onDeliteContact(id) }}>Delite</Button>  
          </Li>
        </>)
};
ContactInfo.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    phone: PropTypes.string,
}