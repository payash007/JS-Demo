let accountCity ="Jhansi"
let varInNumber= Number(accountCity)
//console.log(varInNumber)
//console.log(typeof varInNumber)


/* Converting string value to a number will give NAN but the type will be a Number since type of NAN is a Number */

let varInBoolean= Boolean(accountCity)
//console.log(varInBoolean)
//console.log(typeof varInBoolean)

/* Converting a String to a Boolean Value will give true and the type will be boolean */
//type of null is a object

/*let accountNumber="33abc"
let varInString= String(accountNumber)
console.log(varInString)
console.log(typeof varInString)*/

let accountName=null
//console.log(accountName)
//console.log(typeof accountName)
let accountNumber=Number(accountName)
//console.log(accountNumber)
//console.log(typeof accountNumber)

/* If we convert null to a number it gives the value 0 and the type is a number */

let score = undefined
//console.log(score)
//console.log(typeof score)
let varInNumber1 =Number(score)
let varInString = String(score)
//console.log(varInNumber1)
//console.log(typeof varInNumber1)

//console.log(varInString)
//console.log(typeof varInString)

/* If we convert a undefined value to a number it gives NAN and type is a number 
   If we convert a undefined value to a string it gives undefined and type is a string */

let  value1= false
//console.log(value1)
//console.log(typeof value1)

let varInString1= String(value1)
//console.log(varInString1)
//console.log(typeof varInString1)

let varInNumber2 =Number(value1)
//console.log(varInNumber2)
//console.log(typeof varInNumber2)

/* If we convert a Boolean value(true) to a string it gives true and type is string 
   If we convert a Boolean value(true) to a number it gives 1 and type is a number */


/*Converting a empty string to boolean will give false
  Converting a non empty string to boolean will give true */

// ***********************Operations*************************//

let value=3
let negValue= -value
//console.log(negValue)


/*console.log("1"+2);
//output 12
console.log(1+"2");
//output 12
console.log("1"+2+2);
//output 122
console.log(1+2+"2");
//output 32 */



//console.log(2+"1"+2);

let x = 3;
const y = x++;

//console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

//console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"

// always compare values having same datatype

//Comparisons convert null to a number, treating it as 0 that's why null >=0 gives true, null>0 is false

//=== checks datatype also

console.log(null>0)//false
console.log(null<0)//false
console.log(null>=0)//>= or <= usko 0 mai convert kr deta that's whay gives true
console.log(null<=0)

console.log(null==undefined)//true
console.log(null>undefined)//false

console.log(undefined==0)
console.log(undefined>0)
console.log(undefined<0)
console.log(undefined>=0)

