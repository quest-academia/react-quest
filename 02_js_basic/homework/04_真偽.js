/**
 * 出力結果がどうなるか予想しながら、consoleを表示してください
 */
const string = 'string';
console.log('string: ' + !!string);
// true

const num = 6;
console.log('num: ' + !!num);
// true

const zero = 0;
console.log('zero: ' + !!zero);
// false

const emptyString = '';
console.log('emptyString: ' + !!emptyString);
// false

const nullParam = null;
console.log('nullParam: ' + !!nullParam);
// false

const undefinedParam = undefined;
console.log('undefinedParam: ' + !!undefinedParam);
// false

const emptyObject = {};
console.log('emptyObject: ' + !!emptyObject);
// false
間違えました

const emptyArray = [];
console.log('emptyArray: ' + !!emptyArray);
// true

// 8問中7問正解