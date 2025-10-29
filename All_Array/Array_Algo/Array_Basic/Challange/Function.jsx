| Part                | Name / Concept                   | Type             | Explanation                                                                                                   |
| ------------------- | -------------------------------- | ---------------- | ------------------------------------------------------------------------------------------------------------- |
| `function`          | **Function Keyword**             | Reserved Word    | Used to declare a function in JavaScript. It defines a reusable block of code.                                |
| `Main`              | **Function Name / Identifier**   | User-defined     | The name you assign to the function. Used to call (invoke) the function later.                                |
| `()` (after `Main`) | **Parameter List / Parentheses** | Syntax Structure | Holds parameters (if any). Example: `function Main(a, b) {}`. When calling, you pass arguments: `Main(1, 2)`. |
| `{ }`               | **Function Body / Block**        | Code Block       | Contains the executable statements that run when the function is called.                                      |
| Inside `{}`         | **Statements / Logic**           | Code             | Code that executes — like variable declarations, loops, conditions, etc.                                      |
| `Main()`            | **Function Call / Invocation**   | Operation        | Executes the function. The code inside `{}` runs when this is called.                                         |
| `;`                 | **Statement Terminator**         | Symbol           | Ends a statement (optional for function call but good practice).                                              |
| `//`                | **Single-line Comment**          | Comment          | Ignored by JS; used for documentation or notes.                                                               |
| *(implicit)*        | **Return Value**                 | Concept          | Every function returns something. If no `return` specified, it returns `undefined`.                           |
| *(concept)*         | **Hoisting**                     | Behavior         | Function declarations are hoisted — can be called before definition.                                          |
| *(concept)*         | **Scope**                        | Concept          | Variables declared inside function are accessible only inside it (local scope).                               |


Below I’ll label each part and explain what it does.

1. function

Keyword that declares a function in JavaScript.

Creates a callable block of code with its own local scope.

2. Main

Function name / identifier.

Used to refer to the function (to call it elsewhere, or for recursion).

Naming rules: letters/_, no spaces, camelCase usually.

3. () — the parentheses after the name

When declaring: they contain parameters (comma-separated names) — e.g. function Main(a, b) { ... }.

When calling (Main()): they invoke the function and may contain argument values — e.g. Main(1, 2).

4. { ... } — function body (curly braces)

The block that holds executable statements.

Local variables declared with let/const/var inside are scoped to this function (except var hoisting nuances).

5. Main() (the call / invocation)

Executes the function.

The JavaScript engine pushes a new frame on the call stack, runs the body, then returns control.

If the function uses return value;, that value is returned to the caller; otherwise undefined is returned.

6. Comments // break all part names

Inline comment; ignored by JS runtime.

Use // for single-line or /* ... */ for multi-line.

7. (Implicit) return

Not visible in your snippet. By default a function without return returns undefined.

Example with return: function Main(){ return 42; }

8. (Optional) Parameters & Arguments

Parameter: a named variable in the declaration: function Main(x, y) { ... }.

Argument: the actual value passed on call: Main(1, 2).

9. Hoisting (important behavior)

Function declarations (like yours) are hoisted: you can call Main() even before the definition in the same scope.

Main(); // works
function Main(){ console.log('hi') }


Function expressions (const Main = function(){} or arrow const Main = () => {}) are not hoisted in the same way — trying to call before assignment throws.

10. Variations / related syntax

Function declaration: function Main() {} — yours.

Function expression: const Main = function() {}.

Arrow function: const Main = () => {}.

Async function: async function Main() { await ... }.

Generator: function* Main(){ yield 1 }.

Quick annotated example
// declaration (hoisted)
function Main(name) {        // function (keyword) + name + (parameter list)
  const greeting = "Hi, " + name; // body
  return greeting;          // return value to caller
}

const result = Main("Jugal"); // invocation with argument
console.log(result);          // "Hi, Jugal"

Call stack / runtime notes (brief)

Calling Main() pushes a new stack frame.

Local variables live in that frame.

When function finishes, frame is popped and (optional) return value is passed back.

Agar chaho, main isko expand karke:

show hoisting examples,

compare declaration vs expression,

or show how this, arguments, and arrow functions differ — batao kaunsa chahiye.



::::::::::::0000:::::::::::::::::::::


let two=455


function mainfunction(){
    let one='k9osl'
    return one
}
console.log(mainfunction())
console.log(two)
console.log('one')


:::::::::Important  :::::::::
var foo='00'

function showName(){
    foo='innerFoo'
    return;
    function foo(){}
}
showName()
console.log(foo)


function nameChange(){};
nameChange='jugal sharma'
console.log(nameChange)



:::::::::Importantn ::::::::::::::::::

function myStudyPlan() { 
  var studyPlanOne = "Top JavaScript interview questions for web developers";
  let studyPlanTwo = "Top JavaScript interview questions for web developers";
  const studyPlanThree = "Top JavaScript interview questions for web developers"; 

  console.log(studyPlanOne); 
  console.log(studyPlanTwo);  
  console.log(studyPlanThree); 
} 

myStudyPlan(); // Calls the function 




function Main(){
    A=10
    console.log(A)
}
let A; 
Main()
let A;


:::::::::::::::::::::::::::::::::::::::::
function sum(num1 , num2){
'use strict'
    num1=100
    num2=200
    return arguments[0]+arguments[1]
}

console.log(sum(10 , 10))



function Twonew(a , b , c){
    return  a , b , c
}

console.log(Twonew(10 , 10 , 11 ))


function Twonew(a , b , c){
    return (a , b , c)
    return [a , b  , c]
    return a , b ,c
}

console.log(Twonew(10 , 10 , 11 ))


:::::::: Function  vs Const Function ::::::::::::

::: function and iffee function ::::: -------------------------------------???>>
//#endregio
function Main(){
 {
    (function(){
  var one='jugal'
 var two='karan'
    })()
 }
 console.log(one)
 console.log(two)
}
Main()


00:::importtant ::::::::
function magic(){
    return x=1,[],{};
}

console.log(magic())
2::
function magic(){
    return x=1, a=20 , c=69
}

console.log(magic())

2:::::::::::::::::::::::::::::: Hosting Important 

two()

console.log('two')

function two(){
    console.log('jugal sharna')
}

console.log('one')


const fn=new Function('a' , 'b' , 'return a + b')
console.log(fn(10 , 10))


:::::: Check Parameter::::::
function fn(){

    console.log(arguments)
}
fn('jugal sharma')


:::::::::::Dynamic ::::::::::
//-->dynimca function 
function  Fn(){
    console.log(this)
}


Fn.call({name:'jugals'})

:::::::::: ---------------->>

var fn=function show(){ //show() only for recussion use
    console.log('jugal sharma' ,show)
}

fn()




0::::::Important :::::::::::
var magic=1
function magic(){  // function run first after var

    console.log('hello world')
}

magic()


✅ Key takeaway:
Function declarations are hoisted before var 
assignments, but if a var assignment comes 
after, it overwrites the function at runtime.


    async function ApiFetech(){
    const [oneapi , twoapi,threeapis]=await Promise.all([
        fetch('https://jsonplaceholder.typicode.com/users'),
        fetch('https://jsonplaceholder.typicode.com/posts'),
        fetch('https://jsonplaceholder.typicode.com/todos/1')
    ])
    let oneapiu=await oneapi.json()
    console.log(oneapiu)

    let twoapiu=await twoapi.json()
    console.log(twoapiu)

    let three=await threeapis.json()
    console.log(three)
}

ApiFetech()

Tip: If any promise rejects, Promise.all rejects immediately. Use
 Promise.allSettled if you want all results regardless of errors.


 :::::::::: ---->>  Closusers ::::::::::::::::
function one() {
    let b = 10;

    function two() {
        b++;
        console.log(b);
    }

    return two;
}

const first = one();  // returns two()
const second = one();

first();  // 11
first();  // 12
second(); // 11 → independent closure
second(); // 11 → independent closure


11️⃣ Currying & Composition
const add = a => b => c => a+b+c;
console.log(add(1)(2)(3)); // 6

const compose = (f,g) => x => f(g(x));
const double = x => x*2;
const square = x => x*x;
console.log(compose(square,double)(5)); // 100



Interview focus: Super keyword, method overriding, prototypes

🔟 Event Loop + Async Deep Dive Example
console.log('Start');

setTimeout(()=>console.log('Timeout'),0);
Promise.resolve().then(()=>console.log('Promise 1'));
Promise.resolve().then(()=>{
    console.log('Promise 2');
    setTimeout(()=>console.log('Timeout 2'),0);
});

console.log('End');



3️⃣ Memory Management & Closures
function createCounter(){
    let count = 0;
    return {
        increment: ()=> ++count,
        decrement: ()=> --count
    };
}

const counter = createCounter();
counter.increment(); // 1
counter.increment(); // 2


Unlike Promise.all, it does not fail on first rejection

b) Promise.race
const fast = new Promise(res => setTimeout(()=>res('fast'),100));
const slow = new Promise(res => setTimeout(()=>res('slow'),200));



Perfect! Let’s go all the way to Level 3 / Expert JavaScript Interview Sheet — this will cover advanced concepts, deep async patterns, memory management, functional programming, proxies, and more. This is what distinguishes an expert JS candidate in interviews.

🟢 Expert-Level JavaScript Interview Sheet
1️⃣ Deep Event Loop & Microtasks vs Macrotasks
console.log('Start');

setTimeout(()=>console.log('Timeout 1'),0);
Promise.resolve().then(()=>console.log('Promise 1'));
Promise.resolve().then(()=>console.log('Promise 2'));
setTimeout(()=>console.log('Timeout 2'),0);

console.log('End');




16️⃣ Generator Functions
function* gen() {
    yield 1;
    yield 2;
    yield 3;
}
const g = gen();
console.log(g.next().value); //1
console.log(g.next().value); //2


4️⃣ Scope (Global vs Local)~::::::::::::::::::::::
let x = 10; // global

function test() {
    let x = 20; // local
    console.log(x); // 20
}

test();
console.log(x); // 10

Global variables exist outside any function or block.

Local variables exist only inside the function/block where they are declared.


2️⃣ Default Parameters
function multiply(a, b=1) {
    return a*b;
}
console.log(multiply(5)); // 5

2️⃣ How it works

The function multiply takes two parameters: a and b.

b = 1 → This is a default parameter.

If the caller does not provide a value for b, it will automatically be 1.

multiply(5) → Only a is provided (a = 5).

b is not provided, so JS uses the default b = 1.

The function calculates:



:::::::::: ------------->>

function multiply(a, b) {
    return a * b;
}

console.log(multiply(5)); // ❌ NaN




2️⃣ What’s happening

The function multiply takes two parameters: a and b.

You call multiply(5) → only a is provided (a = 5).

b is not provided, so in JavaScript, missing parameters are undefined.

The function returns:




7️⃣ Currying
const multiply = a => b => a*b;
console.log(multiply(2)(3)); // 