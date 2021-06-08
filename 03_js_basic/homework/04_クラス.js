/**
 * 問1. Classとは何か説明してください
 */

/**
 * 問1. 回答欄
 * オブジェクトを生成するための雛形のこと。
 *
 *
 */

/**
 * 問2. newとは何か説明してください
 */

/**
 * 問2. 回答欄
 * インスタンスを作成する役割を担っているもの。
 *
 *
 */

/**
 * 問3. Personクラスを変数に格納し、文字列yourNameをクラスから呼び出してconsoleから表示してください
 */
class Person {
  constructor(name) {
    this.name = name;
  }
}
const people = new Person("yourname");

console.log(people.name);

/**
 * 問4. thisとは何か、説明して下さい
 * 概要と使い方まで記載してください
 */

/**
 * 問4. 回答欄
 * 特別な変数のこと。
 * 関数・メソッドで呼び出されるthisキーワードは、その関数・メソッドをプロパティとして持つオブジェクトへの参照。thisを含む関数がグローバルスコープで呼ばれた場合、thisはグローバルオブジェクトを参照。インスタンスを生成する際にnew演算子を伴ってコンストラクタが呼ばれる時、コンストラクタ内のthisは新たに生成されるインスタンスを参照。
 *
 *
 *
 */

/**
 * 問5. constructorとは何か、説明してください
 * 概要と使い方まで記載してください
 */

/**
 * 問5. 回答欄
 * 定義したクラスからオブジェクトを生成し、初期化する際に実行される特殊な初期化用メソッド。
 *
 *
 */

/**
 * 問6. 下記を実行してください
 * 1. 新しいクラスTest6を作成してください
 * 2. constructorの中にhogeプロパティを作成し、引数から値を格納する処理を記載ください
 * 3. Test6クラスをnewしたときに、変数に'test param'を格納してください
 * 4. consoleにてconstructorの中にある'test param'を呼び出してください
 */

class Test6 {
  constructor(hoge) {
    this.hoge = hoge;
  }
}
const hoge = new Test6("testpaparam");

console.log(hoge.hoge);
