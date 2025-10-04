🔹 What is Array Insert?

In arrays, insert means adding a new element at a specific position (index).

If you insert at the end, it’s like .push().

If you insert at the start, it’s like .unshift().

If you insert at a middle index, you use .splice().



1::Array Insert  ...................................
:::::::::::::::::::::::
et data=[ 9 , 8 , 7 , 6 , 5 , 4 , 3 , 2 , 1,0,100 ]
console.log(data.length)
let add=69;

let post=0;

for(let i=data.length-1; i>=0; i--){

    if(i>=post){
        
        data[i+1]=data[i]
    }if(i==post){

        data[i]=add;
    }

}

console.log(data)


// ---> Third logic 

var myArray = ["Element 1", "Element 2", "Element 3"];
var elementsToInsert = ["New Element 1", "New Element 2"];
var insertionIndexes = [1, 3];
for (var i = 0; i < elementsToInsert.length; i++) {
  var index = insertionIndexes[i];
  myArray.splice(index, 0, elementsToInsert[i]);
}
console.log(myArray);


// ---> Four Logic
let data=[2 ,  3 , 4 , 5]
data.splice(0 , 0 , 1)
console.log(data)



// new code inn inster array ----------------->>

💡 What’s happening step by step:


let data = [10, 20, 30, 40, 50];
let ind = 1;
let add = 'jugal sharma';

function instering(data, ind, add) {

    debugger;
  // 1️⃣ Save the value currently at index before inserting
//   let pushedValue = data[ind];

  // 2️⃣ Shift elements from end → index
  for (let i = data.length - 1; i >= ind; i--) {
    data[i + 1] = data[i];
  }

  // 3️⃣ Insert new value at index
  data[ind] = add;

  // 4️⃣ Show results
//   console.log("Pushed value:", pushedValue);
  console.log("New array:", data);
}

instering(data, ind, add);


Step 1: i = 4

👉 4 >= 1 ✅ true
👉 data[5] = data[4] → move 50 to index 5

[10, 20, 30, 40, 50, 50]

Step 2: i = 3

👉 3 >= 1 ✅ true
👉 data[4] = data[3] → move 40 to index 4

[10, 20, 30, 40, 40, 50]

Step 3: i = 2

👉 2 >= 1 ✅ true
👉 data[3] = data[2] → move 30 to index 3

[10, 20, 30, 30, 40, 50]

Step 4: i = 1

👉 1 >= 1 ✅ true
👉 data[2] = data[1] → move 20 to index 2

[10, 20, 20, 30, 40, 50]


👉 Loop ends here. All elements from index 1 onward have been shifted one step to the right.

📝 Final Insert

After the loop:

data[ind] = add;   // data[1] = 'jugal sharma'


Result:

[10, 'jugal sharma', 20, 30, 40, 50]






| Step                  | Action                   | Array                                  |
| --------------------- | ------------------------ | -------------------------------------- |
| Start                 | Original array           | `[10, 20, 30, 40, 50]`                 |
| Shift 50 → position 5 | i=4                      | `[10, 20, 30, 40, 50, 50]`             |
| Shift 40 → position 4 | i=3                      | `[10, 20, 30, 40, 40, 50]`             |
| Shift 30 → position 3 | i=2                      | `[10, 20, 30, 30, 40, 50]`             |
| Shift 20 → position 2 | i=1                      | `[10, 20, 20, 30, 40, 50]`             |
| Shift 10 → position 1 | i=0                      | `[10, 10, 20, 30, 40, 50]`             |
| Insert new value      | data[0] = "jugal sharma" | `['jugal sharma', 10, 20, 30, 40, 50]` |
