Q what is Reverse in Javascript?

🔹 In Your Words

Yes ✅ you are correct:

Reverse means the first element is put in the last place, and the last 
element is put in the first place.

👉 For an array:

The first element becomes the last.

The last element becomes the first.

And the order of all elements is flipped.


let str = "hello";
let reversedStr = str.split("").reverse().join("");

console.log(reversedStr); // "olleh"




const data = [9, 8, 7, 6];
let start = 0;
let end = data.length - 1; // end = 3
let count =0

while (start < end) { // 0 < 3 1 < 2 loop out  2 <1
    let temp=data[start] //  temp=data[9]
    console.log(temp , 'temp')
    data[start]=data[end]//data[0]=data[6]
    data[end]=temp // data[6]=temp[0]
    start++
    end --
}
🔁 1st Iteration:

temp = data[0]        // temp = 9
data[0] = data[3]     // data[start=0]9 =data[6] 6
data[3] = temp        // data[3] = 9

start++   → 1
end--     → 2

[6, 8, 7, 9]


🔁 2nd Iteration:

temp = data[1]        // temp = 8
data[1] = data[2]     // data[1] = 7
data[2] = temp        // data[2] = 8

start++   → 2
end--     → 1 (loop ends)

[6, 7, 8, 9]


🔁 Loop: while (start < end)


| Iteration | `start` | `end` | Condition (`start < end`) | Action        |
| --------- | ------- | ----- | ------------------------- | ------------- |
| 1         | 0       | 3     | ✅ `0 < 3`                 | Run iteration |
| 2         | 1       | 2     | ✅ `1 < 2`                 | Run iteration |
| 3         | 2       | 1     | ❌ `2 < 1`                 | ❌ Exit loop   |



console.log(data)


////////----------------------->>>>> Recission ------------------>>

var count=0

function Reverse(data, start = 0, end = data.length - 1) {
    if (start >= end) {
        return data;
    }

    // Swap
    let temp = data[start];
    data[start] = data[end];
    data[end] = temp;

    // Recursive call

    console.log(count++)
    
    return Reverse(data, start + 1, end - 1);
}

let data = [100, 80, 90, 70, 60, 20, 10];
console.log(Reverse(data)); // [10, 20, 60, 70, 90, 80, 100]



🔄 How they’re connected

In recursion, start >= end means STOP.

In while loop, start < end means GO.

They are exact logical opposites, but both achieve the same result:

Recursive:

Check stop condition first → if not, do work → call again.

While loop:

Check continue condition first → if true, do work → loop again.

🔎 Example with [1,2,3,4]

Recursion (if (start >= end))

Call 1: start=0, end=3 → swap 1 & 4

Call 2: start=1, end=2 → swap 2 & 3

Call 3: start=2, end=1 → stop (start >= end)

While (while (start < end))

Iter 1: start=0, end=3 → swap 1 & 4

Iter 2: start=1, end=2 → swap 2 & 3

Iter 3: start=2, end=1 → loop exits (start < end is false)

Both end with [4,3,2,1].

✅ Summary:

start >= end → STOP condition (recursion).

start < end → RUN condition (while loop).
They are opposite, but equivalent in controlling execution.




// let one=10
// let two=20
// let temp=one // temp =10
// one=two   // one = 20
// two=temp // two= 10
// console.log("One:", one, "Two:", two)







2:::: Array Swap ::::::::::::: .....................
// let arra1 = [10, 20];
// let arra2 = [30, 40];
  // Swap the arrays using a loop
    for (let i = 0; i < array1.length; i++) {
      let temp = array1[i];
      array1[i] = array2[i];
      array2[i] = temp;
    }
    
    // Print the swapped arrays
    console.log("Swapped Array 1: " + array1);
    console.log("Swapped Array 2: " + array2);
  }

::::::::: New Methods ..............
let array1 = [10, 20];
let array2 = [30, 40];

for (let i = 0; i < array1.length; i++) {
    // Use destructuring to swap the elements
    [array1[i], array2[i]] = [array2[i], array1[i]];
}

// Print the swapped arrays
console.log("Swapped Array 1: " + array1); // Output: [30, 40]
console.log("Swapped Array 2: " + array2); // Output: [10, 20]



// --->Recursion  Method to reviers  --------------->>>

function revivie(x = 3) {
  if (x < 1) return;        // base condition
  console.log(x);
  revivie(x - 1);           // ✅ pass decremented value
}

revivie();

console.log(3 < 1)


let data = [10, 20, 30, 40];

function revivie(x = data.length - 1) {
  if (x < 0) return;              // ✅ base condition: stop when index is below 0
  console.log(data[x]);          // print current element
  revivie(x - 1);               // move to previous index
}

revivie();
