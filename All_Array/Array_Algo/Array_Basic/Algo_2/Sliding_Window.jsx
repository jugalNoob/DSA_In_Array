
:::: Patterns -------------------------------------<><>
1:sliding windowa
function maxSumSubarray(arr, windowSize) {
    if (arr.length < windowSize) {
        return null;
    }
    let maxSum = 0;
    let currentSum = 0;
    // Calculate sum of first window
    for (let i = 0; i < windowSize; i++) {
        maxSum += arr[i];
    }
    currentSum = maxSum;
    // Slide the window and update the sums
    for (let i = windowSize; i < arr.length; i++) {
        currentSum = currentSum - arr[i - windowSize] + arr[i];
        maxSum = Math.max(maxSum, currentSum);
    }
    return maxSum;
}
// Example usage
const arr = [4, 2, 1, 7, 8, 1, 2, 8, 1, 0];
const windowSize = 3;
console.log(maxSumSubarray(arr, windowSize)); // Output: 16 (sum of subarray [7, 8, 1])
