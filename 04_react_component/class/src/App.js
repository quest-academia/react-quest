import './App.css';
import RedButton from './components/training/RedButton.jsx';

function App() {
  const domArray = [];
  for (let i = 1; i <=10; i+=1) {
     domArray.push(<RedButton param={i} />);
  }
  return (
    <div className="App">
      <header className="App-header">
        {domArray}
        <RedButton />
      </header>
    </div>
  );
}

export default App;
