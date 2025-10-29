1️⃣ var, let, const
var x = 1; let y = 2; const z = 3;
x = 10; y = 20; // ok
// z = 30; ❌ Error

console.log(x, y, z); // 10 20 3


console.log(18==18&& 18==18)
let x='jugal'
let y='name'
console.log(x&&y)
console.log(Boolean(x&&y))

::::: Important ::::::::::::::
0000:::::::::Important :::::
console.log( true == 1 ); // true
console.log( false == 0 ); // true



0:::::::Important ::::::::
let num=1
const sum=++num + num++
console.log(sum)


0::::::Important ::::::::::::::
let a=10;
let b=a++;
console.log(a+b)
console.log(b)


::::::::::::::

function CheckConduation(marke) {
    let name = marke + ' abuset'; // Concatenate marke with ' abuset'
    console.log(name);
}

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


0::::Important :::::::::::::::::
console.log([] == '')
console.log([]==='')




Q Why is Both Object ?
console.log(typeof {});      // object
console.log(typeof []);      // object

"use strict";
"use strict";

let a=10
b=a
console.log(b)

const c=10
d=c
console.log(d)



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


3::: Important Changgle ---------------------->>

console.log('10'+10+10)
➡ JavaScript evaluates left to right.

'10' + 10 → '1010' (because string + number = string concatenation)

'1010' + 10 → '101010' (string + number again → concatenation)


console.log(10+10+'10')
➡ Left to right:

10 + 10 → 20 (both are numbers → arithmetic addition)

20 + '10' → '2010' (number + string = string concatenation)
