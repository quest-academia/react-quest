import "./App.css";
import RedButton from "./components/training/RedButton";
import BigButton from "./components/training/BigButton";
import FlexibleButton from "./components/training/FlexibleButton";
import DifficultButton from "./components/training/DifficultButton";

// props とは
// 親から子に渡すdata
// 使い方
// 親から見た使い方
// <タグ名 プロパティ名={渡すdata} プロパティ名2={渡すdata}/>
// 例: <RedButton param={i} color={"red"}/>

// 子から見た使い方
// Function Componentの場合
// function 関数名(props) {
//   props.プロパティ名
// }

// Class Componentの場合
// class クラス名 extends React.Component {
//   render() {
//     this.props.プロパティ名
//   }
// }

// for文の使い方
// for (初期値の設定; 繰り返しの条件; 変数をどのように変化させるか) {
//   処理
// }
// 例: 0 ~ 10
// for (let i = 0; i <= 10; i++)
// 例: 100,120,140,160,180
// for (let i = 100; i < 200; i+=20)

function App() {
  const domArray = [];
  for (let i = 1; i <= 10; i += 1) {
    domArray.push(<RedButton param={i} />);
  }

  const flexibleArray = [];
  for (let i = 0; i < 5; i++) {
    // 100,120,140,160,180 数値型
    flexibleArray.push(<FlexibleButton flexible={i} />);
  }

  const difficultArray = [];

  for (let i = 1; i <= 13; i++) {
    difficultArray.push(<DifficultButton difficult={i} />);
  }

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <div>{domArray}</div>
          <div>
            <BigButton Big={{ width: "100px", color: "red" }} title="Test" />
            <BigButton Big={{ width: "100px", color: "blue" }} title="Test" />
            <BigButton Big={{ width: "100px", color: "yelow" }} title="Test" />
            <BigButton Big={{ width: "100px", color: "glay" }} title="Test" />
            <BigButton Big={{ width: "100px", color: "purple" }} title="Test" />
          </div>
          <div>{flexibleArray}</div>
          <div>{difficultArray}</div>
        </div>
      </header>
    </div>
  );
}

export default App;
