/**
 * 問1. 連想配列test1からtargetを取り出して
 * consoleにて表示してください
 */
const test1 = [
  {
    name: 'target',
    type: 'test',
  },
];
console.log(test1[0].name);

/**
 * 問2. 連想配列test2から
 * 3番目のオブジェクトを取り出してください
 */
const test2 = [
  {
    name: 'test1',
    value: '1',
  },
  {
    name: 'test2',
    value: '2',
  },
  {
    name: 'test3',
    value: '3',
  },
  {
    name: 'test4',
    value: '4',
  },
];
console.log(test2[2]);

/**
 * 問3. 連想配列test3内にある
 * value全てを数値にし、変数plusの値を足して
 * 新しい連想配列を作成してください。
 * 作成した連想配列はconsoleで表示をしてください
 */
const test3 = [
  {
    name: 'test1',
    value: '1',
  },
  {
    name: 'test2',
    value: '2',
  },
  {
    name: 'test3',
    value: '3',
  },
  {
    name: 'test4',
    value: '4',
  },
];
const plus = 2;
const addNum = test3.map((element) => Number(element.value) + plus);
console.log(addNum);

/**
 * 問4. 連想配列test4内にある
 * valueが変数getNumが含まれるobjectを抽出し、
 * consoleにて表示してください
 * また、filterを使用してください
 */
const getNum4 =  '2';
const test4 = [
  {
    name: 'test1',
    value: '1',
  },
  {
    name: 'test2',
    value: '2',
  },
  {
    name: 'test3',
    value: '3',
  },
  {
    name: 'test4',
    value: '2',
  },
];
console.log(test4.filter((element) => element.value === getNum4));

/**
 * 問5. 連想配列test5内にある
 * valueが変数getNumが含まれるobjectを抽出し、
 * consoleにて表示してください
 * また、findを使用してください
 */
const getNum5 =  '1';
const test5 = [
  {
    name: 'test1',
    value: '1',
  },
  {
    name: 'test2',
    value: '2',
  },
  {
    name: 'test3',
    value: '3',
  },
  {
    name: 'test4',
    value: '2',
  },
];
console.log(test5.find((elements) => elements.value === getNum5));

/**
 * 問6. findとfilterの違いを答えてください
 */

/**
 * 問6. 回答欄
 * findは配列から最初に条件に一致した値を返す
 * filterは配列から条件に一致した全ての値を返す
 * 
 */

/**
 * 問7. mapとfilterの違いを答えてください
 */

/**
 * 問6. 回答欄
 * mapは配列の全ての要素を呼び出し、何か関数を実行した新しい結果から新たな配列を作る
 * filterは配列の全ての要素を取り出し比較して、一致した全ての要素から新しい配列を作る
 * 
 * 
 */
