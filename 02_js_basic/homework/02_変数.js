/**
 * 問1. 100001 の型を調べ、consoleで出力してください
 */
console.log(typeof 100001);

/**
 * 問2. '10001' の型を調べ、consoleで出力してください
 */
console.log(typeof '100001');

/**
 * 問3. verとletの違いを記述してください
 * webで調べても構いません
 */

/**
 * 問3回答欄
 *varは再宣言ができるが、letは再宣言ができない。
varは関数スコープであるがletはブロックスコープである。
 再宣言とは
var example='@@@@';
var example='11111';
とすること。
関数スコープはどこからでも呼び出せる。ブロックスコープは、{}でくくられた処理のこと。
 *
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
 *varを使った関数では再宣言していても動くが、letでは再宣言できないため、エラーが起こる
 *
 */
