1️⃣ Global Scope

Variables declared outside of any function or block have global scope.

Accessible anywhere in your code (unless shadowed by a local variable).

In browsers, var creates a property on the window object (global object).


var globalVar = "I am global";

function printGlobal() {
    console.log(globalVar); // Accessible here
}

printGlobal();
console.log(globalVar); // Also accessible here

✅ Key points:

Global variables live for the lifetime of the program.

Avoid overusing global variables to prevent conflicts.



2️⃣ Block Scope

Variables declared with let or const inside a block { ... } are block-scoped.

They cannot be accessed outside that block.

var is not block-scoped (function-scoped instead).

Example:

{
    let blockVar = "I exist only in this block";
    const blockConst = "Me too!";
    var varVar = "I ignore block scope"; // Not block-scoped
    console.log(blockVar); // Works
}

console.log(typeof blockVar); // undefined
console.log(typeof blockConst); // undefined
console.log(varVar); // Accessible, because var ignores block scope


✅ Key points:

Always use let or const for block-scoped variables.

Helps prevent accidental global variable creation.

3️⃣ Lexical Scope (Static Scope)

The scope of a variable is determined by its position in the code at write time (not run time).

Inner functions can access variables from their outer (enclosing) functions.

This is why closures work in JavaScript.

Example:

function outer() {
    let outerVar = "I am outside!";

    function inner() {
        console.log(outerVar); // Can access outerVar due to lexical scope
    }

    inner();
}

outer();


✅ Key points:

Lexical scope is static: determined when the code is written.

Inner functions remember variables from outer functions.


| Scope Type    | Declaration      | Accessible Where                      | Lifetime              |
| ------------- | ---------------- | ------------------------------------- | --------------------- |
| Global Scope  | var, let, const  | Anywhere in code                      | Whole program         |
| Block Scope   | let, const       | Inside the block `{ ... }`            | Block execution       |
| Lexical Scope | Functions/Blocks | Inner function can access outer scope | While function exists |



🧭 Step-by-Step Breakdown

Declaration:
This is the first step where you declare a variable using one of the keywords: var, let, or const.

Example:

let course;


Initialization:
Here, you assign a value to the declared variable.

Example:

course = "JavaScript Interview Questions";


Assignment:
This is the process of assigning a value to a variable. In the example above, "JavaScript Interview Questions" is the assigned value to the variable course.

Example:

let course = "JavaScript Interview Questions";

🧠 Understanding var, let, and const

var:
Introduced in ES5, var is function-scoped and can be re-declared and updated within its scope. However, it has some quirks, such as hoisting, which can lead to unexpected behavior.

Example:

var course = "JavaScript Basics";
var course = "Advanced JavaScript"; // No error


let:
Introduced in ES6, let is block-scoped and can be updated but not re-declared within its scope. It helps in reducing errors related to variable declarations.

Example:

let course = "JavaScript Basics";
course = "Advanced JavaScript"; // Allowed
let course = "New Course"; // Error: Identifier 'course' has already been declared


const:
Also introduced in ES6, const is block-scoped and cannot be updated or re-declared. It's used for variables that should not change after their initial assignment.

Example:

const course = "JavaScript Basics";
course = "Advanced JavaScript"; // Error: Assignment to constant variable.

📌 Best Practices

Use let and const: Prefer using let and const over var to avoid issues like hoisting and accidental re-declarations.

Initialize variables: Always initialize variables at the time of declaration to avoid undefined values.

Use const by default: Use const unless you



1️⃣ Variable Declarations & Scope
Keywords: var, let, const
Keyword	Scope	Hoisting	Reassign	Redeclare
var	Function	Yes (initialized undefined)	Yes	Yes
let	Block	Yes (Temporal Dead Zone)	Yes	No
const	Block	Yes (TDZ)	No	No
Example:
function testVar() {
    var a = 1;
    if(true){
        var a = 2; // same variable, redeclared
        console.log(a); // 2
    }
    console.log(a); // 2
}

function testLetConst() {
    let b = 1;
    const c = 5;
    if(true){
        let b = 2; // different variable in block
        const c = 10; // different variable in block
        console.log(b, c); // 2, 10
    }
    console.log(b, c); // 1, 5
}

2️⃣ Hoisting

JavaScript moves declarations to the top of the current scope.

Only declarations, not initializations, are hoisted.

Example:

console.log(x); // undefined
var x = 5;

console.log(y); // ReferenceError
let y = 10;


var → hoisted & initialized with undefined

let/const → hoisted but in Temporal Dead Zone (TDZ)

3️⃣ Execution Context & Call Stack

Every JS execution involves:

Global Execution Context (GEC)

Created when script runs.

Contains global variables and functions.

Function Execution Context (FEC)

Created for each function call.

Has its variable environment, scope chain, and this.

Call Stack Example:

function first(){
    second();
    console.log("first");
}
function second(){
    console.log("second");
}
first();


Call Stack:

[Global Context]
  -> first() called
      -> second() called

4️⃣ Lexical Scope & Closures

Lexical scope → Scope is defined where the function is written, not called.

Closure → Function retains access to its outer scope even after outer function finishes.

Example:

function outer() {
    let outerVar = "I am outer";
    return function inner() {
        console.log(outerVar);
    }
}

const innerFn = outer();
innerFn(); // I am outer


Closures are used for:

Data encapsulation

Function factories

Memoization

Event handlers

5️⃣ The this Keyword

Refers to context of execution:

Global context → this = window (browser) / global (Node)

Function context → depends on how function is called

Arrow function → this is lexically bound

Example:

const obj = {
    name: 'Jugal',
    greet: function() {
        console.log(this.name);
    },
    arrowGreet: () => {
        console.log(this.name);
    }
}

obj.greet(); // Jugal
obj.arrowGreet(); // undefined (lexical this points to global)

6️⃣ Event Loop & Asynchronous JS

Call Stack → executes synchronous code

Task Queue / Microtask Queue → handles asynchronous callbacks

Event Loop → ensures non-blocking execution

Example:

console.log("Start");

setTimeout(() => console.log("Timeout"), 0);

Promise.resolve().then(() => console.log("Promise"));

console.log("End");


Output:

Start
End
Promise
Timeout

7️⃣ Prototypes & Inheritance

Every object has a prototype.

Properties/methods are inherited through prototype chain.

__proto__ vs prototype:

obj.__proto__ → object’s prototype

Func.prototype → object created by constructor inherits from here

Example:

function Person(name){
    this.name = name;
}
Person.prototype.greet = function(){ console.log("Hi " + this.name); }

const p = new Person("Jugal");
p.greet(); // Hi Jugal

8️⃣ JavaScript Types & Coercion

Primitive: string, number, boolean, null, undefined, symbol, bigint

Reference: objects, arrays, functions

Type coercion:

console.log('5' - 2); // 3 (string → number)
console.log('5' + 2); // '52' (number → string)
console.log([] == false); // true

9️⃣ Modules & ES6 Features

ES6 Modules:

// export.js
export const pi = 3.14;

// import.js
import { pi } from './export.js';


Other features: destructuring, template literals, arrow functions, spread/rest operators, default params.

10️⃣ Error Handling & Debugging

try...catch for runtime errors

throw custom errors

console methods for debugging

DevTools breakpoints & stack traces

✅ Summary of Deep JS Fundamentals

Variable types & scopes: var, let, const

Execution contexts & hoisting

Lexical scope & closures

this keyword & arrow functions

Event loop & asynchronous JS

Prototypes & inheritance

Types & coercion

Modules, ES6 features

Error handling & debugging

If you want, I can make a full ASCII diagram showing sc




17️⃣ Memory Management & Garbage Collection

Stack vs heap memory

Reference counting & closures

Avoiding memory leaks

18️⃣ Modules & Bundlers

ES6 Modules, CommonJS

Webpack, Rollup, Vite

Tree-shaking & code splitting

19️⃣ Design Patterns

Module pattern

Observer pattern

Singleton pattern

Factory & Prototype pattern

MVC & MVVM concepts in front-end

20️⃣ Performance Optimization

Debouncing & throttling

Lazy loading, virtual DOM

Efficient DOM updates & reflows

Event delegation

✅ Bonus for Pro Developers

TypeScript basics

Testing: Jest, Mocha

Security: XSS, CSRF prevention

Web APIs: Fetch, WebSockets, IndexedDB



                         ┌─────────────┐
                         │  JavaScript │
                         │   Mastery   │
                         └─────┬───────┘
                               │
           ┌───────────────────┴───────────────────┐
           │                                       │
       ┌───▼───┐                               ┌───▼───┐
       │ Core  │                               │ Advanced │
       └───┬───┘                               └───┬───┘
           │                                       │
  ┌────────┼─────────┐                  ┌──────────┼───────────┐
  │        │         │                  │          │           │
┌─▼─┐   ┌─▼─┐     ┌─▼─┐              ┌─▼─┐      ┌─▼─┐       ┌─▼─┐
│Var│   │Types│   │Func│              │Clos│     │Exec│       │This│
└───┘   └─────┘   └────┘              └────┘     └────┘       └────┘
  │        │         │                  │          │           │
  │        │         │                  │          │           │
  │        │         │                  │          │           │
  │        │         │                  │          │           │
  │        │         │                  │          │           │
  │        │         │                  │          │           │
  │        │         │                  │          │           │
  │        │         │                  │          │           │
  │        │         │                  │          │           │
  └────────┴─────────┘                  └──────────┴───────────┘
           │                                       │
           │                                       │
           │                                       │
           ┌─────────────┐                ┌──────────────┐
           │ Pro / Expert│                │ Tools & APIs │
           └─────┬───────┘                └─────┬────────┘
                 │                               │
   ┌─────────────┼───────────────┐       ┌───────┼─────────┐
   │             │               │       │       │         │
┌──▼───┐     ┌───▼───┐       ┌───▼───┐ ┌─▼─┐  ┌─▼─┐   ┌──▼───┐
│Promises│  │Async/Await│   │EventLoop│ │DOM│  │RegEx│ │Perf │
└───────┘  └──────────┘   └─────────┘ └───┘  └────┘  └──────┘
   │             │               │
┌──▼───┐     ┌───▼───┐       ┌───▼───┐
│Error │     │Closures│       │Memory │
│Handling│  │        │       │Mgmt   │
└───────┘  └────────┘       └───────┘




Explanation:

Core Concepts

var/let/const, data types, functions

Variable scoping, hoisting, type coercion

Advanced Concepts

Closures, execution context, call stack

this, prototypes & inheritance, event loop

Pro / Expert

Promises, async/await, error handling

Memory management, performance optimization

Tools & APIs

DOM manipulation, RegEx, Web APIs, testing, modules