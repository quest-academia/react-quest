<<<<<<< HEAD
import './App.css';
import Calc from './containers/calc';
import CalcLog from './containers/calcLog';
import ButtonAppBar from './components/AppBar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <ButtonAppBar />      
      <Switch>
        <Route exact path="/">
          <Calc />
        </Route>
        <Route path="/calclog">
          <CalcLog />
        </Route>
      </Switch>
    </Router>
=======
import "./App.css";
import Calc from './components/calc';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Calc />
      </header>
    </div>
>>>>>>> develop
  );
}

export default App;
