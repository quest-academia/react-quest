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

const plus = 2;
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

const arraySum = test3.map(element => Number(element.value) + plus);

let i = 0;
arraySum.forEach(element => {
  test3[i].value = String(element);
  i++;
});

console.log(test3);

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

const filterValue = test4.filter(function(element){

  return element.value === getNum;
})

console.log(filterValue);

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

const findValue = test5.find(function(element){
  return element.value === getNum2;
})

console.log(findValue);


/**
 * 問6. findとfilterの違いを答えてください
 */

/**
 * 問6. 回答欄
 * findメソッドは、配列から条件に一致した最初の要素の値を返します。
 * そのため、最初に一致した1つの値しか取得できません。
 *
 * filterメソッドは、配列から条件に一致した要素の値をすべて返します。
 * よって、一致した全ての値を取得可能になります。
 * また、一致した全ての値からなる新しい配列を生成します。
 */

/**
 * 問7. mapとfilterの違いを答えてください
 */

/**
 * 問7. 回答欄
 *
 * filterメソッドは、上記の説明の通り、設定した条件に合うものを配列から全て取り出して、新しい配列を生成します。
 *
 * mapメソッドは、取り出した値を設定した関数にて加工することができ、その加工した値からなる新しい配列を生成します。
 */
