import './App.css';
import RedButton from './components/training/RedButton'

function App() {
  // const test = 'testParam';
  const domArray = [];
  for (let i=0; i <= 10; i +=1) {
    domArray.push(<RedButton buttonParam={i}/>);
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
