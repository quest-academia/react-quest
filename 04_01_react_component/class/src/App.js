import './App.css';
import DifficultButton from './components/training/DifficultButton';

function App(){
// 配列を作る
const difficultArry = [];

// 2 for文で10個取り出し、配列に格納する
for(let i = 1; i < 11; i++){
//backgroundcolor,width,textの初期処理(forの中で使う変数はforの中に書く)
let resultBackgroundColor = "blue";
const defaultWidth = "50";
let resultWidth = defaultWidth * i + 20 + "px";
let resultText = i;
// 3 if文で条件分岐する
if(i % 3 === 0){
  resultBackgroundColor = "red";
}
if(i % 4 === 0){
  resultText = "!!"
}
//配列に格納する
difficultArry.push(
  <DifficultButton
  difficultWidth = {resultWidth}
  difficultBackgroundColor = {resultBackgroundColor}
  difficultText = {resultText}
  />
);
}

  return( 
  <div> 
    {difficultArry}
  </div> 
  );
}


export default App;

/**問題文
以下情報をpropsで管理してください
width
表示文字
DifficultButtonは13個表示してください
DifficultButtonの背景は青で表示してください
1つ表示するごとに横幅を20px大きくしてください
for文を使用してください
表示文字は1から10までを順番に表示してください
表示文字が3の倍数のとき、背景を赤くしてください
表示文字が4で余りなく割り切れるとき、表示文字に「!!」を表示してください
期待値となる数字を指定してはいけません。計算結果で判断してください
 */



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

/**
 * 練習問題３
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

 */




