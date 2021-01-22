import React from "react";

class FlexibleButton extends React.Component {
  render() {
    console.log(this.props);

console.log(this.props.flexibleWidth);
    return (
      <button
        style={{ 
          width: this.props.flexibleWidth,
          height: "50px",
          backgroundColor: "blue"
        }}
      >
        <p>Flexible Button</p>
      </button>
    );
  }
}

export default FlexibleButton;
/**問題
 * FlexibleButtonを新しく作成してください
  以下情報をpropsで管理してください
  width
  FlexibleButtonは5つ表示してください
  1つ表示するごとに横幅を20px大きくしてください
  for文を使用してください

 * 処理の流れ
 * 1 propsを作る（width）
 * 新しい配列を作る
 * 2 for文で５つ表示し、widthを20pxずつ大きくする
 */