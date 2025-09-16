console.log(sum(2, 3)); // 5
console.log(sum(2)(3)); // 5





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