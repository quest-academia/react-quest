/**
 * 問1. targetをconsoleで取得してください
 */
const test1 = {
  sample: ["hoge", "huga"],
  obj: {
    prop: ["target"],
  },
};
const answer1 = test1.obj.prop[0];
console.log(answer1);

/**
 * 問2. test2からobjectのプロパティを配列で取得してください
 */
const test2 = {
  sample: "test",
  dummy: "value",
};
const answer2 = Object.keys(test2);
console.log(answer2);

/**
 * 問3. test3からtargetをconsoleで表示してください
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
const answer3 = Object.keys(test3.a.b.c.d);
console.log(answer3[0]);

/**
 * 問4. あなたのプロフィールをオブジェクトで表現してください
 */

const yourPro = {
  name: "shuho",
  sex: "men",
  job: "college student",
  hobby: "table tennis",
};
console.log(yourPro);
