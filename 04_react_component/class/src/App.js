import './App.css';
import RedButton from './components/training/RedButton';
import BigButton from './components/training/BigButton';

function App() {
  // 練習1 処理
  const domArray = [];
  for (let i=0; i <= 10; i +=1) {
    domArray.push(<RedButton buttonParam={i}/>);
  }

  // 練習2 処理
  const colorArray = ['red','blue','yellow','gray','purple'];
  const domBigButtonArray = [];
  for (let i=0; i < colorArray.length; i++) {
    domBigButtonArray.push(
      <BigButton
        color={colorArray[i]}
        width={'200px'}
        text={'Test'}
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

      </header>
    </div>
  );
}

export default App;
