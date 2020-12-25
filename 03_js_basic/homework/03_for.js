/**
 * 問1. 1~10の数字をforを使用して、consoleにて表示してください
 */

for(let i=1; i<=10; i++) {
  console.log(i);
}




/**
 * 問2. -1~-10の数字をforを使用して、consoleにて表示してください
 */

for(let i=-1; i>=-10; i--) {
  console.log(i);
}


/**
 * 問3. 1~20の数字をforを使用して、2の倍数のみconsoleにて表示してください
 */

for(let i=1; i<=20; i++) {
  if(i %2 === 0) {
    console.log(i);
  }
}



/**
 * 問4. for文とは何か、説明してください
 */

/**
 * 問4. 回答欄
 *
 * for文とは、繰り返し処理を実行するための構文です。
 * また、for文は下記の様な構成がなされます。
 *
 * for ( カウンタ変数定義と初期化 ; 繰り返し回数の指定 ; カウンタ加算幅 ){
 *    // 実際に実行する処理
 * }
 *
 */

/**
 * 問5. for文を使用して、配列test5Arrayの中身を変数で格納し、
 * 変数をconsoleで表示してください
 * 参考: https://maku77.github.io/js/array/loop.html
 */
const test5Array = ['test', 'dummy', 'sample', 'hoge', 'huga'];

for(let i=0; i < test5Array.length; i++) {

  console.log(test5Array[i]);
}