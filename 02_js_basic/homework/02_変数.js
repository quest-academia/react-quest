/**
 * 問1. 100001 の型を調べ、consoleで出力してください
 */

console.log(typeof 100001);

/**
 * 問2. '10001' の型を調べ、consoleで出力してください
 */


 console.log(typeof '10001');

/**
 * 問3. verとletの違いを記述してください
 * webで調べても構いません
 */

/**
 * 問3回答欄
 * letはブロックスコープを持ちます。つまり、ifやforなどの{}のブロック内で変数が有効になります。
 * また、letは再宣言ができません。
 *
 * varはブロックスコープを持たず、{}を抜けたあとでも変数が有効であり続けます。
 * また、varは再宣言が可能です。
 *
 */

/**
 * 問4. verとletの違いを、下記コードから読み解いて記載してください
 */

function varCalled() {
  var x = "hoge";
  console.log(x);
  {
    var x = "hogehoge";
    console.log(x);
  }
  console.log(x);
}
varCalled();

function letCalled() {
  let y = "hoge";
  console.log(y);
  {
    let y = "hogehoge";
    console.log(y);
  }
  console.log(y);
}
letCalled();

/**
 * 問4回答欄
 * varCalled()は var x で変数宣言をしているのでブロックスコープを持ちません。
 * よって{}の内外に関わらず、変数が有効となるため変数xはx = "hoge"から x = "hogehoge" に上書きされます。
 * よって、varCalled()ではx = "hogehoge"が出力されます。
 * 
 * letCalled()は let y で変数宣言をしているのでブロックスコープを持ちます。
 * よって、{}のブロック中では y = "hogehoge" となり、{}のブロック外では y = "hoge" となります。
 * よってletCalled()では y = "hoge"が出力されます。
 */
