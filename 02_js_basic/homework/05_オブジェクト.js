/**
 * 問1. targetをconsoleで取得してください
 */
const test1 = {
  sample: ["hoge", "huga"],
  obj: {
    prop: ["target"],
  },
};
console.log(...test1.obj.prop);

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
console.log(...Object.keys(test3.a.b.c.d));

/**
 * 問4. あなたのプロフィールをオブジェクトで表現してください
 */

const yourPro = {
  name: "Takashi Shimazaki",
  age: 30,
  job: "Engineer",
  married: false
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
console.log(test5);
