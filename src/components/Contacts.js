import React, { Component } from "react";
import Contact from "./Contact";

class Contacts extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: "John Doe",
        email: "jdoe@email",
        phone: "555-555-5555"
      },
      {
        id: 2,
        name: "Karen Williams",
        email: "karen@email",
        phone: "333-333-3333"
      },
      {
        id: 3,
        name: "Henry Johnson",
        email: "henry@email",
        phone: "111-111-1111"
      }
    ]
  };

  deleteContact = id => {
    const { contacts } = this.state;

    // filtering out the contacts I want deleted
    const newContacts = contacts.filter(contact => contact.id !== id);

    this.setState({
      contacts: newContacts
    });
  };

  render() {
    //destructing prop values out of the state
    const { contacts } = this.state;

    return (
      <React.Fragment>
        {contacts.map(contact => (
          <Contact
            key={contact.id}
            contact={contact}
            deleteClickHandler={this.deleteContact.bind(this, contact.id)} // passing in contact to delete
          />
        ))}
      </React.Fragment>
    );
  }
}

export default Contacts;
