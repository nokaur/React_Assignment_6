import React, { Component } from "react";
import "./styles.css";
import { BrowserRouter as Router, Link, NavLink } from "react-router-dom";
import Route from "react-router-dom/Route";

class App extends Component {
  state = {
    Clicked: "Home"
  };
  render() {
    return (
      <Router>
        <div className="App">
          <div>
            <ul>
              <li>
                <NavLink
                  to="/"
                  exact
                  activeStyle={{ backgroundColor: "#db7093" }}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/projects"
                  exact
                  activeStyle={{ backgroundColor: "#db7093" }}
                >
                  Project
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/services"
                  exact
                  activeStyle={{ backgroundColor: "#db7093" }}
                >
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  exact
                  activeStyle={{ backgroundColor: "#db7093" }}
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
          <Route
            path="/"
            exact
            strict
            render={() => {
              return (
                <p>
                  You Chose{" "}
                  <p
                    style={{
                      backgroundColor: "#0FABD2",
                      width: "50px",
                      marginTop: "-19px",
                      marginLeft: "227px"
                    }}
                  >
                    {" "}
                    Home
                  </p>
                </p>
              );
            }}
          />

          <Route
            path="/projects"
            exact
            strict
            render={() => {
              return (
                <p>
                  You Chose{" "}
                  <p
                    style={{
                      backgroundColor: "#0FABD2",
                      width: "50px",
                      marginTop: "-19px",
                      marginLeft: "227px"
                    }}
                  >
                    {" "}
                    Project
                  </p>
                </p>
              );
            }}
          />
          <Route
            path="/services"
            exact
            strict
            render={() => {
              return (
                <p>
                  You Chose{" "}
                  <p
                    style={{
                      backgroundColor: "#0FABD2",
                      width: "60px",
                      marginTop: "-19px",
                      marginLeft: "227px"
                    }}
                  >
                    {" "}
                    Services
                  </p>
                </p>
              );
            }}
          />

          <Route
            path="/contact"
            exact
            strict
            render={() => {
              return (
                <p>
                  You Chose{" "}
                  <p
                    style={{
                      backgroundColor: "#0FABD2",
                      width: "60px",
                      marginTop: "-19px",
                      marginLeft: "227px"
                    }}
                  >
                    {" "}
                    Contact
                  </p>
                </p>
              );
            }}
          />
        </div>
      </Router>
    );
  }
}

export default App;
