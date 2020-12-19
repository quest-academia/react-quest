/**
 * 出力結果がどうなるか予想しながら、consoleを表示してください
 */
const string = 'string';
// console.log('string: ' + !!string);
//予想:true 結果:true

const num = 6;
// console.log('num: ' + !!num);
//予想:true 結果:true
const zero = 0;
// console.log('zero: ' + !!zero);
//予想:false 結果:false
const emptyString = '';
// console.log('emptyString: ' + !!emptyString);
//予想:false 結果:false
const nullParam = null;
console.log('nullParam: ' + !!nullParam);
//予想:false 結果:false
const undefinedParam = undefined;
console.log('undefinedParam: ' + !!undefinedParam);
//予想:false 結果:false
const emptyObject = {};
console.log('emptyObject: ' + !!emptyObject);
//予想:false 結果:true
const emptyArray = [];
console.log('emptyArray: ' + !!emptyArray);
//予想:false 結果:true