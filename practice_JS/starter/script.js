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
var box5 = {
    color: "green",
    position: 1,
    clickMe: function () {
        //ここでselfを定義しておかないとthisを使ったときにwindowオブジェクトを参照しに行ってしまうので定義しておく
        var self = this;
        document.querySelector(".green").addEventListener("click", function () {
            var str = "This is box number " + self.position + " add it is " + self.color;
            alert(str);
        });
    }
}

// box5.clickMe();

//ES6

var box6 = {
    color: "green",
    position: 1,
    clickMe: function () {
        //ここでselfを定義しておかないとthisを使ったときにwindowオブジェクトを参照しに行ってしまうので定義しておく
        document.querySelector(".green").addEventListener("click", () => {
            var str = "This is box number " + this.position + " add it is " + this.color;
            alert(str);
        });
    }
}
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

// Array.from(all).forEach(cur => cur.style.color = "purple");


///////////////////////////////////
// Lecture: Rest parameters

//ES5
function isFullAge5() {
    // console.log(arguments);
    var argsArr = Array.prototype.slice.call(arguments);

    argsArr.forEach(function (cur) {
        console.log((2019 - cur) >= 18);
    })
}
//引数を表示させてみると中身は配列のように表示されているけど配列ではない
//そのを示すのが__proto__がObjectsになっているから
//Array構造のような感じだけど実は違う
//もしArrayとして使いたいのなら

// isFullAge5(1990, 1999, 1965);
// isFullAge5(1990, 1999, 1965, 2016, 1987);

//ES6
//rest prametersを使うことで引数を配列として扱うことができる
//通常の引数は配列に見えるだけで違うのでforEachを使うのに手間がかかったけどこれなら大丈夫になる
function isFullAge6(...years) {
    // console.log(years);
    years.forEach(cur => console.log((2019 - cur) >= 18));
}

isFullAge6(1990, 1999, 1965);

//spreadとrest parametersの違いは？restの方は関数の宣言の時に使う
//spreadは関数実行の時に使う