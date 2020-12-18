/**
 * 問1. 連想配列test1からtargetを取り出して
 * consoleにて表示してください
 */
const test1 = [{
    name: 'target',
    type: 'test',
}, ];

// 問1回答欄
// console.log(test1[0].name);

/**
 * 問2. 連想配列test2から
 * 3番目のオブジェクトを取り出してください
 */
const test2 = [{
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
console.log();

// 問2回答欄
// console.log(test2[2]);
// { name: 'test3', value: '3' }

/**
 * 問3. 連想配列test3内にある
 * value全てを数値にし、変数plusの値を足して
 * 新しい連想配列を作成してください。
 * 作成した連想配列はconsoleで表示をしてください
 */

// const plus = 5;
// const test3 = [{
//         name: 'test1',
//         value: '1',
//     },
//     {
//         name: 'test2',
//         value: '2',
//     },
//     {
//         name: 'test3',
//         value: '3',
//     },
//     {
//         name: 'test4',
//         value: '4',
//     },
// ];
// console.log();

// 問3回答欄
// const test3 = [{
//         name: 'test1',
//         value: 1,
//     },
//     {
//         name: 'test2',
//         value: 2,
//     },
//     {
//         name: 'test3',
//         value: 3,
//     },
//     {
//         name: 'test4',
//         value: 4,
//     },
//     {
//         name: 'plus',
//         value: 5,
//     },
// ];
// console.log(test3);

// [
//     { name: 'test1', value: 1 },
//     { name: 'test2', value: 2 },
//     { name: 'test3', value: 3 },
//     { name: 'test4', value: 4 },
//     { name: 'plus', value: 5 }
// ]

/**
 * 問4. 連想配列test4内にある
 * valueが変数getNumが含まれるobjectを抽出し、
 * consoleにて表示してください
 * また、filterを使用してください
 */
// filterを使ってvalue2を含むobjectを抽出する
// -> test2,test4を抽出する

const getNum4 = '2';
const test4 = [{
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
console.log();

// 問4回答欄
const result = test4.filter(value => value === getNum4);
console.log(result);

/**
 * 問5. 連想配列test5内にある
 * valueが変数getNumが含まれるobjectを抽出し、
 * consoleにて表示してください
 * また、findを使用してください
 */
const getNum5 = '1';
const test5 = [{
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
console.log();

// 問5回答欄
// const result = test5.find(value => value > getNum5);
// console.log(result);
// { name: 'test1', value: '1' }

/**
 * 問6. findとfilterの違いを答えてください
 */

// 問6. 回答欄
// find 配列から条件に一致した最初の値を返す(見つけた時点で終了)
// filter 配列から条件に一致した値をすべて返す
// A. 1つ取り出すか全て取り出すかの違い

/**
 * 問7. mapとfilterの違いを答えてください
 */

// 問7. 回答欄
// map 与えられた関数を配列のすべての要素に対して呼び出し、その結果からなる新しい配列を生成
// filter 配列から条件に一致した値をすべて返す
// A. elementに整形処理や値を変更する処理を加えるかどうか(?)