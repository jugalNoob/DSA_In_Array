| Feature             | `console.log()`                          | `return`                                    |
| ------------------- | ---------------------------------------- | ------------------------------------------- |
| Purpose             | For **displaying** values in the console | For **giving back** a value from a function |
| Effect on Execution | Does **not** stop the function           | **Stops** the function immediately          |
| Visibility          | Visible in console only                  | Can be stored in variables / used later     |
| Output to caller    | ❌ Does not return anything (undefined)   | ✅ Returns actual data to the caller         |


9️⃣ Difference between Promise.all() and Promise.race()
Method	Behavior
Promise.all	Waits for all Promises to resolve
Promise.race	Resolves/rejects as soon as first Promise settles


Q deep or Shallow copy?
beacuse if i am copy obj so obj memeory copy 
if i use var copy refers
 
| Copy Type      | How it behaves                                         | Example                           |
| -------------- | ------------------------------------------------------ | --------------------------------- |
| Shallow Copy   | Top-level properties copied, nested objects referenced | `{ ...one }`                      |
| Deep Copy      | Full copy of object and all nested objects             | `JSON.parse(JSON.stringify(obj))` |
| Reference copy | Both variables point to same object                    | `var two = one`                   |


💡 Key Takeaways

Use spread {...obj} or Object.assign() for shallow copies.

Use JSON trick or structuredClone() for deep copies.

Assigning with = creates a reference, not a copy.


QSure! Here’s a clear, simple, interview-ready explanation of 
the differences between var, let, and const in JavaScript:

| Keyword | Scope                                                      |
| ------- | ---------------------------------------------------------- |
| `var`   | Function-scoped (or global if declared outside a function) |
| `let`   | Block-scoped (inside `{ }`)                                |
| `const` | Block-scoped (inside `{ }`)                                |

2️⃣ Re-declaration

| Keyword | Can re-declare? |
| ------- | --------------- |
| `var`   | ✅ Yes           |
| `let`   | ❌ No            |
| `const` | ❌ No            |
var x = 1;
var x = 2; // ✅ works

let y = 1;
let y = 2; // ❌ Error

const z = 1;
const z = 2; // ❌ Error


3️⃣ Re-assignment

let a = 10;
a = 20; // ✅ works

const b = 30;
b = 40; // ❌ Error

const obj = { name: "Jugal" };
obj.name = "Karan"; // ✅ works, object property can be changed

| Keyword | Can re-assign?                                                                 |
| ------- | ------------------------------------------------------------------------------ |
| `var`   | ✅ Yes                                                                          |
| `let`   | ✅ Yes                                                                          |
| `const` | ❌ No (value cannot change for primitive, but object properties can be changed) |





| Feature       | var      | let       | const                      |
| ------------- | -------- | --------- | -------------------------- |
| Scope         | Function | Block     | Block                      |
| Re-declare    | Yes      | No        | No                         |
| Re-assign     | Yes      | Yes       | No (for primitive)         |
| Hoisting      | Yes      | Yes (TDZ) | Yes (TDZ)                  |
| Object values | Mutable  | Mutable   | Mutable properties allowed |
