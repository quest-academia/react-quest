/**
 * 問1. 1~10の数字をforを使用して、consoleにて表示してください
 */

for(let i = 1; i <= 10; i++){
  console.log(i);
}

/**
 * 問2. -1~-10の数字をforを使用して、consoleにて表示してください
 */
for(let i = -1; i >= -10; i--){
  console.log(i);
}


/**
 * 問3. 1~20の数字をforを使用して、2の倍数のみconsoleにて表示してください
 */
for(let i = 1; i <= 20; i++){
  if(i % 2 === 0){
    console.log(i);
  }
}



/**
 * 問4. for文とは何か、説明してください
 */

/**
 * 問4. 回答欄
 * 
 * 必要な回数だけ、繰り返し処理をしてくれる文。
 */



/**
 * 問5. for文を使用して、配列test5Arrayの中身を変数で格納し、
 * 変数をconsoleで表示してください
 * 参考: https://maku77.github.io/js/array/loop.html
 */
const test5Array = ['test', 'dummy', 'sample', 'hoge', 'huga'];

for (const result of test5Array) {
  console.log(result);
}
