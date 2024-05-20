import { HiUser } from "react-icons/hi";
import { FaPhoneAlt } from "react-icons/fa";

import css from "./Contact.module.css";

const Contact = ({ data: { name, number, id }, onDelete }) => {
  return (
    <div className={css.contactItem}>
      <ul className={css.contactContent}>
        <li>
          <HiUser className={css.contactIcon} size="24" />
          <p>{name}</p>
        </li>
        <li>
          <FaPhoneAlt className={css.contactIcon} size="21" />
          <p>{number}</p>
        </li>
      </ul>
      <button className={css.contactBtnDelete} onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
