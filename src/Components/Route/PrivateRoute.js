import { connect } from "react-redux";
import { Redirect, Route } from "react-router-dom";
import { authorized } from "../../redux/authorization/authorization-selectors";

const PrivateRoute = ({ component: Component, authorized, ...routeProps }) => (
  <Route
    {...routeProps}
    render={(props) =>
      authorized ? <Component {...props} /> : <Redirect to="/Login" />
    }
  />
);

const mapStateToProps = (state) => ({
  authorized: authorized(state),
});

export default connect(mapStateToProps)(PrivateRoute);
