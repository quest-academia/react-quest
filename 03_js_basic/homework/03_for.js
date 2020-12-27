/**
 * 問1. 1~10の数字をforを使用して、consoleにて表示してください
 */

 for(let i = 1; i < 11; i++ ){
     console.log(i);
 }


/**
 * 問2. -1~-10の数字をforを使用して、consoleにて表示してください
 */

for(let i = -1; i > -11; i-- ){
    console.log(i);
}

/**
 * 問3. 1~20の数字をforを使用して、2の倍数のみconsoleにて表示してください
 */

for(let i = 1; i < 21; i++ ){
    if(i % 2 === 0){
        console.log(i);
    }
}

/**
 * 問4. for文とは何か、説明してください
 */

/**
 * 問4. 回答欄
 * 同じ処理を指定回数分繰り返すときに使うもの
 * 
 */



/**
 * 問5. for文を使用して、配列test5Arrayの中身を変数で格納し、
 * 変数をconsoleで表示してください
 * 参考: https://maku77.github.io/js/array/loop.html
 */
const test5Array = ['test', 'dummy', 'sample', 'hoge', 'huga'];

for(let i = 0; i < test5Array.length; i++ ){
    console.log(test5Array[i]);
}