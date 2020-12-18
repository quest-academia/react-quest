/**
 * 問1. 100001 の型を調べ、consoleで出力してください
 */
console.log(100001);

/**
 * 問2. '10001' の型を調べ、consoleで出力してください
 */
console.log('10001');

/**
 * 問3. verとletの違いを記述してください
 * webで調べても構いません
 */

/**
 * 問3回答欄
 * let はブロックスコープを生成するが、var はブロックスコープを生成しないためバグの原因になる。
 * また変数を定義するよりも前に値を取り出そうとすると、letはエラーが出るが、varでは出ない。
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
 * 問6回答欄
 * varはブロックスコープに囲われているにも関わらず、外部から値を取ることが可能。
 * letはブロックスコープが正常に生成されるため、外部から値を参照できない。
 */
