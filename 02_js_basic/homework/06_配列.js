/**
 * 問1. targetを取り出してconsoleで表示してください
 */
const test1 = ["target", "dummy", "hoge"];
const answer1 = test1[0];
console.log(answer1);

/**
 * 問2. targetを取り出してconsoleで表示してください
 */
const test2 = [
  {
    name: "target",
    props: "test",
  },
];
const answer2 = test2[0].name;
console.log(answer2);

/**
 * 問3. 配列test3より、変数targetParam内の値の要素番号を取り出してconsoleで表示してください
 * また、findIndexメソッドを使用してください
 */
const targetParam = "target";
const test3 = ["test", "value", "target"];
const search = (item) => item === targetParam;
const answer3 = test3.findIndex(search);
console.log(answer3);

/**
 * 問4. 配列test4の中にある要素をconsoleで個別に表示してください
 * また、forEachメソッドを使用してください
 */
const test4 = [1, 2, 3, 4, 5];
const forEachFunc = test4.forEach((num) => console.log(num));

/**
 * 問5. 配列test5に含まれている数字に、
 * 変数targetNum内の値を足し、新しい配列を作成してください
 * また、mapメソッドを使用してください
 */
const targetNum = 4;
const test5 = [4, 5, 2, 7];
let counter = 0;
const copyTest5 = test5.concat();
function pushFunc() {
  copyTest5.push(targetNum);
}
function sumFunc() {
  let sum = 0;
  const Sum = copyTest5.map((num) => {
    sum += num;
    return sum;
  });
  const lastSum = Sum[Sum.length - 1];
  console.log(lastSum);
}
function answer5() {
  pushFunc();
  sumFunc();
}
answer5();

/**
 * 問6. 配列test6に含まれている値より、
 * 変数headParam内の値が文字の最初に含まれている文字列を抽出してください
 * また、filterメソッドを使用してください
 */
const headParam = "ps";
const test6 = ["ps2", "switch", "ps3", "psp", "game cube"];
const filtered = test6.filter((word) => word.indexOf(headParam) !== -1);
console.log(filtered);
