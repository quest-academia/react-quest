import './App.css';
import RedButton from "./components/training/RedButton"

function App() {
  //const test = "test Param";
  return (
    <div className="App">
      <header className="App-header">
      <RedButton buttonParam={"aaaa"} />
      <RedButton buttonParam={"bbbb"} />
      <RedButton buttonParam={"cccc"} />
      </header>
    </div>
  );
}

export default App;
