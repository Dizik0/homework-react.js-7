import { connect } from "react-redux";
// import { DidNotEnter } from "./DidNotEnter";
import HasEntered from "./HasEntered";
import { authorized } from "../../redux/authorization/authorization-selectors";
import { NavLink } from "react-router-dom";
import style from "./header.module.scss";

const Header = ({ authorized }) => {
  return (
    <>
      {authorized ? (
        <HasEntered />
      ) : (
        <ul className={style.BoxLoginRegistration}>
          <li>
            <NavLink
              to={"/Registration"}
              activeClassName={style.active}
              className={style.LoginRegistration}
            >
              Registration
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/Login"}
              activeClassName={style.active}
              className={style.LoginRegistration}
            >
              sing in
            </NavLink>
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
