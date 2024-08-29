/*
The reduce() method of Array instances executes a user-supplied "reducer" callback function on each element of the array, in order, 
passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements
 of the array is a single value.

The first time that the callback is run there is no "return value of the previous calculation". If supplied, an initial value may be used 
in its place. Otherwise the array element at index 0 is used as the initial value and iteration starts from the next element (index 1 instead of index 0).
*/

const nums = [1,2,3,4];
//initialValue is assigned to accumulator only once at the beginning 
const initialValue = 0;
// const total = nums.reduce((accumulator, currValue) =>{
//     //See the value of accumulator and currValue
//     //console.log(`accumulator: ${accumulator}, currVal: ${currValue}`);
//     return accumulator + currValue;
// }, initialValue)

// console.log(total);

const shopCart = [
    {
        itemName: "Java Course",
        price: 344
    },
    {
        itemName: "Python Course",
        price: 300
    },
    {
        itemName: "Machine Learning Course",
        price: 400
    },
    {
        itemName: "Web Development Course",
        price: 350
    }
]
//Build a functionality to add all the prices of shopCart

const totalPrice = shopCart.reduce((accu, curr)=>{
    return accu + curr.price
}, 0)

console.log(`Total price of all the courses: ${totalPrice}`);


