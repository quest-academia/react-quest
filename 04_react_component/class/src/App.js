import './App.css';
import RedButton from './components/training/RedButton';
import BigButton from './components/training/BigButton';
import FlexibleButton from './components/training/FlexibleButton';
import DifficultButton from './components/training/DifficultButton';


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
  for (let i=1; i<=5; i+= 1) {
    let width = i*20;
    domFlexibleButtonArray.push(
      <FlexibleButton
        flexibleWidth={width}
        text={width+'px'}
      />
    )
  }

  // 練習4 処理
  const domDifficultButtonArray = [];

  for (let i=1; i<=13; i+= 1) {
    // 横幅変更処理
    let changeWidth = i*20;

    // 配色処理
    const changeColor = () => {
      if (i % 3 === 0) {

        // 3の倍数の場合赤色
        return 'red';

      } else {

        // それ以外の場合は青色
        return 'blue';
      }
    }

    // 表示処理
    const changeText = () => {
      if (i % 4 === 0) {

        // 4で割り切れる場合は !! を表示
        return '!!'+' (' + i +')';

      } else {

        // それ以外は数字を表示
        return i;
      }
    }

    // ボタン生成処理
    domDifficultButtonArray.push(
      <DifficultButton
        color={changeColor()}
        text={changeText()}
        width={changeWidth}
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

        {/* 練習4 出力 */}
        {domDifficultButtonArray}

      </header>
    </div>
  );
}

export default App;
