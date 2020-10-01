import React, { Component } from "react";
import "./styles.css";
import { BrowserRouter as Router, Link } from "react-router-dom";
import Route from "react-router-dom/Route";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="link">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/projects">Project</Link>
              </li>
            </ul>
          </div>
          <Route
            path="/"
            exact
            strict
            render={() => {
              return <h1>You Chose Home</h1>;
            }}
          />

          <Route
            path="/projects"
            exact
            strict
            render={() => {
              return <h1>You Chose Project</h1>;
            }}
          />
        </div>
      </Router>
    );
  }
}

export default App;
