import './App.css';
import RedButton from  "./components/training/RedButton";
function App() {
  const redArray = [];
  for(let i = 1; i <= 10; i++){
    redArray.push(<RedButton param = {i} />)
  }
  return (
    <div className="App">
      <header className="App-header">

      {redArray}
      </header>
    </div>
  );
}

export default App;
