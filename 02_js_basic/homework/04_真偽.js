/**
 * 出力結果がどうなるか予想しながら、consoleを表示してください
 */

const string = 'string';
console.log('string: ' + !!string);
// string の反転の反転（true）かどうか検索してる(三項演算子)
//参考: https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators/Logical_NOT

const num = 6;
console.log('num: ' + !!num);

const zero = 0;
console.log('zero: ' + !!zero);

const emptyString = '';
console.log('emptyString: ' + !!emptyString);

const nullParam = null;
console.log('nullParam: ' + !!nullParam);
//nullはnullという値が入っているのでtrue
//console.log(nullParam); nullが格納されてる

const undefinedParam = undefined;
console.log('undefinedParam: ' + !!undefinedParam);

const emptyObject = {};
console.log('emptyObject: ' + !!emptyObject);
//undifinedはfalseになる（変数を宣言し、値を代入する前の状態は空）
//console.log(emptyObject); 空のオブジェクト{}

const emptyArray = [];
console.log('emptyArray: ' + !!emptyArray);
