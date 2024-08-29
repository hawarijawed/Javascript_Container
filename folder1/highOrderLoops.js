//Loops on array or objects
const arr = [3,4,5,6,7,9];
//'for of' loop

// for (let element of arr) {
//     console.log(element+1);
// }

// const greetings = "Namaste Nepal!!!";
// for (const greet of greetings) {
//     console.log(greet);
// }

// const map = new Map();
// map.set('A',1);
// map.set('b',2);
// map.set('C',3);
// map.set('D',4);
// map.set('E',5);

// for (const [key,value] of map.entries()) {
//     console.log(`Key: ${key} Value: ${value}`); 
// }

const myObj = {
    "game1":"God of War",
    "game2": "Spider Man 2",
    "game3": "Black Myth WuKong",
    "game4": "Need For Speed Payback"
};

//Objects are not iteratable like hashmap
// for (const game of myObj) {
//     console.log(game); //gives an error
// }

//for in loop
// for (const key in myObj) {
//     console.log(`Key: ${key}, object: ${myObj[key]}`);//Prints only keys
// }

//for in loop on array
// const languages = ["C","C++","Python","Java","JavaScript"];
// for (const key in languages) {
//     console.log(key,languages[key]);//prints the index values
// }

//-------------------------- for each loop ---------------------------//
const languages = ["C","C++","Python","Java","JavaScript"];

// languages.forEach( function (item) {// call back function
//     console.log(item);
// })

//arrow function
// languages.forEach((items)=>{
//     console.log(items);
// })

// //array of object
// const myCoding = [
//     {
//         "Language":"C",
//         "Extension":".c"
//     },
//     {
//         "Language":"C++",
//         "Extension":".cpp"
//     },
//     {
//         "Language":"Python",
//         "Extension":".py"
//     },
//     {
//         "Language":"Java",
//         "Extension":".java"
//     }
// ]

// myCoding.forEach( (item)=>{
//     console.log(item.Language);
// })


// const coding = ["js","ruby","java","python","cpp"];
// const values = coding.forEach((item) =>{
//     console.log(item);
//     //return (item); //returns undefined
// })
// console.log(values);

const nums = [1,2,3,4,5,6,7,8,9,10];
// const val = nums.filter((num)=>{
//     return num>5;
// })
// console.log(val);

//filtering using forEach method
// const lst = [];
// nums.forEach((item)=>{
//     if(item>5){
//         lst.push(item);
//     }
// })
// console.log(lst);

const books = []
