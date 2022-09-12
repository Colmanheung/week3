console.log("Hello console")
console.log("Hello console another")
console.clear();

var varfuntion = ("This is a Var function");
console.log(varfuntion);

let str1 = "This is a length function";
let length = str1.length;
console.log(str1);
console.log(length);

const myArr = ["This", "is", "a", "const", "function"];
console.log(myArr);

let str2 = "This is a slice function";
let slice = str2.slice(9,16);
let slice2 = str2.slice(7);
let slice3 = str2.slice(-17);

console.log(slice);
console.log(slice2);
console.log(slice3);

let str3 = "This is a substring function";
let substring = str3.substring(9,29);
console.log(substring);

let str4 = "This is not a replace function";
let replace = str4.replace("not a", "a");
console.log(replace);

// Task 2 - Javascript numbers

//tostring is to show the numbers.
//can also type ().tostring to show numbers as well
let task2_1 = 5201314
task2_1.toString();
console.log(task2_1)

//toExponential function can round up numbers,the number in the () is the number of decimal 
let task2_2 = 3.141592653
task2_2.toExponential(0);
let task2_2_2 = task2_2.toExponential(5);
console.log(task2_2);
console.log(task2_2_2);

//toFixeed function is similiar to toexponential function.
let task2_3 = 3.141592653
task2_3.toFixed(0);
console.log(task2_3);

// const ages =[10,21,32,43];
// ages.every(checkage)
// var printage = function checkage(age){
//      age>5;
//     };
// console.log(printage)

//string array and number array
let numArray = [1,2,3];
let stringArray = ["cat","dog","pig"];
console.log(numArray)
console.log(stringArray);
//choose the number set of string in the array cat= 0 dof=1 pig=2
console.log(`I love ${stringArray[1]} `)

let animalDict = {
    name :'Dog',
    type :"Domestic Animal"
};
console.log(animalDict.name, animalDict.type)
console.log(animalDict.name,`is a`, animalDict.type)

//Task 3
//1 get years
const d = new Date();
let Getyear = d.getFullYear();
console.log(Getyear)

//2 get month
const m = new Date();
let month = m.getMonth();
console.log(month);

//3 get current year from ms
let ms = Date.now();
const minute = 1000 * 60;
const hour = minute * 60;
const day = hour * 24;
const year = day * 365;
let howmanyyears = Math.round(Date.now() / year);
let years = (1969 + howmanyyears);
console.log(years)

//4 set time
const settime = new Date();
settime.setHours(20, 00, 9);
console.log(settime)

//5 
const datestring = new Date("November 17, 2022 07:13:00");
console.log(datestring)