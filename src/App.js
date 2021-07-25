import "./App.css";

import { NavLink, Route, Switch } from "react-router-dom";

import PhoneBook from "./Components/PhoneBook/PhoneBook";

import { Registration } from "./Components/Route/Registration";
import { Login } from "./Components/Route/Login";

/* <PhoneBook />; */

const App = () => {
  return (
    <>
      <ul>
        <li>
          <NavLink to={"/Registration"}>Registration</NavLink>
        </li>
        <li>
          <NavLink to={"/Login"}>sing in</NavLink>
        </li>
      </ul>
      <Switch>
        <Route path="/Registration" component={Registration} />
        <Route path="/Login" component={Login} />
      </Switch>
    </>
  );
};

export default App;
