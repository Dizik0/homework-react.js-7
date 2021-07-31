import { connect } from "react-redux";
import { getNameAuthorized } from "../../redux/authorization/authorization-selectors";
import { logout } from "../../redux/authorization/authorization-opetations";

const HasEntered = ({ name, logOut }) => {
  return (
    <>
      <h3>{name}</h3>
      <button type="button" onClick={logOut}>
        logout
      </button>
    </>
  );
};

const mapStateToProps = (state) => ({
  name: getNameAuthorized(state),
});

const mapDispatchToProps = {
  logOut: logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(HasEntered);
