import React from "react";

//mapの解
class BigButton extends React.Component {
  render() {
    console.log(this.props);
    return (
      <button
        key={this.props.keyParam} //keyはただ識別するための番号が振ってるだけで、中身があるわけではない
        style={{ 
          width: this.props.bigWidth, 
          backgroundColor: this.props.styleParam,//キーに対して値を入れ込んでる
        }}
      >     
        {this.props.bigText}
      </button>
    );
  }
}
export default BigButton;



/**処理2の流れ
 * 1 BigButton.jsx(親要素)にprppsを定義(値を受け取る)
 * 2 App.jsでpropsに値をセットし、新しく格納する配列を用意する
 * 3 forEachで新しい配列にparamを格納する
 */







// class BigButton extends React.Component {
//   render() {
//     console.log(this.props);


//     return (
//       <button
//         style={{ 
//           width: this.props.bigWidth, //bigWidthというpropsとして使えるように定義
//           backgroundColor: this.props.bigColor,
//         }}
//       >
//         {this.props.bigText}
//       </button>
//     );
//   }
// }

// export default BigButton;

/**処理の流れ 1
 * 1 BigButton.jsx(親要素)にprppsを定義
 * 2 App.jsにて、propsの値を配列に格納し、for文で一つずつ取り出す
 *  2-1 初期処理（bigBottunの配列とpropsの配列を用意する）
 *  2-2 for文を書く
 *  2-3 propsの値を書く
 */

/**処理の流れ 2
 *  * 1 BigButton.jsx(親要素)にstyleのprppsを定義

 */