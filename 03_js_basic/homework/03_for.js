/**
 * 問1. 1~10の数字をforを使用して、consoleにて表示してください
 */
    for(i = 0; i < 10; i++){
        console.log(i + 1);
    }


/**
 * 問2. -1~-10の数字をforを使用して、consoleにて表示してください
 */
    for(i = -1; i > -11; i--){
        console.log(i);
    }


/**
 * 問3. 1~20の数字をforを使用して、2の倍数のみconsoleにて表示してください
 */
    for(i = 1; i < 21; i++){
        i % 2 === 0 ? console.log(i): '';
    }


/**
 * 問4. for文とは何か、説明してください
 */

/**
 * 問4. 回答欄
 * 繰り返し処理の1つ。回数を設定できる
 * ２つの；によって区切られる３つピースによって繰り返しの設定を決める
 * 最初のピース：どこから始めるか
 * ２つめのピース：いつ繰り返しを止めるか（falseを返したら止める）
 * ３つめのピース：ループが1回終了するごとに、最初のピースをどのようにアップデートするか
 * 
 * 
 */



/**
 * 問5. for文を使用して、配列test5Arrayの中身を変数で格納し、
 * 変数をconsoleで表示してください
 * 参考: https://maku77.github.io/js/array/loop.html
 */
const test5Array = ['test', 'dummy', 'sample', 'hoge', 'huga'];
for(i = 0; i < test5Array.length; i++){
    const result5 = test5Array[i];
    console.log(result5);
}
//for...of ver
for (const result5 of test5Array) {
    console.log(result5);
}
