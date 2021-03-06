// Lecture: let and const

// ES5
// var name5 = "Jane Smith";
// var age5 = 23;
// name5 = "Jane Miller";
// console.log(name5);

// // ES6
// const name6 = "Jane Smith";
// let age6 = 23;
// name6 = "Jane Miller"
// console.log(name6);

// ES5
// function driversLicence5(passedTest) {
//     if (passedTest) {
//         var firstName = "John";
//         var yearOfBirth = 1990;

//     }
//     console.log(firstName + ", born in " + yearOfBirth + "is now officially allowed to drive a car.");

// }

// driversLicence5(true);

// // ES6

// function driversLicence6(passedTest) {
//     let firstName;
//     const yearOfBirth = 1990;

//     if (passedTest) {
//         firstName = "John";

//     }
//     console.log(firstName + ", born in " + yearOfBirth + ", is now officially allowed to drive a car.");

// }

// driversLicence6(true);

// let i = 23;

// for (let i = 0; i < 5; i++) {
//     console.log(i);
// };

// console.log(i);

// varだと最後のconsole.logでは5が表示されるletだと23が表示される
// それはletがブロックスコープだからfor文のブロックが完了していればそれ以降には影響しないということ

///////////////////////////////////////
// Lecture: Blocks and IIFEs

// //ES6
// {
//     const a = 1;
//     let b = 2;
//     var c = 3;
// }
// //constとletはブロックスコープなのでブロック外からは参照ができない
// // console.log(a + b);
// console.log(c);
// //varは確認できる
// // ES5 即時関数の書き方 .なぜなら即時関数も外部から参照できないから
// (function () {
//     var c = 3;
// })();

// // console.log(c);

////////////
//Lecture: Strings

// let firstName = "John";
// let lastName = "Smith";
// const yearOfBirth = 1990;

// function calcAge(year) {
//     return 2019 - year;
// };

// // ES5
// console.log("This is " + firstName + " " + lastName + ". He was born in " + yearOfBirth + ". Today, he is " + calcAge(yearOfBirth) + " years old.");

// // ES6
// console.log(`This is ${firstName} ${lastName}. He was born in ${yearOfBirth}. Today he is ${calcAge(yearOfBirth)}`);

// const n = `${firstName} ${lastName}`;
// //startWith(searchString[,position])文字列の始端と一致するか判定する
// //positionの位置に数字を入れるとstart位置を指定できる。デフォは0
// // endsWithは検索文字で文字列が終了していればtrue。そうでなければfalse
// // includes は文字列が含まれてればtrueを返す
// console.log(n.startsWith("J"));
// console.log(n.endsWith("Sm"));
// console.log(n.includes("oh"));
// //repeatは同一動作を引数の回数だけ行う
// console.log(`${firstName} `.repeat(5));

////////////////////////////////
// Lecture: Arrow functions

// const years = [1990, 1965, 1982, 1937];

// //ES5
// var ages5 = years.map(function (el) {
//     return 2019 - el;
// });

// console.log(ages5);

// //ES6
// let ages6 = years.map(el => 2019 - el);
// console.log(ages6);

// ages6 = years.map((el, index) => `Age element ${index + 1}: ${2019 - el}.`);
// console.log(ages6);

// ages6 = years.map((el, index) => {
//     const now = new Date().getFullYear();
//     const age = now - el;
//     return `Age element ${index + 1}: ${age}.`
// });

// console.log(ages6);

//すべて同じ結果が返ってきます。

////////////////////////////
// Lecture: Arrow functions 2

//ES5
// d
//arrow functionを使うとthisがもっとわかりやすい使い方になる
// box6.clickMe();

// var box6a = {
//     color: "green",
//     position: 1,
//     clickMe: () => {
//         //ここでselfを定義しておかないとthisを使ったときにwindowオブジェクトを参照しに行ってしまうので定義しておく
//         document.querySelector(".green").addEventListener("click", () => {
//             var str = "This is box number " + this.position + " add it is " + this.color;
//             alert(str);
//         });
//     }
// }
// //メソッド定義もarrowにするとthisがグローバルオブジェクトを参照してしまう
// //arrow functionを使うとthisがもっとわかりやすい使い方になる
// box6a.clickMe();

// function Person(name) {
//     this.name = name;
// }

// //ES5
// Person.prototype.myFriends5 =
//     function (friends) {

//         var arr = friends.map(function (el) {
//             return this.name + " is friends with " + el;
//         }.bind(this));

//         console.log(arr);
//     }

// var friends = ["Bob", "Jane", "Mark"];

// new Person("John").myFriends5(friends);

// //ES6
// Person.prototype.myFriends6 =
//     function (friends) {

//         var arr = friends.map(el =>
//             `${this.name} is friends with ${el}`);

//         console.log(arr);
//     }

// new Person("Mike").myFriends5(friends);
/////////////////////////
// Destructuring　分割代入

// //ES5
// var john = ["John", 26];
// // var name = john[0];
// // var age = john[1];

// //ES6
// const [name, age] = ["John", 26];
// console.log(name);
// console.log(age);

// const obj = {
//     firstName: "John",
//     lastName: "Smith"
// };

// const {
//     firstName,
//     lastName
// } = obj;
// console.log(firstName);
// console.log(lastName);

// const {
//     firstName: a,
//     lastName: b
// } = obj;

// console.log(a);
// console.log(b);

// function calcAgeRetirement(year) {
//     const age = new Date().getFullYear - year;
//     return [age, 65 - age];
// };

// const [age2, retirement] = calcAgeRetirement(1990);
// console.log(age2);
// console.log(retirement);

//////////////////
// Lecture: Arrays

// const boxes = document.querySelectorAll(".box");
// //querySelectorAllはnodeListを返す

// //ES5
// // //nodeListではforEachが使えなかったのでsliceしてcallする
// // //sliceは配列をコピーする,callは引数のオブジェクトがcall前のオブジェクトのメソッドを使うのに呼ぶ
// var boxesArr5 = Array.prototype.slice.call(boxes);
// // boxesArr5.forEach(function (cur) {
// //     cur.style.backgroundColor = "dodgerblue";
// // });

// // //ES6
// const boxesArr6 = Array.from(boxes);
// Array.from(boxes).forEach(cur => cur.style.backgroundColor = "dodgerblue");

// //ES5
// // for (var i = 0, len = boxesArr5.length; i < len; i++) {

// //     if (boxesArr5[i].className === "box blue") {
// //         continue;
// //     }

// //     boxesArr5[i].textContent = "I changed to blue!";

// // }

// //ES6
// for (const cur of boxesArr6) {
//     if (cur.className.includes("blue")) {
//         continue;
//     }
//     cur.textContent = "I changed to blue!!!";
// }

// // ES5
// var ages = [12, 17, 8, 21, 14, 11];

// var full = ages.map(function (cur) {
//     return cur >= 18;
// });
// console.log(full);

// //fullの配列の中でtrueなのは何番目か持ってくる
// console.log(full.indexOf(true));
// //age[i] i=full.indexOf(true)みたいな感じかな
// //mapで真偽値だして同じ長さの配列を作るからageの番号と真偽の番号が一致する
// console.log(ages[full.indexOf(true)]);

// //ES6
// //ES6だとfindIndexを使って検索してくるのと、findを使って条件分を満たす値を返すようにする
// console.log(ages.findIndex(cur => cur >= 18));
// console.log(age.find(cur => cur >= 18));

//////////////////////////////
// Lecture: Spread operator

// function addFourAges(a, b, c, d) {
//     return a + b + c + d;
// };

// var sum1 = addFourAges(18, 30, 12, 21);
// console.log(sum1);

// //ES5
// var ages = [18, 30, 12, 21];
// //.applyはメソッドを拝借する時に使う。第一引数に使いたいobj名、第二引数にメソッドに使う引数を指定する。applyは引数に配列を使える
// var sum2 = addFourAges.apply(null, ages);
// console.log(sum2);

// //ES6 スプレッド構文

// const sum3 = addFourAges(...ages);
// console.log(sum3);

// const familySmith = ["John", "Jane", "Mark"];
// const familyMiller = ["Mary", "Bob", "Ann"];
// const bigFamily = [...familySmith, "Lily", ...familyMiller];

// const h = document.querySelector("h1");
// const boxes = document.querySelectorAll(".box");
// const all = [h, ...boxes];

// // Array.from(all).forEach(cur => cur.style.color = "purple");

// ///////////////////////////////////
// // Lecture: Rest parameters

// //ES5
// function isFullAge5() {
//     // console.log(arguments);
//     var argsArr = Array.prototype.slice.call(arguments);

//     argsArr.forEach(function (cur) {
//         console.log((2019 - cur) >= 18);
//     })
// }
// //引数を表示させてみると中身は配列のように表示されているけど配列ではない
// //そのを示すのが__proto__がObjectsになっているから
// //Array構造のような感じだけど実は違う
// //もしArrayとして使いたいのなら

// // isFullAge5(1990, 1999, 1965);
// // isFullAge5(1990, 1999, 1965, 2016, 1987);

// //ES6
// //rest prametersを使うことで引数を配列として扱うことができる
// //通常の引数は配列に見えるだけで違うのでforEachを使うのに手間がかかったけどこれなら大丈夫になる
// function isFullAge6(...years) {
//     // console.log(years);
//     years.forEach(cur => console.log((2019 - cur) >= 18));
// }

// // isFullAge6(1990, 1999, 1965);

// //spreadとrest parametersの違いは？restの方は関数の宣言の時に使う
// //spreadは関数実行の時に使う

// function isFullAge5(limit) {
//     // console.log(arguments);
//     //第二引数で指定した位置からコピーが始まる
//     var argsArr = Array.prototype.slice.call(arguments, 1);

//     argsArr.forEach(function (cur) {
//         console.log((2019 - cur) >= limit);
//     })
// }

// // isFullAge5(21, 1990, 1999, 1965);

// function isFullAge6(limit,...years) {
//     // console.log(years);
//     years.forEach(cur => console.log((2019 - cur) >= limit));
// }

// isFullAge6(16, 1990, 1999, 1965);
// //最後は第二引数の扱いかたについてでした。

///////////////////////
// Lecture: Default prameters

// //ES5
// function SmithPerson(firstName, yearOfBirth, lastName, nationality) {

//     lastName === undefined ? lastName = "Smith": lastName;
//     nationality === undefined ? nationality = "american" : nationality;

//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.yearOfBirth = yearOfBirth;
//     this.nationality = nationality;
// }

// var john = new SmithPerson("John", 1990);
// var emily = new SmithPerson("Emily", 1983, "Diaz", "spanish");

//ES6
// //ES6では最初に定義している段階から初期値を指定できる
// function SmithPerson(firstName, yearOfBirth, lastName ="Smith", nationality = "american"){
//         this.firstName = firstName;
//     this.lastName = lastName;
//     this.yearOfBirth = yearOfBirth;
//     this.nationality = nationality;
// }

// var emily = new SmithPerson("Emily", 1983, "Diaz", "spanish");

////////////////////////////////////
// Lecture: Maps

// const question = new Map();
// question.set(
//   "question",
//   "What is the officail name of the lateste major JavaScript version?"
// );
// question.set(1, "ES5");
// question.set(2, "ES6");
// question.set(3, "ES2015");
// question.set(4, "ES7");
// question.set("correct", 3);
// question.set(true, "Correct anwear :D");
// question.set(false, "Wrong , please try again!");

// console.log(question.get("question"));
// //What is the official name of the latest major JavaScript
// // console.log(question.size);
// //8
// if (question.has(4)) {
//   //   question.delete(4);
//   //   console.log("Answer 4 is here");
// }

// // // question.clear();

// // question.forEach((value, key) =>
// //   console.log(`This is ${key}, and it's set to ${value}`)
// // );

// for (let [key, value] of question.entries()) {
//   if (typeof key === "number") {
//     console.log(`Answer ${key}:${value}`);
//   }
// }

// const ans = parseInt(prompt("Write the correct answer"));
// //question.get(   {ans === question.get('correct')} ) {}内の値が合致してれば{}はtrueになるから
// //question.get(true)の値を持ってきてconsoleに表示させる
// console.log(question.get(ans === question.get(`correct`)));

/////////////////////////////////////
// Lecture: Classes

// //ES5
// var Person5 = function(name, yearOfBirth, job) {
//   this.name = name;
//   this.yearOfBirth = yearOfBirth;
//   this.job = job;
// };

// Person5.prototype.calculateAge = function() {
//   var age = new Date().getFullYear - this.yearOfBirth;
//   console.log(age);
// };

// var john5 = new Person5("John", 1990, "teacher");

// //new Date().getFullYear();これで現在の年が表示される()忘れがち
// //ES6

// class Person6 {
//   constructor(name, yearOfBirth, job) {
//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     this.job = job;
//   }
//   calculateAge() {
//     var age = new Date().getFullYear() - this.yearOfBirth;
//     console.log(age);
//   }

//   static greeting() {
//     console.log("Hey there");
//   }
// }

// const john6 = new Person6("John", 1990, "teacher");

// Person6.greeting();

/////////////////////////////////
// Lecture: Classes and subclasses

// //ES5
// var Person5 = function(name, yearOfBirth, job) {
//   this.name = name;
//   this.yearOfBirth = yearOfBirth;
//   this.job = job;
// };

// Person5.prototype.calculateAge = function() {
//   var age = new Date().getFullYear() - this.yearOfBirth;
//   console.log(age);
// };

// var Athlete5 = function(name, yearOfBirth, job, olymicGames, medals) {
//   Person5.call(this, name, yearOfBirth, job);
//   this.olymicGames = olymicGames;
//   this.medals = medals;
// };

// Athlete5.prototype = Object.create(Person5.prototype);
// //Object.createする前にprototypeでメソッドを書くと上書きされてしまうのかな
// //普通にまずprototype作成が終わってからメソッドを追加すればよさげ
// Athlete5.prototype.wonMedal = function() {
//   this.medals++;
//   console.log(this.medals);
// };

// var johnAthlete5 = new Athlete5("John", 1990, "Swimer", 3, 10);

// johnAthlete5.calculateAge();
// johnAthlete5.wonMedal();

// //ES6

// class Person6 {
//   constructor(name, yearOfBirth, job) {
//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     this.job = job;
//   }
//   calculateAge() {
//     var age = new Date().getFullYear() - this.yearOfBirth;
//     console.log(age);
//   }

//   static greeting() {
//     console.log("Hey there");
//   }
// }

// class Athlete6 extends Person6 {
//   constructor(name, yearOfBirth, job, olymicGames, medals) {
//     super(name, yearOfBirth, job);
//     this.olymicGames = olymicGames;
//     this.medals = medals;
//   }

//   wonMedal() {
//     this.medals++;
//     console.log(this.medals);
//   }
// }

// const johnAthlete6 = new Athlete6("John", 1990, "Swimmer", 3, 10);

// johnAthlete6.wonMedal();
// johnAthlete6.calculateAge();
// //クラスの継承についてでした

/*
Suppose that you're working in a small town administration, and you're in charge of two town elements:
小さな2つの町の管理者でかつその公園と道の管理をしてる
1.Parks
2.Streets

小さい町だから3つの公園と4つの道しかない。そして全ての公園と道には名前と設立年がそんざいする。Streetsって建物のこと？？
It's a very small town, so right now there are only 3 parks and 4 streets. All parks and streets have a name and a build year.

年の終わりにボスが最終報告を上げろと言ってその内容が、
1．樹木の密度はそれぞれの公園でどれぐらいか
2．公園の平均年齢？はいくつか
3．1000本以上の樹を所持している公園は？
4．町にある道の総距離&平均距離
5．道にはサイズが決まっていてわからなければ最初はnormalにすること
At an end-of-year meeting, your boss wants a final report with the following:
1.Tree density of each park in the town (formula: number of trees/park area)
2.Average age of each town's park (formula: sum of all ages/number of parks)
3.The name of the park that has more than 1000 trees
4.Total and average length of the town's streets
5.Size classification of all streets:
tiny/small/normal/big/huge. If the size is unknown, the default is normal

All the report data should be printed to the console.

*/

class Element {
  constructor(name, buildYear) {
    this.name = name;
    this.buildYear = buildYear;
  }
}

class Park extends Element {
  constructor(name, buildYear, area, numTrees) {
    super(name, buildYear);
    this.area = area;
    this.numTrees = numTrees;
  }

  treeDensity() {
    const density = (this.numTrees / this.area).toFixed(2);
    console.log(
      `${this.name} has a tree density of ${density} trees per square km.`
    );
  }
}

class Street extends Element {
  constructor(name, buildYear, length, size = 3) {
    super(name, buildYear);
    this.length = length;
    this.size = size;
  }

  classifyStreet() {
    const classification = new Map();
    classification.set(1, "tiny");
    classification.set(2, "small");
    classification.set(3, "normal");
    classification.set(4, "big");
    classification.set(5, "huge");
    console.log(
      `${this.name}, build in ${this.buildYear}, is a ${classification.get(
        this.size
      )} street.`
    );
  }
}

const allParks = [
  new Park("Green Park", 1987, 0.2, 215),
  new Park("National Park", 1894, 2.9, 3541),
  new Park("Oak Park", 1953, 0.4, 949)
];

const allStreets = [
  new Street("Ocean Avenue", 1999, 1.1, 4),
  new Street("Evergreen", 2008, 2.7, 2),
  new Street("4th Street", 2015, 0.8),
  new Street("Sunset Boulevard", 1982, 2.5, 5)
];

function calc(arr) {

  const sum = arr.reduce((prev, cur, index) => prev + cur, 0);
  return [sum, sum / arr.length];
  
}

function reportParks(p) {
  console.log("--------PARKS REPORT----");
  //Density
  p.forEach(el => el.treeDensity());
  //Average age
  const ages = p.map(el => new Date().getFullYear() -el.buildYear);
  const [totalAge, avgAge] = calc(ages);
  console.log(`Our ${p.length} parks have an average of ${avgAge} years.`)
  //Which park has more than 1000 trees
  const i  = p.map(el => el.numTrees).findIndex(el => el >= 1000);
  console.log(`${p[i].name} has more than 1000 trees.`)
}

function reoprtStreets(s) {
  console.log("--------Streets REPORT-------");
  //Total and average length of the town's streets
  const [totalLength, avgLength] = calc(s.map(el => el.length));
  console.log(`Our ${s.length} streets have a total length of ${totalLength} km, with an average of ${avgLength} km.`);

  s.forEach(el => el.classifyStreet());
}

reportParks(allParks);
reoprtStreets(allStreets);
