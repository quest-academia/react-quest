/**
 * 問1. targetをconsoleで取得してください
 */
const test1 = {
  sample: ["hoge", "huga"],
  obj: {
    prop: ["target"],
  },
};
console.log(test1["obj"]["prop"][0]);

/**
 * 問2. test2からobjectのプロパティを配列で取得してください
 */
const test2 = {
  sample: "test",
  dummy: "value",
};
console.log(Object.values(test2));

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
console.log(Object.keys(test3.a.b.c.d)[0]);

/**
 * 問4. あなたのプロフィールをオブジェクトで表現してください
 */

const yourPro = {
  favorite: {
    animal: {
      bird: "Penguin",
      fish: "Marlin",
    },
    drink: "coke",
    equation: "Navier–Stokes equations",
  },
  age: 28,
};
console.log(yourPro);
