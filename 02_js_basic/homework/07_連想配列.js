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
const add = 100;
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
const newtest3 = test3.map((Obj) => {
  return {
    name: Obj.name,
    value: Number(Obj.value) + add,
  }
});
 console.log(newtest3);

/**
 * 問4. 連想配列test4内にある
 * valueが変数getNumが含まれるobjectを抽出し、
 * consoleにて表示してください
 * また、filterを使用してください
 */
const getNum = '2';
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

const newTest4 = test4.filter(aho => aho.value === getNum);
console.log(newTest4);


/**
 * 問5. 連想配列test5内にある
 * valueが変数getNumが含まれるobjectを抽出し、
 * consoleにて表示してください
 * また、findを使用してください
 */
const getNum2 = '1';
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
const newTest5 = test5.find((object) => object.value === getNum2);
console.log(newTest5);

/**
 * 問6. findとfilterの違いを答えてください
 */

/**
 * 問6. 回答欄
 *filter:条件に合う要素を抽出する
 *find:条件に合う最初の要素だけを抽出する
 *問５をconst getNum2 = '2';にしたらわかりやすい
 */

/**
 * 問7. mapとfilterの違いを答えてください
 */

/**
 * 問7. 回答欄
 * map:与えられた関数を配列のすべての要素に対して呼び出し、その結果からなる新しい配列を生成する
 * filter:与えられた条件に合格したすべての配列要素なる新しい配列を生成する
 *
 */
