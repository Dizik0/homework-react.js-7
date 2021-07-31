import { connect } from "react-redux";
import { Redirect, Route } from "react-router-dom";
import { authorized } from "../../redux/authorization/authorization-selectors";

const PublicRoute = ({
  component: Component,
  authorized,
  redirectTo,
  ...routeProps
}) => (
  <Route
    {...routeProps}
    render={(props) =>
      authorized && routeProps.restricted ? (
        <Redirect to={redirectTo} />
      ) : (
        <Component {...props} />
      )
    }
  />
);

const mapStateToProps = (state) => ({
  authorized: authorized(state),
});

export default connect(mapStateToProps)(PublicRoute);
