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