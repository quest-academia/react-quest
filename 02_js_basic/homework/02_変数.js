/**
 * 問1. 100001 の型を調べ、consoleで出力してください
 */
console.log(typeof 100001);

/**
 * 問2. '10001' の型を調べ、consoleで出力してください
 */
console.log(typeof '100001');

/**
 * 問3. varとletの違いを記述してください
 * webで調べても構いません
 */

/**
 * 問3回答欄
 * varは関数レベルでのスコープのため、
 * ifやforで用いるブロック（中かっこ: {}）を飛び越えて変数代入ができ、また再宣言ができます。
 *
 * 一方でletはブロックレベルのスコープのため、ブロックを飛び越えて使用することはできず、再宣言もできません。
 */

/**
 * 問4. varとletの違いを、下記コードから読み解いて記載してください
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
 * varCalledはvarで変数xを宣言しているのでブロックを無視します。
 * また、再宣言もできるのでブロック内外の変数xは同一のものになります。
 * そのため、最後のconsole.log(x)はブロック内で代入された"hogehoge"が出力されます。
 * 
 * letCalledはletで変数yを宣言しているので、ブロックを無視しません。
 * なので、ブロック内外それぞれの変数yは別物になります。
 * そのため、最後のconsole.log(y)はブロック外で宣言し、初期化された"hoge"が出力されます。
 * 
 * ちなみに、varは宣言された関数ないからならどこからでもアクセスができ、
 * 同じ変数名で宣言できてしまうため、思わないバグを生む可能性があるため近年では非推奨です。
 * 
 * ちなみにちなみに、letとブロックレベルが一緒で再代入できないconstを使って
 * 値の変化を追いかけないようにして可読性を上げる書き方が現在の主流らしいです。
 */
