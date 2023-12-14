import { useState } from 'react';
import { nanoid } from 'nanoid'
// import PropTypes from 'prop-types';
import css from './ContactForm.module.css'

export default function ContactForm({contacts, onSubmit}) {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const handleOnSubmit = (event) => {
        event.preventDefault();
        if (contacts.every(contact => contact.name !== name)) {
            const contact = { id: nanoid(5), name, number }
            onSubmit(contact)
            setName('');
            setNumber('')
        }else{alert(`${name} is already in contacts`)}
}

    const handleChange = (event) => {
        const { name, value } = event.currentTarget
        
        switch (name) {
            case 'name':
                setName(value)
                break;
            case 'number':
                setNumber(value)
                break;
                
            default:
                break;
        }
    }

     return (
        <form onSubmit={handleOnSubmit}>
            <label>
                Name
                <input
                    className={css.input}
                    type="text"
                    name="name"
                    value={name}
                    onChange={handleChange}
                    // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                />
            </label>
            <label>
                Number
                <input
                    className={css.input}
                    type="tel"
                    name="number"
                    value={number}
                    onChange={handleChange}
                    // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                />
            </label>
            <button className={css.button} type="submit" >Add contact</button>
        </form>

  )
}

// // ContactForm.propTypes = {
// //     contacts: PropTypes.arrayOf(
// //         PropTypes.exact({
// //             id: PropTypes.string.isRequired,
// //             name: PropTypes.string.isRequired,
// //             number: PropTypes.string.isRequired,
// //         })
// //     ),
// //     onSubmit: PropTypes.func.isRequired,
// // }

