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
    Color[Color["Green"] = 200] = "Green";
    Color[Color["Blue"] = 201] = "Blue";
})(Color || (Color = {}));
var myColor = Color.Green;
console.log(myColor);
///////////////////
///////////////////
//Next Round// 
//note: some changes
///////////////////
///////////////////
//Assigning Type// 
//note: 
///////////////////
