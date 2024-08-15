const user = {
    username: "Steve Rogers",
    NickName: "Captain America",

    welcomeMessage:function(){
        console.log(`${this.username}, welcome to Avengers`);
        console.log(this);//displays the current context
        
    }
}

// user.welcomeMessage()
// user.username = "Peter Parker" //user context changed here
// user.welcomeMessage()
// console.log(this);//Global context

// function fun1(){
//     let username = "Scot";
//     console.log(this.username); //returns undefined, this only works in objects
// }
// fun1()
//____________________________________  Arrow Function _________________________________//

// const fun2 = function(){
//     let username = "Scot";
//     console.log(this.username); //returns undefined, this only works in objects
// }
// fun2()
// const fun2 = () =>{
//     let username = "Peter Scott";
//     console.log(this);
// }
// fun2()

//Explicit return
// const addTwo = (n1, n2) =>{
//     return (n1+n2);
// }

//Implicit return
// const addTwo = (n1, n2)=> (n1+n2)
// console.log(addTwo(34,6));

//returning an object in arrow function
// const Obj = (Name)=> ({username: Name})
// console.log(Obj("Bucky Barnes"));

