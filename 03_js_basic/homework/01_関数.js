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
function test2(){
  console.log("nishino-yurie");
}

test2();

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
 *関数を定義しただけで呼び出していないので、出力されません。
 *出力するにはtest();で呼び出してあげないといけません。
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
 *呼び出し元の引数に何もない時、デフォルトの引数が格納され実行されます。
 *
 */

/**
 * 問6. 下記test6関数の引数に、値ではなく、関数を入れました。
 * 引数に関数を入れた場合、その関数を実行できるのか検証の上、処理の流れを説明して下さい
 */
function test6(argFunc) {
  argFunc();
}
function testFunc() {
  console.log("----- in test func");
}
test6(testFunc);

/**
 * 問6. 回答欄
 *実行できる。
 *関数testFuckがtest6の引数（argFunk）として渡されるので可能である。
 */

/**
 * 問7. 下記test8の計算結果を変数result7に格納してください。
 * 問題文となるコードを変更して回答してください
 */
let result7 = test7();
function test7() {
  return 8 + 9;
}
console.log(result7);
/**
 * 問8. 実行された場合、実行結果として2つの引数の数の和が返される関数test8を作成してください。
 * また、この問題は無名関数(即時関数)を使用し、アロー関数として記載してください
 */

((a,b) => {
  console.log(a + b);
})(1,2);


/**
 * 問9. 無名関数(即時関数)とは何か、説明して下さい
 */

/**
 * 問9. 回答欄
 * 定義したと同時に処理が実行される関数
 * 
 */

/**
 * 問10. 関数とは何か、説明してください
 */

/**
 * 問10. 回答欄
 * 処理をまとめてグループにしたもの
 * 
 */

/**
 * 問11. 変数とは何か、説明してください
 */

/**
 * 問11. 回答欄
 * 
 * 値を格納できる物
 */

/**
 * 問12. 引数とは何か、説明してください
 */

/**
 * 問12. 回答欄
 * 関数に渡す値のこと
 * 
 */
