"use strict";
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
console.log(myself);
////////////////////////////////////////////////////////////////////////////
// Section 3
///////////////////
//Assigning Type// 
//note: 
///////////////////
///////////////////
//Assigning Type// 
//note: 
///////////////////
///////////////////
//Assigning Type// 
//note: 
///////////////////
///////////////////
//Assigning Type// 
//note: 
///////////////////
///////////////////
//Assigning Type// 
//note: 
///////////////////
