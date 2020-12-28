import logo from "./logo.svg";
import "./App.css";
import RedButton from "./components/training/RedButton.jsx";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <RedButton buttonParam={"test"} />
        <RedButton buttonParam={"test2"} />
        <RedButton />
        <RedButton />
        <RedButton />
      </header>
    </div>
  );
}

export default App;
