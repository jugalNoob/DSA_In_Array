::::::00 Different Array ::::::::::::::

let arr1=[1 , 2]
let arr2=new Array(1,2)
let arr3=new Set([1 , 2 , 3])
console.log(arr2)
console.log(arr1)
console.log(arr3)

| Variable | Type    | Description                                                                                                                                  |
| -------- | ------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `arr1`   | `Array` | Standard array literal. Can hold duplicates, indexed by numbers, has array methods like `push`, `map`, `filter`.                             |
| `arr2`   | `Array` | Created using the `Array` constructor. Behaves like `arr1`. Multiple ways to create arrays (`new Array(5)` creates empty array of length 5). |
| `arr3`   | `Set`   | A **collection of unique values**. No duplicates allowed. Not indexed by number. Methods: `add`, `delete`, `has`, `forEach`.                 |




00::Important::::00000000000
console.log(new Array(1 , 2))
console.log(Array(2))



0::::Important :::::::::::
[a]=[1 , 2 , 3 , 4]
console.log(a)


Avoid memory leaks: remove references to DOM elements or large objects when not needed

4️⃣ Functional Programming Patterns
const arr = [1,2,3,4,5];

const sumSquares = arr
    .map(x => x*x)
    .filter(x => x>10)
    .reduce((acc,x)=>acc+x,0);

console.log(sumSquares); // 41



6️⃣ Array Methods & Functional JS
const arr = [1, 2, 3, 4, 5];

// map, filter, reduce
const doubled = arr.map(x => x * 2);
const evens = arr.filter(x => x % 2 === 0);
const sum = arr.reduce((acc, x) => acc + x, 0);

console.log(doubled, evens, sum);