import "../../App.css";
import style from "../../App.module.scss";
import { v4 as uuidv4 } from "uuid";
import AddContact from "../AddContact";
import Filter from "../Filter";
import ContactList from "../ContactList";

export const PhoneBook = () => {
  return (
    <div className={style.box}>
      <h1 className={style.title}>Phonebook</h1>
      <AddContact uuidv4={uuidv4} />
      <h2 className={style.title}>Contacts</h2>
      <Filter uuidv4={uuidv4} />
      <ContactList uuidv4={uuidv4} />
    </div>
  );
};
