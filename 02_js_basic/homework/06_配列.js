/**
 * 問1. targetを取り出してconsoleで表示してください
 */
const test1 = ['target', 'dummy', 'hoge'];
// console.log();

// 問1回答欄
// console.log(test1[0]);

/**
 * 問2. targetを取り出してconsoleで表示してください
 */
const test2 = [{
    name: 'target',
    props: 'test',
}];
// console.log();

// 問2回答欄
// console.log(test2[0].name);

/**
 * 問3. 配列test3より、変数targetParam内の値の要素番号を取り出してconsoleで表示してください
 * また、findIndexメソッドを使用してください
 */
const targetParam = 'target';
const test3 = ['test', 'value', 'target'];
// console.log();
// 

// 問3回答欄(要素番号は2が返ってくるはず)
// const result = (element) => element === targetParam;
// console.log(test3.findIndex(result));
// 2


/**
 * 問4. 配列test4の中にある要素をconsoleで個別に表示してください
 * また、forEachメソッドを使用してください
 */
const test4 = [1, 2, 3, 4, 5];

// console.log(test4);


// 問4回答欄
// test4.forEach(element => console.log(element));

// 1
// 2
// 3
// 4
// 5

/**
 * 問5. 配列test5に含まれている数字に、
 * 変数targetNum内の値を足し、新しい配列を作成してください
 * また、mapメソッドを使用してください
 */
const targetNum = 4;
const test5 = [4, 5, 2, 7];
console.log();

// 問5回答欄
// const map1 = test5.map(x => x * targetNum);
// console.log(map1);
// [ 16, 20, 8, 28 ]

/**
 * 問6. 配列test6に含まれている値より、
 * 変数headParam内の値が文字の最初に含まれている文字列を抽出してください
 * また、filterメソッドを使用してください
 */
const headParam = 'ps';
const test6 = ['ps2', 'switch', 'ps3', 'psp', 'game cube'];
console.log();

問6回答欄
// const result = (element) => element === headParam;
// console.log(test6.filter(result));
// 解けませんでした...