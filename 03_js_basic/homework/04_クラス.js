/**
 * 問1. Classとは何か説明してください
 */

/**
 * 問1. 回答欄
 * メソッドやコンストラクタを定義できるもの
 * まとめて使い回せ、内容を引き継げる。
 * 
 *



/**
 * 問2. newとは何か説明してください
 */

/**
 * 問2. 回答欄
 * newは値をセットし、引数としてclassに渡すもの。
 * インスタンスとして扱えるようにする。
 * 
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
 * classに定義されたプロパティを指し示す。
 * ex: this.○○
 * 
 */



/**
 * 問5. constructorとは何か、説明してください
 * 概要と使い方まで記載してください
 */

/**
 * 問5. 回答欄
 * インスタンスを生成し、初期化を明示するもの。
 * class Person {
 *  constructor(){
 *  this.name = 'yourName';
 *  }
  }

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
const result = new Test6("test param");
console.log(result.hoge);