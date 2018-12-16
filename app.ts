// console.log("test 123");
///////////////////
//Assigning Type// 
//note: 
///////////////////

///////////////////
//string//
//note: In ts you can't overwrite to interger if it's string, not like in regular javascript.
let myName = 'Max';
// myName = 28;
///////////////////

///////////////////
//Numbers and Boolean// 
//note: for numbers vice and versa like string
let hasHobbies = false;
// hasHobbies = 1;
///////////////////

///////////////////
//Assigning Type// 
//note: can't not do string 
let myRealAge: number;
myRealAge = 27;
// myRealAge = '27'; 
///////////////////

///////////////////
//Array and Types// 
//note: Usy anyy[] to hold strings and intergers
let cooking: any[] = ["fries", "sports"];
cooking = [100];
// console.log(cooking[0]);
///////////////////

///////////////////
//Tuples// 
//note: 
let address: [string, number] = ["Super Street", 99];
///////////////////

///////////////////
//Enums// 
//note: You can assign value, for ex. add 100 to Green and value will be 100
enum Color {
    Gray,
    Green = 100,
    Blue
}
let myColor: Color = Color.Green
// console.log(myColor);
///////////////////

///////////////////
//Any Types// 
//note: some changes
let car : any = "bmw";
// console.log(car);
car = { brand: "BMW", series: 3};
// console.log(car);
///////////////////

///////////////////
//Types of Function// 
//note: 

//functions
function returnMyName () : string {
    return myName
}
console.log(myName);

//void
function sayHello() : void {
    console.log("Hello");
}

//arguments types
function multiply(value1: number, value2: number) {
    return value1 * value2;
}
console.log(multiply(10, 10));
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

///////////////////
//Assigning Type// 
//note: 
///////////////////