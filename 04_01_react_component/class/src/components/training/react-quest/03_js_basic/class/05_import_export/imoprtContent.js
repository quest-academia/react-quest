console.log('--- start');
const importFunc = require('./exportContent');

/**
 * オブジェクトでexportされている場合、
 * オブジェクトで格納される
 */
console.log(importFunc);

/**
 * importしたオブジェクトから、該当する関数を実行できる
 */
// importFunc.exportedFunc();

/**
 * exportされていないものは実行できない
 */
// importFunc.noExportFunc();

console.log('--- fin');