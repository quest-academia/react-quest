/**
 * 問1. 100001 の型を調べ、consoleで出力してください
 */
console.log(typeof(10001));

/**
 * 問2. '10001' の型を調べ、consoleで出力してください
 */
console.log(typeof('10001'));

/**
 * 問3. verとletの違いを記述してください
 * webで調べても構いません
 */

/**
 * 問3回答欄
 * どちらも変数を宣言または任意の値で初期化する文である。
 * var文は関数スコープまたはグローバルスコープの変数を作るのに対し、
 * let文はブロックスコープのローカル変数を作るという違いがある。
 * varは以下のような問題点があるため非推奨とされています。
 * ・グローバルスコープであるので、ブロックの中で定義した変数が外からアクセスできてしまう。
 * ・同じ名前の変数が再定義できてしまう。
 * ・以上のような機能があるため、可読性が下がったり、問題が起こってる部分を推測しにくいなどの問題が起きる可能性がある。
 */

/**
 * 問4. verとletの違いを、下記コードから読み解いて記載してください
 */

function varCalled() {
  console.log(`① x before x = "hoge": ${x}`); // undifined
  var x = "hoge";
  console.log(`② x before block: ${x}`); // hoge
  {
    console.log(`③ x before x = "hogehoge" in block: ${x}`); // hoge
    var x = "hogehoge";
    console.log(`④ x after x = "hogehoge" in block: ${x}`); // hogehoge
  }
  console.log(`⑤ x after block: ${x}`); // hogehoge
}
varCalled();

function letCalled() {
  // console.log(`⑥ y before y = "hoge": ${y}`); -> Error
  let y = "hoge";
  console.log(`⑦ y before block: ${y}`); // hoge
  {
    // console.log(`⑧ y before y = "hogehoge" in block: ${y}`); -> Error
    let y = "hogehoge";
    console.log(`⑨ y after y = "hogehoge" in block: ${y}`); // hogehoge
  }
  console.log(`⑩ y after block: ${y}`); // hoge
}
letCalled();

/**
 * 問4回答欄
 * varとletの違いは大きく分けて以下の二つがあげられる。
 * 
 * ・初期化前にその変数を呼び出した時に、varでは①のようにエラーを出さないが、letは⑥⑧のようにエラーを出すこと。
 * ①のようにvarの方は初期化する前の変数を出力すると、undifinedと出力される。
 * 
 * ・letはブロックスコープなので、⑨と⑩ブロック内のyと外のyがそれぞれ別の値を指しているのに対して、
 * varは関数スコープとして、ブロックを無視して同じ変数として扱われてる。（③や⑤参照）
 */
