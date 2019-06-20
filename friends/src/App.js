import React, { Component } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink,
  Redirect
} from "react-router-dom";
import Login from "./components/Login";
import Friends from "./components/Friends";
class App extends Component {
  render() {
    const fakeAuth = localStorage.getItem("token");
    const PrivateRoute = ({ component: Component, ...rest }) => (
      <Route
        {...rest}
        render={props =>
          fakeAuth !== null ? (
            <Component {...props} />
          ) : (
            <Redirect to="/login" />
          )
        }
      />
    );
    return (
      <div className="App">
        <Router>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/login">Login</NavLink>

          <Switch>
            <Route path="/" exact render={() => <p>WELCOME</p>} />
            <PrivateRoute component={Friends} path="/friends" />
            <Route path="/login" component={Login} />
            {/* <Route path="/friends" component={Friends}  /> */}
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
