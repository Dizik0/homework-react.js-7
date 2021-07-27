import { connect } from "react-redux";
import { getNameAuthorized } from "../../redux/authorization/authorization-selectors";

const HasEntered = ({ name }) => {
  return (
    <>
      <h3>{name}</h3> <button type="button">logout</button>
    </>
  );
};

const mapStateToProps = (state) => ({
  name: getNameAuthorized(state),
});

export default connect(mapStateToProps)(HasEntered);
