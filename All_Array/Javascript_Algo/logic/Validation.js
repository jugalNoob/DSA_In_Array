let str = "jugal sharma";

// ✅ 1. Length check (5 to 30)
if (str.length >= 5 && str.length < 30) {
    console.log(true);
} else {
    console.log("check your age");
}

// ✅ 2. Type check
if (typeof str === "string") {
    console.log("data type is string");
} else {
    console.log("data type is number");
}

// ✅ 3. Required field chec
if (str.trim()) {
    console.log(str);
} else {
    console.log("trimmed name not shown");
}


// ✅ 4. No numbers allowed
if (/\d/.test(str)) {
    console.log("name should not contain numbers");
} else {
    console.log("name is valid (no numbers)");
}

// ✅ 5. Only letters (no special characters)
if (!/^[a-zA-Z]+$/.test(str)) {
    console.log("name should only contain letters");
} else {
    console.log("name format is correct");
}


//Only Letters, Numbers, and Spaces

if (!/^[a-zA-Z0-9 ]+$/.test(str)) {
    console.log("name should only contain letters, numbers, and spaces");
} else {
    console.log("name format is correct");
}

//Allow Letters, Numbers, and Common Special Characters

if (!/^[a-zA-Z0-9@._-]+$/.test(str)) {
    console.log("name contains invalid characters");
} else {
    console.log("name format is correct");
}



//Strict: No Special Characters, Only Letters & Numbers

if (!/^[a-zA-Z0-9]+$/.test(str)) {
    console.log("only letters and numbers allowed");
} else {
    console.log("name format is correct");
}



if(str.trim){
    console.log(str)
}else{
    console.log("trime name not shwo")
}

// ✅ 6. Capitalize first letter (optional tip)
let capitalized = str.charAt(0).toUpperCase() + str.slice(1);
console.log("Capitalized Name:", capitalized);



//Basic validations
console.log(str.length >= 5 && str.length < 30 ? "✅ Valid length" : "❌ Length must be 5-30");
console.log(typeof str === "string" ? "✅ Type is string" : "❌ Not a string");
console.log(str.trim() ? "✅ Name is provided" : "❌ Name is required");

// Content validations
console.log(/\d/.test(str) ? "❌ Name should not contain numbers" : "✅ No numbers found");
console.log(/^[a-zA-Z\s]+$/.test(str) ? "✅ Only letters and spaces" : "❌ Invalid characters found");



let str = "jugal123";

// Loop through each character and validate
let isValid = true;

for (let char of str) {
    let code = char.charCodeAt(0);

    // Check: is it NOT a letter (A-Z or a-z) AND NOT a number (0-9)?
    if (
        !(code >= 65 && code <= 90) &&  // A-Z
        !(code >= 97 && code <= 122) && // a-z
        !(code >= 48 && code <= 57)     // 0-9
    ) {
        isValid = false;
        break;
    }
}

if (isValid) {
    console.log("✅ name format is correct");
} else {
    console.log("❌ only letters and numbers allowed");
}


:::::::::: Number Check :::::::::::::::

let number = 7884510000;

console.log(String(number).length); // ✅ Output: 10


if (String(number).length === 10) {
    console.log("Valid 10-digit number");
} else {
    console.log("Invalid number length");
}



// Check if it's a number
if (!isNaN(number)) {
    console.log("✅ It is a number");
} else {
    console.log("❌ Not a number");
}




if (/^\d{10}$/.test(number)) {
    console.log("✅ Valid 10-digit number (strict check)");
} else {
    console.log("❌ Invalid format");
}

if (typeof number === "number") {
    console.log("✅ It's a number");
} else {
    console.log("❌ Not a number");
}