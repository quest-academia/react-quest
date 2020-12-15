/**
 * 出力結果がどうなるか予想しながら、consoleを表示してください
 */
const string = 'string';
// console.log('string: ' + !!string);

const num = 6;
// console.log('num: ' + !!num);

const zero = 0;
// console.log('zero: ' + !!zero);

//※falseになる理由0, -0, null, false, NaN, undefined あるいは空文字列 ("") であった場合、オブジェクトは false の初期値を持つから

const emptyString = '';
// console.log('emptyString: ' + !!emptyString);

const nullParam = null;
// console.log('nullParam: ' + !!nullParam);

const undefinedParam = undefined;
// console.log('undefinedParam: ' + !!undefinedParam);

const emptyObject = {};
// console.log('emptyObject: ' + !!emptyObject);

const emptyArray = [];
// console.log('emptyArray: ' + !!emptyArray);
