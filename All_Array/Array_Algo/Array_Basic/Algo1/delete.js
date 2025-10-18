// Visual diagrams to understand it deeper

👉 In simple words for interviews:

“Delete in array means removing an element. In JavaScript, 
delete only removes the value but leaves an empty slot, so we usually use 
splice() to actually remove elements and shift the array.”

// data[2] = data[3];

// | Index | 0  | 1  | 2  | 3  |
// | ----- | -- | -- | -- | -- |
// | Value | 10 | 20 | 40 | 40 |

Delete Array Row class --------------------------->>>
let data=[10 , 20 , 30 , 40]

let del=0

let count =0

for(let i=del; i<data.length-1; i++){

    console.log(data[i]) // 30 
    count ++
    data[i]=data[i+1] // data[30]=data[40]
    //data[30]=data[40]
    console.log(data[i]) // 40
}

console.log(count , 'count')


//console.log(data) //--> (4) [10, 20, 40, undefined] // undefined (out of bounds)
console.log(data.length);      // 4
data.length = data.length - 1; // 4 → 3
console.log(data.length - 1);  // 3 - 1 = 2
console.log(data.length) // 3 
console.log(data);             // [10, 20, 40]



let data = [10, 20, 30, 40, 50, 60, 70];

//data.length = 1;   // ✨ Correct: keep first 5 elements
//data.length = 0;   // ✨ Clears the array
console.log(data); 
console.log(data.slice(0,3))


Q Question answer 

💬 5. Common Interview Questions

| Question                                            | Type       | Expected Answer                                                       |
| --------------------------------------------------- | ---------- | --------------------------------------------------------------------- |
| Delete an element from the middle of an array       | Coding     | Show shifting loop or splice                                          |
| Time complexity of deletion in array vs linked list | Conceptual | Array: O(n) (because of shifting), Linked List: O(1) if pointer known |
| How to delete all occurrences of a value            | Coding     | Use loop or filter                                                    |
| Delete from sorted array                            | Conceptual | May also need to maintain sorted order                                |



🟢 1. Delete Element at Given Index
🟡 2. Delete First Occurrence of a Value
🟠 3. Delete All Occurrences of a Value
🔵 4. Delete Duplicates From Sorted Array
🔴 5. Delete Element in a Dynamic Array (Multiple Queries)


| # | Problem                            | Key Concept        | Time   |
| - | ---------------------------------- | ------------------ | ------ |
| 1 | Delete by Index                    | Shifting           | O(n)   |
| 2 | Delete by Value (first occurrence) | Search + Shift     | O(n)   |
| 3 | Delete All Occurrences             | Filter or In-place | O(n)   |
| 4 | Delete Duplicates (Sorted)         | Two Pointers       | O(n)   |
| 5 | Multiple Deletions                 | Index Adjustment   | O(n×q) |







🟢 1. Delete Element at Given Index

👉 (Basic Level — direct shifting logic)

❓ Question:
Write a function to delete an element from an 
array at a given 
index without using built-in methods.

Example:

Input: arr = [10, 20, 30, 40, 50], index = 2
Output: [10, 20, 40, 50]


💡 Approach:

Validate index

Shift elements left from index → end

Reduce array length

JS Code:

function deleteAtIndex(arr, index) {
  if (index < 0 || index >= arr.length) return arr;

  for (let i = index; i < arr.length - 1; i++) {
    arr[i] = arr[i + 1];
  }
  arr.length--;
  return arr;
}

console.log(deleteAtIndex([10, 20, 30, 40, 50], 2));
// 👉 [10, 20, 40, 50]


🕒 Time: O(n)
💾 Space: O(1)




🟡 2. Delete First Occurrence of a Value

👉 (Medium Level — search + shift)

❓ Question:
Delete the first occurrence of a value x from the array if it exists.

Example:

Input: arr = [5, 10, 20, 10, 30], x = 10
Output: [5, 20, 10, 30]


💡 Approach:

Find index of x

Shift left from there

Decrease length

JS Code:

function deleteByValue(arr, x) {
  let index = arr.indexOf(x);
  if (index === -1) return arr;

  for (let i = index; i < arr.length - 1; i++) {
    arr[i] = arr[i + 1];
  }
  arr.length--;
  return arr;
}

console.log(deleteByValue([5, 10, 20, 10, 30], 10));
// 👉 [5, 20, 10, 30]


🕒 Time: O(n) (search + shift)
💾 Space: O(1)




🟠 3. Delete All Occurrences of a Value

👉 (Medium Level — multiple deletions)

❓ Question:
Delete all occurrences of a given value from the array.

Example:

Input: arr = [2, 3, 2, 4, 2, 5], x = 2
Output: [3, 4, 5]


💡 Approach 1 (Filter):

function deleteAllOccurrences(arr, x) {
  return arr.filter(num => num !== x);
}

console.log(deleteAllOccurrences([2,3,2,4,2,5], 2));
// 👉 [3, 4, 5]


💡 Approach 2 (Manual shifting — In-place):

function deleteAllOccurrencesInPlace(arr, x) {
  let newIndex = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== x) {
      arr[newIndex] = arr[i];
      newIndex++;
    }
  }
  arr.length = newIndex;
  return arr;
}

console.log(deleteAllOccurrencesInPlace([2,3,2,4,2,5], 2));
// 👉 [3, 4, 5]


🕒 Time: O(n)
💾 Space: O(1) (second approach)





🔵 4. Delete Duplicates From Sorted Array

👉 (Medium–Advanced — used in FAANG rounds)

❓ Question:
Given a sorted array, delete duplicates in-place and return the new length.

Example:

Input: arr = [1, 1, 2, 2, 3, 3, 3]
Output: arr = [1, 2, 3], new length = 3


💡 Approach:

Use two pointers (i = slow, j = fast)

Copy only unique elements forward

JS Code:

function removeDuplicatesSorted(arr) {
  if (arr.length === 0) return 0;

  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[j] !== arr[i]) {
      i++;
      arr[i] = arr[j];
    }
  }
  arr.length = i + 1;
  return arr;
}

let arr = [1, 1, 2, 2, 3, 3, 3];
console.log(removeDuplicatesSorted(arr)); 
// 👉 [1, 2, 3]


🕒 Time: O(n)
💾 Space: O(1)



🔴 5. Delete Element in a Dynamic Array (Multiple Queries)

👉 (Advanced — good for interviews)

❓ Question:
Given an array and a list of q delete queries (indices), perform all deletions and return the final array.

Example:

arr = [10, 20, 30, 40, 50]
queries = [1, 3]   // delete index 1, then index 3 (after previous deletion)
Output: [10, 30, 40]


💡 Approach:

For each query → delete at that index (after adjusting for previous shifts)

JS Code:

function deleteMultiple(arr, queries) {
  let offset = 0;
  for (let q of queries) {
    let index = q - offset;
    if (index >= 0 && index < arr.length) {
      for (let i = index; i < arr.length - 1; i++) {
        arr[i] = arr[i + 1];
      }
      arr.length--;
      offset++;
    }
  }
  return arr;
}

console.log(deleteMultiple([10, 20, 30, 40, 50], [1, 3]));
// 👉 [10, 30, 40]
🕒 Time: O(n × q)
💾 Space: O(1)