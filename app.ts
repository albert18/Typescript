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
// console.log(myName);

//void
function sayHello() : void {
    // console.log("Hello");
}

//arguments types
function multiply(value1: number, value2: number) {
    return value1 * value2;
}
// console.log(multiply(10, 10));
///////////////////

///////////////////
//Assigning Types// 
//note: 
let myMultiply;
myMultiply = sayHello;
myMultiply();
myMultiply = multiply;
// console.log(myMultiply(5,2));
///////////////////

///////////////////
//Objects and Type// 
//note: 
let userData: { name: string, age: number} = {
    name: "Max",
    age: 27
};
// console.log(userData.name + ' ' + userData.age)
///////////////////

///////////////////
//Complex Creating Custom Types with type alias// 
//note: 
type Complex = {data: number[], output: (all: boolean) => number[]};

let complex2: Complex = {
    data: [100, 3.99, 10],

    output: function(all: boolean): number[] {
        return this.data
    }
}
///////////////////

///////////////////
//Union Types// 
//note: number or string only -- NOT BOOLEAN can't not assign
let myRealRealAge: number | string = 27;
myRealRealAge = "27";
///////////////////

///////////////////
//Check types// 
//note: 
let finaValue = 30;
if (typeof finaValue == "number")
    console.log("Final value is a number!")

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