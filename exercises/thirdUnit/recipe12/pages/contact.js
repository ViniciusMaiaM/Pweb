import React from 'react';
import styles from '../style/Contact.module.css';

function Contact() {
    return (
        <div className={styles.contact}>
            <h2>Contos</h2>
            <p>Caso queira conhecer mais sobre a festa:</p>
            <ul>
                <li><a href="https://www.instagram.com/festadesantanacaicooficial/?hl=pt" target="_blank" rel="noopener noreferrer">Instagram</a></li>
            </ul>
        </div>
    );
}

export default Contact;
