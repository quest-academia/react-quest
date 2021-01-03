import logo from "./logo.svg";
import "./App.css";
import RedButton from "./components/training/RedButton.jsx";
import BigButton from "./components/BigButton";
import FlexibleButton from "./components/FlexibleButton";

function App() {
  const domArray = [];
  const bigButtonArray = [];
  const FlexibleButtonArray = [];
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

  buttonStyle.forEach((param) => {
    const eachParam = {
      backgroundColor: param.backgroundColor,
      width: param.width,
    };
    bigButtonArray.push(
      <BigButton styleParam={eachParam} buttonParam="Test" />
    );
  });
  /**
   * 練習問題第４回
   */
  for (let i = 1; i <= 5; i++) {
    const baseWidth = 50;
    const FlexibleButtonWidth = baseWidth + i * 20;
    FlexibleButtonArray.push(
      <FlexibleButton widthParam={FlexibleButtonWidth} />
    );
  }

  return (
    <div className="App">
      <header className="App-header">
        <RedButton buttonParam={"test"} />
        <RedButton buttonParam={"test2"} />
        <RedButton />
        <RedButton />
        <RedButton />
        {/* {domArray} */}
        {bigButtonArray}
        {FlexibleButtonArray}
      </header>
    </div>
  );
}

export default App;
