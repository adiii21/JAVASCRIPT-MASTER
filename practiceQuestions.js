// Loops in javaScript

// for each is used to iterate every single elements
// const toppings = ["paneer", "Tomato", "Onion", "Potato", "Aalo"];

// function toppingLog(toppingLog){
//     console.log(toppingLog);

// }

// toppings.forEach((topping,i,arr) => console.log(topping,i,arr));


// function logTopping(topping, index, originalArray){
//     console.log(originalArray);
// }

// var count = 0; 
// (() => { if(count === 0) { 
//     var count = 2; console.log(count) 
// } console.log(count); 
// } )()

// var x = 10;
// function f() {
//   console.log(x);
//   var x = 20;
// }
// f();

// const arr = [1, 2, 3];
// arr["ad"] = 10;
// console.log(arr.length);

// const obj = { a: 1, b: 2 };
// for (let prop in obj) {
//   console.log(prop);
// }

// const a = [1, 2, 3];
// const b = [...a];
// console.log(b === a);

// const foo = () => {
//     console.log("foo");
//   };
//   const bar = () => {
//     console.log("bar");
//     foo();
//   };
//   bar();

// const x = { a: 1 };
// const y = { b: 2 };
// const z = { ...x, ...y };
// // console.log(z);

// const x = 10;
// function foo() {
//   console.log(x);
// }
// (function () {
//   const x = 20;
//   foo();
// })();

// let x = 1;
// x++;
// const y = x++;
// console.log(y);

// Destrut
// const arr = [1, 2, 3, 4, 5];
// const [a, b, ...c] = arr;
// console.log(c);

// const x = { a: 1 };
// const y = { b: 2 };
// x[y] = 3;
// console.log(x);

// const x = [1, 2, 3];
// console.log(Math.max(...x));

// const x = 1;
// const y = 2;
// const z = 3;
// const sum = (x, y, z) => x + y + z;
// console.log(sum(...[x, y, z]));

// function Foo() {}
// Foo.prototype.x = 10;
// const foo = new Foo();
// console.log(foo.x);

// function Foo() {}
// const foo = new Foo();
// console.log(Foo.prototype === foo.__proto__);

// function Foo() {}
// Foo.prototype.x = 10;
// const foo = new Foo();
// foo.x = 20;
// console.log(foo.x);

// function Foo() {}
// Foo.prototype.x = 10;
// const foo = new Foo();
// Foo.prototype = { x: 20 };
// console.log(foo.x);

// function Foo() {}
// Foo.prototype.x = 10;
// function Bar() {}
// Bar.prototype = Object.create(Foo.prototype);
// const bar = new Bar();
// console.log(bar.x);










  







