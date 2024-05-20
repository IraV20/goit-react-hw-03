import Contact from "../contact/Contact";
import css from "./ContactList.module.css";

const ContactList = ({ contacts, onDelete }) => {
  return (
    <ul className={css.contactList}>
      {contacts.map((contact) => (
        <li key={contact.id}>
          <Contact onDelete={onDelete} data={contact} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
