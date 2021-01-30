/**
 * 問1. 100001 の型を調べ、consoleで出力してください
 */
console.log();
console.log(typeof 100001);

/**
 * 問2. '10001' の型を調べ、consoleで出力してください
 */
console.log();
console.log(typeof '10001');

/**
 * 問3. varとletの違いを記述してください
 * webで調べても構いません
 */

/**
 * 問3回答欄
 *letはifやforのなかで定義された変数はその中でしか使えないが
 *varはifやforの中で定義された変数でも外で使用することができる。
 */

/**
 * 問4. varとletの違いを、下記コードから読み解いて記載してください
 */

function varCalled() {
  console.log('===============var');
  var x = "hoge";
  console.log(x);
  {
    var x = "hogehoge";
    console.log(x);
  }

  console.log(x);
}
varCalled();
console.log('=================let');

function letCalled() {
  let y = "hoge";
  console.log(y);
  {
    let y = "hogehoge";
    console.log(y);
  }
  console.log(y);
  }
letCalled();


/**
 * 問4回答欄
 *varとletのconsole.logで出力した挙動が異なる
 *varはhogehogeが出力するのに対して、letはhogeが出力される
 *varは同じfunction内であれば同じ共通変数として使用できる、letは階層が違うだけで全然別の変数という扱いになる
 */
