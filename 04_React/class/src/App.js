import './App.css';
import RedButton from "./components/training/RedButton";
import NumberingButton from "./components/training/NumberingButton";

function App() {
  // 練習問題1
  const buttons = []
  for(let i = 1; i <= 10; i++){
    buttons.push(<NumberingButton buttonParam={i} />);
  }
  return (
    <div className="App">
      <header className="App-header">
        <RedButton buttonParam={"Red button"} />
        {/* 練習問題1 表示 */}
        {buttons}
      </header>
    </div>
  );
}

export default App;
