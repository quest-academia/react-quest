import './App.css';
import RedButton from './components/training/RedButton.jsx';
import BigButton from './components/training/BigButton.jsx';
import FlexibleButton from './components/training/FlexibleButton.jsx';

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

  return (
    <div className="App">
      <header className="App-header">
        {domArray}
        {bigButtonArray}
        {FlexibleButtonArray}
      </header>
    </div>
  );
}

export default App;
