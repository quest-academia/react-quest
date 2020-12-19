/**
 * 問1. 連想配列test1からtargetを取り出して
 * consoleにて表示してください
 */
const test1 = [
  {
    name: "target",
    type: "test",
  },
];
console.log(test1[0].name);

/**
 * 問2. 連想配列test2から
 * 3番目のオブジェクトを取り出してください
 */
const test2 = [
  {
    name: "test1",
    value: "1",
  },
  {
    name: "test2",
    value: "2",
  },
  {
    name: "test3",
    value: "3",
  },
  {
    name: "test4",
    value: "4",
  },
];
console.log(test2[2]);

/**
 * 問3. 連想配列test3内にある
 * value全てを数値にし、変数plusの値を足して
 * 新しい連想配列を作成してください。
 * 作成した連想配列はconsoleで表示をしてください
 */

const plus = 4;
const test3 = [
  {
    name: "test1",
    value: "1",
  },
  {
    name: "test2",
    value: "2",
  },
  {
    name: "test3",
    value: "3",
  },
  {
    name: "test4",
    value: "4",
  },
];

// 最初はこの書き方をしましたが、mapメソッドを使うべきなのか迷い、mapメソッドを残しました。
// let newArray = [];
// test3.forEach((element) => {
//   newArray.push({ name: element.name, value: Number(element.value) + plus });
// });

const newArray = test3.map((element) => Number(element.value) + plus);
newArray.forEach((element) => {
  console.log(element);
});

/**
 * 問4. 連想配列test4内にある
 * valueが変数getNumが含まれるobjectを抽出し、
 * consoleにて表示してください
 * また、filterを使用してください
 */
const getNum = "2";
const test4 = [
  {
    name: "test1",
    value: "1",
  },
  {
    name: "test2",
    value: "2",
  },
  {
    name: "test3",
    value: "3",
  },
  {
    name: "test4",
    value: "2",
  },
];

const filterdValue = test4.filter((x) => {
  if (x.value === getNum) {
    return x;
  }
});

filterdValue.forEach((element) => {
  console.log(element);
});

/**
 * 問5. 連想配列test5内にある
 * valueが変数getNumが含まれるobjectを抽出し、
 * consoleにて表示してください
 * また、findを使用してください
 */
const getNum02 = "1";
const test5 = [
  {
    name: "test1",
    value: "1",
  },
  {
    name: "test2",
    value: "2",
  },
  {
    name: "test3",
    value: "3",
  },
  {
    name: "test4",
    value: "2",
  },
];

const foundValue = test5.find((element) => element.value === getNum02);

console.log(foundValue);

/**
 * 問6. findとfilterの違いを答えてください
 */

/**
 * 問6. 回答欄
 * findメソッドは参照した配列から最初に条件に合った要素の値を返すので、値は配列の要素の値である。
 * filterメソッドは参照した配列から、条件に合ったものから新しい配列を生成するので、値は配列である。
 *
 */

/**
 * 問7. mapとfilterの違いを答えてください
 *
 */

/**
 * 問6. 回答欄
 * mapメソッドは参照した配列の要素の値に対して、変更を加えて新しい配列を生成する。
 * filterメソッドは参照した配列から、条件に合ったものから新しい配列を生成する。
 *
 */
