import "./App.css";
import RedButton from "./components/RedButton";
import BigButton from "./components/BigButton";
import FlexibleButton from "./components/FlexibleButton";
import DifficultButton from "./components/DifficultButton";
import { COLOR_OBJ } from "./constants/StyleSet";

function App() {
  // RedButtonを配列に格納
  const redButtonArray = [];
  for (let i = 1; i <= 10; i += 1) {
    redButtonArray.push(<RedButton buttonParam = {i} />);
  }

  // BigButtonを配列に格納
  const colorArray = ["red", "blue", "yellow", "gray", "purple"]
  const bigButtonArray = [];
  for (let i in colorArray) {
    bigButtonArray.push(<BigButton backgroundColor = {COLOR_OBJ[colorArray[i]]} width = {"200px"} text = {"Test"}/>);
  }

  // FlexibleButtonを配列に格納
  const flexibleButtonArray = [];
  for (let i = 0; i < 5; i += 1) {
    flexibleButtonArray.push(<FlexibleButton width = {String(i * 20 + 100) + "px"} text = {"Test"}/>);
  }

  // DifficultButtonを配列に格納
  const difficultButtonArray = [];
  for (let i = 1; i <= 10; i += 1) {
    difficultButtonArray.push(<DifficultButton width = {String(i * 20 + 80) + "px"} number = {i}/>);
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className="flex-container">
          <div className="red-button vertically-container">
            <h1>Red</h1>
            {redButtonArray}
          </div>
          <div className="big-button vertically-container">
            <h1>Big</h1>
            {bigButtonArray}
          </div>
          <div className="flexible-button vertically-container">
            <h1>Flexible</h1>
            {flexibleButtonArray}
          </div>
          <div className="difficult-button vertically-container">
            <h1>Difficult</h1>
            {difficultButtonArray}
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
