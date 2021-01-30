/**
 * 問1. Classとは何か説明してください
 */

/**
 * 問1. 回答欄
 * オブジェクトを作成する設計書のようなもの
 * 
 * 
 */



/**
 * 問2. newとは何か説明してください
 */

/**
 * 問2. 回答欄
 * クラスからインスタンス(オブジェクト)を作成すること
 * 
 * 
 */



/**
 * 問3. Personクラスを変数に格納し、文字列yourNameをクラスから呼び出してconsoleから表示してください
 */
class Person {
  name = 'yourName';
}

const person = new Person;

console.log(person.name);



/**
 * 問4. thisとは何か、説明して下さい
 * 概要と使い方まで記載してください
 */

/**
 * 問4. 回答欄
 * 自身のクラスを指すもの
 * 自身のクラスで定義した変数を指定したい時に、「this.変数」の形で使用する
 * 
 */



/**
 * 問5. constructorとは何か、説明してください
 * 概要と使い方まで記載してください
 */

/**
 * 問5. 回答欄
 * クラスをインスタンス化した時に定義される
 * インスタンス化したときに必ず定義されるものや実行されるものに関してコンストラクタに記述しておく
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
   constructor(value) {
     this.hoge = value;
   }
 }

 const test6 = new Test6('test param');
 console.log(test6.hoge);
 
 