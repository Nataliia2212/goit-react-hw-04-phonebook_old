import PropTypes from 'prop-types';
import css from './Contact.module.css'


export const Contact = ({ name, number, onDeleteContact}) => {
    return  <>
        {name}: {number}
        <button className={css.button} onClick={onDeleteContact}>Delete</button>
             
        </>
    
}

Contact.propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    onDeleteContact: PropTypes.func.isRequired,
}

