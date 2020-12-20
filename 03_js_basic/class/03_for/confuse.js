/**
 *　マイナスなど、終了条件も柔軟に変えることができる
 *  毎ループ終了時の処理も変更可能である
 */
// for (let index = 2; index > -10; index += -3) {
//   console.log('3つめのfor文の中');
//   console.log(index);
// }

const testArray = [1, 2, 3, 4, 5];

/**
 * 単純なループ処理は、forEachで書いた方が
 * 記載ミスが少なくて安全である
 */
testArray.forEach((num) => {
  console.log(num);
});
