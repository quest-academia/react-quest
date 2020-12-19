/**
 * 問1. targetを取り出してconsoleで表示してください
 */
const test1 = ["target", "dummy", "hoge"];
console.log(test1[0]);

/**
 * 問2. targetを取り出してconsoleで表示してください
 */
const test2 = [
  {
    name: "target",
    props: "test",
  },
];
console.log(test2[0].name);

/**
 * 問3. 配列test3より、変数targetParam内の値の要素番号を取り出してconsoleで表示してください
 * また、findIndexメソッドを使用してください
 */
const targetParam = "target";
const test3 = ["test", "value", "target"];

const findTarget = (element) => element === targetParam;
console.log(test3.findIndex(findTarget));

/**
 * 問4. 配列test4の中にある要素をconsoleで個別に表示してください
 * また、forEachメソッドを使用してください
 */
const test4 = [1, 2, 3, 4, 5];
test4.forEach((element) => console.log(element));

/**
 * 問5. 配列test5に含まれている数字に、
 * 変数targetNum内の値を足し、新しい配列を作成してください
 * また、mapメソッドを使用してください
 */
const targetNum = 4;
const test5 = [4, 5, 2, 7];
const addNum = test5.map((x) => x + targetNum);

console.log(addNum);

/**
 * 問6. 配列test6に含まれている値より、
 * 変数headParam内の値が文字の最初に含まれている文字列を抽出してください
 * また、filterメソッドを使用してください
 */
const headParam = "ps";
const test6 = ["ps2", "switch", "ps3", "psp", "game cube"];
const psValue = test6.filter((x) => {
  if (x.indexOf("ps") !== -1) {
    return x;
  }
});
console.log("array:" + psValue);
