/**
 * 問1. 100001 の型を調べ、consoleで出力してください
 */
console.log(typeof(10001));

// 問1回答欄
number

/**
 * 問2. '10001' の型を調べ、consoleで出力してください
 */
console.log(typeof('10001'));

// 問2回答欄
string

/**
 * 問3. varとletの違いを記述してください
 * webで調べても構いません
 */


// 問3回答欄
// var: 関数スコープまたはグローバルスコープの変数を宣言。 また、 再宣言が出来る
// let: ブロックスコープのローカル変数を宣言。 また、 再宣言は出来ない
// スコープ、 再宣言、 ホイスティングに違いがある


/**
 * 問4. varとletの違いを、下記コードから読み解いて記載してください
 */

// function varCalled() {
//     console.log("==================== start varCalled");
//     var x = "hoge";
//     console.log(x); {
//         var x = "hogehoge";
//         console.log(x);
//     }
//     console.log(x);
//     console.log("==================== end varCalled");
// }
// varCalled();

// function letCalled() {
//     console.log("==================== start letCalled");
//     let y = "hoge";
//     console.log(y); {
//         let y = "hogehoge";
//         console.log(y);
//     }
//     console.log(y);
//     console.log("==================== end letCalled");
// }
// letCalled();

// 問4回答欄
スコープの範囲で値が変わる
再宣言できない

varCalled();
hogehoge
letCalled();
hoge