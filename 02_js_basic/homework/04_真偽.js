/**
 * 出力結果がどうなるか予想しながら、consoleを表示してください
 */
const string = 'string';
 console.log('string: ' + !!string);

const num = 6;
 console.log('num: ' + !!num);

const zero = 0;
 console.log('zero: ' + !!zero);

const emptyString = '';
 console.log('emptyString: ' + !!emptyString);

const nullParam = null;
 console.log('nullParam: ' + !!nullParam);

const undefinedParam = undefined;
 console.log('undefinedParam: ' + !!undefinedParam);

const emptyObject = {};
 console.log('emptyObject: ' + !!emptyObject);

const emptyArray = [];
 console.log('emptyArray: ' + !!emptyArray);

const nan = NaN;
 console.log('emptyArray: ' + !!nan);

const calcResult = (0/0);
 console.log('emptyArray: ' + !!calcResult);
/**
* Booleanに型変換されたとき、0, 空文字, null, undefinedがfalse、それ以外が全てtrueとなる
* NaNもfalseになるみたい。
*/
