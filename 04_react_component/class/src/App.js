import "./App.css";
import RedButton from "./components/training/RedButton.jsx";
import BigButton from "./components/BigButton";
import FlexibleButton from "./components/FlexibleButton";
import DifficultButton from "./components/DifficultButton";

function App() {
  const domArray = [];
  const bigButtonArray = [];
  const FlexibleButtonArray = [];
  const DifficultButtonArray = [];
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
   * 練習問題第3回
   */
  for (let i = 1; i <= 5; i++) {
    const baseWidth = 50;
    const FlexibleButtonWidth = baseWidth + i * 20;
    FlexibleButtonArray.push(
      <FlexibleButton widthParam={FlexibleButtonWidth} />
    );
  }
  /**
   * 練習問題第4回
   */
  for (let i = 1; i <= 13; i++) {
    const baseWidth = 50;
    const DifficultButtonWidth = baseWidth + i * 20;
    let backgroundColorParam = "blue";
    let letterParam = i;
    if (i % 3 === 0) {
      // 背景を赤く
      backgroundColorParam = "red";
    }
    if (i % 4 === 0) {
      // 表示文字に「!!」
      letterParam = "!!";
    }
    DifficultButtonArray.push(
      <DifficultButton
        letterParam={letterParam}
        widthParam={DifficultButtonWidth}
        backgroundColorParam={backgroundColorParam}
      />
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
        {DifficultButtonArray}
      </header>
    </div>
  );
}

export default App;
