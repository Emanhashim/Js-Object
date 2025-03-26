const status =['eman', 'hh', 27];
console.log(status[0], status[1], status[2])


const status1 =[];
status1[0] = "ruth";
status1[1] = "usa";
status1[2] = 26
console.log(status1)


const status3 = new Array("tutu", "lala", 78);
console.log(status3)
console.log(status3[1])



const fruit = ['banana', 'orange', 'apple'];
console.log(fruit.length)

const drinks = ['coffeee', 'tea', 'water']
console.log(drinks.toString())
console.log(drinks.at(2))

//pop removes and returns last element of the array
const fruit2 = ['ban', 'ora', 'ap'];
console.log(fruit2.pop()); 
console.log(fruit2.push('mango'));
console.log(fruit2.push('m'));
console.log(fruit2.shift());
console.log(fruit2);

const mygirls = ['kedija', 'rahmat', 'eman'];
const myboys = ['aslan', 'mohammed', 'hamza', 'ahmed'];

const mychilderns = myboys.concat(mygirls);
console.log(mychilderns);