// import logo from './logo.svg';
import './App.css';
import Work01 from './components/training/Work01';
import BigButton from './components/training/BigButton';
import FlexibleButton from './components/training/FlexibleButton';

function App() {
  // 問題01
  const domArray = [];
  for (let i = 1; i <= 10; i++) {
    domArray.push(<Work01 buttonParam={i} />);
  }

  // 問題02
  const bigButtonArray = [];
  const colorArray = ['red', 'blue', 'yellow', 'grey', 'purple'];
  for (let i = 1; i <= 5; i++) {
    bigButtonArray.push(
      <BigButton
        buttonWidth="200px"
        buttonParam="test"
        buttonColor={colorArray[i - 1]}
      />
    );
  }

  // 問題03
  const flexibleButtonArray = [];
  for (let i = 1; i <= 5; i++) {
    flexibleButtonArray.push(<FlexibleButton buttonWidth={i * 20 + 100} />);
  }

  return (
    <div className="App">
      <header className="App-header">
        {domArray}
        {bigButtonArray}
        {flexibleButtonArray}
      </header>
    </div>
  );
}

export default App;
