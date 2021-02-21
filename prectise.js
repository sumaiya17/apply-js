// variable : let, const
// let money = 20;
// money = 12; 

// const name = 'kuddus';

// const person = {
//     name:kuddus,
//     age: 49,
//     city: 'dhaka'
// }
// const statement = `this person ${name} with age ${person.age}`;

// // condition
// if(money > 20 && age >= 45){

// }
// else{

// }

// // array
// const numbers = [38, 27, 49];
// const friends = ['jhanker', 'motiur']
// // const products = [{name: 'laptop', price:500}, {name: 'mobile', price:100}];

// // loop:for loop
// for (let i = 0; i < numbers.length; i++) {
//     const number = numbers[i];  
// }

// // function
// function add(num1, num2) {
//     return num1 + num2;
// }
// const result = add(45, 65);

// // arrow function

// const add2 = (num1, num2) => num1 + num2;
// const fiveTimes = num1 => num1 * 5;

// const doMath = (x, y) => {
//     const sum = x + y;
//     return sum * 2;
// }

// // Array methods map Filter,find, forEach

// const numbers = [4, 5, 5, 35, 45];
// const friends = ['salam', 'Rafiq', 'barkat']
// const products = [
//     {id: 1, name: 'laptop', price: 500},
//     {id: 2, name: 'phone', price: 100},
//     {id: 3, name: 'watch', price: 20},
//     {id: 4, name: 'tab', price: 80}
// ];

// map
// const names = products.map(product => product.name);
// const prices = products.map(pd => pd.price);
// console.log(prices);

// forEtch
// products.forEach(product => console.log(product.name));


// filter 
// const cheaper = products.filter(pd => pd.price < 100);
// console.log(cheaper);
// remove an item using filter
// const remaining = products.filter(pd => pd.id != 3);
// console.log(remaining);

// find
// const hasWatch = products.find(pd => pd.name === 'watch');
// console.log(hasWatch);

// push
// pop
// length
// indexOf



// Array and object Destructuring and three dots:
// array destructuring
const numbers = [54, 98];
// const x = numbers[0];
// const y = numbers[1];
// const [x, y] = [54, 98];
// const [x, y] = numbers;

// function boxify(num1) {
//    return [num1, num1 + 5]; 
// }

// const [box1, box2] = boxify(8);
// console.log(box1, box2);

// Object destructuring 

// const {name, age} = {id: 2, name: 'rohim', age: 25, money: 45};
// console.log(name, age);


// three dots
// numbers.push(54);
// new array using three dots
// const nerNumbers = [...numbers, 56];

// JS shortcut Ternary default parameter and or
// const money = 150;
// const active = true;
// let food;
// if(money > 100){
//     food = 'biriany'
// }
// else{
//     food = 'alur vorta';
// }


// // ternary
// // condition ? true value : false value
// let food = money > 100 ? 'biriany' : 'alur vorta';

// const cssClass = active ? 'active' : 'inactive';
// // function call shortcut alternative
// active ? displayUser() : hideUser();

// active && displayUser()
// active || displayUser()

// // number to string 
// const numText = 45 + '';
// // string to number
// const number = +'45';

// // default parameter
// function add(num1, num2 = 5){
//     // num2 = num2 || 5;
//     return num1 + num2;
// }
// add(54)

// JSON convert back and forth
const person = {
    name:'abul',
    age: 45
};
const data = JSON.stringify(person);
const dataParsed = JSON.parse(data);
// console.log(dataParsed.name);

// api fetch
// fetch('url')
// .then(res = res.json())
// .then(data => console.log(data));

// local storage
// localStorage.setItem('userId', 1245);
const userId = localStorage.getItem('userId');
localStorage.setItem('person', JSON.stringify(person));
 const storedPerson = localStorage.getItem(person);
 const parsedPerson = JSON.parse(storedPerson);
 console.log(parsedPerson.age);

const keys =  Object.keys(parsedPerson);
console.log(keys);
const values = Object.values(parsedPerson);
console.log(values);
