/**
 * 問1. 1~10の数字をforを使用して、consoleにて表示してください
 */

for (let aho = 1; aho < 11; aho++) {
  console.log(aho);
}

/**
 * 問2. -1~-10の数字をforを使用して、consoleにて表示してください
 */
for (let boke = -1; boke > -11; boke--) {
  console.log(boke);
}

/**
 * 問3. 1~20の数字をforを使用して、2の倍数のみconsoleにて表示してください
 */
for (let kasu = 1; kasu < 21; kasu++) {
  if (kasu % 2 === 0) {
    console.log(kasu);
  }
}

/**
 * 問4. for文とは何か、説明してください
 */

/**
 * 問4. 回答欄
 *ループする文で指定された条件が false と評価されるまで繰り返される文で
　似たようなやつでwhileがあるがこいつは条件が true に評価される限り文を実行
 するやっかいなので基本的にはwhileは使わない
 でも、結局JSはforEachかmapなのかな？？
 *
 */

/**
 * 問5. for文を使用して、配列test5Arrayの中身を変数で格納し、
 * 変数をconsoleで表示してください
 * 参考: https://maku77.github.io/js/array/loop.html
 */
const test5Array = ['test', 'dummy', 'sample', 'hoge', 'huga'];

// for (const unnko of test5Array) {
//   console.log(unnko);
// }
