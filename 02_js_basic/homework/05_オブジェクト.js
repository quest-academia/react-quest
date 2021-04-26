/**
 * 問1. targetをconsoleで取得してください
 */
const test1 = {
  sample: ["hoge", "huga"],
  obj: {
    prop: ["target"],
  },
};
console.log(test1.obj.prop[0]);

/**
 * 問2. test2からobjectのプロパティを配列で取得してください
 */
const test2 = {
  sample: "test",
  dummy: "value",
};
console.log(Object.keys(test2));

/**
 * 問3. test3からtargetをconsoleで表示してください
 * なお、文字列型で出力してください
 */
const test3 = {
  a: {
    b: {
      c: {
        d: {
          target: "test",
        },
      },
    },
  },
};
console.log(Object.keys(test3.a.b.c.d)[0]);

/**
 * 問4. あなたのプロフィールをオブジェクトで表現してください
 */

const yourPro = {
  name: "田中勇羽",
  hobby: "カラオケ",
  age: 21,
  twitterId: "@Engineer1up",
  favoriteFood: ["焼肉", "たこ焼き", "インドカレー", "銀杏"],
  favoriteSinger: ["King Gnu", "藤井風", "GReeeeN", "BIGBANG"],
  canUseProgramingLanguage: [
    "HTML",
    "CSS",
    "JavaScript",
    "Vue",
    "Node.js",
    "MySQL",
    "C",
    "Java",
    "C++",
  ],
};
console.log(yourPro);

/**
 * 問5. test5オブジェクトのsampleに紐づく値'test'の
 * 値を'react-quest'に変更してください
 */
const test5 = {
  sample: "test",
};
test5.sample = "react-quest";
console.log(test5.sample);
