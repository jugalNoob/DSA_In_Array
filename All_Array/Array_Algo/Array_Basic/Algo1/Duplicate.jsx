

// // | Question                   | Answer                                                                                 |
// // | -------------------------- | -------------------------------------------------------------------------------------- |
// // | Does it run right to left? | ❌ No                                                                                   |
// // | Does it run left to right? | ✅ Yes                                                                                  |
// // | Why?                       | Because `for (let i = 0; i < data.length; i++)` starts from index 0 and increments i++ |


🔹 What are Duplicates in an Array?

Duplicates mean the same element appears more than once in the array.

Example:

let arr = [1, 2, 3, 2, 4, 1, 5];
// duplicates are 1 and 2


🔹 Ways to Handle Duplicates
1. Find Duplicates

Using a filter + indexOf:

let arr = [1, 2, 3, 2, 4, 1, 5];

let duplicates = arr.filter((item, index) => arr.indexOf(item) !== index);

console.log(duplicates); // [2, 1]

function test(data) {
    if (data.length === 0) {
        console.log("Empty array received. Exiting.");
        return 0;
    }

    console.log("Initial data:", [...data]);

    let i = 0;
    const duplicates = [];

    console.log("\n🌀 Starting duplicate removal process...\n");

    for (let j = 0; j < data.length; j++) {
        console.log(`🔍 Comparing data[i=${i}] = ${data[i]} with data[j=${j}] = ${data[j]}`);

        if (data[i] !== data[j]) {
            i++;
            data[i] = data[j];
            console.log(`✅ Unique found. Moved ${data[j]} to index ${i}`);
        } else if (i !== j) {
            duplicates.push(data[j]);
            console.log(`⚠️ Duplicate detected: ${data[j]} (at index ${j})`);
        }

        console.log(`Current state of array: ${data}`);
        console.log("---");
    }

    let length = i + 1;

    console.log("\n✅ Processing complete.");
    console.log("📌 Final length of unique elements:", length);
    console.log("📌 Final unique elements:", data.slice(0, length));
    console.log("📌 Duplicate elements found:", duplicates);
    console.log("📌 Full array state:", data);

    return {
        length,
        unique: data.slice(0, length),
        datas: data,
        duplicates,
    };
}

// Sample data
let data = [0, 1, 1, 2, 2, 3];
let result = test(data);

// Final result log
console.log("\n🎯 Final Result Summary:");
console.log("Length of unique elements:", result.length);
console.log("Unique elements:", result.unique);
console.log("Full array after in-place update:", result.datas);
console.log("Duplicates found:", result.duplicates);

 function dupl(data) {
    let isDuplicate = false;
  
    for (let i = 0; i < data.length; i++) {
      for (let j = i + 1; j < data.length; j++) {
        if (data[i] === data[j]) { 
          isDuplicate = true;
          console.log("Duplicate found:", data[i]);
        }
      }
    }
  
    if (!isDuplicate) {
      console.log("No duplicates found");
    }
  }
  

  console.log(dupl([10 , 20 , 20 , 30 , 40 , 40]))



function removeDuplicates(nums) { ///RemoveDuplication Simple 
  for (let i = 0; i < nums.length - 1; i++) {
    // O(n)
    if (nums[i] === nums[i + 1]) {
      nums.splice(i + 1, 1); // O(1)
      i--;
    }
  }

  return nums.length;
}

// Time Complexity - O(n)
// Space Complexity - O(1)
// console.log(removeDuplicates([1, 1, 2]));

function duplicates(data) {
  let i = 0;
  for (let j = 1; j < data.length; j++) {
    if (data[j] !== data[i]) {
      i++;
      data[i] = data[j];
    }
  }
  return i + 1;
}

let data = [0 , 1 , 1 , 2 , 2 , 3 , 3 , 4  , 5]; ///use A Sort Array 
console.log(duplicates(data)); // 5

let arr = [0, 1, 1, 2, 2, 2];
console.log(duplicates(arr)); // ✅ 3 (unique: 0,1,2)


👉 That means:

i starts at index 0 (the first element).

j starts at index 1 (the second element).

So at the very beginning:

Array: [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]
Index:  0  1  2  3  4  5  6  7  8  9
         ↑  ↑
         i  j


         i[0] j[0] // index 1

         i[0] j[1]  //inde 2
 
         i[1]  j[1] // index 3


         i=0 (nums[0]=0)
j=1 (nums[1]=0)
nums[i] == nums[j] → skip



Move j → 2:

i=0 (nums[0]=0)
j=2 (nums[2]=1)
nums[i] != nums[j] → unique found
i → 1, nums[1] = nums[2] = 1
Array → [0, 1, 1, 1, 1, 2, 2, 3, 3, 4]



Move j → 3:

i=1 (nums[1]=1)
j=3 (nums[3]=1)
nums[i] == nums[j] → skip


Move j → 4:

i=1 (nums[1]=1)
j=4 (nums[4]=1)
nums[i] == nums[j] → skip



Move j → 5:

i=1 (nums[1]=1)
j=5 (nums[5]=2)
nums[i] != nums[j] → unique found
i → 2, nums[2] = nums[5] = 2
Array → [0, 1, 2, 1, 1, 2, 2, 3, 3, 4]



Move j → 6:

i=2 (nums[2]=2)
j=6 (nums[6]=2)
nums[i] == nums[j] → skip



Move j → 7:

i=2 (nums[2]=2)
j=7 (nums[7]=3)
nums[i] != nums[j] → unique found
i → 3, nums[3] = nums[7] = 3
Array → [0, 1, 2, 3, 1, 2, 2, 3, 3, 4]



Move j → 8:

i=3 (nums[3]=3)
j=8 (nums[8]=3)
nums[i] == nums[j] → skip



Move j → 9:

i=3 (nums[3]=3)
j=9 (nums[9]=4)
nums[i] != nums[j] → unique found
i → 4, nums[4] = nums[9] = 4
Array → [0, 1, 2, 3, 4, 2, 2, 3, 3, 4]


End:
i = 4
Result length = i + 1 = 5
Unique part = [0, 1, 2, 3, 4]


✅ Loop ends.

i = 4 → means there are i+1 = 5 unique numbers.

Final unique part of array = [0,1,2,3,4].

👉 So the trick is:

i points to the last unique number.

When a new unique is found (nums[i] != nums[j]), move i forward and copy it.



Loop ends

i = 4 → last index of unique numbers

Return i + 1 = 5.

So final unique numbers = [0,1,2,3,4]
Function returns 5.

Complexity

Time Complexity = O(n) → you scan the array once.

Space Complexity = O(1) → no extra array, just reuse the input array.

👉 Easy way to remember:

Use two pointers (i for unique, j for scanning).

When a new unique value is found, move it next to the last unique.



let data = [10, 50, 60, 50, 60, 40];

for (let i = 0; i < data.length; i++) {
    for (let j = i + 1; j < data.length; j++) {
        if (data[i] === data[j]) {
            console.log(`Duplicate pair: (${data[i]}, ${data[j]}) at indices (${i}, ${j})`);
        }
    }
}

let data = [10, 50, 60, 50, 60, 40];

for (let i = 0; i < data.length; i++) {
    for (let j = i + 1; j < data.length; j++) {
        if (data[i] === data[j]) {
            console.log(`Duplicate pair: (${data[i]}, ${data[j]}) at indices (${i}, ${j})`);
        }
    }
}