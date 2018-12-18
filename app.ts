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
let canBeNull: number | null = 12;
canBeNull = null;
let canAlsoBeNull;
canAlsoBeNull = null;
///////////////////

////////////////////////////////////////////////////////////////////////////
// Section 2 Excercise
type BankAccount = {money: number, deposit: (val: number) => void};

let bankAccount: BankAccount =  {
    money: 2000,
    deposit(value: number): void {
        this.money += value;
    }
};

let myself: { name: string, bankAccount: BankAccount, hobbies: string[]} = {
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
//note: const can't not be assign coz its read only
let variable = "Test";
// console.log(variable);
variable = "Another Value";
// console.log(variable);

const maxLevels = 100
// console.log(maxLevels);
///////////////////

///////////////////
//Block Scope// 
//note: use the let inside only that function
function reset() {
    let variable = null;
    // console.log(variable);
}
reset()
// console.log(variable);
///////////////////

///////////////////
//Arrow Functions// 
//note: 
const addNumbers = function(number1: number, number2: number): number {
    return number1 + number2;
}
// console.log(addNumbers(10, 3));
// OR the easy way
const multiplyByNumbers = (number1: number, number2: number) => number1 * number2;
// console.log(multiplyByNumbers(10, 3));
///////////////////

///////////////////
//Arrow Functions - Varitions// 
//note: function that don't need arguments
const greet = () => {
    // console.log("Hello");
}
greet();
///////////////////

///////////////////
//FUnctions and Default Parameters// 
//note: 
const countdown = (start: number = 10): void => {
    console.log(start);
    while(start > 0) {
        start--;
    }
    // console.log("Done", start)
}
countdown();
///////////////////

///////////////////
//Spread Operator// 
//note: 
///////////////////

///////////////////
//The REST operator// 
//note: 
///////////////////

///////////////////
//Rest Parameter & tupies// 
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