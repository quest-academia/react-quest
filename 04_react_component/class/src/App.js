import './App.css';
import RedButton from './components/training/RedButton';
import BigButton from './components/training/BigButton';
import FlexibleButton from './components/training/FlexibleButton';
import DifficultButton from './components/training/DifficultButton';

function App() {
  //練習問題1
  const array = [];
  for (let i = 1; i <= 10; i++) {
    array.push(<RedButton buttonParam={i} />);
  }
  
  return (
    <div className="App">
      <header className="App-header">
        {array}

        {/*  練習問題２ */ }
        <BigButton color={"#ff0000"} width={"150px"} text={"Test"} />
        <BigButton color={"#0000ff"} width={"150px"} text={"Test"} />
        <BigButton color={"#ffff00"} width={"150px"} text={"Test"} />
        <BigButton color={"#808080"} width={"150px"} text={"Test"} />
        <BigButton color={"#800080"} width={"150px"} text={"Test"} />
      
        {/* 練習問題３ */}
        <FlexibleButton width={100} text={"練習問題３"} />

        {/* 練習問題４ */}
        <DifficultButton width={120} text={1} />
      </header>
    </div>
  );
}

export default App;
