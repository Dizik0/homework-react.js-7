import "../../App.css";
import style from "../../App.module.scss";
import { v4 as uuidv4 } from "uuid";
import { connect } from "react-redux";
import AddContact from "../AddContact";
import Filter from "../Filter";
import ContactList from "../ContactList";

const PhoneBook = ({ logger }) => {
  return (
    <div className={style.box}>
      {logger && <div className={style.loader}>Загрузка...</div>}

      <h1 className={style.title}>Phonebook</h1>
      <AddContact uuidv4={uuidv4} />
      <h2 className={style.title}>Contacts</h2>
      <Filter uuidv4={uuidv4} />
      <ContactList uuidv4={uuidv4} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  logger: state.contact.loading,
});

export default connect(mapStateToProps)(PhoneBook);

/* <Switch>
  <Route path="/registration" component={Registration} />
  <Route path="/login" component={Login} />
</Switch>; */
