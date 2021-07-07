/**
 * 問1. 宣言されたtest1関数を実行してください
 */
function test1() {
  console.log("----- これが出力されれば成功");
}

test1();

/**
 * 問2. 実行されるtest2関数を宣言してください。関数内ではconsoleで自分のslack名を出力してください
 */

// test2();

/**
 * 問3. 下記test3関数は実行されるかどうか、推測・確認してください
 * 確認後、実行結果に対して、なぜこの実行結果になったのか説明してください
 */
function test3() {
  console.log("====================");
}

test3;
/**
 * 問3. 回答欄
 * test3の後に()がついていないため、関数ではなく変数として認識されてしまっているためtest3()関数は実行されない。
 * また、test3という変数は宣言していないため、undefinedが出力される。
 * test3関数を実行するためには、 test3() とする必要がある。
 */

/**
 * 問4. 下記test4関数の実行結果がconsoleで
 * '引数を入れた実行結果'
 * という文字列が表示されるように引数を入れてください
 */
function test4(arg) {
  console.log(arg);
}

test4('引数を入れた実行結果');

/**
 * 問5. 下記test5関数の引数にデフォルトの値を付与しました。
 * 引数のデフォルト値がどのような動きをするのか、検証の上、説明して下さい
 */
function test5(arg = "default param") {
  console.log(arg);
}

test5();
/**
 * 問5. 回答欄
 * test5関数には arg = "default param" というデフォルト値が与えられているため、関数に引数を入れなかった場合、
 * test5()を実行した場合、"default param" という文字列が出力される。
 * また、test5()関数の中に引数を入れた場合、その引数が出力される。
 */

/**
 * 問6. 下記test6関数の引数に、値ではなく、関数を入れました。
 * 引数に関数を入れた場合、その関数を実行できるのか検証の上、処理の流れを説明して下さい
 */

console.log('---- before test6() declaration ----')
function test6(argFunc) {

  console.log('---- before argFunc() ----')
  argFunc();
  console.log('---- after argFunc() ----')
}
console.log('---- after test6() declaration ----')

console.log('---- before testFunc() declaration ----')
function testFunc() {
  console.log("----- in test func");
}
console.log('---- after testFunc() declaration ----')

console.log('---- before test6(testFunc) ----')
test6(testFunc);
console.log('---- after test6(testFunc) ----')

/**
 * 問6. 回答欄
 * まず、 test6() → testFunc()の順に関数が宣言される。
 * 関数宣言終了後、test6(testFunc)関数の実行が開始され、引数であるtestFuncを元にtestFunc()が実行され、
 * "----- in test func" という文字列が出力され、test6(testFunc)関数の実行を終了する。
 *
 */

/**
 * 問7. 下記test7の計算結果を変数result7に格納してください。
 * 問題文となるコードを変更して回答してください
 */
let result7;
function test7() {
  return 8 + 9;
}

result7 = test7();
// console.log(result7);

/**
 * 問8. 実行された場合、実行結果として2つの引数の数の和が返される関数test8を作成してください。
 * また、この問題は無名関数(即時関数)を使用し、アロー関数として記載してください
 */

let test8 = ((x,y) => {
  return x + y;
});

let result8 = test8(1,2);
console.log(result8);

/**
 * 問9. 無名関数(即時関数)とは何か、説明して下さい
 */

/**
 * 問9. 回答欄
 * 無名関数は、関数名を記述せずに引数や代入に使用する関数のことを言います。
 *
 */

/**
 * 問10. 関数とは何か、説明してください
 */

/**
 * 問10. 回答欄
 *
 * 関数とは、タスクや値計算を実行する処理をひとまとめにしたものです。
 *
 */

/**
 * 問11. 変数とは何か、説明してください
 */

/**
 * 問11. 回答欄
 *
 * 変数とはデータ値を格納する箱のことです。
 * また、変数は値を変更することができます。
 *
 */

/**
 * 問12. 引数とは何か、説明してください
 */

/**
 * 問12. 回答欄
 * 引数とは、関数に渡して処理の中でその値を使うことができるものです。
 *
 */
