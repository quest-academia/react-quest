/**
 * 問1. 100001 の型を調べ、consoleで出力してください
 */
// console.log(10001);
//数字として出力

/**
 * 問2. '10001' の型を調べ、consoleで出力してください
 */
// console.log('10001');
//文字として出力
/**
 * 問3. verとletの違いを記述してください
 * webで調べても構いません
 */

/**
 * 問3回答欄
 *var 変数  再宣言・再代入が可能で、古いブラウザでも動く あまり使わないほうがいい
 *let 変数  再宣言は不可、再代入は可能。大体のブラウザで動くが、IE9とかだと動かない。
 */

/**
 * 問4. verとletの違いを、下記コードから読み解いて記載してください
 */

function varCalled() {
  var x = "hoge"; {
    var x = "hogehoge";
  }
  console.log(x);
}
varCalled();



function letCalled() {
  let y = "hoge"; {
    y = "hogehoge";
  }
  console.log(y);
}
letCalled();





/**
 * 問4回答欄
 *varだとfunctionの中でconsole.logすると上書きされるが、
 letだと上書きされなかった。letは再宣言が関数内だとできないが、再代入という形で、y = 〇〇で値は変えれる
 *
 */