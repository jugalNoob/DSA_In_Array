let obj={
    name:'jugal',
    class:'10th',

    greet:function(){
        return [this.name , this.class]
    }
}

console.log(obj.greet())

// Bind call apply







// [2, 8] ✅

// i = 3

// Condition: 3 < 5 ✅

// i === 3? ✅ → execute data[i + 1] = data[i] → data[4] = data[3]

// So, data[4] becomes 40 (was 50)

// Array now: [10, 20, 30, 40, 40]

// console.log(i) → prints 3

// Increment: i += 3 → i = 6

// i = 6

// Condition: 6 < 5 ❌ → loop ends

// console.log('ppp')
// console.log(data); // Check updated array

// // i=0 
// 0===2

// //i=2
// 2===2


// data[i]30=data[i+1]2+1 =40

// console.log(40)


// const maxTokens = 5; // Maximum tokens in the bucket
// let tokens = maxTokens; // Current tokens
// const refillInterval = 1000; // 1 second
// const refillRate = 1; // tokens added per interval

// // Refill tokens periodically
// setInterval(() => {
//     if (tokens < maxTokens) {
//         tokens += refillRate;
//         if (tokens > maxTokens) tokens = maxTokens; // cap to maxTokens
//         console.log(`Token added. Current tokens: ${tokens}`);
//     }
// }, refillInterval);

// // Simulate incoming requests
// function handleRequest() {
//     if (tokens > 0) {
//         tokens--; // consume a token
//         console.log(`Token consumed. Remaining tokens: ${tokens}`);
//         return true; // allow request
//     } else {
//         console.log("Request rejected. Bucket is empty.");
//         return false; // reject request
//     }
// }

// // Example: simulate requests every 300ms
// setInterval(() => {
//     handleRequest();
// }, 300000);










// this is a reverser array console.log
// console.log(4>0)
// console.log(0>=0)
// console.log(-1 >=  0)
// function revivie(x = 3) {

//   if (x < data.length) return;   
//        // base condition
//   console.log(data[x]);
//   revivie(x - 1);           // ✅ pass decremented value
// }

// let data=[10 , 20 , 30 , 40]


// revivie();



// function revivieone(x=1){
//     if(x > 3){
//         console.log(true)
//         return ;
//     }
//     console.log(false)
//     console.log(x)
//     revivieone(x+1)
// }

// revivieone()

// console.log(1 > 3)









// function findMissingNumber(num) {
//     debugger;
//     let sum = 0;
//     console.log(num)
//     for (let i = 0; i < num.length; i++) {
    

//     }
//     return num.length * (num.length + 1) / 2 - sum;

//     4 * 4+1 / 2 -7

//     4*5 / 2 - 7

//     20 / 2 - 7

//     10 -7 
//     3
// }


// For your array [0,1,2,4]:

// num.length = 4

// num.length + 1 = 5

// Multiply: 4 * 5 = 20

// Divide by 2: 20 / 2 = 10

// Subtract sum of array: 10 - 7 = 3

// ✅ Result: 3 → the missing number

// console.log(findMissingNumber([0,1,2,4])); // Output will be 3 (as 3 is the missing number in the array)





// 1️⃣ What each part means

// num.length

// This is the number of elements in your array.

// Example: [0,1,2,4] → num.length = 4

// num.length + 1

// Since one number is missing, the full range should have num.length + 1 numbers.

// Example: 4 + 1 = 5 → numbers from 0 to 4

// Multiplication and division: num.length * (num.length + 1) / 2

// This is the formula for sum of first n natural numbers starting from 0:
// 	​

// Expected sum from 0 to n → 0+1+2+3+4 = 10

// Subtract actual sum from expected sum → 10 - 7 = 3 ✅




//     sum += num[i];

//         setp first 
//         i=0
//         sum +=num[0]
//         //sum=0

//         second step 
//         i=1
//         sum+num[1]
//         //sum =1

//         threed step 
//         i=2
//         sum+=num[2]
//         sum=3

//         forur step 

//         i=3
//         sum+=num[4]
//         sum=7



// ✅ Simple JavaScript Example
// function sumNatural(n) {
//     return (n * (n + 1)) / 2;
// }
// console.log(sumNatural(5));   // 15 → (5×6)/2
// console.log(sumNatural(10));  // 55 → (10×11)/2
// console.log(sumNatural(100)); // 5050 → (100×101)/2

// 🧠 Step-by-step for n = 5
// n = 5
// n + 1 = 6
// n × (n + 1) = 5 × 6 = 30
// 30 ÷ 2 = 15
// ✅ Sum = 15



// Type: Divide and Conquer
// Time Complexity: O(n log n)
// Space Complexity: O(n)
// Stability: Stable
// Use Case: Stable sorting needed, linked list sorting

// function mergeSort(arr) {
//   if (arr.length < 2) return arr;
//   let mid = Math.floor(arr.length / 2);
//   let left = mergeSort(arr.slice(0, mid));
//   let right = mergeSort(arr.slice(mid));
//   let result = [];
//   while(left.length && right.length) {
//     if (left[0] < right[0]) result.push(left.shift());
//     else result.push(right.shift());
//   }
//   return [...result, ...left, ...right];
// }

// console.log(mergeSort([8, 20, -2, 4, -6]));
// Output: [-6, -2, 4, 8, 20]

// function quickSort(arr) {


//   if (arr.length < 2) return arr;  // base case: array of 0 or 1 element is already sorted

//   let pivot = arr[arr.length - 1]; // choose the last element as pivot
// console.log(pivot)

//   let left = [];   // elements smaller than pivot
//   let right = [];  // elements greater or equal to pivot

//   // partition the array
//   for (let i = 0; i < arr.length - 1; i++) {
//     if (arr[i] < pivot) {
//       left.push(arr[i]);
//     } else {
//       right.push(arr[i]);
//     }
//   }

//   // recursively sort left and right, then combine
//   return [...quickSort(left), pivot, ...quickSort(right)];
// }

// const arr = [20 , 30 , 40 , 10];
// console.log(quickSort(arr)); // [-6, -2, 4, 8, 20]







// function findMissingNumber(data) {
//     console.log("📥 Input array:", data);
//     let sum = 0;

//     console.log("🔢 Calculating actual sum of elements in the array...");
//     for (let i = 0; i < data.length; i++) {
//         sum += data[i];
//         console.log(`➡️ Adding data[${i}] = ${data[i]}, running sum = ${sum}`);
//     }

//     const n = data.length; // Since one number is missing, n should be length of array
//     const expectedSum = (n * (n + 1)) / 2;
//     console.log(`📊 Expected sum from 0 to ${n}: ${expectedSum}`);

//     return expectedSum - sum;

//         // return num.length * (num.length + 1) / 2 - 
// }

// console.log("✅ Missing number is:", findMissingNumber([0, 1, 2, 4]));


// function sumOfNatural(num) {
//     console.log("📥 Input number:", num);

//     // 🧠 Using formula: n * (n + 1) / 2
//     let sum = (num * (num + 1)) / 2;

//     console.log(`📊 Sum of first ${num} natural numbers = ${sum}`);
//     return sum;
// }

// // 🚀 Example usages
// sumOfNatural(5);   // 1 + 2 + 3 + 4 + 5 = 15
// sumOfNatural(10);  // 1 + 2 + ... + 10 = 55
// sumOfNatural(8);   // 1 + 2 + ... + 8 = 36





// console.log(suggestCommand("hel", ["help", "hello", "helmet", "heap"])); 
// // var count=0

// function Reverse(data, start = 0, end = data.length - 1) {
//     if (start >= end) {
//         return data;
//     }

//     // Swap
//     let temp = data[start];
//     data[start] = data[end];
//     data[end] = temp;

//     // Recursive call

//     console.log(count++)
    
//     return Reverse(data, start + 1, end - 1);
// }

// let data = [100, 80, 90, 70, 60, 20, 10];
// console.log(Reverse(data)); // [10, 20, 60, 70, 90, 80, 100]

// let temp=one // temp =10
// one=two   // one = 20
// two=temp // two= 10
// console.log("One:", one, "Two:", two)







// 🧠 FOR LOOP:
// We'll go through each number one by one and track:



// |  i | nums\[i] | sum += nums\[i] | Updated max? | Reset sum? | sum | max |
// | -: | -------: | --------------- | ------------ | ---------- | --- | --- |
// |  0 |        5 | 0 + 5 = 5       | 5 ≥ 5 → ✅    | No         | 5   | 5   |
// |  1 |        4 | 5 + 4 = 9       | 9 > 5 → ✅    | No         | 9   | 9   |
// |  2 |       -1 | 9 - 1 = 8       | 8 < 9 → ❌    | No         | 8   | 9   |
// |  3 |        7 | 8 + 7 = 15      | 15 > 9 → ✅   | No         | 15  | 15  |
// |  4 |        8 | 15 + 8 = 23     | 23 > 15 → ✅  | No         | 23  | 23  |



// 📊 1. Stock Market Analysis
// Goal: Find the best time to buy and sell a stock to maximize profit (if you can buy once and sell once).

// 📈 Input: Daily stock price changes (profit/loss)



// 💵 2. Bank Account Monitoring
// Goal: Find the time period with the highest net deposit activity.

// 📦 Input: Daily net balance changes (deposits - withdrawals)


// 🎮 4. Gaming: Maximum Score Streak
// Goal: Track the maximum scoring streak in a game.

// 🕹️ Input: Points scored in each level or round