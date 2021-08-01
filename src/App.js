import "./App.css";
import { Component } from "react";
import { PhoneBook } from "./Components/PhoneBook";
import Registration from "./Components/Route/Registration";
import Login from "./Components/Route/Login";
import { connect } from "react-redux";
import { getCurrentUser } from "./redux/authorization/authorization-opetations";
import PrivateRoute from "./Components/Route/PrivateRoute";
import PublicRoute from "./Components/Route/PublicRoute";

import Header from "./Components/Header/Header";
import { Switch } from "react-router-dom";
import { loading } from "./redux/authorization/authorization-selectors";
import { Preloader } from "./Components/Preloader/";

class App extends Component {
  componentDidMount() {
    this.props.onGetCurrentUser();
  }

  render() {
    return (
      <>
        <Header />
        {this.props.logger && <Preloader />}
        <Switch>
          <PrivateRoute exact path="/" component={PhoneBook} />

          <PublicRoute
            class
            path="/Registration"
            redirectTo="/"
            restricted
            component={Registration}
          />
          <PublicRoute
            path="/Login"
            redirectTo="/"
            restricted
            component={Login}
          />
        </Switch>
      </>
    );
  }
}

const mapDispatchToProps = {
  onGetCurrentUser: getCurrentUser,
};

const mapStateToProps = (state) => ({
  logger: loading(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
