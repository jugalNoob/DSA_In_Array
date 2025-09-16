🔹 What is Frequency in JavaScript?

In programming, frequency means how many times an element/value occurs in a collection (like an array, string, or object).

👉 Example:

let arr = [1, 2, 2, 3, 1, 4, 2];


1 appears 2 times → frequency = 2

2 appears 3 times → frequency = 3

3 appears 1 time → frequency = 1

4 appears 1 time → frequency = 1

So, frequency is basically a count of occurrences.


let data=[10 , 20 , 30 , 40 , 10]

let obj={}

for(let i=0; i<data.length; i++){

    let str=data[i]


    if(obj[str]){

        obj[str]++
    }else{

        obj[str]=1
    }
}

console.log(obj)


🔁 Loop Iteration Starts

🔄 First Iteration (i = 0)

let str = data[i];  // str = 10

if (obj[str]) { ... } else { obj[str] = 1; }

obj[10] is undefined, so it enters the else block.

obj[10] = 1
✅ obj becomes: {10: 1}

{10 : undefined}


🔄 Second Iteration (i = 1)

let str = data[i];  // str = 20

obj[20] is undefined, so obj[20] = 1

✅ obj becomes: {10: 1, 20: 1}



🔄 Third Iteration (i = 2)

let str = data[i];  // str = 30

obj[30] is not in obj, so it sets obj[30] = 1

✅ obj becomes: {10: 1, 20: 1, 30: 1}




🔄 Fourth Iteration (i = 3)


let str = data[i];  // str = 40

obj[40] is not in obj, so it sets obj[40] = 1

✅ obj becomes: {10: 1, 20: 1, 30: 1, 40: 1}


🔚 End of Loop

console.log(obj);



🧠 Summary Table:



| i | `data[i]` | `obj[data[i]]` exists? | Action        | `obj` result                   |
| - | --------- | ---------------------- | ------------- | ------------------------------ |
| 0 | 10        | No                     | `obj[10] = 1` | `{10: 1}`                      |
| 1 | 20        | No                     | `obj[20] = 1` | `{10: 1, 20: 1}`               |
| 2 | 30        | No                     | `obj[30] = 1` | `{10: 1, 20: 1, 30: 1}`        |
| 3 | 40        | No                     | `obj[40] = 1` | `{10: 1, 20: 1, 30: 1, 40: 1}` |
