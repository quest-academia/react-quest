/**
 * 問1. 100001 の型を調べ、consoleで出力してください
 */
console.log(typeof 100001);

/**
 * 問2. '10001' の型を調べ、consoleで出力してください
 */
console.log(typeof '10001' );

/**
 * 問3. verとletの違いを記述してください
 * webで調べても構いません
 */

/**
 * 問3回答欄
 *varは、再宣言することができる。letは再宣言することができない。
 *var x = "hoge"
 *var x = "hogehoge" <- OK
 *let x = "hoge"
 *let x = "hogehoge" <- NG
 */

/**
 * 問4. verとletの違いを、下記コードから読み解いて記載してください
 */

function varCalled() {
  console.log("==================== start varCalled");
  var x = "hoge";
  console.log(x);
  {
    var x = "hogehoge";
    console.log(x);
  }
  console.log(x);
  console.log("==================== end varCalled");
}
varCalled();

function letCalled() {
  console.log("==================== start letCalled");
  let y = "hoge";
  console.log(y);
  {
    let y = "hogehoge";
    console.log(y);
  }
  console.log(y);
  console.log("==================== end letCalled");
}
letCalled();

/**
 * 問4回答欄
 * "hogehoge"を宣言した後の挙動が異なる。"hogehoge"を宣言したブロックが終わった後のconsole.logメソッドについて、varは"hogehoge"が出力されるのに対し、letは"hoge"が出力される。
 *以上より、varは関数レベルのスコープ、letはブロックレベルのスコープが定義されてある。
 *varは、同じfunction内であればあらゆる場所に渡って共通して変数を利用できる。一方、letの場合は、ブロックの階層が異なるだけで全く別の変数と見なされてしまう。
 */
