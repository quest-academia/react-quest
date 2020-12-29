import logo from './logo.svg';
import './App.css';
import Work01 from './components/training/Work01';

function App() {
  const domArray = [];
  for (let i = 1; i <= 10; i++) {
    domArray.push(<Work01 buttonParam={i} />);
  }
  return (
    <div className="App">
      <header className="App-header">{domArray}</header>
    </div>
  );
}

export default App;
