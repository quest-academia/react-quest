import './App.css';
import BigButton from './components/training/BigButton';

//処理2の流れ
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


export default App;

//復習
//1 mapとforEach（連想配列の取り扱い）
//2 変数とオブジェクト
//3 key(識別)書き方

//メモ
//reactはhtml複製し、一気に作って判別できないから個体識別のためにKeyがいる。（forEachとか）




//処理の流れ 1
// function App() {
// //初期処理
// //1. bigButtunの配列（インスタンスみたいにして使える）
//       const bigArray = [];
// //2. propsを格納した配列
//       const bigColor = ['red', 'blue', 'yellow', 'grey', 'purple'];

// //for文でbigButtunを生成
//       for(let i = 1; i <= 5; i++){
//         bigArray.push(
//           <BigButton
//           bigWidth = "60px"
//           bigText = "Test"
//           />
//         )
//       }
//   return (
//     <div className="App">
//       <header className="App-header">
//       {bigArray}
//       </header>
//     </div>
//   );
// }

// export default App;
