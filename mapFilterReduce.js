// const radius = [3, 1, 2, 4];

// const area = function(radius) {
//     return Math.PI * radius * radius;
// }

// const circumference = function(radius) {
//     return 2*Math.PI * radius;
// };

// const diameter = function(radius) {
//     return 2*radius;
// };

// const calculateArea = function (radius, logic) {
//     const output = [];
//     for (let i = 0; i < radius.length; i++) {
//         output.push(logic(radius[i]));
//     }
//     return output;
// }

// console.log(calculateArea(radius,area));
// console.log(calculateArea(radius,circumference));
// console.log(calculateArea(radius,diameter));

// function getRandomArbitrary(min, max) {
//     return Math.random() * (max - min) + min;
// }

// MAP Function

// const arr = [1, 2, 3, 4, 5, 6, 7, 8];

// function double(x){
//     return x % 2;
// }

// const output = arr.map(double);
// console.log(output);

// Filter function

// const arr = [1, 2, 3, 4, 5, 6, 7];
// function isEven(x) {
//     return x % 2;
// }

// const output = arr.filter(isEven);
// console.log(output);

// const arr = [1, 2, 3, 4, 5, 6, 7];
// function greater(x) {
//     return x >4;
// }

// const output = arr.filter(greater);
// console.log(output);

// Reduce Function
// 1. Sum
// const arr = [1, 2, 3, 4, 5, 6, 7];

// const output = arr.reduce(function(acc, curr){
//     acc = acc+curr;
//     return acc;
// },0);

// console.log(output);
// 2. Max

// const output = arr.reduce(function(max, curr){
//     if (curr>max){
//         max = curr;
//     }
//     return max;
// },0);

// console.log(output);
// Map Example
// const users = [
//   { firstname: "John", lastname: "Amph", age: 26 },
//   { firstname: "Ampy", lastname: "samp", age: 75 },
//   { firstname: "Qureshi", lastname: "jumo", age: 57 },
//   { firstname: "Lamp", lastname: "sumi", age: 26 },
// ];
// const output = users.map((x)=>x.firstname+" "+x.lastname);

// const output = users.reduce(function(acc, curr){
//     if(acc[curr.age]) {
//         acc[curr.age] = ++acc[curr.age];
//     } else {
//         acc[curr.age] = 1;
//     }
//     return acc;
// }, {});

// show name whose age is less than 30

// const output = users
//   .filter((x) => x.age < 30)
//   .map((x) => x.firstname + " " + x.lastname);

// console.log(output);
