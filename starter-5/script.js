//Function constructor
/*
var john = {
    name: 'John',
    yearOfBirth: 1990,
    job: 'teacher'
};

var Person = function (name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;

}


Person.prototype.calculateAge =
    function () {
        console.log(2018 - this.yearOfBirth);
    };

Person.prototype.lastName = 'Smith';



var john = new Person('john', 1990, 'teacher');
var jane = new Person('Jane', 1969, 'designer');
var mark = new Person('Mark', 1948, 'retired');

john.calculateAge();
jane.calculateAge();
mark.calculateAge();

console.log(john.lastName);
console.log(jane.lastName);
console.log(mark.lastName);
*/

//Object.create
/*
var personProto = {
    calculateAge: function () {
        console.log(2018 - this.yearOfBirth);
    }
};

var john = Object.create(personProto);
john.name = 'John';
john.yearOfBirth = 1990;
john.job = 'teacher';

var jane = Object.create(personProto, {
    name: {
        value: 'Jane'
    },
    yearOfBirth: {
        value: 1969
    },
    job: {
        value: 'designer'
    }

});

*/


/*
//Primitives vs objects


//primitives
var a = 23;
var b = a;
a = 46;
console.log(a);
console.log(b);








//objects

var obj1 = {
    name: 'John',
    age: 26
};
var obj2 = obj1;
obj1.age = 30;
console.log(obj1.age);
console.log(obj2.age);

//Functions

var age = 27;
var obj = {
    name: 'Jonas',
    city: 'Lisbon'
};

function change(a, b) {
    console.log(age + "check")
    var age = 30;
    //    b.city = 'San Francisco';
}

change(age, obj);

console.log(age);
console.log(obj.city);

Objectは参照渡し、プリミティブ型は値渡しなのでchangeでプリミティブなageを書き換えて保存することはできない。
*/

/*
var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
    var arrRes = [];
    for (var i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calculateAge(el) {
    return 2018 - el;
}

function isFullAge(el) {
    return el >= 18;
}

function maxHeartRate(el) {
    if (el >= 18 && el <= 81) {
        return Math.round(206.9 - (0.67 * el));
    } else {
        return -1;
    }
}

var ages = arrayCalc(years, calculateAge);
var fullAges = arrayCalc(ages, isFullAge);
var rates = arrayCalc(ages, maxHeartRate);

console.log(ages);
console.log(fullAges);
console.log(rates);
*/


// function interviewQuestion(job) {
//     if (job === 'designer') {
//         return function (name) {
//             console.log(name + ', can you plz explain what UX design is?');
//         }
//     } else if (job === 'teacher') {
//         return function (name) {
//             console.log('What subject do you teach, ' + name + '?');
//         }
//     } else {
//         return function (name) {
//             console.log('Hello ' + name + ', What do you do?');
//         }
//     }
// }

// var teacherQuestion = interviewQuestion('teacher');

// teacherQuestion('John');



/**************************************
 * Lecture: Closures
 */

//  function retirement(retirementAge) {
//      var a = 'years left until retirement.';
//      return function(yearOfBirth) {
//          var age = 2018 - yearOfBirth;
//          console.log((retirementAge - age) + a);
//      }
//  }

//  var retirementUs = retirement(66);
//  retirementUs(1990);

//  var retirementGermany = 
//  retirement(65);
//  var retirementIceland =
//  retirement(67);
//  retirementGermany(1990);
//  retirementUs(1990);
//  retirementIceland(1990);



//  function interviewQuestion(job) {
//      return function(name) {
//          if(job === 'designer') {
//             console.log(name + ', can you plz explain what UX design is?');
//          }else if (job === 'teacher'){
//             console.log('What subject do you teach, ' + name + '?');
//          }else {
//             console.log('Hello ' + name + ', What do you do?');
//          }
//      }
//  }

// interviewQuestion('teacher')('John');



 //retirement(66)(1991);

 /***********************
  * Lecture: Bind, call and apply
  */

  var john = {
      name: 'John',
      age: 27,
      job: 'teacher',
      presentation: function(style, timeOfDay){
          if(style === 'formal') {
              console.log('Good' + timeOfDay + ', Ladies and Gentlemen! I\'m ' + this.name + ', I\'m a ' + this.job + ' and I\'m' + this.age +'years old.');
          } else if (style === 'friendly') {
              console.log("Hey! What's UP? I'm " + this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age +'years old.' + ' Have a nice ' +timeOfDay);
          }
      }
    };

var emily = {
    name: 'Emily',
    age: 35,
    job: 'designer'
};


john.presentation('formal', 'mornig');


john.presentation.call(emily, 'friendly', 'afternoon');

//john.presentation.apply(emily, ['friendly', 'afternoo']);

var johnFriendly = 
john.presentation.bind(john,'friendly');

johnFriendly('morning');
johnFriendly('night');

var emilyFomal = 
john.presentation.bind(emily,'formal');

emilyFomal('afternoon');








































