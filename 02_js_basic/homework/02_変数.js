/**
 * 問1. 100001 の型を調べ、consoleで出力してください
 */
console.log(typeof 10001);

/**
 * 問2. '10001' の型を調べ、consoleで出力してください
 */
console.log(typeof '10001');

/**
 * 問3. verとletの違いを記述してください
 * webで調べても構いません
 */

/**
 * 問3回答欄
  varもletも可変変数。変数の値を変えることができる。
  varはES6前に使用されており、変数宣言の際はvarのみを使用。ES6以降はletとconstを使用。
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
  return x;
}
console.log(varCalled());
//hogehoge

function letCalled() {
  let y = "hoge";
  {
    let y = "hogehoge";
  }
  return y;
}
console.log(letCalled());
//hoge
/**
 * 問4回答欄
 *varの場合：関数内で変数の値を変えると、関数を呼び出した時に変更後の値が変数に入っている
  letの場合：関数内で変数の値を変えても、関数を呼び出した時には変更前の値が変数に入っている（関数内で変数の値を変更しても、外からはそれが見えない、反映されない）
 *
 */
