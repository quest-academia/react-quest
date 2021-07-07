/**
 * 問1. Classとは何か説明してください
 */

/**
 * 問1. 回答欄
 *動作や状態を定義した構造でオブジェクトを作成するためのテンプレート
 「特別な関数」であり、
 関数式と関数宣言を定義することができる
 *
 *
 */



/**
 * 問2. newとは何か説明してください
 */

/**
 * 問2. 回答欄
 *正確にはnew 演算子。
 使用すると、開発者はユーザー定義のオブジェクト型やコンストラクタ関数を持つ組み込み
 オブジェクト型のインスタンスを作成することができる。再度クラスを作れるのが利点
 *
 *
 */



/**
 * 問3. Personクラスを変数に格納し、文字列yourNameをクラスから呼び出してconsoleから表示してください
 */
class Person {
  name = 'yourName';
  age = 'yourAge'
}
const aho = new Person();
console.log(aho)


/**
 * 問4. thisとは何か、説明して下さい
 * 概要と使い方まで記載してください
 */

/**
 * 問4. 回答欄
 *特別な変数で呼び出した場所や方法によって中身が変化しまくるクソだるいやつ
 *classの中で使ったthisはそのclass自身を示す
 使い方は４つある
  関数での呼び出し:グローバルオブジェクトを参照する
 *メソッドでの呼び出し:呼び出し元のオブジェクトを参照する
  コンストラクタでの呼び出し:hisは生成したインスタンスを参照する
  call/applyメソッドの呼び出し:thisが参照するものを説明しますが、これは引数で指定されたオブジェクト、ということ
 */



/**
 * 問5. constructorとは何か、説明してください
 * 概要と使い方まで記載してください
 */

/**
 * 問5. 回答欄
 * class で作成されたオブジェクトの生成と初期化のための特殊なメソッド
 *ES6より前はfunctionで疑似的なクラスを作ったり、newでインスタンスを作っていた。
 *newでオブジェクトを作成することをインスタン化という
 　例：const obj = new A();
 */



/**
 * 問6. 下記を実行してください
 * 1. 新しいクラスTest6を作成してください
 * 2. constructorの中にhogeプロパティを作成し、引数から値を格納する処理を記載ください
 * 3. Test6クラスをnewしたときに、変数に'test param'を格納してください
 * 4. consoleにてconstructorの中にある'test param'を呼び出してください
 */
class Test6 {
  constructor(obj) {
    this.hoge = obj;
  }
}

const test6 = new Test6('test param');

console.log(test6.hoge);
