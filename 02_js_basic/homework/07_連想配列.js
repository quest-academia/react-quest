/**
 * 問1. 連想配列test1からtargetを取り出して
 * consoleにて表示してください
 */
const test1 = [
  {
    name: 'target',
    type: 'test',
  },
];
console.log(test1[0].name);

/**
 * 問2. 連想配列test2から
 * 3番目のオブジェクトを取り出してください
 */
const test2 = [
  {
    name: 'test1',
    value: '1',
  },
  {
    name: 'test2',
    value: '2',
  },
  {
    name: 'test3',
    value: '3',
  },
  {
    name: 'test4',
    value: '4',
  },
];
console.log(test2[2]);

 /**
  * 問3. 連想配列test3内にある
  * value全てを数値にし、変数plusの値を足して
  * 新しい連想配列を作成してください。
  * 作成した連想配列はconsoleで表示をしてください
  */
 const plus = 2
 const test3 = [
   {
     name: 'test1',
     value: '1',
   },
   {
     name: 'test2',
     value: '2',
   },
   {
     name: 'test3',
     value: '3',
   },
   {
     name: 'test4',
     value: '4',
   },
 ];
 console.log();
 console.log(test3.map((obj)=> obj={
   name: obj.name,
   value: Number(obj.value)+ plus
 }));

 /**
  * 問4. 連想配列test4内にある
  * valueが変数getNumが含まれるobjectを抽出し、
  * consoleにて表示してください
  * また、filterを使用してください
  */
 const getNum =  '2';
 const test4 = [
   {
     name: 'test1',
     value: '1',
   },
   {
     name: 'test2',
     value: '2',
   },
   {
     name: 'test3',
     value: '3',
   },
   {
     name: 'test4',
     value: '2',
   },
 ];
 console.log();
 console.log(test4.filter((obj)=>obj.value === getNum));

 /**
  * 問5. 連想配列test5内にある
  * valueが変数getNumが含まれるobjectを抽出し、
  * consoleにて表示してください
  * また、findを使用してください
  */
 const getNum2 =  '1';
 const test5 = [
   {
     name: 'test1',
     value: '1',
   },
   {
     name: 'test2',
     value: '2',
   },
   {
     name: 'test3',
     value: '3',
   },
   {
     name: 'test4',
     value: '2',
   },
 ];
 console.log();
 console.log(test5.find((obj) => obj.value===getNum2));

 /**
  * 問6. findとfilterの違いを答えてください
  */

 /**
  * 問6. 回答欄
  * findは一つの値しか取得できない
  * filterは条件に合う全ての値を取得できる。
  * 
  */

 /**
  * 問7. mapとfilterの違いを答えてください
  */

 /**
  * 問7. 回答欄
  * mapは配列に処理を加えた値を新しい配列として返す
  * filterは配列の要素に処理は加えない
  * 
  * 
  */
