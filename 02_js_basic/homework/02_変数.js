/**
 * 問1. 100001 の型を調べ、consoleで出力してください
 */
console.log(typeof(100001));

/**
 * 問2. '10001' の型を調べ、consoleで出力してください
 */
console.log(typeof('1001'));

/**
 * 問3. verとletの違いを記述してください
 * webで調べても構いません
 */

/**
 * 問3回答欄
 * varでは、再宣言、再代入が可能
 *  var quest = 'OK';
    quest = 'OK';
    var quest = 'OK';

 * letでは、再宣言が禁止。
    var quest = 'OK';
    quest = 'OK';
    var quest = 'NG';
 */

/**
 * 問4. verとletの違いを、下記コードから読み解いて記載してください
 */

function varCalled() {
  var x = "hoge";
  {
    var x = "hogehoge";
  }
  console.log(x);
}
varCalled();

function letCalled() {
  let y = "hoge";
  {
    let y = "hogehoge";
  }
  console.log(y);
}
letCalled();

/**
 * 問4回答欄
 *varCalled();は再代入可能なので、hogehogeが出力される
 *letCalled();は再代入不可なので、hogeが出力される
 */
