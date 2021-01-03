import logo from "./logo.svg";
import "./App.css";
import RedButton from "./components/training/RedButton.jsx";
import BigButton from "./components/BigButton";

function App() {
  const domArray = [];
  for (let i = 1; i <= 10; i++) {
    domArray.push(<RedButton buttonParam={i} />);
  }
  const buttonStyle = [
    {
      backgroundColor: "red",
      width: 200,
    },
    {
      backgroundColor: "blue",
      width: 200,
    },
    {
      backgroundColor: "yellow",
      width: 200,
    },
    {
      backgroundColor: "gray",
      width: 200,
    },
    {
      backgroundColor: "purple",
      width: 200,
    },
  ];

  const buttonColor = [];
  buttonStyle.forEach((param) => {
    const eachParam = {
      backgroundColor: param.backgroundColor,
      width: param.width,
    };
    buttonColor.push(<BigButton styleParam={eachParam} buttonParam="Test" />);
  });

  return (
    <div className="App">
      <header className="App-header">
        <RedButton buttonParam={"test"} />
        <RedButton buttonParam={"test2"} />
        <RedButton />
        <RedButton />
        <RedButton />
        {/* {domArray} */}
        {buttonColor}
      </header>
    </div>
  );
}

export default App;
