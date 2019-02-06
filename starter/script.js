//var firstName = 'John';
//var age = 28;
//
//console.log(firstName + ' ' + age);
//
//var job, isMarried;
//
//job = 'teacher';
//isMarried = false;
//
//console.log(firstName + ' is a ' + age + 'year old ' + job + '. Is he married? ' + isMarried);
//
////Variable mutation
//
//age = 'twenty eight';
//job = 'driver';
//
//alert(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);
//
//
//var lastName = prompt('What is his last Name?');
//
//console.log(firstName + ' ' + lastName);


/*
 * Basic operators
 */
//var year, yearJohn, yearMark;
//now = 2018;
//ageJohn = 28;
//ageMark = 33;
//
////Math operators
//yearJohn = now - ageJohn;
//yearMark = now - ageMark;
//
//console.log(yearJohn);
//
//console.log(now + 2);
//console.log(now * 2);
//console.log(now / 10);
//
//// Logical operators
//var johnOlder = ageJohn < ageMark;
//console.log(johnOlder);
//
//
//// typeof operator
//console.log(typeof johnOlder);
//console.log(typeof ageJohn);
//console.log(typeof 'Mark is older the  Jonh');
//var x;
//console.log(typeof x);
/***********************
 * Operator precedence
 */

//var now = 2018;
//var yearJohn = 1989;
//var fullAge = 18;
//
////Multiple operators
//var isFullAge = now - yearJohn >= fullAge; // true
//
//console.log(isFullAge);
//
//
//// Grouping
//var ageJohn = now - yearJohn;
//var ageMark = 35;
//var average = (ageJohn + ageMark) / 2;
//console.log(average);
//
//
//// Multiple assignments
//var x, y;
//x = y = (3 + 5) * 4 - 6; //8*4 -6 // 32-6 ~26
//console.log(x, y);
//
//// More operators
//
//x *= 2;
//console.log(x);
//x += 10;
//console.log(x);
//x++;
//console.log(x);
//x--;
//console.log(x);

//CODING CHALLENGE 1
//
//
//// mass in kg
//var massMark = 70;
//var massJohn = 90;
//
//
//// height in meters
//var heightMark = 1.7;
//var heightJohn = 2.0;
//
//var bmiMark, bmiJohn, cpBMI;
//
//bmiMark = Math.round(massMark / (heightMark ** 2) * 10) / 10;
//bmiJohn = massJohn / (heightJohn ** 2);
//
////console.log(bmiMark);
////console.log(bmiJohn);
//cpBMI = bmiJohn < bmiMark;
//
//console.log("Is Mark's BMI higher than John's? " + cpBMI);

/*
 * If / else statements
 */
//
//var firstName = 'John';
//var civilStatus = 'single';
//
//if (civilStatus === 'married') {
//  console.log(firstName + ' is married!');
//} else {
//  console.log(firstName + ' will hopefully marry soon :)');
//}
//
//
//var isMarried = true;
//
//
//if (isMarried) {
//  console.log(firstName + ' is married!');
//} else {
//  console.log(firstName + ' will hopefully marry soon :)');
//}
//
//
//// mass in kg
//var massMark = 70;
//var massJohn = 90;
//
//
//// height in meters
//var heightMark = 1.7;
//var heightJohn = 2.0;
//
//var bmiMark, bmiJohn, cpBMI;
//
//bmiMark = Math.round(massMark / (heightMark ** 2) * 10) / 10;
//bmiJohn = massJohn / (heightJohn ** 2);
//
//console.log(bmiMark);
//console.log(bmiJohn);
//cpBMI = bmiJohn < bmiMark;
//
//if (bmiMark > bmiJohn) {
//  console.log('Mark\'s BMI is higher than John\'s.');
//} else {
//  console.log("John's BMI is higher than Mark's. ");
//}


/*****************************
 * Boolean logic
 */
////
//var firstName = 'John';
//var age = 20;
//
//if (age < 13) {
//  console.log(firstName + ' is a boy.');
//} else if (age >= 13 && age < 20) {
//  console.log(firstName + ' is a teenager.');
//} else if (age >= 20 && age < 30) {
//  console.log(firstName + ' is a young man.');
//} else {
//  console.log(firstName + 'is a man.');
//}


//Switch statement
//var job = 'instructor';
//switch (job) {
//  case 'teacher':
//  case 'instructor':
//    console.log(firstName + ' teaches kids how to code.');
//    break;
//  case 'driver':
//    console.log(firstName + ' drives an uber in Lisbon.');
//    break;
//  case 'designer':
//    console.log(firstName + ' designs beautiful websies.');
//    break;
//  default:
//    console.log(firstName + ' does something else');
//}
//
//age = 10;
//switch (true) {
//  case age < 13:
//    console.log(firstName + ' is a boy.');
//    break;
//  case age >= 13 && age < 20:
//    console.log(firstName + ' is a teenager.');
//    break;
//  case age >= 20 && age < 30:
//    console.log(firstName + ' is a young man.');
//    break;
//  default:
//    console.log(firstName + 'is a man.');
//}


/*********************
 * Truthy and Falsy values and equality operators
 */

//falsy values: undefined, null, 0, '', NaN
// truthy values: NOT falsy values

//var height;
//
//height = 23;
//
//if (height || height === 0) {
//  console.log('Variable is defined');
//} else {
//  console.log('Variable has NOT been defined');
//}
//
//
//// equality operators
//if (height == '23'){
//  console.log('The == operator does type coercion!');
//}


/************************
 * CODING CHALLENGE 2
 */

/*
John and Mike both play basketball in different teams. In the latest 3 games, John's team scored 89, 120 and 103 points, while Mike's team scored 116, 94 and 123 points.

1.Calculate the average score for each team
2.Decide which teams wins in average (highest average score), and print the winner to the console.Also include the average score in the output.
3.Then change the scores to show different winners.
Don't forget to take into account there might be a draw (the same aberage score)


4.EXTRA: Mary also plays basketball, and her team scored 97, 134 and 105 points. Like before, log the average winner to the console. HINT: you will need the && operator to take the decision. If you can't solve this one, just watch the solution, it's no problem :)
5.Like before, change the scores to generate different winners, keeping in mind there might be draws.

*/
//
//
//var teamJsScore = 316 + 94 + 123;
//var temaMsScore = 316 + 94 + 123;
//var teamMaryS = 313 + 94 + 123;
//
//var averageJs = teamJsScore / 3;
//var averageMs = temaMsScore / 3;
//var averageMary = teamMaryS / 3;
//switch (true) {
//  case averageJs < averageMs:
//    console.log('winner is Mike\'s team. Average score is ' + Math.round(averageMs));
//    break;
//
//  case averageMs < averageJs:
//    console.log('winner is John\'s team. Average score is ' + Math.round(averageJs));
//    break;
//  case averageJs == averageMs:
//    console.log('draw...')
//    break;
//  default:
//    console.log('No winner');
//}
//
//if (averageJs > averageMs && averageJs > averageMary) {
//  console.log('John\'s team wins with ' + Math.round(averageJs));
//} else if (averageMs > averageJs && averageMs > averageMary) {
//  console.log("Mike's team wins with " + Math.round(averageMs));
//} else if (averageMary > averageJs && averageMary > averageMs) {
//  console.log("Mary's team wins with " + Math.round(averageMary));
//} else if (averageJs && averageMs == averageMary) {
//  console.log("draw....");
//} else if (averageJs == averageMs && averageJs > averageMary) {
//  console.log("Mike & John both teams win with " + Math.round(averageMs) + "points");
//} else {
//  console.log("no games.");
//}
//
//
//
//
/****************************************
 * Functions
 */
//var firstName = "John";
//
//function calculateAge(birthYear) {
//  return 2018 - birthYear;
//}
//
//
//
//var ageJohn = calculateAge(1990);
//var ageMike = calculateAge(1948);
//var ageJane = calculateAge(1969);
//console.log(ageJohn, ageMike, ageJane);
//
//function yearUntilRetirement(year, firstName) {
//  var age = calculateAge(year);
//  var retirement = 65 - age;
//
//  if (retirement > 0) {
//    console.log(firstName + " retires in " + retirement + " years.");
//  } else {
//    console.log(firstName + " is already retired.");
//  }
//
//}
//
//
//yearUntilRetirement(1990, "John");
//yearUntilRetirement(1948, "Mike");
//yearUntilRetirement(1969, "Jane");

/**************************************
 * Function Statements and Expressions
 */

//Function declaration
// function whatDoYouDo(job, firstName) {}

//
////Function expression
//var whatDoYouDo = function (job, firstName) {
//  switch (job) {
//    case 'teacher':
//      return firstName + " teaches kids how to code";
//    case 'driver':
//      return firstName + " drives a cab in Lisbon.";
//    case 'designer':
//      return firstName + " designs beautiful websites";
//    default:
//      return firstName + " does something else";
//  }
//}
//
//console.log(whatDoYouDo('teacher', 'John'));
//console.log(whatDoYouDo('designer', 'Jane'));
//console.log(whatDoYouDo('retired', 'Mark'));
//
//
//


/*********************
 * Arrays
 */
//
//var names = ['John', 'Mark', 'Jane'];
//var years = new Array(1990, 1969, 1948);
//
//console.log(names[0]);
//console.log(names.length);
//
//names[1] = 'Ben';
//names[names.length] = 'Mary';
//console.log(names);
//
//
//
//
////Different data types
//
//var john = ['John', 'Smith', 1990, 'teacher', false];
//
//john.push('blue');
//john.unshift('Mr.');
//console.log(john);
//
//john.pop();
//john.pop();
//john.shift();
//console.log(john);
//john.push('designer');
//
////見つからないと―1が返ってくる
//console.log(john.indexOf(23));
//
//var isDesigner = john.indexOf('designer') === -1 ? 'John is NOT a designer' : 'John IS a designer';
//console.log(isDesigner);
//
//



/***********************************
 * CODING CHALLENGE 3
 */

/*
John and his family went on a holiday and went to 3 different restaurants. The bills were $124, $48 and $268.

To tip in the waiter a fair amount, John created a simple tip calculator (as a function). He likes to tip 20% of the bill when the bill is less than $50,15% when the bill is between $50 and $200, and 10% if the bill is more than $200.
要は$50以下の場合は20%をtipとしてわたす。50$以上200未満の場合は15%、$200以上の場合は10%やるよってこと。

In the end, John would like to have 2 arrays:
1) Containing all three tips(one for each bill)
2) Containing all three final paid amounts (bill + tips).

(NOTE: To calculate 20% of a value, simply multiply if with 20/100 = 0.2)

//*/
//
//function tipPayment(bill) {
//  var percentage;
//  if (bill < 50) {
//    percentage = .2;
//
//  } else if (50 <= bill && bill < 200) {
//    percentage = .15;
//  } else if (200 <= bill) {
//    percentage = .1;
//  }
//  return Math.round(percentage * bill * 10) / 10;
//}
//
//var bills = [124, 48, 268]
//var tipss = [tipPayment(bills[0]),
//            tipPayment(bills[1]),
//            tipPayment(bills[2])];
//
//var finalValues = [bills[0] + tipss[0],
//                   bills[1] + tipss[1],
//                   bills[2] + tipss[2]];
//
//console.log("チップ支払額は " + tipss);
//console.log("最終支払額は " + finalValues);

/****************************
 * Objects and properties
 */
//
//// object literal
//var john = {
//  firstName: 'John',
//  lastName: 'Smith',
//  birthYear: 1990,
//  family: ['Jane', 'Mark', 'Bob', 'Emily'],
//  job: 'teacher',
//  isMarried: false
//
//};
//
//console.log(john.firstName);
//console.log(john['lastName']);
//var x = 'birthYear';
//console.log(john[x]);
//
//john.job = 'designer';
//john['isMarried'] = true;
//console.log(john);
//
////new Object syntax
//var jane = new Object();
//jane.name = 'Jane';
//jane.birthYear = 1969;
//jane['lastName'] = 'Smith';
//console.log(jane);


/*********************************
 * Objects and Methods
 */

//var john = {
//  firstName: 'John',
//  lastName: 'Smith',
//  birthYear: 1991,
//  family: ['Jane', 'Mark', 'Bob', 'Emily'],
//  job: 'teacher',
//  isMarried: false,
//  calcAge: function () {
//    this.age = 2018 - this.birthYear;
//  }
//};
//
//john.calcAge();
//console.log(john);


/************************
 * CODING CHALLENGE 4
 */

/*
Lets remember the first coding challenge where Mark and John compared their BMIs. Lets now implement the same functionality with objects and methods.
1. For each of them, create an object with properties for their full name, mass, and height
2.Then, add a method to each object to calculate the BMI. Save the BMI to the object and also return it from the method.
e.In the end, log to the console who has the highest BMI,togehter with the full name and the respective BMI. Don't forget they might have the same BMI.

Remember : BMI = mass/ height^2 (mass in kg and height in meter).

*/

//var john = {
//  firstName: 'John',
//  lastName: 'Smith',
//  mass: '76', //kg
//  height: '1.9', //meter
//  calcBMI: function () {
//    this.BMI = Math.round((this.mass / (this.height * this.height)) * 10) / 10;
//    return this.BMI;
//  }
//};
//john.calcBMI();
//console.log(john);
//
//var mike = {
//  firstName: 'Mike',
//  lastName: 'Westin',
//  mass: '76', //kg
//  height: '1m', //meter
//  calcBMI: function () {
//    this.BMI = Math.round((this.mass / (this.height * this.height)) * 10) / 10;
//    return this.BMI
//  }
//};
//mike.calcBMI();
//console.log(mike);
//
//if (mike.BMI > john.BMI) {
//  console.log("Mike's BMI is higher than John");
//} else if (john.BMI > mike.BMI) {
//  console.log("John's BMI is higher than Mike");
//} else if (john.BMI == mike.BMI) {
//  console.log("They have the same BMI.")
//} else {
//  console.log("We can't calculate.")
//}


var d;







var g;
