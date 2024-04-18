// Primitive 

// 7 types :String,Number,null,Boolean,Undefined,Symbol,BigInt


// Reference(Non Primitive)

// Array, Objects,Functions


/*JavaScript is a dynamically typed language, 
which means that data types of variables are determined by the value they hold at runtime
and can change throughout the program as we assign different values to them*/

const id=Symbol('123')
const anotherId=Symbol('123')
console.log(id)
console.log(anotherId)

console.log(id==anotherId)

//Symbol represents a unique value that can be used as identifiers or keys in object
//datatype of null is a object
const heros=["spiderman","batman","superman"] //array
let myObj={
    name:"payash",
    age:25,
    sex:"male",
}//object  creation

const myFunction=function(){
    console.log("hello world")
}
// function(){} this is function defination

//datatype of a function is a function object

//non primitive datatype is a object


//**********************************

let userOne={
    email: "payash.agarwal@gmail.com",
    upi: "user@ybl"
}


let userTwo=userOne

userTwo.email="user@google.com"

console.log(userOne)
console.log(userTwo)

let x=4
let y=x
y=5
console.log(x)
console.log(y)


// for primitive datatypes value is stored in stack memory in which we get the copy

// for non primitive it is stored in heap memory and we get a reference of original value