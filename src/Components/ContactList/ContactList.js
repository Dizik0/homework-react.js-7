import { Component } from "react";
import PropTypes from "prop-types";
import style from "./ContactList.module.scss";

import { connect } from "react-redux";
import { deleteContact } from "../../redux/contact/contact-opetations";
import { fetchContact } from "../../redux/contact/contact-opetations";
import { getFilterContacts } from "../../redux/contact/contact-selectors";

class ContactList extends Component {
  componentDidMount = () => {
    this.props.fetchContact();
  };

  render() {
    const { filterTodos, deleteTodo, uuidv4 } = this.props;

    return (
      <>
        <ul className={style.list}>
          {filterTodos.map(({ name, number, id }) => (
            <li key={uuidv4()} className={style.listItem}>
              <p className={style.name}>{name}</p>
              <span className={style.number}>{number}</span>
              <button
                className={style.button}
                type="button"
                onClick={() => deleteTodo(id)}
              >
                Удалить
              </button>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

ContactList.propTypes = {
  filterTodos: PropTypes.array,
  uuidv4: PropTypes.func,
  deleteTodo: PropTypes.func,
};

const mapStateToProps = (state) => ({
  filterTodos: getFilterContacts(state),
  // isLoadingItems: state.contact.loading,
});

const mapDispatchToProps = (dispatch) => ({
  deleteTodo: (id) => dispatch(deleteContact(id)),
  fetchContact: () => dispatch(fetchContact()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
