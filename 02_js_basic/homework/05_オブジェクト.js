/**
 * 問1. targetをconsoleで取得してください
 */
const test1 = {
    sample: ["hoge", "huga"],
    obj: {
        prop: ["target"],
    },
};
console.log();

// 問1回答欄
console.log(test1.obj.prop);
["target"]

/**
 * 問2. test2からobjectのプロパティを配列で取得してください
 */
const test2 = {
    sample: "test",
    dummy: "value",
};
console.log();

// 問2回答欄
console.log(Object.keys(test2));
// ["sample", "dummy"]

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
console.log();

// 問3回答欄
// console.log(Object.keys(test3.a.b.c.d)[0]);
// target

/**
 * 問4. あなたのプロフィールをオブジェクトで表現してください
 */

// const yourPro = {};
// console.log(yourPro);

// 問4回答
const yourPro = {
    name: "fuku",
    Length: 170,
    Weight: 65,
    hobby: "ゴルフ"
};
console.log(yourPro);