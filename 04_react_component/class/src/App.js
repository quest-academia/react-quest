// import logo from './logo.svg';
import './App.css';
import Work01 from './components/training/Work01';
import BigButton from './components/training/BigButton';

function App() {
  const domArray = [];
  for (let i = 1; i <= 10; i++) {
    domArray.push(<Work01 buttonParam={i} />);
  }
  const bigButtonArray = [];
  const colorArray = ['red', 'blue', 'yellow', 'grey', 'purple'];
  for (let i = 1; i <= 5; i++) {
    bigButtonArray.push(
      <BigButton
        buttonWidth="200px"
        buttonParam={'test'}
        buttonColor={colorArray[i - 1]}
      />
    );
  }
  return (
    <div className="App">
      <header className="App-header">
        {domArray}
        {bigButtonArray}
      </header>
    </div>
  );
}

export default App;
