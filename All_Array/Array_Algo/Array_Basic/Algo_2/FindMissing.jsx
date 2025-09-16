

//////// ------------->>>>   Find Missing Number -------------------->>>
function findMissingNumber(num) {
    let sum = 0;
    for (let i = 0; i < num.length; i++) {
        sum += num[i];
    }
    return num.length * (num.length + 1) / 2 - sum;
}
console.log(findMissingNumber([0,1,2,4])); // Output will be 3 (as 3 is the missing number in the array)




function findMissingNumber(num) {
    console.log("📥 Input array:", num);

    let sum = 0;
    console.log("🔢 Calculating actual sum of elements in the array...");

    for (let i = 0; i < num.length; i++) {
        sum += num[i];
        console.log(`➡️ Adding num[${i}] = ${num[i]}, running sum = ${sum}`);
    }

    const n = num.length;
    const expectedSum = n * (n + 1) / 2;
    console.log(`✅ Expected sum from 0 to ${n}: ${expectedSum}`);

    const missing = expectedSum - sum;
    console.log(`❓ Missing number = Expected (${expectedSum}) - Actual (${sum}) = ${missing}`);

    return missing;
}

// Test case
const result = findMissingNumber([0, 1, 2, 4]);
console.log("\n🎯 Final Result: Missing Number =", result);




/// ---- >Use a Loop start row Class  ---> startty zero --------------->>


function findMissingNumber(data) {
    console.log("📥 Input array:", data);

    let actualSum = 0;
    let expectedSum = 0;

    console.log("🔁 Looping through the array to calculate sums...");

    for (let i = 0; i <= data.length; i++) {
        expectedSum += i;
        if (i < data.length) {
            actualSum += data[i];
            console.log(`i=${i} ➡️ expectedSum += ${i} => ${expectedSum}, actualSum += ${data[i]} => ${actualSum}`);
        } else {
            console.log(`i=${i} ➡️ expectedSum += ${i} => ${expectedSum}`);
        }
    }

    const missing = expectedSum - actualSum;

    console.log(`\n✅ Expected sum: ${expectedSum}`);
    console.log(`✅ Actual sum: ${actualSum}`);
    console.log(`❓ Missing number = Expected - Actual = ${missing}`);

    return missing;
}

// Test the function
let result = findMissingNumber([0, 1, 2, 4]);
console.log("\n🎯 Final Result: Missing Number =", result);



//--------->>>;;
function findMissingNumbers(data) {
    if (data.length === 0) {
        console.log("⚠️ Input array is empty. No missing numbers.");
        return [];
    }

    const unique = new Set(data);      // For O(1) lookups
    const missing = [];

    const min = Math.min(...data);
    const max = Math.max(...data);

    console.log("📥 Original Array:", data);
    console.log(`🔍 Checking range from ${min} to ${max}`);

    let current = min;

    while (current <= max) {
        if (!unique.has(current)) {
            console.log(`❌ Missing: ${current}`);
            missing.push(current);
        } else {
            console.log(`✅ Found: ${current}`);
        }
        current++;
    }

    console.log(`\n🎯 Total Missing: ${missing.length}`);
    console.log("📌 Missing Numbers:", missing);

    return missing;
}

// Example usage
let data = [0, 1, 5];
findMissingNumbers(data);


