/**
 * 出力結果がどうなるか予想しながら、consoleを表示してください
 */
const string = 'string';
console.log('==========予想：ture')
console.log('string: ' + !!string);

const num = 6;
console.log('==========予想：ture')
console.log('num: ' + !!num);

const zero = 0;
console.log('==========予想：false')
console.log('zero: ' + !!zero);

const emptyString = '';
console.log('==========予想：false')
 console.log('emptyString: ' + !!emptyString);

const nullParam = null;
console.log('==========予想：false')
console.log('nullParam: ' + !!nullParam);

const undefinedParam = undefined;
console.log('==========予想：false')
 console.log('undefinedParam: ' + !!undefinedParam);

const emptyObject = {};
console.log('==========予想：false')
console.log('emptyObject: ' + !!emptyObject);

const emptyArray = [];
console.log('==========予想：false')
 console.log('emptyArray: ' + !!emptyArray);
