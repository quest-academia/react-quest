import './App.css';
import RedButton from "./components/training/RedButton";
import NumberingButton from "./components/training/NumberingButton";
import BigButton from "./components/training/BigButton";
import FlexibleButton from "./components/training/FlexibleButton";

function App() {
  // 練習問題1
  const buttons = []
  for(let i = 1; i <= 10; i++){
    buttons.push(<NumberingButton buttonParam={i} />);
  }

  // 練習問題3
  const flexibleButtons = [];
  for(let i = 1; i <= 5; i++){
    flexibleButtons.push(<FlexibleButton width={(i * 20) + "px"} />);
  }

  return (
    <div className="App">
      <header className="App-header">
        <RedButton buttonParam={"Red button"} />
        {/* 練習問題1 表示 */}
        {buttons}

        {/* 練習問題2 表示 */}
        <BigButton text={"Test"} width={"100px"} color={"red"} />
        <BigButton text={"Test"} width={"120px"} color={"blue"} />
        <BigButton text={"Test"} width={"140px"} color={"yellow"} />
        <BigButton text={"Test"} width={"160px"} color={"gray"} />
        <BigButton text={"Test"} width={"180px"} color={"purple"} />

        {/* 練習問題3 表示 */}
        {flexibleButtons}

      </header>
    </div>
  );
}

export default App;
