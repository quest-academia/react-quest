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
const plus = 150;
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
const result3 = test3.map(obj => {
  obj.value = Number(obj.value) + plus;
  return obj;
});
console.log(result3);

/**
  * 問4. 連想配列test4内にある
  * valueが変数getNumが含まれるobjectを抽出し、
  * consoleにて表示してください
  * また、filterを使用してください
*/
const getNum =  '2';
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
const result4 = test4.filter(obj => obj.value === getNum);
console.log(result4);

/**
 * 問5. 連想配列test5内にある
 * valueが変数getNumが含まれるobjectを抽出し、
 * consoleにて表示してください
 * また、findを使用してください
 */
const getNum2 =  '1';
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
const result5 = test5.find(obj => obj.value === getNum2);
console.log(result5);

/**
 * 問6. findとfilterの違いを答えてください
 */

/**
 * 問6. 回答欄
 * find: オリジナルの配列からfindメソッド内のコールバック関数に該当する最初の要素を返す.
 * 該当がなければundefinedを返す
 * 
 * filter: オリジナルの配列からfileterメソッド内のコールバック関数に該当する(trueを返す)要素を新しい配列で返す
 * 該当がなければ空の配列を返す
 * 
 * 
 */

/**
 * 問7. mapとfilterの違いを答えてください
 */

/**
 * 問7. 回答欄
 * map: オリジナルの配列要素それぞれにmap内のコールバック関数の処理を行った結果を新しい配列で返す
 * 
 * filter: オリジナルの配列からfileterメソッド内のコールバック関数に該当する(trueを返す)要素を新しい配列で返す
  該当がなければ空の配列を返す

 * 
 */
