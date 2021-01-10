import "./App.css";
import RedButton from "./components/RedButton";
import BigButton from "./components/BigButton";
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
    bigButtonArray.push(<BigButton backgroundColor = {COLOR_OBJ[colorArray[i]]} width = {String(i * 50 + 100) + "px"} text = {"Test"}/>);
  }
  return (
    <div className="App">
      <header className="App-header">
        <div className="flex-container">
          <div className="red-button vertically-container">
            <h1>RedButton</h1>
            {redButtonArray}
          </div>
          <div className="big-button vertically-container">
            <h1>BigButton</h1>
            {bigButtonArray}
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
