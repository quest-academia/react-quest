/**
 * 問1. 100001 の型を調べ、consoleで出力してください
 */
console.log(typeof 100001);

/**
 * 問2. '10001' の型を調べ、consoleで出力してください
 */
console.log(typeof('10001'));

/**
 * 問3. verとletの違いを記述してください
 * webで調べても構いません
 */

/**
 * 問3回答欄
 *
 *
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
 * letをブロックチェーン{}の中で書くと、{}の中でしか値が参照されず、{}の外には影響しない。
 * varはブロックチェーン{}の影響を受けないため、値が更新される。
 * varを使うと、思わぬところで数字が変更してしまうことがあるのでletを使うべきである。
 *
 *
 */
