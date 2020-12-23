/**
 * 出力結果がどうなるか予想しながら、consoleを表示してください
 */
const string = 'string';
// 予想「string:true」
console.log('string: ' + !!string);

const num = 6;
// 予想「num:true」
console.log('num: ' + !!num);

const zero = 0;
// 予想「zero:false」
console.log('zero: ' + !!zero);

const emptyString = '';
// 予想「emptyString:false」
console.log('emptyString: ' + !!emptyString);

const nullParam = null;
// 予想「nullParam:false」
console.log('nullParam: ' + !!nullParam);

const undefinedParam = undefined;
// 予想「undefinedParam:false」 
console.log('undefinedParam: ' + !!undefinedParam);

const emptyObject = {};
// 予想「emptyObject:false」結果：ture
console.log('emptyObject: ' + !!emptyObject);

const emptyArray = [];
// 予想「emptyArray:false」 結果：ture
console.log('emptyArray: ' + !!emptyArray);
