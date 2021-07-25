import { Component } from "react";
import PropTypes from "prop-types";
import style from "./Filter.module.scss";

import { connect } from "react-redux";

import * as actions from "../../redux/contact/contact-action";
import { getFilter } from "../../redux/contact/contact-selectors";

class Filter extends Component {
  state = {
    filter: "",
  };

  render() {
    const { filterContact, filter } = this.props;
    return (
      <input
        className={style.lable}
        type="text"
        onChange={filterContact}
        value={filter}
      />
    );
  }
}

Filter.propTypes = {
  filterContact: PropTypes.func,
  filter: PropTypes.string,
};

const mapStateToProps = (state) => ({
  filter: getFilter(state),
});

const mapDispatchToProps = (dispatch) => ({
  filterContact: (e) => dispatch(actions.filterContact(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
