//Single array holds collection of multiple items
//arrays are resizable(variable length)

/*
Shallow Copy: a copy whose properties share the same references as those
of the source object from which the copy was made.

Deep Copy: a copy whose properties do not share the same references as those 
of the source object from which the copy was made. 
-- Changes made in copy do not reflect the original item and vice -verca.
*/
const arr = [0,1,2,4,"Captain"];
// console.log(arr);

// const arr1 = new Array(1,2,4,"I am Batman");
// console.log(arr1);
// console.log("Length of the array:",arr1.length);
// arr1.push(23)
// arr1.push(45)
// console.log(arr1);
// console.log("Length of the array:",arr1.length);

const arr2 = [1,2,3,4,5,6,7];

// console.log(arr2);
// arr2.unshift(10); //-->10,1,2,3,4,5,6,7 //add to the first index
//arr2.shift();//--> 1,2,3,4,5,6,7 //removes from the first index
// console.log(arr2.includes(3));
// console.log(arr2.indexOf(7));
//const temp = arr2.join(); //return a string data type

//________________Slice vs Splice _____________________//
// const arr3 = arr2.slice(1,4);
// console.log("Array after slice operation: ",arr2);
// console.log(arr3);

// const arr4 = arr2.splice(1,4)
// console.log("Array after splice operation: ",arr2);
// console.log(arr4);
/*
In slice() original array remains uneffected 
In splice() operation original array gets manipulated
*/

const alpha = ['a','b','c','d'];
const numeric = [1,2,3,4,5];
// alpha.push(numeric); //push numeric array into alpha array
// console.log(alpha);
// const alphaNumeric = alpha.concat(numeric); //Combines two arrays/String and return new arrays/String
// console.log(alphaNumeric); 

// const Spred = [...alpha, ...numeric]; //spread operator
// console.log(Spred);

// const rec_arr = [1,2,3,['a','b','c'],4,['1a',['2b','3c','4d']]];
// console.log(rec_arr);
// const flat_arr = rec_arr.flat(Infinity);//--> returns a single array
// console.log(flat_arr);
// //validating an array
// console.log(Array.isArray(flat_arr));

//____Converting to array
// console.log(Array.from("12345"));
//Array.of(var1, var2,..,varN); //returns new array combining variables 









