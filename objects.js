// for of Loop 
// const name = 'Wes Bos';
// for(const letter of name){
//     console.log(letter);
// }

// const numbers = [5, 54, 23, 98, 21, 39, 87,77];

// for(const number of numbers){
//     console.log(number);
// }

// const wes = {
//     name: 'wes',
//     age: 100,
//     cool: true
// }

// for(const prop in wes){
//     console.log(prop);
// }

// const baseHumanStats = {
//     feet: 2,
//     arms: 2,
//     eyes: 2,
//     head: 1
// };

// function Human(name){
//     this.name = name;
// }
// Human.prototype = baseHumanStats;
// const wes2 = new Human('wes');

// while loop 

// let cool = true;
// while(cool === true){
    //     console.log('You are cool');
    // }
    
    // do while loop 
    
//     let cool = true;
// do {
    
//         console.log('You are cool');
// }while(cool === false);

// objects in JS 

// const person = {
//     name: 'John',
//     age: 100,
//     clothing: {
//         shirts: 10,
//         pants: 2,
//     }
// };

// person.job = 'Web Developer';
// person.age = 50;

// console.log(person);


// const age = 100;
// const wes = new Object({
//     name: "wes",
//     propertyToCheck: "NEVER",
//     age,
//     "cool-dude": true,
//     "really-cool": false,
//     "777": true,
//     dog: "snickers",
//     clothings: {
//         shirts: 10,
//         pants: 2
//     },
//     sayHello: function(greeting = "Hey") {
//         return `${greeting} ${this.name}`;
//     }
// });

// console.log(wes.age);
// const propertyToCheck = prompt("What would you like to check?");
// console.log(propertyToCheck);
// console.log(wes[propertyToCheck]);

// const nameInput = document.querySelector('[name="first"]');
// const name = nameInput.value;
// console.log(name);
// Delete from the object
// console.log(delete wes.name);


// const currencies = {
//   USD: "United States Dollar",
//   AUD: "Australian Dollar",
//   BGN: "Bulgarian Lev",
//   BRL: "Brazilian Real",
//   CAD: "Canadian Dollar",
//   CHF: "Swiss Franc",
//   CNY: "Chinese Yuan",
//   CZK: "Czech Republic Koruna",
//   DKK: "Danish Krone",
//   GBP: "British Pound Sterling",
//   HKD: "Hong Kong Dollar",
//   HRK: "Croatian Kuna",
//   HUF: "Hungarian Forint",
//   IDR: "Indonesian Rupiah",
//   ILS: "Israeli New Sheqel",
//   INR: "Indian Rupee",
//   JPY: "Japanese Yen",
//   KRW: "South Korean Won",
//   MXN: "Mexican Peso",
//   MYR: "Malaysian Ringgit",
//   NOK: "Norwegian Krone",
//   NZD: "New Zealand Dollar",
//   PHP: "Philippine Peso",
//   PLN: "Polish Zloty",
//   RON: "Romanian Leu",
//   RUB: "Russian Ruble",
//   SEK: "Swedish Krona",
//   SGD: "Singapore Dollar",
//   THB: "Thai Baht",
//   TRY: "Turkish Lira",
//   ZAR: "South African Rand",
//   EUR: "Euro",
// };

// console.log(currencies);

// const optionHTML = generateOptions(currencies);
// console.log(optionHTML);

// function generateOptions(options) {
//   return Object.entries(options).map(([currencyCode, currencyName]) => {
//     console.log(currencyCode, currencyName);
//   });
// }

// const name = [1,2,4,2,8,5,745,42];

// for(const letter of name){
//     console.log(letter);
// }

// for(const letter of name){
//     console.log(letter);
// }
