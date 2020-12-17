/**
 * 問1. 100001 の型を調べ、consoleで出力してください
 */
console.log(typeof(100001));

/**
 * 問2. '10001' の型を調べ、consoleで出力してください
 */
console.log(typeof('100001'));

/**
 * 問3. verとletの違いを記述してください
 * webで調べても構いません
 */

/**
 * 問3回答欄
 *varは初期値の設定、再宣言、再代入、が可能。変数のスコープが関数でのスコープの為
 *関数内で定義されている変数であればどこでも利用可能
 *letは初期値の設定、再代入が可能。変数のスコープがブロックスコープの為
 *ブロックの中でしか使用できない
 */

/**
 * 問4. verとletの違いを、下記コードから読み解いて記載してください
 */

function varCalled() {
  var x = "hoge";
  {
    var x = "hogehoge";
  }
}
varCalled();

function letCalled() {
  let y = "hoge";
  {
    let y = "hogehoge";
  }
}
letCalled();

/**
 * 問4回答欄
 *varの場合は変数xの値を出力するとhogehogeと表示されるのに対して
 *letの場合は変数ｙの値を出力するとhogeと表示される
 */
