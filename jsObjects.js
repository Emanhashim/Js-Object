


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


 //empty js object add prorties later

 const persons = {}
 persons.firstname = "susu";
 persons.lastname = "robel";
 persons.age = 28;

 console.log(`${persons.firstname} ${persons.age}`)


//this will create a js object with new keyword

const cat = new Object();
cat.name = "alice";
cat.age = 2;

console.log(`${cat.name} ${cat.age}`)



/**
 * Object Constructor Functions
Sometimes we need to create many objects of the same type.

To create an object type we use an object constructor function.

It is considered good practice to name constructor functions with an upper-case first letter.
 */


//this is a constructor function
function Artist(first, last, age, sex){
  this.first = first;
  this.last = last;
  this.age=age;
  this.sex=sex;

}

//now create an instance of Artist, we can create as many obejct as we want
const Art = new Artist("nunu","lala",6 , "Female")

const hi = new Artist("kel", "kuku", 56, "male")

console.log(`${Art.first} ${Art.last} ${Art.age} ${Art.sex}`)

console.log(`${hi.first} ${hi.last}, ${hi.age}, ${hi.sex}`)



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
    







