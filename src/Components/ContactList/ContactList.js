import React from 'react';
import PropTypes from 'prop-types';
import styles from './ContactList.module.css';

const ContactList =  ({ contacts, onDeleteContact }) => (
    <ul className={styles.list}>
        {contacts.map( ({ id, name, number }) => (
            <li key={id} className={styles.item}>
                <p className={styles.name}>{name}: <span>{number}</span></p>
                <button type="button" className={styles.btn} onClick={()=> onDeleteContact(id)}>Delete</button>
            </li>
        ) )
        }
    </ul>
);
ContactList.propTypes = {
    id: PropTypes.any.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
}

export default ContactList;