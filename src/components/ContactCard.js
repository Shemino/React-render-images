import React from 'react';
import '../customstyles/ContactCard.css';


function ContactCard(props) {
    return (
        <div className="contact-card">
            <img align="center" src={props.contact.imgUrl}/>
            <h3><p color = "#3AC1EF">▍{props.contact.name}</p></h3>
            <p>Phone: {props.contact.phone}</p>
            <p>Email: {props.contact.email}</p>
        </div>
    )
}

export default ContactCard;