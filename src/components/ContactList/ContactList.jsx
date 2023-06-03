import PropTypes from 'prop-types';
import { Contact } from 'components/Contact/Contact';


export const ContactList = ({visibleContacts, onDeleteContact}) => {
    return  <ul>
            {visibleContacts.map(({id, name, number}) => (
                <li key={id}>
                    <Contact
                        name={name}
                        number={number}
                        onDeleteContact={()=>onDeleteContact(id)}
                        />
                </li>
            ))}
        </ul>
    
}

ContactList.propTypes = {
    visibleContacts: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
        })),
    onDeleteContact: PropTypes.func.isRequired,
}

