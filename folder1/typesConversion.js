
//take a string variable
let var1 = "345ad6"
console.log(typeof var1);   // either typeof(var1) or typeof var1 both works
let var1Int = Number(var1)
console.log(typeof(var1Int));
console.log("Converted string to number: ",var1Int);

//Note: For conversion to Number
//1. Numeric string --> Numeric Value[e.g "33" --> 33]
//2. Alphanumric string --> NaN(Not a number) which is also a number type[e.g "abcd33" --> NaN]
//3. Boolean converts to 0 or 1 based on value[e.g true --> 1 and false --> 0]

//Conversion to Boolean| syntax: Boolean(var)
//1. 1 --> true, 0 --> false
//2. "" --> false[Empty strings coverts to false]
//3. "abcd" --> true[Strings with value converts to true]

// Conversion to String| Syntax: String(var)




