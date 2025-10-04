🟢 JSON vs BSON vs GSON

🔹 Key Points

JSON → Most common, everywhere in web development.

BSON → Binary version of JSON; used for databases like MongoDB.

GSON → Java library to parse JSON into Java objects and vice versa.

JSON is text, BSON is binary, GSON is a Java tool.

Knowing JSON + BSON is enough for most JavaScript/Node.js interviews.

| Feature         | JSON (JavaScript Object Notation)                 | BSON (Binary JSON)                                | GSON (Google JSON for Java)       |
| --------------- | ------------------------------------------------- | ------------------------------------------------- | --------------------------------- |
| **Format**      | Text-based (string)                               | Binary                                            | Java library for JSON             |
| **Readability** | Human-readable                                    | Not human-readable                                | Human-readable (via Java objects) |
| **Supports**    | Objects, arrays, strings, numbers, booleans, null | All JSON types + extra types (Date, binary, etc.) | All JSON types in Java objects    |
| **Size**        | Slightly bigger (text format)                     | Smaller & compact                                 | Similar to JSON in memory         |
| **Speed**       | Slower to parse (text parsing)                    | Faster (binary)                                   | Depends on Java parser            |
| **Use case**    | Web APIs, config files, data exchange             | MongoDB storage, high-performance data exchange   | Java applications using JSON      |
| **Language**    | Language-independent (JavaScript native)          | Language-independent (binary format)              | Java only                         |



let user = { profile: { name: "Jugal" } };
console.log(user?.profile?.name); // "Jugal"
console.log(user?.address?.city); // undefined (instead of error)





🟢 Top 20 JavaScript Object Interview Questions
1️⃣ How do you create an object?
let obj = { name: "Jugal", age: 30 };
let obj2 = new Object();
let obj3 = Object.create({ greet: () => "Hi" });

2️⃣ Access object properties
obj.name      // Dot notation
obj['age']    // Bracket notation

3️⃣ Modify, add, delete properties
obj.name = "Karan";       // Modify
obj.city = "Mumbai";      // Add
delete obj.age;           // Delete

4️⃣ Loop through object
for (let key in obj) console.log(key, obj[key]);
Object.keys(obj).forEach(k => console.log(k, obj[k]));
Object.entries(obj).forEach(([k,v]) => console.log(k,v));

5️⃣ Compare objects
obj1 === obj2                 // false (reference)
JSON.stringify(obj1)===JSON.stringify(obj2) // shallow compare

// Deep compare (recursive)
function deepCompare(o1,o2){ /* recursive function */ }

6️⃣ Optional chaining & nullish coalescing
obj?.name           // safe access
obj.age ?? "Unknown" // fallback only for null/undefined

7️⃣ JSON vs Object
let json = JSON.stringify(obj); // object → string
let parsed = JSON.parse(json);  // string → object

8️⃣ Check if key exists
"name" in obj
obj.hasOwnProperty("name")

9️⃣ Merge objects
let merged = { ...obj1, ...obj2 };

🔟 Numeric indexes in objects/arrays
let arr = [{index:0,name:"Jugal"}, {index:1,name:"Karan"}];
console.log(arr[0].name); // "Jugal"

let objNum = {0:{name:"Jugal"}, 1:{name:"Karan"}};
console.log(objNum[0].name); // "Jugal"

1️⃣1️⃣ Access nested properties safely
obj?.user?.profile?.name
obj?.user?.details?.age ?? "Unknown"

1️⃣2️⃣ Compare arrays inside objects
let a = [1,2], b = [1,2];
JSON.stringify(a)===JSON.stringify(b) // true

1️⃣3️⃣ Get all keys, values, entries
Object.keys(obj)
Object.values(obj)
Object.entries(obj)

1️⃣4️⃣ Clone an object
let clone = {...obj};               // shallow clone
let deepClone = JSON.parse(JSON.stringify(obj)); // deep clone (no functions)

1️⃣5️⃣ Check if object is empty
Object.keys(obj).length === 0

1️⃣6️⃣ Freeze, seal, prevent extensions
Object.freeze(obj)     // cannot modify
Object.seal(obj)       // cannot add/delete, can modify
Object.preventExtensions(obj) // cannot add new properties

1️⃣7️⃣ Dynamic property access
let key = "name";
console.log(obj[key]);
obj[key] = "Karan";

1️⃣8️⃣ Delete nested property safely
delete obj?.user?.profile?.name; // won't throw if undefined

1️⃣9️⃣ Iterate over nested objects
function iterate(obj){
  for(let key in obj){
    if(typeof obj[key] === "object" && obj[key] !== null){
      iterate(obj[key]);
    } else {
      console.log(key, obj[key]);
    }
  }
}

2️⃣0️⃣ Difference between shallow & deep copy

Shallow copy: Copies only top-level properties

let clone = {...obj};


Deep copy: Copies all nested objects

let deepClone = JSON.parse(JSON.stringify(obj));


✅ Pro Tips for Interviews:

Always clarify if object comparison is shallow vs deep.

Use ?. + ?? to safely access nested data.

Know when to use arrays vs objects for indexes.

Understand JSON vs Object vs Array vs Map differences.

Be ready to write a recursive deepCompare function.