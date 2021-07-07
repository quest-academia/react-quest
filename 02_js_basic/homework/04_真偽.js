/**
 * 出力結果がどうなるか予想しながら、consoleを表示してください
 */
const string = 'string';
console.log('string: ' + !!string);
//string: true
const num = 6;
console.log('num: ' + !!num);
//num: true
const zero = 0;
console.log('zero: ' + !!zero);
//zero: false
const emptyString = '';
console.log('emptyString: ' + !!emptyString);
//emptyString: false
const nullParam = null;
console.log('nullParam: ' + !!nullParam);
//nullParam: false
const undefinedParam = undefined;
console.log('undefinedParam: ' + !!undefinedParam);
// undefinedParam: false
const emptyObject = {};
console.log('emptyObject: ' + !!emptyObject);
//emptyObject: true
const emptyArray = [];
console.log('emptyArray: ' + !!emptyArray);
// emptyArray: true

//! 0,null, undefined, emptyがfalseを返す