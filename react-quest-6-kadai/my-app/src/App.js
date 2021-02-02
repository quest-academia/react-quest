import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Page1 from "./Page1";
import Page2 from "./Page2";

class App extends React.Component {
  render() {
    const windowWidth = window.innerWidth;
    const component = windowWidth >= 1000 ? <Page1 /> : <Page2 />;
    return (
      <div>
        <Router>
          <Switch>
            <Route path="/">{component}</Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
