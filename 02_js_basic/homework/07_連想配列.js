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
console.log(Object.values(test2[2]));


/**
 * 問3. 連想配列test3内にある
 * value全てを数値にし、変数plusの値を足して
 * 新しい連想配列を作成してください。
 * 作成した連想配列はconsoleで表示をしてください
 */
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
const getValue=Object.values(test3);
console.log(getValue);

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
const filterItems = test4.filter((value)=>{
return value===getNum;
});
console.log(filterItems);

/**
 * 問5. 連想配列test5内にある
 * valueが変数getNumが含まれるobjectを抽出し、
 * consoleにて表示してください
 * また、findを使用してください
 */
const getNum1 = "1";
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
const findItems = test5.find((value)=>{
return value===getNum;
});
console.log(findItems);

/**
 * 問6. findとfilterの違いを答えてください
 */

/**
 * 問6. 回答欄
 * findは、配列から条件に一致した値をすべて返す。filterは、配列から条件に一致した最初の値を返す。
 *
 *
 */

/**
 * 問7. mapとfilterの違いを答えてください
 */

/**
 * 問6. 回答欄
 * filterは配列の中から条件に合うものを抽出する。
mapは配列の各要素に対して関数を呼び出しその結果から新しい配列を作成する。
 * 

 */
