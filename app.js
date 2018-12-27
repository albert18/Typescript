"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// console.log("test 123");
///////////////////
//Assigning Type// 
//note: 
///////////////////
///////////////////
//string//
//note: In ts you can't overwrite to interger if it's string, not like in regular javascript.
var myName = 'Max';
// myName = 28;
///////////////////
///////////////////
//Numbers and Boolean// 
//note: for numbers vice and versa like string
var hasHobbies = false;
// hasHobbies = 1;
///////////////////
///////////////////
//Assigning Type// 
//note: can't not do string 
var myRealAge;
myRealAge = 27;
// myRealAge = '27'; 
///////////////////
///////////////////
//Array and Types// 
//note: Usy anyy[] to hold strings and intergers
var cooking = ["fries", "sports"];
cooking = [100];
// console.log(cooking[0]);
///////////////////
///////////////////
//Tuples// 
//note: 
var address = ["Super Street", 99];
///////////////////
///////////////////
//Enums// 
//note: You can assign value, for ex. add 100 to Green and value will be 100
var Color;
(function (Color) {
    Color[Color["Gray"] = 0] = "Gray";
    Color[Color["Green"] = 100] = "Green";
    Color[Color["Blue"] = 101] = "Blue";
})(Color || (Color = {}));
var myColor = Color.Green;
// console.log(myColor);
///////////////////
///////////////////
//Any Types// 
//note: some changes
var car = "bmw";
// console.log(car);
car = { brand: "BMW", series: 3 };
// console.log(car);
///////////////////
///////////////////
//Types of Function// 
//note: 
//functions
function returnMyName() {
    return myName;
}
// console.log(myName);
//void
function sayHello() {
    // console.log("Hello");
}
//arguments types
function multiply(value1, value2) {
    return value1 * value2;
}
// console.log(multiply(10, 10));
///////////////////
///////////////////
//Assigning Types// 
//note: 
var myMultiply;
myMultiply = sayHello;
myMultiply();
myMultiply = multiply;
// console.log(myMultiply(5,2));
///////////////////
///////////////////
//Objects and Type// 
//note: 
var userData = {
    name: "Max",
    age: 27
};
var complex2 = {
    data: [100, 3.99, 10],
    output: function (all) {
        return this.data;
    }
};
///////////////////
///////////////////
//Union Types// 
//note: number or string only -- NOT BOOLEAN can't not assign
var myRealRealAge = 27;
myRealRealAge = "27";
///////////////////
///////////////////
//Check types// 
//note: 
// let finaValue = 30;
// if (typeof finaValue == "number")
// {
//      console.log("Final value is a number!")
// }
///////////////////
///////////////////
//Never// 
//note: Never return 
// function neverReturns(): never {
//     throw new Error('An Error!');
// }
///////////////////
///////////////////
//Null Type// 
//note: 
var canBeNull = 12;
canBeNull = null;
var canAlsoBeNull;
canAlsoBeNull = null;
var bankAccount = {
    money: 2000,
    deposit: function (value) {
        this.money += value;
    }
};
var myself = {
    name: "Max",
    bankAccount: bankAccount,
    hobbies: ["Sports", "Cooking"]
};
myself.bankAccount.deposit(3000);
// console.log(myself);
////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
// Section 3 Understanding typescript compiler
////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
///////////////////
//Get Compiled// 
//note: noEmit": true in tsconfig.json 
///////////////////
///////////////////
//Changing the compiler behavior on errors// 
//note: 
///////////////////
///////////////////
//Debugging typescript code using source maps// 
//note: "sourceMap": true,in  tsconfig.json -- able to see ts file in chrome developer tool
///////////////////
///////////////////
//Avoiding implicity "Any"// 
//note: noImplicitAny in  tsconfig.json -- Prefer to be false
///////////////////
///////////////////
//More Compilers// 
//note: 
///////////////////
///////////////////
//Compiler improvement with typescript 2.0// 
//note: strictNullChecks
///////////////////
////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
// Section 4 Typescript and ES6
////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
///////////////////
//"Let" and "Const"// 
//note: const can't not be assign if it was assigned already. coz its read only!
var variable = "Test";
// console.log(variable);
variable = "Another Value";
// console.log(variable);
var maxLevels = 100;
// console.log(maxLevels);
///////////////////
///////////////////
//Block Scope// 
//note: use the let inside only that function
function reset() {
    var variable = null;
    // console.log(variable);
}
reset();
// console.log(variable);
///////////////////
///////////////////
//Arrow Functions// 
//note: 
var addNumbers = function (number1, number2) {
    return number1 + number2;
};
// console.log(addNumbers(10, 3));
// OR the easy way
var multiplyByNumbers = function (number1, number2) { return number1 * number2; };
// console.log(multiplyByNumbers(10, 3));
///////////////////
///////////////////
//Arrow Functions - Varitions// 
//note: function that don't need arguments
var greet = function () {
    // console.log("Hello");
};
greet();
///////////////////
///////////////////
//FUnctions and Default Parameters// 
//note: 
var countdown = function (start) {
    if (start === void 0) { start = 10; }
    // console.log(start);
    while (start > 0) {
        start--;
    }
    //  console.log("Done", start)
};
countdown();
///////////////////
///////////////////
//Spread Operator// 
//note: use 3 dots to spread arrays to a single value -- To check that has the highest value 
var numbersSpread = [1, 10, 99, -5];
// console.log(Math.max(33,99,10,-3));
// console.log(Math.max(...numbersSpread));
///////////////////
///////////////////
//The REST operator// 
//note: 
function makeArray() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return args;
}
// console.log(1,2,3);
///////////////////
///////////////////
//Rest Parameter & tupies// 
//note: 
// function printInfo(name: string, age: number) {
//     console.log('My name is ' + name + ' and I am ' + age + ' years old!');
// }
// function printInfo(...info: [string, number]) {
//     console.log('My name is ' + info[0] + ' and I am ' + info[1] + ' years old!');
// }
///////////////////
///////////////////
//Desctructuing arrays// 
//note: Use [] 
var myHobbies = ["Cooking", "Sports"];
var hobby1 = myHobbies[0], hobby2 = myHobbies[1];
// console.log(hobby1, hobby2)
///////////////////
///////////////////
//Desctructuing Object// 
//note: 
// const userDataObject = {userName: "max", age: 27}
// const {userName, age} = userDataObject
// console.log(userName, age);
// OR you can use Alias
var userDataObject = { userName: "max", age: 27 };
var myNameObject = userDataObject.userName, myAgeObject = userDataObject.age;
// console.log(myNameObject, myAgeObject);
///////////////////
///////////////////
//Template Literals// 
//note: using backtick you be able like template literals
var userNameTemplate = "Max";
var greeting = "This is a header!\nI'm " + userNameTemplate + ".\nThis is so cool";
// console.log(greeting);
///////////////////
///////////////////
//Module 4 Exercise// 
//note: 
// Excercise 1
var double = function (value) {
    return value * 2;
};
// console.log(double(10));
var double1 = function (value) { return value * 2; };
// console.log(double1(30));
// Excercise 2
var greetE = function (nameE) {
    if (nameE === void 0) { nameE = "Max"; }
    // console.log("Hello " + nameE);
};
greetE();
greetE("Anna");
// Excercise 3
var exerciseNumber = [-2, 33, 38, 5];
// console.log(Math.min(...exerciseNumber));
// Excercise 4
var newArrayEx = [15, 20];
newArrayEx.push.apply(newArrayEx, exerciseNumber);
// console.log(newArrayEx)
// Excercise 5
// const testResults = [3.89, 2.99, 1.38];
// const [result1, result2, result3] = testResults;
// console.log(result1, result2, result3);
// or
// console.log([result1, result2, result3]);
// Excercise 6
// const scientist = {firstName: "Will", experience: 12};
// const {firstName: firstObjet, experience: secondObject} = scientist;
// console.log(firstObjet, secondObject);
///////////////////
////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
// Section 5 Using Classes to Create Objects
////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
///////////////////
// Creating Class and Class Properties. Class Methods and access modifiers
//note:
var Person = /** @class */ (function () {
    function Person(nameC, username) {
        this.username = username;
        this.age = 32;
        this.nameClass = nameC;
    }
    // setting up a method
    Person.prototype.printAge = function () {
        console.log(this.age);
    };
    Person.prototype.setType = function (type) {
        this.type = type;
        console.log(this.type);
    };
    return Person;
}());
var iPerson = new Person("Albert", "al");
// console.log(iPerson);
// iPerson.printAge();
// iPerson.setType("Cool");
///////////////////
///////////////////
// Inheritance and Contructor
//note:
var Max = /** @class */ (function (_super) {
    __extends(Max, _super);
    // name = "Max"
    function Max(username) {
        var _this = _super.call(this, "Max", username) || this;
        _this.age = 31;
        return _this;
    }
    return Max;
}(Person));
var max = new Max("max");
// console.log(max);
///////////////////
///////////////////
// Getters and Setters
//note: Control your properties
var Plant = /** @class */ (function () {
    function Plant() {
        this._species = "Default";
    }
    Object.defineProperty(Plant.prototype, "species", {
        get: function () {
            return this._species;
        },
        set: function (value) {
            if (value.length > 3) {
                this._species = value;
            }
            else {
                this._species = "Default";
            }
        },
        enumerable: true,
        configurable: true
    });
    return Plant;
}());
// let plant = new Plant();
// console.log(plant.species);
// plant.species = "AB21312";
// console.log(plant.species);
///////////////////
///////////////////
// Static Property & Methods
//note:
var Helpers = /** @class */ (function () {
    function Helpers() {
    }
    Helpers.calCircumference = function (diameter) {
        return this.PI * diameter;
    };
    Helpers.PI = 3.14;
    return Helpers;
}());
// console.log(2 * Helpers.PI)
// console.log(Helpers.calCircumference(8));
///////////////////
///////////////////
//  Abstract Classes
//note: Needs to be inherited provide a base class
var Project = /** @class */ (function () {
    function Project() {
        this.projectName = "Default";
    }
    Project.prototype.calcBudget = function () {
        return this.budget * 2;
    };
    return Project;
}());
var ITProject = /** @class */ (function (_super) {
    __extends(ITProject, _super);
    function ITProject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ITProject.prototype.changeName = function (name) {
        this.projectName = name;
    };
    return ITProject;
}(Project));
// let newProject = new ITProject();
// console.log(newProject); // or
// newProject.changeName("Awesome")
// console.log(newProject);
///////////////////
///////////////////
// Private Contructor
//note:
var OnlyOne = /** @class */ (function () {
    function OnlyOne(name) {
        this.name = name;
    }
    OnlyOne.getInstance = function () {
        if (!OnlyOne.instance) {
            OnlyOne.instance = new OnlyOne('The only one');
        }
        return OnlyOne.instance;
    };
    return OnlyOne;
}());
// let wrong = new OnlyOne('The only one'); //WRONG need be public 
var right = OnlyOne.getInstance();
///////////////////
///////////////////
// readonly properties
//note: 2 ways to do it first in the getter/setter OR adding readonly
right.name = 'Something else';
///////////////////
///////////////////
// MODULE 5 Exercise
//note:
// Exercise 1 Class
var Car = /** @class */ (function () {
    function Car(name) {
        this.accelaration = 0;
        this.name = name;
    }
    Car.prototype.honk = function () {
        console.log("Tooooooooot");
    };
    Car.prototype.accelerate = function (speed) {
        this.accelaration = this.accelaration + speed;
    };
    return Car;
}());
//  const carModule5 = new Car("BMW");
//  carModule5.honk();
//  console.log(carModule5.accelaration);
//  carModule5.accelerate(20);
//  console.log(carModule5.accelaration);
// Exercise 2
var BaseObject = /** @class */ (function () {
    function BaseObject() {
        this.width = 0;
        this.length = 0;
    }
    return BaseObject;
}());
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Rectangle.prototype.calcSize = function () {
        return this.width * this.length;
    };
    return Rectangle;
}(BaseObject));
// const rectangle = new Rectangle();
// rectangle.width = 5;
// rectangle.length = 10;
// console.log(rectangle.calcSize());
// Exercise 3 Getter & Setters
var PersonExercise = /** @class */ (function () {
    function PersonExercise() {
        this._firstName = "";
    }
    Object.defineProperty(PersonExercise.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (value) {
            if (value.length > 3) {
                this._firstName = value;
            }
            else {
                this._firstName = "";
            }
        },
        enumerable: true,
        configurable: true
    });
    return PersonExercise;
}());
var personExercise = new PersonExercise();
console.log(personExercise.firstName);
personExercise.firstName = "Ma";
console.log(personExercise.firstName);
personExercise.firstName = "Albert";
console.log(personExercise.firstName);
