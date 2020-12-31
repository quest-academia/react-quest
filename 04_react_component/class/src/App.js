import logo from "./logo.svg";
import "./App.css";
import RedButton from "./components/training/RedButton.jsx";

function App() {
  const domArray = [];
  for (let i = 1; i <= 10; i++) {
    domArray.push(<RedButton buttonParam={i} />);
  }
  return (
    <div className="App">
      <header className="App-header">
        <RedButton buttonParam={"test"} />
        <RedButton buttonParam={"test2"} />
        <RedButton />
        <RedButton />
        <RedButton />
        {domArray}
      </header>
    </div>
  );
}

export default App;
