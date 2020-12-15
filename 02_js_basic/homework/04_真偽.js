/**
 * 出力結果がどうなるか予想しながら、consoleを表示してください
 */
const string = 'string';
// console.log('string: ' + !!string);
// 文字が「ある」 -> 「肯定」のイメージので、trueだと予想

const num = 6;
// console.log('num: ' + !!num);
// C言語でも、数値は0ならtrue、非0ならfalseだったので、これはtrueだと予想

const zero = 0;
// console.log('zero: ' + !!zero);
// 上に同じで、こちらはfalseだと予想

const emptyString = '';
// console.log('emptyString: ' + !!emptyString);
// 文字が「ない」 -> 「否定」のイメージがあるので、falseだと予想

const nullParam = null;
// console.log('nullParam: ' + !!nullParam);
// nullは”値がない”というニュアンスがあり「否定」のイメージに近いので、falseだと予想

const undefinedParam = undefined;
// console.log('undefinedParam: ' + !!undefinedParam);
// undifinedは"定義されていない"というニュアンスがあり「否定」のイメージに近いので、falseだと予想

const emptyObject = {};
// console.log('emptyObject: ' + !!emptyObject);
// 中身がない -> 「否定」のイメージがあるので、falseだと予想。

const emptyArray = [];
// console.log('emptyArray: ' + !!emptyArray);
// 上に同じで、falseだと予想
