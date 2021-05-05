import './App.css';
import RedButton from './components/training/RedButton.jsx';
import BigButton from './components/training/BigButton.jsx';
import FlexibleButton from './components/training/FlexibleButton.jsx';
import DifficultButton from './components/training/DifficultButton.jsx';

function App() {
  const domArray = [];
  for (let i = 1; i <= 10; i++) {
    domArray.push(<RedButton buttonParam={i} />);
  }

  const bigButtonArray = [];
  const colorArray = ['red', 'blue', 'yellow', 'grey', 'purple'];
  for (let i = 1; i <= 5; i++) {
    bigButtonArray.push(
      <BigButton
        buttonWidth="200px"
        buttonParam={'Test'}
        buttonColor={colorArray[i - 1]} />
    );
  }

  const FlexibleButtonArray = [];
  for (let i = 1; i <= 5; i++) {
    FlexibleButtonArray.push(
      <FlexibleButton
        buttonWidth={i * 20 + 100}
      />
    );
  }

  const DifficultButtonArray = [];
  for (let i = 1; i <= 13; i++) {
    function difficultButtonColor() {
      if (i % 3 === 0) {
        return 'red';
      } else {
        return 'blue';
      }
    }

    function difficultButtonText(i) {
      if (i % 4 === 0) {
        return i + '!!';
      } else {
        return i;
      }
    }

    DifficultButtonArray.push(
      <DifficultButton
        buttonWidth={i * 20 + 100}
        buttonParam={difficultButtonText(i)}
        buttonColor={difficultButtonColor()}
      />
    );
  }

  return (
    <div className="App">
      <header className="App-header">
        {domArray}
        {bigButtonArray}
        {FlexibleButtonArray}
        {DifficultButtonArray}
      </header>
    </div>
  );
}

export default App;
