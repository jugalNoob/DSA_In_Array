function twoSum(nums, target) {
  console.log("📥 Input array:", nums);
  console.log("🎯 Target sum:", target);

  let left = 0;
  let right = nums.length - 1;

  console.log("\n🔁 Starting Two-Pointer Search...\n");

  while (left < right) {
    const sum = nums[left] + nums[right];
    console.log(`🔎 Trying: nums[${left}] = ${nums[left]} + nums[${right}] = ${nums[right]} → sum = ${sum}`);

    if (sum === target) {
      console.log(`✅ Found! Indices: [${left}, ${right}] → Values: [${nums[left]}, ${nums[right]}]`);
      return [left, right];
    } else if (sum < target) {
      console.log(`📉 Sum < target. Moving left pointer: ${left} → ${left + 1}`);
      left++;
    } else {
      console.log(`📈 Sum > target. Moving right pointer: ${right} → ${right - 1}`);
      right--;
    }
  }

  console.log("❌ No pair found that adds up to the target.");
  return null;
}

// ✅ Example usage
const nums = [2, 7, 11, 15]; // Must be sorted
const target = 9;
console.log("\n🔚 Result:", twoSum(nums, target));



2:::Two pointer
function twoSum(arr, target) {
    // Sort the array (if it's not already sorted)
    arr.sort((a, b) => a - b);

    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        const sum = arr[left] + arr[right];
        if (sum === target) {
            return [arr[left], arr[right]];
        } else if (sum < target) {
            left++;
        } else {
            right--;
        }
    }

    return null; // No such pair found
}

// Example usage
const arr = [2, 7, 11, 15];
const target = 9;
console.log(twoSum(arr, target)); // Output: [2, 7]

