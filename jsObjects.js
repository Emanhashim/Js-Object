


const person = {
  firstName : "John",
  lastName  : "Doe",
  age     : 50,
  eyeColor  : "blue"
};


console.log(`${person.firstName} is ${person.age} years old`);



//like creating a js object is like


const  eman = {firstname:"eman", lastname:"hashim", height:56};
console.log(eman.height);

/**
 so js obect has name of variable and value
 */


 //we can creat an oblect like two ways empty object and value added object like 

 const emann ={fn : "emaniti",  ln :"dad"};
 console.log(`${emann.fn} ${emann.ln}`)


 //the second we create an object with out initation intial value of the object

 const sara = {}
 sara.fnn = "sarah";
 sara.lnn = "hashimm";
 sara.height = 60;
 sara.weigth = .10

 console.log(`${sara.fnn} ${sara.lnn} ${sara.height} ${sara.weigth}`)

//the other way to do an object is using a new keyword to it

const mom = new Object();
mom.firstName = "hawa";
mom.lastName = "ahmed";
mom.age = 57

console.log(`${mom.firstName} ${mom.lastName} ${mom["age"]}`);


const dad = {};
    dad.fn="hashim";
    dad.ln ="mohammed";

    dad.fulname= function(){
        return this.fn   + " " + this.ln;
    }

console.log(dad.fulname());
    







