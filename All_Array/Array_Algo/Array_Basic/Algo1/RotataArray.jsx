function rotateArray(arr, steps) {
   for (let i = 0; i < steps; i++) {
       arr.push(arr.shift());
   }
   return arr;
}

let array = [1, 2, 3, 4, 5];
let steps = 3;
console.log(rotateArray(array, steps)); // Output: [3, 4, 5, 1, 2]



Walkthrough for [1, 2, 3, 4, 5] with steps = 3
Iteration 1 (i = 0)

arr.shift() removes 1 → arr becomes [2, 3, 4, 5]




arr.push(1) → arr becomes [2, 3, 4, 5, 1]

Iteration 2 (i = 1)

arr.shift() removes 2 → arr becomes [3, 4, 5, 1]

arr.push(2) → arr becomes [3, 4, 5, 1, 2]

Iteration 3 (i = 2)

arr.shift() removes 3 → arr becomes [4, 5, 1, 2]

arr.push(3) → arr becomes [4, 5, 1, 2, 3]

✅ Final Output
[4, 5, 1, 2, 3]




let array = [1, 2, 3, 4, 5];
let steps = 3;

for (let i = 0; i < steps; i++) {
   let shifted = array.shift();   // remove first element
   array.push(shifted);           // add it to the end
   console.log(`Step ${i+1}: shifted = ${shifted}, array = [${array}]`);
}



array = [1, 2, 3, 4, 5]
Step 1 (i = 0):

shifted = 1

array = [2, 3, 4, 5, 1]

Step 2 (i = 1):

shifted = 2

array = [3, 4, 5, 1, 2]

Step 3 (i = 2):

shifted = 3

array = [4, 5, 1, 2, 3]




let array = [1, 2, 3, 4, 5];
let steps = 3;
let n = array.length; // n = 5



Loop explanation
🔹 Outer loop (runs steps times)
for (let i = 0; i < steps; i++) { ... }


This will do 3 rotations, one at a time.


🔹 Step-by-step rotation logic

Inside each outer loop:

Store first element

let first = array[0];


Saves the first element before it gets overwritten.

Example (Step 1): first = 1.




Shift elements left

for (let j = 0; j < n - 1; j++) {
    array[j] = array[j + 1];
}


This moves every element one step left.


let array = [1, 2, 3, 4, 5];
let steps = 3;
let n = array.length;

for (let i = 0; i < steps; i++) {
    let first = array[0];  // store first element
    
    // shift elements left
    for (let j = 0; j < n - 1; j++) {
        array[j] = array[j + 1];
    }
    
    // put first element at end
    array[n - 1] = first;
    
    console.log(`Step ${i+1}: first = ${first}, array = [${array}]`);
}


:::::::::: --------->>> Important ::::::::::::_____??>??



Step 1: First rotation (i = 0)

1️⃣ Store the first element:

first = array[0] = 1


2️⃣ Shift elements left:



| j | Operation                 | Array after step |
| - | ------------------------- | ---------------- |
| 0 | array\[0] = array\[1] → 2 | \[2, 2, 3, 4, 5] |
| 1 | array\[1] = array\[2] → 3 | \[2, 3, 3, 4, 5] |
| 2 | array\[2] = array\[3] → 4 | \[2, 3, 4, 4, 5] |
| 3 | array\[3] = array\[4] → 5 | \[2, 3, 4, 5, 5] |


⚠ Notice: the last element is temporarily duplicated (5).

3️⃣ Put the stored first element at the end:

array[n-1] = first → array[4] = 1


✅ Array after 1st rotation: [2, 3, 4, 5, 1]



Step 2: Second rotation (i = 1)

1️⃣ Store first element:

first = array[0] = 2



| j | Operation | Array after step |
| - | --------- | ---------------- |
| 0 | 3         | \[3, 3, 4, 5, 1] |
| 1 | 4         | \[3, 4, 4, 5, 1] |
| 2 | 5         | \[3, 4, 5, 5, 1] |
| 3 | 1         | \[3, 4, 5, 1, 1] |



3️⃣ Put first at end:

array[4] = 2


✅ Array after 2nd rotation: [3, 4, 5, 1, 2]


Step 3: Third rotation (i = 2)

1️⃣ Store first element:

first = array[0] = 3

| j | Operation | Array after step |
| - | --------- | ---------------- |
| 0 | 4         | \[4, 4, 5, 1, 2] |
| 1 | 5         | \[4, 5, 5, 1, 2] |
| 2 | 1         | \[4, 5, 1, 1, 2] |
| 3 | 2         | \[4, 5, 1, 2, 2] |



3️⃣ Put first at end:

array[4] = 3


✅ Array after 3rd rotation: [4, 5, 1, 2, 3]

Final Array:
[4, 5, 1, 2, 3]
