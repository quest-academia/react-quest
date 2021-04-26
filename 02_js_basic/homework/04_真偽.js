/**
 * 出力結果がどうなるか予想しながら、consoleを表示してください
 */
const string = "string";
console.log("string: " + !!string); // -> true
// 文字が「ある」 -> 「肯定」のイメージので、trueだと予想

const num = 6;
console.log("num: " + !!num); // -> true
// C言語でも、数値は0ならtrue、非0ならfalseだったので、これはtrueだと予想

const zero = 0;
console.log("zero: " + !!zero); // -> false
// 上に同じで、こちらはfalseだと予想

const emptyString = "";
console.log("emptyString: " + !!emptyString); // -> false
// 文字が「ない」 -> 「否定」のイメージがあるので、falseだと予想

const nullParam = null;
console.log("nullParam: " + !!nullParam); // -> false
// nullは”値がない”というニュアンスがあり「否定」のイメージに近いので、falseだと予想

const undefinedParam = undefined;
console.log("undefinedParam: " + !!undefinedParam); // -> false
// undifinedは"定義されていない"というニュアンスがあり「否定」のイメージに近いので、falseだと予想

const emptyObject = {};
console.log("emptyObject: " + !!emptyObject); // -> true
// 中身がない -> 「否定」のイメージがあるので、falseだと予想。

const emptyArray = [];
console.log("emptyArray: " + !!emptyArray); // -> true
// 上に同じで、falseだと予想

// 感想
// オブジェクトや配列は空でも、trueになることに驚きました。
// 中身があった場合どうなんだろうと思ったので、確認してみます。

const notEmptyObject = {
  name: "田中勇羽",
  message: "いい点数ください。よろしくおねがします、しおた大先生！",
};
console.log("notEmptyObject: " + !!notEmptyObject); // -> true

const teacherShiota = [
  "イケメン",
  "優しい",
  "褒めるのが上手い",
  "教えるのが上手い",
  "仕事を振るのが上手い",
  "大恩人",
  "たまにお茶目なところも好きです",
  "いつもありがとうございます。"
];
console.log("teacherShiota: " + !!teacherShiota); // -> true

// オブジェクトや配列なら、どんな形でもtruthyなようですね。勉強になりました！