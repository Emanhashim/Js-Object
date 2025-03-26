/**
 * so Declared functions are not executed immediately. 
 * They are "saved for later use", and will be executed later, when they are invoked (called upon).
 */

// function declaration with no passing value only return static value
function fun(){
    return "hello function method one"
}

console.log(fun())

//here we pass parameter which can be used once declared like the object does
function fun2(firstname, lastname){
    return{ firstname: firstname,  lastname: lastname};
   }


const fulname = fun2("eman", "hashim")
const fulname2 = fun2("ass", "hire")
console.log(fulname)
console.log(fulname2)

//js has a built in function constructor 
const myfunction = new Function("a", "b","return a * b")

console.log(myfunction(4,4))


// or same as the above

const myfunction2 =  function(a, b) {
 return  a * b;
}
console.log(myfunction2(5 , 6))

// lets talk about arrow functions Arrow Functions
//Arrow functions allows a short syntax for writing function expressions.

//You don't need the function keyword, the return keyword, and the curly brackets.

//ES6
const x = (x=6, y=7) => x * y;

const z = (c =3,d=6) => {return c + d}

console.log(x())
console.log(z())
