import { connect } from "react-redux";
import { getNameAuthorized } from "../../redux/authorization/authorization-selectors";
import { logout } from "../../redux/authorization/authorization-opetations";
import style from "./hasEntered.module.scss";

const HasEntered = ({ name, logOut }) => {
  return (
    <div className={style.boxUser}>
      <h3 className={style.name}>{name}</h3>
      <button type="button" onClick={logOut} className={style.button}>
        logout
      </button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  name: getNameAuthorized(state),
});

const mapDispatchToProps = {
  logOut: logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(HasEntered);
