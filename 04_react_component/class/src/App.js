import './App.css';
import RedButton from './components/training/RedButton';
import BigButton from './components/training/BigButton';
import FlexibleButton from './components/training/FlexibleButton';

function App() {
  // 練習1 処理
  const domArray = [];
  for (let i=0; i <= 10; i +=1) {
    domArray.push(<RedButton buttonParam={i}/>);
  }

  // 練習2 処理
  const colorArray = ['red','blue','yellow','gray','purple'];
  const domBigButtonArray = [];
  for (let i=0; i < colorArray.length; i+= 1) {
    domBigButtonArray.push(
      <BigButton
        color={colorArray[i]}
        width={'200px'}
        text={'Test'}
      />
    )
  }

  // 練習3 処理
  const domFlexibleButtonArray = [];
  for (let i=20; i<=100; i+= 20) {
    domFlexibleButtonArray.push(
      <FlexibleButton
        flexibleWidth={i}
        text={i+'px'}
      />
    )
  }

  return (
    <div className="App">
      <header className="App-header">
        {/* 練習1 出力 */}
        {domArray}

        {/* 練習2 出力 */}
        {domBigButtonArray}

        {/* 練習3 出力 */}
        {domFlexibleButtonArray}

      </header>
    </div>
  );
}

export default App;
