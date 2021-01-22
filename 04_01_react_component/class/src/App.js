import './App.css';
import FlexibleButton from './components/training/FlexibleButton';

function App(){


// 新しい配列を作る
  const flexibleArray = [];
  for(let i = 0; i < 5; i++){
// 2 for文で５つ表示し、widthを20pxずつ大きくする
const calcResult = i * 20 + 50;
const widthNum = `${calcResult}px`

    flexibleArray.push(  <FlexibleButton flexibleWidth={widthNum} />
      )
  }

  return( 
  <div> 
  {flexibleArray}
  </div> 
  );
}


export default App;


//復習
//1 mapとforEach（連想配列の取り扱い）
//2 変数とオブジェクト
//3 key(識別)書き方



//メモ
//reactはhtml複製し、一気に作って判別できないから個体識別のためにKeyがいる。（forEachとか）
//変数に入れてわかりやすく書く
//コンポーネントを返すから、HTMLタグで囲まないといけない（divとか）


/**練習問題２
 //2 App.jsでpropsに値をセットし、新しく格納する配列を用意する
function App() {
//propsに格納する値
  const bigStyle = ["red","blue","yellow","gray","purple",]

//bigStyleを１つずつ渡してあてがう
//格納する配列 
//keyはただ識別するための番号が振ってるだけで、中身があるわけではない
const bigArray = bigStyle.map((param,i)=>{
  
  return <BigButton keyParam={`buttunNun ${i}`} styleParam={param}  bigWidth = "200px" bigText = "Test" />;
  });
    return (
      <div className="App">
        <header className="App-header">
          {bigArray}
        </header>
      </div>
    );
  }
 */





