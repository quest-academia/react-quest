/**
 * 問1. 連想配列test1からtargetを取り出して
 * consoleにて表示してください
 */
const test1 = [
  {
    name: "target",
    type: "test",
  },
];
console.log(test1[0].name);

/**
 * 問2. 連想配列test2から
 * 3番目のオブジェクトを取り出してください
 */
const test2 = [
  {
    name: "test1",
    value: "1",
  },
  {
    name: "test2",
    value: "2",
  },
  {
    name: "test3",
    value: "3",
  },
  {
    name: "test4",
    value: "4",
  },
];
console.log(test2[2]);

/**
 * 問3. 連想配列test3内にある
 * value全てを数値にし、変数plusの値を足して
 * 新しい連想配列を作成してください。
 * 作成した連想配列はconsoleで表示をしてください
 */
const plus = 5;
const test3 = [
  {
    name: "test1",
    value: "1",
  },
  {
    name: "test2",
    value: "2",
  },
  {
    name: "test3",
    value: "3",
  },
  {
    name: "test4",
    value: "4",
  },
];
console.log(test3.map((obj) => obj = {
  name: obj.name,
  value: Number(obj.value) + plus
}));

/**
 * 問4. 連想配列test4内にある
 * valueが変数getNum4が含まれるobjectを抽出し、
 * consoleにて表示してください
 * また、filterを使用してください
 */
const getNum4 = "2";
const test4 = [
  {
    name: "test1",
    value: "1",
  },
  {
    name: "test2",
    value: "2",
  },
  {
    name: "test3",
    value: "3",
  },
  {
    name: "test4",
    value: "2",
  },
];
console.log(test4.filter((obj) => obj.value === getNum4));

/**
 * 問5. 連想配列test5内にある
 * valueが変数getNum5が含まれるobjectを抽出し、
 * consoleにて表示してください
 * また、findを使用してください
 */
const getNum5 = "1";
const test5 = [
  {
    name: "test1",
    value: "1",
  },
  {
    name: "test2",
    value: "2",
  },
  {
    name: "test3",
    value: "3",
  },
  {
    name: "test4",
    value: "2",
  },
];
console.log(test5.find((obj) => obj.value === getNum5));

/**
 * 問6. findとfilterの違いを答えてください
 */

/**
 * 問6. 回答欄
 * お互いに配列の要素のなかで、条件に合うものを抽出するという点では同じだが、
 * findは「条件にあった最初の要素だけ」
 * filterは「条件にあった全ての要素」を抽出するという点で違う。
 * 
 * また、filterは条件にあったものが何個でも、
 * 配列として戻り値を返すが（条件に合うものが一つもないという場合でも空の配列を返す）
 * findは条件に一致した「配列の中身」を返す（条件に合う要素がなければundefinedを返す）という点でも違いがある。
 */

/**
 * 問7. mapとfilterの違いを答えてください
 */

/**
 * 問7. 回答欄
 * mapは、配列の全ての要素に対して何らかの処理を加えた結果を
 * 新しい配列として返すが、
 * filterは、配列の要素に処理は加えないという違いがある。
 * 
 * また、mapは処理を加えるだけなので配列の要素数が変わることはないが、
 * filterは全ての要素が条件をみたす場合を除けば必ず戻り値の配列の要素数は減る。
 */
