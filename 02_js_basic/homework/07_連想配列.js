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
console.log(test3.map(v => {
  return {
    name: v.name,
    value: Number(v.value) + plus
  }
}));

/**
 * 問4. 連想配列test4内にある
 * valueが変数getNumが含まれるobjectを抽出し、
 * consoleにて表示してください
 * また、filterを使用してください
 */
let getNum =  '2';
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
console.log(test4.filter(v => v.value === getNum));

/**
 * 問5. 連想配列test5内にある
 * valueが変数getNumが含まれるobjectを抽出し、
 * consoleにて表示してください
 * また、findを使用してください
 */
getNum = '1';
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
console.log(test5.find(v => v.value === getNum));

/**
 * 問6. findとfilterの違いを答えてください
 */

/**
 * 問6. 回答欄
 * findは検索する値に対して「最初にヒットした要素」を返します。
 * filter検索する値に対して「全てにヒットした要素」を配列で返します。
 * 
 * 以下、例です。
 */

// 最初にヒットした要素なので2が表示されます
console.log([1, 2, 3, 4, 5].find(v => v % 2 === 0));

// 全てヒットした要素なので[2, 4]が表示されます
console.log([1, 2, 3, 4, 5].filter(v => v % 2 === 0));

/**
 * 問7. mapとfilterの違いを答えてください
 */

/**
 * 問6. 回答欄
 * mapは全ての要素に対して処理を行い新しい配列を作ります。
 * filterは「偶数のみ取り出す」などのテスト関数に合格した要素から新しい配列を返します。
 * 
 * 以下はmapの例です。
 * 「全てに対して」処理を行い新しい配列を作るので、
 * 演算結果である[false, true, false, true, false]が表示されます。
 * filterのようにtrueのもののみ返すということはしません。
 */
console.log([1, 2, 3, 4, 5].map(v => v % 2 === 0));

/**
 * mapの注意点ですが「全てに対して」なので、
 * 以下のようにmapで「フラーハウスからタナー一家の人の名前を抽出する」という処理を作ると
 * ["D.J.", "Steph", undefined]となります。
 * Kimmyにも処理が走り、条件分岐に通らなかった場合の処理がないので、undefinedになります。
 * ["D.J.", "Steph"]としたい場合はfilterを使った方がいいです。
 */
const fullerHouse = [
  {
    name: "D.J.",
    isTannerFamily: true
  },
  {
    name: "Steph",
    isTannerFamily: true
  },
  {
    name: "Kimmy",
    isTannerFamily: false
  },
]
const tannerFamily = fullerHouse.map(v => {
  if(v.isTannerFamily) {
    return v.name;
  }
})
console.log(tannerFamily);

/**
 * 余談ですが、filterと組み合わせるとundefinedがなくなります。
 * undefinedはfalsyなのでフィルタリングされてなくなります。
 */
console.log(tannerFamily.filter(v => v));
