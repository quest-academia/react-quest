/**
 * ・使用ケース
 * １つの情報に対して、
 * ため込むだけでなく操作も１つのオブジェクト内で完結させたい時に使用する
 */
class Shiota {
  age = 25;
  name = 'yoshiaki';

  /**
   * 情報に対してアクセスできる関数も記載できる。
   * ただ、保存している情報にアクセスする時はthisを使用する
   * --- thisとは
   * 親のオブジェクトが指定される。
   * 現在はShiotaクラスが該当する
   */
  passOneYear() {
    this.age = this.age + 1;
  }
}
/**
 * クラスを使用する時は、newをして変数の中に格納する。
 * --- new とは
 * クラスを生成するのがnewの役割
 */
const shiotaInfo = new Shiota();

/**
 * Shiotaというオブジェクトの中に、定義した値が入っている。
 * 普通のオブジェクトと違うところは、
 * console表示に参照したクラス名がオブジェクト左に表示されている
 */
// console.log(shiotaInfo);

/**
 * 中身の情報を取り出す時は、
 * 通常のオブジェクトと同じ扱いができる
 */
// console.log(shiotaInfo.age);

/**
 * Classの中身の値を変更する時には、
 * Class内に宣言した関数を使用する
 */
// shiotaInfo.passOneYear();
// console.log('---- after passOneYear()');
// console.log('------ shiotaInfo.age')
// console.log(shiotaInfo.age);

/**
 * クラスは新しく宣言することで
 * 同じクラスを使用していても、互いに影響しない
 * 新しいオブジェクトを作成することができる
 */
// const nextShiota = new Shiota();
// console.log('--- 新しく宣言したnextShiotaのage');
// console.log(nextShiota.age);
// console.log('--- 今まで使用してきた、直前で関数で値を増やしたage')
// console.log(shiotaInfo.age);
