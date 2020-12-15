/**
 * 問1. 100001 の型を調べ、consoleで出力してください
 * Ans: number
 */
console.log(typeof 100001);

/**
 * 問2. '10001' の型を調べ、consoleで出力してください
 *  Ans: string
 */
console.log(typeof '10001');

/**
 * 問3. verとletの違いを記述してください
 * webで調べても構いません
 */

/**
 * 問3回答欄
 *var 関数内はどこからでも参照可能
 let ブロック内{}の参照可能
 *
 */

/**
 * 問4. verとletの違いを、下記コードから読み解いて記載してください
 */

function varCalled() {

  console.log('==================== start varCalled');
  var x = 'hoge';
  console.log(x);
  {
    var x = 'hogehoge';
    console.log(x);
  }
  console.log(x);
  console.log('==================== end varCalled');

}
varCalled();

function letCalled() {

  console.log('==================== start letCalled');
  let y = 'hoge';
  console.log(y);
  {
    let y = 'hogehoge';
    console.log(y);
  }
  console.log(y);
  console.log('==================== end letCalled');

}
letCalled();

/**
 * 問4回答欄

 *’hogehoge’を宣言した後の挙動が異なる。’hogehoge’を宣言したブロックが終わった後のconsole.logの結果について、
 varは"hogehoge"が出力されるのに対し、letは"hoge"が出力される。
letは問３でも記載したが、{}の部分のみで参照可能で、varは同じfunction内であればあらゆる場所で変数を利用できるから
上記の結果になるから
 *
 */
