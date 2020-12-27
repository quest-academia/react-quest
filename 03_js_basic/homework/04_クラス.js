/**
 * 問1. Classとは何か説明してください
 */

/**
 * 問1. 回答欄
 * プロパティとメソッドをもつ１つの集合体
 * クラスから生成されたオブジェクトはこのプロパティとメソッドをもつ。
 */



/**
 * 問2. newとは何か説明してください
 */

/**
 * 問2. 回答欄
 * クラスを元に新しいオブジェクトを生成するとき、newというキーワードを使う。
 * new クラス名()として新しいオブジェクト（＝インスタンス）を生成する。
 * 
 * 
 */



/**
 * 問3. Personクラスを変数に格納し、文字列yourNameをクラスから呼び出してconsoleから表示してください
 */
class Person {
  name = 'yourName';
}
const myPerson = new Person();
console.log(myPerson.name);

/**
 * 問4. thisとは何か、説明して下さい
 * 概要と使い方まで記載してください
 */

/**
 * 問4. 回答欄
 * オブジェクト内の関数にthisがある場合、このthisはオブジェクトそのものを指す
 * オブジェクト外の関数にthisがある場合、このthisはglobalオブジェクトを指す
 * ex.
 * class Person {
    name = 'calugon';
    sayHi () {
      return `Hi ${this.name}`;
    }
}
myPerson = new Person();
console.log(myPerson.sayHi()); //Hi calugon

 *myPersonで新たなPersonオブジェクトを作り、sayHiメソッドを呼び出すと、this.nameのところで
  このmyPerson自体をさし、myPersonが持ってるプロパティnameにアクセスしている
  （合っているのか・・・）
 */



/**
 * 問5. constructorとは何か、説明してください
 * 概要と使い方まで記載してください
 */

/**
 * 問5. 回答欄
 * 新しいインスタンスを生成する度に、最初に呼ばれるメソッドがconstructor()メソッド。
 * constructor()に引数を設定することで、インスタンス毎にそのプロパティの値を変えられる
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
  constructor (hoge) {
    this.hoge = hoge;
  }
}
myTest = new Test6('test param');
console.log(myTest.hoge);
