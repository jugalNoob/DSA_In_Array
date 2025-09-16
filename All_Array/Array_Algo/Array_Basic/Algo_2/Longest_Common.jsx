function longestCommonPrefix(word1, word2) {
    console.log("🔍 Comparing words:", word1, "and", word2);

    let prefix = ""; // 🧱 Initialize result string
    const minLength = Math.min(word1.length, word2.length); // 📏 Shorter word sets the limit
    console.log("📏 Minimum length to compare:", minLength);

    for (let i = 0; i < minLength; i++) {
        console.log(`\n🔎 Comparing characters at index ${i}: '${word1[i]}' vs '${word2[i]}'`);
        
        if (word1[i] === word2[i]) {
            prefix += word1[i];
            console.log(`✅ Match found. Updated prefix: '${prefix}'`);
        } else {
            console.log("❌ Mismatch found. Stopping comparison.");
            break;
        }
    }

    console.log("\n🎯 Final Longest Common Prefix:", `'${prefix}'`);
    return prefix;
}

longestCommonPrefix("hello", "helicopter");



// ✅ 1. Search Autocomplete / Suggestions
// Example:
// You're typing "hel" into Google. The system checks:

// "hel" vs "hello"

// "hel" vs "help"

// "hel" vs "helicopter"

// Using longestCommonPrefix("hel", "hello"), you confirm it starts the same → it's a good suggestion.




// ✅ 2. Command Line Tools / CLI Suggestions
// Example:
// In Linux, you type:

// nginx
// Copy
// Edit
// git ch


// The tool suggests:

// checkout

// cherry-pick

// Your code runs longestCommonPrefix("ch", "checkout") and suggests based on the result.

// 🛠 Real Use: Developer tools like Git CLI, Docker CLI, etc.