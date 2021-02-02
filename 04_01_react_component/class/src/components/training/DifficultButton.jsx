import React from "react";

class DifficultButton extends React.Component {
  render() {
    console.log(this.props);


    return (
      <button
        style={{ 
          width: this.props.difficultWidth,
          height: "50px",
          backgroundColor: this.props.difficultBackgroundColor,
        }}
      >
      {this.props.difficultText}
      </button>
    );
  }
}

export default DifficultButton;

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

/**処理の流れ
1 親要素にpropsを定義
配列を作る
2 for文で10個取り出し、配列に格納する
3 if文で条件分岐する
 */