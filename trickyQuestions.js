let a;
let b;
function foo(b) { /* here b is passed as a parameter thats 
why b is created as a blocked scoped variable, and never initialize any value outside the block scope*/
  {
    a = 3;
    b = 4;
  }
}
foo(10);
console.log(a);
console.log(b);

//Q2;

// Behind the Scene
let a; // a = undefined
function foo(param) {
    param = 10; // param is the parameter
    if (10) {
        param = 3;
        b = 4; // b gets initialized in the Global scope or Window
    }
}
foo(10);
console.log(a);  // undefined
console.log(b);  // 4
