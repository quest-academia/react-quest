/**
 * 問1. 1~10の数字をforを使用して、consoleにて表示してください
 */

// for (let i = 1; i <= 10; i++) {
//     console.log(i);
// };

// 問1.回答欄
// 1〜10が表示される

/**
 * 問2. -1~-10の数字をforを使用して、consoleにて表示してください
 */

// for (let i = -1; i >= -10; i--) {
//     console.log(i);
// };

// 問2.回答欄
// -1 〜 -10が表示される

/**
 * 問3. 1~20の数字をforを使用して、2の倍数のみconsoleにて表示してください
 */
// for (let i = 1; i <= 20; i++) {
//     if (i % 2 === 0) console.log(i);
// };


/**
 * 問4. for文とは何か、説明してください
 */

/**
 * 問4. 回答欄
 * 
 * 指定した回数だけ繰り返し処理を行う(ループ処理)
 * 条件式を評価した結果として true が返された場合には for 文のブロック
 * の中の処理を順に実行。 false が返された場合には for 文の次へ処理が移る
 * for ([初期化式]; [条件式]; [加算式])
 */

/**
 * 問5. for文を使用して、配列test5Arrayの中身を変数で格納し、
 * 変数をconsoleで表示してください
 * 参考: https://maku77.github.io/js/array/loop.html
 */
const test5Array = ['test', 'dummy', 'sample', 'hoge', 'huga'];
for (let i = 0; i < test5Array.length; i++) {
    console.log(test5Array[i]);
};

// 問5. 回答欄
// test dummy sample hoge huga

// 備考欄
// for-of の構文を使うほうが一般的？