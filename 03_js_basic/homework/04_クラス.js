/**
 * 問1. Classとは何か説明してください
 */

/**
 * 問1. 回答欄
 * オブジェクト指向プログラミングにおいて
 * 設計図のようなものです。
 * プロパティや関数などが定義されています。
 */

/**
 * 問2. newとは何か説明してください
 */

/**
 * 問2. 回答欄
 * クラスをインスタンスとして生成するものです。
 * const val = new class名()のようにすると、
 * valにインスタンスが入ってclassの中の関数やプロパティを使用することができます。
 */

/**
 * 問3. Personクラスを変数に格納し、文字列yourNameをクラスから呼び出してconsoleから表示してください
 */
class Person {
  name = 'yourName';
}
const person = new Person();
console.log(person.name);

/**
 * 問4. thisとは何か、説明して下さい
 * 概要と使い方まで記載してください
 */

/**
 * 問4. 回答欄
 * Classに定義されるプロパティを参照する際に使用します。
 * this.name など。
 * 
 */

/**
 * 問5. constructorとは何か、説明してください
 * 概要と使い方まで記載してください
 */

/**
 * 問5. 回答欄
 * クラスをnewでインスタンスを生成する際に初期値をセットするために使用します。
 * const prof = new Profile("shimazaki", 30);
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
  constructor(hoge){
    this.hoge = hoge;
  }
}
const test6 = new Test6("test param");
console.log(test6.hoge);
 