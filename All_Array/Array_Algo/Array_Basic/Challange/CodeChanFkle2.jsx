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


