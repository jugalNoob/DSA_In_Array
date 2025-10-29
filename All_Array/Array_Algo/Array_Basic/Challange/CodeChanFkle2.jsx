000:::Important ::::::
console.log('18');console.log(18)
alert('Hello'); alert('World');

0000:::::::::Important :::::
console.log( true == 1 ); // true
console.log( false == 0 ); // true

00::Important::::00000000000
console.log(new Array(1 , 2))
console.log(Array(2))

0::::Important :::::::::::
[a]=[1 , 2 , 3 , 4]
console.log(a)


0:::::::Important ::::::::
let num=1
const sum=++num + num++
console.log(sum)


0::::::Important ::::::::::::::
let a=10;
let b=a++;
console.log(a+b)
console.log(b)


0::::::Important ::::::::
let n='20'
console.log(n+1)
console.log(++n)
console.log(n++)


0::::Importtant  :::::::::::
let one='jugalsharma'
let twoi='kkskslsl'
console.log(one && twoi)
.. && does not convert result to bolen 
..check value fron left yo right

console.log(Boolean(one&&two))

0::::::Important :::::::::::
var magic=1
function magic(){  // function run first after var

    console.log('hello world')
}

magic()

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



2:::::: Important -------------->
🧠 Step 2: Operator precedence

* (multiplication) has higher precedence than 
+ (addition) in JavaScript.

So the multiplication part runs first.

So the multiplication part runs first.
let a=5
let b=10
console.log(a+b+2)
console.log((a + b) * 2); // (5 + 10) * 2 = 30
console.log(10 * 2 + 5 * 4);
👉 Step 1: Do the multiplications first 
(because * has higher precedence than +):

10 * 2 = 20

5 * 4 = 20

👉 Step 2: Add them together:

20 + 20 = 40

✅ Output:

const Important=async()=>{
    
    console.log('one')

 console.log('two')

  console.log('three')
}

Important()

console.log('four')

console.log('five')


const Important=async()=>{
    
    console.log('one')

 await console.log('two')

  await  console.log('three')
}

Important()

console.log('four')

console.log('five')


Step-by-Step Execution:

Call the function Important()

The async function starts running synchronously until the first await.

Inside Important():

console.log('one') → prints one immediately

First await: await console.log('two')

console.log('two') executes immediately

The continuation of the async function after await is put into the microtask queue

Function pauses here

Outside the async function (synchronous code continues):

console.log('four') → prints four

console.log('five') → prints five

Microtasks execute: resume async function after first await

console.log('three') → prints three

console.log('jugal') → prints jugal


Step-by-Step Concept Table


| Step | What happens                     | Output                                              |
| ---- | -------------------------------- | --------------------------------------------------- |
| 1    | Call `Important()`               | —                                                   |
| 2    | `console.log('one')`             | `one`                                               |
| 3    | `await console.log('two')`       | `two` printed, function pauses, microtask scheduled |
| 4    | Synchronous code outside runs    | `four` & `five`                                     |
| 5    | Microtask resumes async function | `three` & `jugal`                                   |




