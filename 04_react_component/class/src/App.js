import './App.css';
import RedButton from './components/RedButton'

function App() {
  const domArray = [];
  for (let i = 1; i <= 10; i += 1) {
    domArray.push(<RedButton buttonParam={i}/>)
  }
  return (
    <div className="App">
      <header className="App-header">
        {domArray}
      </header>
    </div>
  );
}

export default App;
