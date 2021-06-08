import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Calc from './components/Calc';
import History from './components/History';

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">電卓機能</Link>
            </li>
            <li>
              <Link to="/history">History</Link>
            </li>
          
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/history">
            <History />
          </Route>
          <Route path="/">
            <Calc />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
