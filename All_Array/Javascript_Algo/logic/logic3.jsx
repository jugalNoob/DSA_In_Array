
// random color generator
const getRandomColor = () => {
     return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};
let io=getRandomColor()
 console.log(io)


// compact array value  .....................:::::::::::::::::::::::::::
const compact=(array)=>{
   return array.filter(Boolean)
}

console.log(compact([1, 2, '', 3, '', 4, 5])) // [1, 2, 3, 4, 5]



// Repeating without Loop  ...................................:::::::::
console.log("1".repeat(4));

// Random Number Gen ...............................:::::::::::::::::

const random = (min, max) => {
   return Math.floor(Math.random() * (max - min + 1)) + min;
 };
 
 // Example usage
 const min = 5;
 const max = 15;
 const randomNumber = random(min, max);
 console.log(randomNumber); // Output: A random number between 5 and 15 (inclusive)
 

// Digitize Number to array .................................::::::::::::::::::::::::
const convertToArray = (number) => {
   return [...`${number}`].map(el => parseInt(el));
 };
 
 // Example usage
 const number = 12345;
 const digitArray = convertToArray(number);
 console.log(digitArray); // Output: [1, 2, 3, 4, 5]
 


 // revers string without methods  ..............................::::::::::::::::::::::::

let string="jugal sharma"

let reversedstring=""

for(let index=string.length-1; index >= 0; index--){

   reversedstring+=string[index]
}

console.log(reversedstring); // Output:



//Ternary Operator .....................:::::::::::::::::::



const isloggedIn=true

const button=isloggedIn ? "log out" : "log in"


console.log(button)


::::::::::: String Code Array Code :::::::::::::::::::



let data = ["jugal", "sharma"];

for (let i = 0; i < data.length; i++) {
    const word = data[i];
    for (let j = 0; j < word.length; j++) {
        console.log(`${word[j]}: ${word.charCodeAt(j)}`);
    }
}

let charCodes = [];

for (let i = 0; i < data.length; i++) {
    const word = data[i];
    for (let j = 0; j < word.length; j++) {
        charCodes.push({ char: word[j], code: word.charCodeAt(j) });
    }
}

console.log(charCodes);


let result = {};

for (let i = 0; i < data.length; i++) {
    const word = data[i];
    for (let j = 0; j < word.length; j++) {
        result[word[j]] = word.charCodeAt(j);
    }
}

console.log(result);



:::::::::: Validation string vaey Important :::::::::::


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
