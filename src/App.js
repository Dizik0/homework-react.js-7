import "./App.css";

import { NavLink, Route, Switch } from "react-router-dom";

import PhoneBook from "./Components/PhoneBook/PhoneBook";

import Registration from "./Components/Route/Registration";
import Login from "./Components/Route/Login";
import Header from "./Components/Header/Header";

/* <PhoneBook />; */

const App = () => {
  return (
    <>
      <Header />
      <ul>
        <li>
          <NavLink to={"/"}>Home</NavLink>
        </li>
      </ul>
      <Switch>
        <Route exact path="/" component={PhoneBook} />
        <Route path="/Registration" component={Registration} />
        <Route path="/Login" component={Login} />
      </Switch>
    </>
  );
};

export default App;
