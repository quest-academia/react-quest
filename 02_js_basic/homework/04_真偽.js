/**
 * 出力結果がどうなるか予想しながら、consoleを表示してください
 */

// truthy
const string = 'string';
console.log('string: ' + !!string);

// truthy
const num = 6;
console.log('num: ' + !!num);

// falsy
const zero = 0;
console.log('zero: ' + !!zero);

// falsy
const emptyString = '';
console.log('emptyString: ' + !!emptyString);

// falsy
const nullParam = null;
console.log('nullParam: ' + !!nullParam);

// falsy
const undefinedParam = undefined;
console.log('undefinedParam: ' + !!undefinedParam);

// truthy(オブジェクトが"ある"っていう判定)
//「空配列はfalse」という判定がしたい場合はObject.keys()とlength使う
const emptyObject = {};
console.log('emptyObject: ' + !!emptyObject);

// truthy(配列が"ある"っていう判定。
// 「空配列はfalse」という判定がしたい場合はlength使う
const emptyArray = [];
console.log('emptyArray: ' + !!emptyArray);
