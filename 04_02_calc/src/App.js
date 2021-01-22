import './App.css';
import Calc from './containers/calc';
import CalcLog from './containers/calcLog';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">電卓</Link>
          </li>
          <li>
            <Link to="/calclog">履歴</Link>
          </li>
          
        </ul>

        <hr />

      
        <Switch>
          <Route exact path="/">
            <Calc />
          </Route>
          <Route path="/calclog">
            <CalcLog />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
