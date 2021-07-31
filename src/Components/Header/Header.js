import { connect } from "react-redux";
// import { DidNotEnter } from "./DidNotEnter";
import HasEntered from "./HasEntered";
import { authorized } from "../../redux/authorization/authorization-selectors";
import { NavLink } from "react-router-dom";

const Header = ({ authorized }) => {
  return (
    <>
      {authorized ? (
        <HasEntered />
      ) : (
        <ul>
          <li>
            <NavLink to={"/Registration"}>Registration</NavLink>
          </li>
          <li>
            <NavLink to={"/Login"}>sing in</NavLink>
          </li>
        </ul>
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  authorized: authorized(state),
});
export default connect(mapStateToProps)(Header);
