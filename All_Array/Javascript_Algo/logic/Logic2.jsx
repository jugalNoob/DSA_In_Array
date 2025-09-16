
// string convert to array :::::::

const numone = "10";
let oar = +numone; // Converts string to number using unary +
console.log(typeof oar); // "number"


Add and Min :::::::::::::::::>.....:::::::::::::::>>>>>>>>>>>>>>>

        let io = 0;

        function openLinks() {
            console.log(io);
            io++;
        }

        function Min() {
            console.log(io);

            // Check if io is greater than 0 before decrementing
            if (io > 0) {
                io--;
            } else {
                alert('io cannot be less than 0');
            }
        }
    

/// check array Goat Array statr row  class :::::::::::::::::::::::::::::::

    <input type="text" id="Search" placeholder="Enter a name">
    <button onclick="flipButton()">Click</button>


    <script>


let data = ["jugal", "sharma", "knaika", "ayush", "karan"];
let searchCounts = {}; // Object to store search counts for each unique name

function flipButton() {
    const searchInput = document.getElementById("Search").value.trim();
    let result = undefined;

    // Check if the input exists in the data array
    for (let i = 0; i < data.length; i++) {
        if (data[i] === searchInput) {
            result = data[i];
            break;
        }
    }

    // If the search term exists in the data, increment the counter for it
    if (result) {
        if (!searchCounts[result]) {
            searchCounts[result] = 1;  // Initialize count for the first search of this term
        } else {
            searchCounts[result]++;  // Increment count for subsequent searches
        }
        console.log(`Found: ${result}`);
        console.log(`Search count for "${result}": ${searchCounts[result]}`);

        // Determine which search term has the highest score
        let maxTerm = null;
        let maxCount = 0;
        for (const [term, count] of Object.entries(searchCounts)) {
            if (count > maxCount) {
                maxCount = count;
                maxTerm = term;
            }
        }
        console.log(`Highest search term so far: "${maxTerm}" with count ${maxCount}`);
    } else {
        console.log("Not Found");
    }
}





// Memoization function .....................:::::::::::::::::::::::::::::::

            // console.time("First call array");
// let arr=[10 , 20 , 30 , 40 , 50]
// console.log(arr)
// console.timeEnd("First call array");

function sum(one) {
   let total = 0;
   for (let i = 1; i <= one; i++) {
      total += i;
   }
   return total;
}

// Memoization function
const memoization = (fn) => {
   const cache = {}; // Cache persists across calls to memoized function

   return function (...args) {
      const n = args[0];

      if (n in cache) {
         console.log("Fetching from cache:", n);
         return cache[n];
      } else {
         console.log("Calculating:", n);
         const result = fn(n);
         cache[n] = result;
         return result;
      }
   };
};

const memoizedSum = memoization(sum);

// Testing the memoized function with timing
console.time("First call");
console.log(memoizedSum(20000)); // Calculation occurs here
console.timeEnd("First call");

console.time("Second call (cached)");
console.log(memoizedSum(20000)); // Result fetched from cache
console.timeEnd("Second call (cached)");






/// check loop time take  .............................
console.time("Loop Time");
for(let i=0; i<1000; i++){
   console.log(i)
}
console.timeEnd("Loop Time");


for(let i=0; i<1000; i++){ ///every single  loop take time 
   console.time("Loop Time");
   console.log(i)
   console.timeEnd("Loop Time");
}





///////// Important Logic ////////////

let x = 0;
let intervalId;

function startInterval() {
  intervalId = setInterval(() => {
    console.log(x); // Log the current value of x
    x++; // Increment x

    // Conditional logic and wait 5s
    if (x > 5) {
      console.log("take 5s");
      clearInterval(intervalId); // Stop the interval

      setTimeout(() => {
        x = 0; // Reset x to 0 after 5 seconds
        startInterval(); // Restart the interval

        console.log("take 5s to restart interval")
      }, 5000);
    }
  }, 2000); // Runs every 2000 milliseconds (2 seconds)
}

startInterval(); // Start the interval initially




//event Loop  ....................

console.log('1')

setTimeout(()=>{

   console.log('2')

},1000)

console.log('3')


::::::::::: /// Important run logic 

let x = 0;

setInterval(() => {
  console.log(x); // Log the current value of x
  x++; // Increment x

  // Conditional logic
  if (x > 5) {
    x = 0; // Reset x to 0 if it exceeds 5
  }
}, 2000); // Runs every 2000 milliseconds (2 seconds)


::::::::: check loop Time ::::::::::::::

function Loop() {
   let x = 100;

   for (let i = 0; i < x; i++) {
       // Simulate some processing here
       console.log("Loop iteration:", i);
   }

   return x; // Return after the loop completes
}

console.time("Loop Time");
Loop();
console.timeEnd("Loop Time");


// ::: check array  or str or object or number in if else 

// let arr = ["jugal", "kanika", "study"];
// let str = "jugal";
// let obj = { name: "jugal sharma", age: 45 };
// let num = 7000;


let num=4556456546546546e+20;

if(typeof(str) === "string"){

   console.log(true , "this is a string")


}else if(typeof(obj) === "object"){
      console.log(true , "this is an   obj") //same logic

   }else if(typeof(num) === "number"){

      console.log(true , "this is number") //same logic
   }
   
   else if (Array.isArray(arr) ){
      console.log(true , "this is an array") //same logic
   }
else{
   console.log(false  , "this is not string or array " , arr)
}



/// check in array how many number and string in array element ................

let data = ["jugal", "lion", 45, 78 , 45];

let arr = 0; // Counter for arrays
let num = 0; // Counter for numbers

for (let i = 0; i < data.length; i++) {

  console.log(data[i]);

  if (typeof(data[i]) === "string") { 
   //  console.log(data[i]);
    console.log(arr, 'Array count');
    arr++;
  } else if (typeof(data[i]) === "number") {  // Check type of data[i], not num
   //  console.log(data[i]);
    console.log(num, 'Number count');
    num++;
  } else {
    console.log(false, 'Not an array or number');
  }
}

console.log("Total arrays:", arr);
console.log("Total numbers:", num);



/// get code time start end   ------------------->>>

const startTime = performance.now();
console.log(Math.random().toString().length)
console.log(Math.random()<0.5)
const coinFlip = Math.random() < 0.5 ? 'Heads' : 'Tails';
console.log(coinFlip);

      const endTime = performance.now();


function getRandomDate(start, end) {
   return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

const startDate = new Date(2000, 0, 1); // January 1, 2020
const endDate = new Date(2023, 11, 31); // December 31, 2023
console.log(getRandomDate(startDate, endDate));
 console.log("Time taken for the search (ms):", endTime - startTime);





 //Random javscript  ----------------------->>>


console.log(Math.random().toString().length)
console.log(Math.random()<0.5)
const coinFlip = Math.random() < 0.5 ? 'Heads' : 'Tails';
console.log(coinFlip);





//Generating a Random Date within a Range ----------------->>> //////////////////

function getRandomDate(start, end) {
   return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

const startDate = new Date(2000, 0, 1); // January 1, 2020
const endDate = new Date(2023, 11, 31); // December 31, 2023
console.log(getRandomDate(startDate, endDate));



||||||||||||//|||||| Array first last and center element
let data = [10, 20, 30, 40, 50, 60, 70];

console.log(data.length, "length index"); // full length (7)

let centerIndex = Math.floor(data.length / 2);
console.log(centerIndex, "center index, element:", data[centerIndex]); // center element index (3) and element (40)

let endIndex = data.length - 1;
console.log(endIndex, "end index, element:", data[endIndex]); // last index (6) and element (70)


let firstElement = data[0];
console.log(0, "first element index,", firstElement, "first element"); // index 0 and element 10



::::::::: Nullish ...................................... 
///Nullish Coalescing Operation 

let objt={
    name:"jugal",
    class:"10th",
    roll:12,
    gender:"male",
    names:""
}
console.log(objt["names"] ?? null);  //show only  undefind or null
console.log(objt["nametyhus"] ?? undefined);
// console.log(objt["nametyhus"] ||  "unknow"); // show 
console.log(objt.name || "kio")






/////////////////////Binary Number ////////////////////////////

let one = 15;
let binaryString = one.toString(2);
console.log(binaryString); // Output: "1111"
let convert=parseInt(binaryString,2)
console.log(`The decimal value of ${convert} is :${convert}`);



////Javascript interView ::::::::::::::::::::::::

console.log(undefined == null)
console.log(undefined === null)
console.log(18 == "18")
console.log(18 === 18)
console.log(isNaN(18))
console.log(!isNaN(18))
console.log(18 == 18 || 18 == 17  , " i ma ||")
console.log(18 == 18 && 18 == 18, "i am &&")
console.log(Math.floor(Math.random()*1000))
let hex = `XYZ${Math.random().toString(15).slice(2).padEnd(24, '@gmail.com')}`;
console.log(hex)



:::::::: Very Important in Jvacript ::::::::::::::::::::::::::::::::::::

///Create a custom create  a ProTotype |||||||||||||||||||||||||||||||||||
const one = [10, 20, 30, 40];
console.log(Object.getPrototypeOf(one)); 


Date.prototype.getLastYear = function() {
    return this.getFullYear() - 1; // Get the current year and subtract 1
  };
  
  let date = new Date();
  console.log(date.getLastYear()); // Output: Previous year




WordList Rand Hashes and random OTP and Random Email ......................................>>




let word = "wordlist";  :::::::: --> random  string number 
let randomIndex = Math.floor(Math.random() * word.length);
console.log(randomIndex); // Outputs a random index between 0 and 7
console.log(word[randomIndex]); // Outputs the letter at that index in the string



// let wordlist = `4114${Math.random().toString(16).slice(2, 16).padEnd(25, "iyhewchdchshdcs")}`; :::: Random hashes
// console.log(wordlist);
// console.log(wordlist.length);


::::: random wordlist create Important :::::::::::::::
let word = "jugalsharmajammu";
let wordlistLength = 10; // Length of the random wordlist you want to generate
let randomWordlist = "";

// Loop to create a random wordlist of the desired length
for (let i = 0; i < wordlistLength; i++) {
  let randomIndex = Math.floor(Math.random() * word.length);
  randomWordlist += word[randomIndex];
}

console.log("Random Wordlist:", randomWordlist);





if else and multi if else .........................Important ------>>

Here's how the code you provided will execute:
 The first if(18 == 19) condition is false, so it moves to the else if(18 > 19).
 The else if(18 > 19) condition is also false, so the program will go to the else block.
 In the else block, the final message "The first and second conditions are false" will be printed.


if(18 == 19){

   console.log("The condition is true");
}else if(18  < 19){
   
   if(18==18){

      console.log("18==18 is true")
   }else{
console.log("18==18 is false")
   }


   console.log("The first condition is false, but the second is true");
}else{
   console.log("The first and second conditions are false");
}






/// two Link open two webiste ----------------------------------->

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Open Two Links</title>
    <script>
        function openLinks() {
            window.open('https://www.link1.com', '_blank');
            window.open('https://www.link2.com', '_blank');
        }
    </script>
</head>
<body onload="openLinks()">
    <p>Opening both websites...</p>
</body>
</html>




////  ---------->  Time date  
let one=Date.now()

console.log(one) // this timeStamp

let currentDate = new Date();
console.log(currentDate); // this current data-

setInterval(function() { ::::::::::::::::::::::::::::::::::
    const times = new Date();
    const hours = times.getHours().toString().padStart(2, "0");
    const minutes = times.getMinutes().toString().padStart(2, "0");
    const seconds = times.getSeconds().toString().padStart(2, "0");
    
    const alltime = `${hours} hours ${minutes} minutes ${seconds} seconds`;
    
    console.log(alltime);
}, 1000);

// setInterval(function() { :::::::::::::::::::::::::::::::::::::::::::::
//     const times = new Date();
//     const hours24 = times.getHours(); // 24-hour format
//     const minutes = times.getMinutes();
//     const seconds = times.getSeconds();
    
//     // Convert hours to 12-hour format
//     const ampm = hours24 >= 12 ? 'PM' : 'AM';
//     const hours12 = (hours24 % 12) || 12; // Handle midnight (0) as 12

//     const alltime = `${hours12} hours ${minutes} minutes ${seconds} seconds ${ampm}`;
    
//     console.log(alltime);
// }, 1000);




function update() {
   let currentDate = new Date(); // Create a Date object
   // Options to format the time with AM/PM in Indian Standard Time (IST)
   let options = {
       timeZone: 'Asia/Kolkata', // Set to Indian Standard Time
       hour12: true, // 12-hour format
       hour: 'numeric',
       minute: 'numeric',
       second: 'numeric',
   };
   // Format date and time with locale options for IST
   let formattedDateTime = currentDate.toLocaleString('en-IN', options);
   console.log(formattedDateTime); // Prints the date and time with AM/PM in IST
}
setInterval(() => {
   update();
}, 1000);



// function update(){
//    let data= new Date().toUTCString();
//    console.log(data)
// }
// setInterval(()=>{
//    update()
// },1000)






// function update()
// {
//    let date = new Date();

//    console.log(
//        date.getFullYear(),  // Get the full year (e.g., 2024)
//        date.getMonth(),     // Get the month (0-11, where 0 is January and 11 is December)
//        date.getDate(),      // Get the day of the month (1-31)
//        date.getHours(),     // Get the hours (0-23)
//        date.getMinutes(),   // Get the minutes (0-59)
//        date.getSeconds()    // Get the seconds (0-59)
//    );
   

// }
// setInterval(() => {
//    update();
// }, 1000);



/// Wait Time Out  --------------------->
function Set() {
   const delay = Date.now() + 5000; // 3-second delay
   // Busy-wait loop until the delay passes
   while (Date.now() < delay) {
      // Just waiting
      // console.log('waiting room')
   }
   console.log("jugal sharma");
}

Set();


function Set(){

   setTimeout(()=>{
      console.log("jugal sharma")
   } , 3000)
}

Set()




Shallow copy and deep copy with code||||||||||||||||||||||||||||||


const originalObject = { name: 'John', age: 30, address: { city: 'New York', state: 'NY' } };
const shallowCopy = { ...originalObject };

console.log(shallowCopy); // { name: 'John', age: 30, address: { city: 'New York', state: 'NY' } }

shallowCopy.name = 'Mary';
shallowCopy.address.city = 'Los Angeles';

console.log(originalObject); // { name: 'John', age: 30, address: { city: 'Los Angeles', state: 'NY' } }
console.log(shallowCopy); // { name: 'Mary', age: 30, address: { city: 'Los Angeles', state: 'NY' } }


//Called Shallow Copy
let obj={
    name:"peter",
    age:{
        city:"LA",
        state:"Link"
    }
}
console.log(obj)
let user={...obj}
// let user=obj
user.name="Jugal sharma"
user.age.city="USA"
console.log(user)







// Coin FLip Game start   ----------------------------------?>>>>>>>>>>>>>>

let clickCount = 0;
const maxClicks = 5;
let one=0
let two=0;
function flipButton() {
    if (clickCount < maxClicks) {
        clickCount++;
        const coinFlip = Math.random() < 0.5 ? 'Heads' : 'Tails';
        console.log(coinFlip);
        if (coinFlip === 'Heads') {
         
            console.log(coinFlip + " you win ");
            console.log(one++)
        } else {
            console.log(coinFlip + " you lose ");
            console.log(two++)
        }
    } else {
        console.log("No more flips allowed, you've reached the limit of 10.");

        console.log(one > two ? "You wine as a head" : "You  lose as a tail" )
    }


}
flipButton()

 ::: Without click random coin Flip ;;;  --------------------------------
const coinFlip = Math.random() < 0.5 ? 'Heads' : 'Tails';
console.log(coinFlip)
if(coinFlip === 'Heads'){
   console.log(coinFlip + " you win ")
}else{
   console.log(coinFlip + " you loose ")
}


////////////////// -------------------------- >> Start And end  Time Importan
let startTime = performance.now();
console.log(startTime.toString() , "startTime")

let i = 0;
while (i < 10) {
    console.log(i);
    i++;
}

let endTime = performance.now();
console.log(endTime.toString() , "endTime")
console.log(`Execution time: ${endTime - startTime} milliseconds`);

performance.now(): This method returns the current time in milliseconds, with fractional precision, relative to the time origin (typically the time the page was loaded).

startTime: Captures the time just before the loop starts.

endTime: Captures the time right after the loop ends.

Execution time calculation: By subtracting startTime from endTime, you get the total time taken to execute the loop, which is then logged to the console.


/////////////::::::::::::: Random array multi generaty

 let arr = ["jugal", "skaran", "anku", "lion", "tiger"];
      let arr1 = ["usa", "indian", "japan", "south africa", 'brazil'];
      let arr2 = [10, 20, 30, 60, 50, 40, 60];
      let arr3 = [10.0, 20.7, 58.5, 69.780];

      // Create an array containing references to the four arrays
      let arrayOfArrays = [arr, arr1, arr2, arr3];

      // Pick a random array from arrayOfArrays
      const randomArrayIndex = Math.floor(Math.random() * arrayOfArrays.length);
      const randomArray = arrayOfArrays[randomArrayIndex];





let data=["data" , "karan" , "jugal" , "sharma" , "solar"]  /// single array randomh ;;
let random=Math.floor(Math.random()*data.length)
console.log(data[random])


///:::::::::::::_______________>>>>>>>>> Import and export  

import { add, io, subtract } from "./Imp.js"; // Import the module

const sum = add(10, 5);
const difference = subtract(10, 5);

console.log('Sum:', sum);           // Output: Sum: 15
console.log('Difference:', difference); // Output: Difference: 5

console.log(io())



export function io() { // Use ESM export
    let two = "Jugal Sharma";
    return two;
}

// module.exports = io; // Use CommonJS export


export function add(a, b) {
    return a + b;
}

export function subtract(a, b) {
    return a - b;
}






/// --- >>>>>>>>>>>>>>>  ------------------------------------->
check even and add  Number 
    let cons =4

    if(cons % 2 ===0){
        console.log("number is even")
    }else{
        console.log("number is odd")
    }




//////////// -------------------->>> shuffering array  

function shuffleArray(array) {
        return array.sort(() => Math.random() - 0.5);
    }
    
    const colors = shuffleArray(['red', 'blue', 'green', 'yellow', 'orange', 'purple']);
    console.log(colors);



/// string dynamic string  :::::::::::::::::::::::::::::::::::::::::::::::::
redirect to new  URL after a deplay  -------------------------->>
  setTimeout(() => {
        window.location.href = "https://www.youtube.com/";
    }, 5000);
    




//merge object -------------------------> ::::::::::::::::::::::::::::::::::::::::

const person={name:"jan"}

const  details={age:30}

const full={...person , ...details}


////////////////////////  ---> number all change variable and  value

 let ran = 100;


 setInterval(()=>{

   console.log(ran , "ran add ++")
   ran ++
 } , 4000)


// only random change console -------------------  ::::::::::::::::::::::::::::::::
let ran = 100;

 setInterval(() => {
    console.log(Math.floor(ran * Math.random()));
}, 3000);


////////// string change  -------------------------------- ::::::::::::::::::::::::::::

 let str = "jugal sharma";
 let randomIndex = Math.floor(Math.random() * str.length);

 console.log(str[randomIndex]);


function shuffleString(str) {
   let arr = str.split(''); // Convert the string to an array of characters
   for (let i = arr.length - 1; i > 0; i--) {
       let j = Math.floor(Math.random() * (i + 1)); // Get a random index
       [arr[i], arr[j]] = [arr[j], arr[i]]; // Swap elements
   }
   return arr.join(''); // Convert the array back to a string
}
let str = "jugal sharma";
let shuffledStr = shuffleString(str);

console.log(shuffledStr);


:::::::::::::::: Key Logger -------------------------->>> Important ::::::::::::::  """"""""""""""""""""""""""""

let keysPressed = [];

document.addEventListener('keydown', function(event) {
  const key = event.key;
  keysPressed.push(key); // Store the key pressed
  console.log('Keys pressed so far:', keysPressed.join(''));
});

// You can now use the keysPressed array to access the key logs.


document.addEventListener('keydown', function(event) { :::::::::::: --------------->
  const key = event.key;
  console.log('Key pressed:', key);

  // Send the key to the server
  fetch('/log-key', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ key: key })
  }).catch(err => console.log('Error sending key:', err));
});


document.addEventListener('keydown', function(event) { ::::::::::::::::::::::::::------------------>
  const key = event.key;
  const shiftPressed = event.shiftKey ? 'Shift pressed' : 'Shift not pressed';
  const timestamp = new Date().toLocaleTimeString();

  console.log(`Key: ${key}, ${shiftPressed}, Timestamp: ${timestamp}`);
});



document.addEventListener('keydown', function(event) {  :::::::::::::::::--------------->
  const key = event.key;
  const isCtrlPressed = event.ctrlKey ? 'Ctrl' : '';
  const isAltPressed = event.altKey ? 'Alt' : '';
  const isShiftPressed = event.shiftKey ? 'Shift' : '';
  const combo = [isCtrlPressed, isAltPressed, isShiftPressed, key].filter(Boolean).join(' + ');

  console.log('Key combination:', combo);
});



document.addEventListener('keydown', function(event) {  ::::::::::::::-------------------->
  const key = event.key;
  if (/^[a-zA-Z]$/.test(key)) {
    console.log('Letter key pressed:', key);
  }
});
