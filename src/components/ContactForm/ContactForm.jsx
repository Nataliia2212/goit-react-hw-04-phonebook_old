import { Component } from 'react';
import { nanoid } from 'nanoid'
import PropTypes from 'prop-types';
import css from './ContactForm.module.css'

export class ContactForm extends Component {
    state = {
        name: '',
        number: ''
    }

    handleChange = event => {
        const { name, value} = event.currentTarget
        this.setState({ [name]: value })
    }
    
    handleOnSubmit = event => {
        event.preventDefault();
        const { name, number } = this.state
        if (this.props.contacts.every(contact => contact.name !== name)) {
            const contact = { id: nanoid(5), name, number }
            this.props.onSubmit(contact)
            this.setState({
                name: '',
                number: ''
            })
        }else{alert(`${this.state.name} is already in contacts`)}
    }

render() {
    const {name, number}=this.state
    return (
        <form onSubmit={this.handleOnSubmit}>
            <label>
                Name
                <input
                    className={css.input}
                    type="text"
                    name="name"
                    value={name}
                    onChange={this.handleChange}
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
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
                    onChange={this.handleChange}
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                />
            </label>
            <button className={css.button} type="submit" >Add contact</button>
        </form>

  )
}
}

ContactForm.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
        })
    ),
    onSubmit: PropTypes.func.isRequired,
}

