
:::::::::::::::::::Sum of array elemnt ||||||||||||||||||||||||||||| 

1. first 
let one=[10 , 20 , 30 , -10]
let two=one.reduce((alm , elem)=>{
    return alm + elem
},2)
console.log(two)



2 . second 



function maxSubArray(nums) {

  // 🔁 INITIAL STATE:
  let sum = 0;
  let max = nums[0]; // max = 5

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i]; // accumulate current element into sum

    // 🔍 Print internal state
    console.log(`i=${i}, nums[i]=${nums[i]}, sum=${sum}, max=${max}`);

    // 🧠 If current sum is greater than max so far, update max
    if (max < sum) {
      max = sum;
      console.log(`  🔄 Updated max = ${max}`);
    }

    // ❌ If current sum goes negative, reset it
    if (sum < 0) {
      sum = 0;
      console.log(`  🔁 sum < 0, reset sum to 0`);
    }
  }

  return max;
}

// Time Complexity - O(n)
// Space Complexity - O(1)

console.log("Final max subarray sum =", maxSubArray([5, 4, -1, 7, 8]));

// console.log("Final max subarray sum =", maxSubArray([-1 , -1,5, 4, -1, 7, 8 , ]));


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

3 .third  

let data = [10, 20, 30, 40, 50];
let sum = 0;

for (let i = 0; i < data.length; i++) {
    sum += data[i];
}

console.log("Sum of array:", sum); // Output: 150