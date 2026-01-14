let data='jugaljs'

let obj={}
for(let i=0; i<data.length; i++){

    let str=data[i]

    if(obj[str]){
        obj[str]++
    }else{
        obj[str]=1
    }
}

console.log(obj)




// // First  -------- Target is 5
// while(0 < 5)

// let sum=data[1]+data[4]


// if(5 === target 5){
//     return [data[start] ,data[end]]
// }

// // second  -------- Target is 4

// while(0 < 4)

// let sum=data[1]+data[4]


// if(5 ===  4){
//     return [data[start] ,data[end]]
// }else if(5 > 4){

//     start ++
// }else{
//     end --
// }


// while(1 < 4)

//     let sum=data[2]+data[4]



//     if(2  === 4){

//     }


//if find greathen mind so run left 
//if find less then mind so run right side

// mind value 3
// if 10 > 30  so run left side 






// function capitalize(str) {
//   if (!str) return str
//   return str[0].toUpperCase() + str.slice(1)
// }

// console.log(capitalize(data))





 


// function Outer() {
//   let x = 0;

//   setInterval(() => {
//     console.log(x++);
//   }, 2000);
// }

// Outer();




// function fetchUser(id) {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       id ? res({ id, name: "Jugal" }) : rej("No ID");
//     }, 1000);
//   });
// }

// async function controller() {
//   try {
//     const user = await fetchUser(1);
//     console.log(user);
//   } catch (e) {
//     console.log(e);
//   }
// }








// console.log(fast)

// debugger;
// for(let i=0; i<data.length; i++){

//     if(data[i] > max){
//     console.log(count++)
//     if(count > 1){
//     max=data[i]
//     break;
//         }
//     }
// }
// console.log(max)

// const data=[40, 10 , 40 ]

// console.log(data.sort((a, b) => a - b))


// let data=[10 , 20 , 30 , 40]
// let add='jugal'
// let ind=2

// debugger;
// for(let i=data.length-1; i>=ind; i--){
    
//     data[i+1]=data[i]
// }

// data[ind]=add
// console.log(data)





// let datase=data.reduce((sum  , e)=>sum+(e.roll > 0 ? e.roll : 0) , 0)


// // let data=[
// // [1 , 2 , 3],
// // [4 , 5 , 6]
// // ]

// // data[0].push(7);

// // console.log(data);

// // deep show copy in array -------------------------->>
// // let data1=[
// //     [1 , 2 , 3],
// //     [1 , 2 , 2]
// // ]
// // let newdata=[[...data1[0]] , [...data1[1]]]
// // const y=data1.map((item)=>[...item])
// // newdata[0].push(10)
// // console.log(data1)
// // console.log(newdata)


// // let result=true ? false ? 'A' : 'B' : 'C'
// // //false ? 'a' : 'B
// // //true ? 'b' : 'c'
// // console.log(result)




// let data = [
//   { name: 'jugal', roll: 44, class: '10th', number: 45 },
//   { name: 'karan', roll: 45, class: '12th', number: 69 },
//   { name: undefined, roll: 45, class: '12th', number: 69 },
//   { name: null, roll: -45, class: '12th', number: 69 }
// ]

// let reducer = data.map(elem => ({
//   name: elem.name,
//   roll: elem.roll
// }));

// console.log(reducer);


// let datase=data.reduce((sum  , e)=>sum+(e.roll > 0 ? e.roll : 0) , 0)
// console.log(datase)
 

// // let  reduser=data.reduce((sum ,e) =>sum+ (e.roll > 0 ?  e.roll : 0),0)
// // console.log(reduser)











// ].reduce((alamit, elem) => {
//   if (elem.roll > 0) {
//     return alamit + elem.roll;
//   }
//   return alamit; // ✅ MUST return accumulator
// }, 0);


// const totalRoll = data.reduce(
//   (sum, e) => sum + (e.roll > 0 ? e.roll : 0),
//   0
// );

// console.log(totalRoll);


// let dataa=18 == 17 ?  'a' : 'b' : 'c'

// ].filter(elem =>
//   typeof elem.name === 'string' &&
//   typeof elem.roll === 'number' &&
//   elem.roll > 0
// ).map((elem=>({myfirendname:elem.name})))




// console.log(null + false + true - false + true , 'this answer 2') 

// Step 1️⃣ Expression Evaluation

// As we already calculated:

// null + false + true - false + true
// → 0 + 0 + 1 - 0 + 1
// → 2



// let data=[1 , 2 , 3]

// let result=[]

// for(let i=0; i<data.length; i++){

//     for(let j=0; j<data.length; j++){

//         console.log(`idata ${data[i]}  jdata ${data[j]}`)

//         if(data[i] !== data[j]){

//          result.push(data[i])
//         }
//     }

// }

// console.log(result)










// 📌 What this code is doing?
// 🔁 You're using two loops to check every possible buy & sell pair


// | Meaning                                      | Variable    |
// | -------------------------------------------- | ----------- |
// | `i` = Buy day index                          | First loop  |
// | `j` = Sell day index (must be after buy day) | Second loop |




// 🔍 Step-by-step Execution
// Array: [7, 1, 5, 3, 6, 4]
// Start
// maxProfit = 0

// i = 0 → Buy at price 7

7
// Loop j starts from i+1:



// | j | Sell price | Profit = price[j] - price[i] | maxProfit |
// | - | ---------- | ---------------------------- | --------- |
// | 1 | 1          | 1-7 = **-6**                 | 0         |
// | 2 | 5          | 5-7 = **-2**                 | 0         |
// | 3 | 3          | 3-7 = **-4**                 | 0         |
// | 4 | 6          | 6-7 = **-1**                 | 0         |
// | 5 | 4          | 4-7 = **-3**                 | 0         |


// Nothing > 0, so maxProfit remains 0

// i = 1 → Buy at price 1

// | j | Sell price | Profit      | maxProfit       |
// | - | ---------- | ----------- | --------------- |
// | 2 | 5          | 5-1 = **4** | 4               |
// | 3 | 3          | 3-1 = **2** | 4               |
// | 4 | 6          | 6-1 = **5** | **5** (updated) |
// | 5 | 4          | 4-1 = **3** | 5               |


// i = 2 → Buy at 5

// | j     | Profit |
// | ----- | ------ |
// | 3 (3) | -2     |
// | 4 (6) | 1      |
// | 5 (4) | -1     |


// No update.

// i = 3 → Buy at 3


// | j     | Profit |
// | ----- | ------ |
// | 4 (6) | 3      |
// | 5 (4) | 1      |



// Still no update.

// i = 4 → Buy at 6
// | j     | Profit |
// | ----- | ------ |
// | 5 (4) | -2     |




// 🏁 Final Output
// Max Profit: 5


// ( Buy at 1, Sell at 6 )

// 🧠 Concept Summary


// let data=[10 , 20 , 30 , 40 , 50]

// function Hostings(data){

//     console.log(data)

// }

// Hostings()

// const Data=[10 , 20 , 30 , 40]
// console.log(typeof(data))
// console.log(Data instanceof Array)
// console.log(Array.isArray(Data))






// class Mainschool {
//   static school = 'SchoolOfIndia';

//   constructor(name, Student, room) {
//     this.name = name;
//     this.Student = Student;
//     this.room = room;
//     this.school = Mainschool.school; // ✅ assign static to instance
//   }

//   CheckSchool() {
//     console.log(`this is my school name ${this.name}
//     how many student in my school ${this.Student}
//     how many room in my school ${this.room}
//     my school is ${Mainschool.school}`);
//   }
// }


// class Firstschool extends Mainschool {
//   constructor(name, Student, room, location) {
//     super(name, Student, room);
//     this.location = location;
//   }

//   // Override parent method
//   CheckSchool() {
//     // call parent version
//     super.CheckSchool();
//     // add subclass-specific logic
//     console.log(`this is our location ${this.location}`);
//   }
// }



// const main= new Mainschool('jugal sharma', 45, 20);
// const info = new Firstschool('karan sharma', 20, 100, 'jammu');
// main.CheckSchool()
// info.CheckSchool()

// console.log(Firstschool.prototype)


// let io = 100;
// console.log(typeof(io))
// console.log(typeof(io.toString()));
// console.log(typeof(JSON.stringify(io)))
// console.log(typeof(String(io)))


// --- > deep Copy ------------->>



// while (mid <= end) {
//   console.log(45);
//   console.log(data[mid], 'mid to end');
//   mid++;
// }



// console.log(1 > 1)

// console.log(1 >= 1)




// let data=[10 , 20 , 30 , 40 , -50]


// for(let i=0; i<data.length; i++){

//     if(data[i]>0){

//       if(data[i] > 10){

//         console.log(data[i])

//       }
//     }
// }




// 💡 Key Points

// Immutable → You cannot change a primitive value.




// // | Question                   | Answer                                                                                 |
// // | -------------------------- | -------------------------------------------------------------------------------------- |
// // | Does it run right to left? | ❌ No                                                                                   |
// // | Does it run left to right? | ✅ Yes                                                                                  |
// // | Why?                       | Because `for (let i = 0; i < data.length; i++)` starts from index 0 and increments i++ |



// // class Students {
// //   constructor(name, subject) {
// //     this.Username = name;
// //     this.subject = subject;
// //   }
// // }

// // const userInfo = new Students('Jugal Sharma', 'Computer');
// // const userInfo2 = new Students('Karan Sharma', 'Computer');

// // // Add a prototype method AFTER the class is defined
// // Students.prototype.MainFn = function () {
// //   console.log('Your teacher name: ' + this.Username);
// // };

// // Students.prototype.SubjectFn = function () {
// //   console.log('Your Subject name: ' + this.subject);
// // };

// // userInfo.SubjectFn();
// // userInfo2.MainFn();


// // // Call the method on one instance
// // userInfo.MainFn();

// // console.log(userInfo);
// // console.log(userInfo2);

// // console.log(Students.prototype);
// // console.log(Object.getPrototypeOf(userInfo));


// // console.log(userInfo.hasOwnProperty('MainFn')); // false
// // console.log('MainFn' in userInfo); // true (because it comes from prototype)




// // Teacher (parent)
// //   ├── name
// //   ├── subject
// //   └── teach()

// //        ⬇️ inherits

// // Student (child)
// //   ├── studentName
// //   └── learn()




// // var x;          // declaration is hoisted (initialized as undefined)
// // console.log(x); // prints undefined
// // x = 'jugal';    // assignment happens later



// // 🧩 1️⃣ Basic String Practice Problems

// // ✅ Reverse a String
// // function reverseString(str) {
// //   return str.split('').reverse().join('');
// // }
// // console.log(reverseString('hello')); // "olleh"

// // ✅ Check if String is Palindrome
// // function isPalindrome(str) {
// //   const reversed = str.split('').reverse().join('');
// //   return str === reversed;
// // }
// // console.log(isPalindrome('madam')); // true

// // ✅ Count Characters in a String
// // function countChars(str) {
// //   const map = {};
// //   for (let char of str) {
// //     map[char] = (map[char] || 0) + 1;
// //   }
// //   return map;
// // }
// // console.log(countChars('hello')); // { h: 1, e: 1, l: 2, o: 1 }

// // ✅ Convert First Letter of Each Word to Uppercase (Title Case)
// // function toTitleCase(str) {
// //   return str
// //     .split(' ')
// //     .map(word => word[0].toUpperCase() + word.slice(1))
// //     .join(' ');
// // }
// // console.log(toTitleCase('hello world from jugal')); // "Hello World From Jugal"

// // 🧠 2️⃣ Intermediate String Problems
// // ✅ Check for Anagram
// // function isAnagram(str1, str2) {
// //   const normalize = s => s.toLowerCase().split('').sort().join('');
// //   return normalize(str1) === normalize(str2);
// // }
// // console.log(isAnagram('listen', 'silent')); // true

// // ✅ Find the First Non-Repeating Character
// // function firstNonRepeatingChar(str) {
// //   for (let char of str) {
// //     if (str.indexOf(char) === str.lastIndexOf(char)) {
// //       return char;
// //     }
// //   }
// //   return null;
// // }
// // console.log(firstNonRepeatingChar('aabbcddee')); // 'c'

// // ✅ Check if Two Strings are Rotations of Each Other
// // function isRotation(str1, str2) {
// //   return str1.length === str2.length && (str1 + str1).includes(str2);
// // }
// // console.log(isRotation('abcd', 'cdab')); // true

// // ✅ Find Character with Maximum Occurrence
// // function maxChar(str) {
// //   const map = {};
// //   let max = 0, maxChar = '';
// //   for (let char of str) {
// //     map[char] = (map[char] || 0) + 1;
// //     if (map[char] > max) {
// //       max = map[char];
// //       maxChar = char;
// //     }
// //   }
// //   return maxChar;
// // }
// // console.log(maxChar('javascript')); // 'a'

// // ✅ Count Words in a String
// // function countWords(str) {
// //   return str.trim().split(/\s+/).length;
// // }
// // console.log(countWords('  hello   world from  jugal  ')); // 4

// // ⚙️ 3️⃣ Advanced String Problems (DSA Level)
// // ✅ Longest Palindromic Substring
// // function longestPalindrome(s) {
// //   let res = '';
// //   for (let i = 0; i < s.length; i++) {
// //     let odd = expand(s, i, i);
// //     let even = expand(s, i, i + 1);
// //     res = odd.length > res.length ? odd : res;
// //     res = even.length > res.length ? even : res;
// //   }
// //   return res;
// // }

// // function expand(s, l, r) {
// //   while (l >= 0 && r < s.length && s[l] === s[r]) {
// //     l--; r++;
// //   }
// //   return s.slice(l + 1, r);
// // }

// // console.log(longestPalindrome('babad')); // "bab" or "aba"

// // ✅ Find All Permutations of a String (Backtracking)
// // function getPermutations(str) {
// //   if (str.length <= 1) return [str];
// //   let result = [];
// //   for (let i = 0; i < str.length; i++) {
// //     let char = str[i];
// //     let remaining = str.slice(0, i) + str.slice(i + 1);
// //     for (let perm of getPermutations(remaining)) {
// //       result.push(char + perm);
// //     }
// //   }
// //   return result;
// // }
// // console.log(getPermutations('abc'));

// // ✅ Find Longest Common Prefix (used in autocomplete/search)
// // function longestCommonPrefix(arr) {
// //   if (!arr.length) return '';
// //   let prefix = arr[0];
// //   for (let str of arr) {
// //     while (str.indexOf(prefix) !== 0) {
// //       prefix = prefix.slice(0, -1);
// //       if (!prefix) return '';
// //     }
// //   }
// //   return prefix;
// // }
// // console.log(longestCommonPrefix(['flower', 'flow', 'flight'])); // "fl"

// // ✅ Remove All Non-Alphabetic Characters
// // function cleanString(str) {
// //   return str.replace(/[^a-zA-Z]/g, '');
// // }
// // console.log(cleanString('he!!ll##o@@')); // "hello"

// // ✅ Check if a String Contains Only Unique Characters
// // function hasUniqueChars(str) {
// //   return new Set(str).size === str.length;
// // }
// // console.log(hasUniqueChars('abcde')); // true
// // console.log(hasUniqueChars('aabc')); // false

// //--->Repeat A string a given Number of Time 

// // function REpeastring (str ,num){
// //     if(num < 0)return '';

// //     return str.repeat(num)
// // }

// // console.log(REpeastring('abc' ,3))
// // ---> Remove Duploication characters from  a string 

// // function removeDuplication(str){
// //     return [...new Set(str)].join('')
// // }
// // console.log(removeDuplication('jjuugall'))


// /// string find longest word in a string 

// // function findLongestWord(str){
// //     const words=str.split(' ');
// //     console.log(words)
// //     let longest=0;

// //     for(let word of words){
// //         if(word.length > longest){
// //             longest=word.length
// //         }
// //     }

// //     return longest
// // }

// // console.log(findLongestWord('the jugal sharma world one two'))


// /// Count the Number of Voewls in a String  ------------------->>

// // function CountVowels(str){

// //     const vowls='aeiouAEIou'

// //     let count=0

// //     for(let char of str){
// //         if(vowls.includes(char)){
// //             console.log(count++)
// //             count++
// //         }
// //     }

// //     return count
// // }

// // console.log(CountVowels('hello world'))


// // --array revers ------->
// // let str='jugal'

// // for(let i=str.length-1; i>=0; i--){
// //     console.log(str[i])
// // }

// // array revers -------->>

// // let str='jugal'

// // console.log(str.split('').reverse().join(''))




// // Condition: 3 < 5 ✅

// // i === 3? ✅ → execute data[i + 1] = data[i] → data[4] = data[3]

// // So, data[4] becomes 40 (was 50)

// // Array now: [10, 20, 30, 40, 40]

// // console.log(i) → prints 3

// // Increment: i += 3 → i = 6

// // i = 6

// // Condition: 6 < 5 ❌ → loop ends

// // console.log('ppp')
// // console.log(data); // Check updated array

// // // i=0 
// // 0===2

// // //i=2
// // 2===2


// // data[i]30=data[i+1]2+1 =40

// // console.log(40)


// // const maxTokens = 5; // Maximum tokens in the bucket
// // let tokens = maxTokens; // Current tokens
// // const refillInterval = 1000; // 1 second
// // const refillRate = 1; // tokens added per interval

// // // Refill tokens periodically
// // setInterval(() => {
// //     if (tokens < maxTokens) {
// //         tokens += refillRate;
// //         if (tokens > maxTokens) tokens = maxTokens; // cap to maxTokens
// //         console.log(`Token added. Current tokens: ${tokens}`);
// //     }
// // }, refillInterval);

// // // Simulate incoming requests
// // function handleRequest() {
// //     if (tokens > 0) {
// //         tokens--; // consume a token
// //         console.log(`Token consumed. Remaining tokens: ${tokens}`);
// //         return true; // allow request
// //     } else {
// //         console.log("Request rejected. Bucket is empty.");
// //         return false; // reject request
// //     }
// // }

// // // Example: simulate requests every 300ms
// // setInterval(() => {
// //     handleRequest();
// // }, 300000);










// // this is a reverser array console.log
// // console.log(4>0)
// // console.log(0>=0)
// // console.log(-1 >=  0)
// // function revivie(x = 3) {

// //   if (x < data.length) return;   
// //        // base condition
// //   console.log(data[x]);
// //   revivie(x - 1);           // ✅ pass decremented value
// // }

// // let data=[10 , 20 , 30 , 40]


// // revivie();



// // function revivieone(x=1){
// //     if(x > 3){
// //         console.log(true)
// //         return ;
// //     }
// //     console.log(false)
// //     console.log(x)
// //     revivieone(x+1)
// // }

// // revivieone()

// // console.log(1 > 3)









// // function findMissingNumber(num) {
// //     debugger;
// //     let sum = 0;
// //     console.log(num)
// //     for (let i = 0; i < num.length; i++) {
    

// //     }
// //     return num.length * (num.length + 1) / 2 - sum;

// //     4 * 4+1 / 2 -7

// //     4*5 / 2 - 7

// //     20 / 2 - 7

// //     10 -7 
// //     3
// // }


// // For your array [0,1,2,4]:

// // num.length = 4

// // num.length + 1 = 5

// // Multiply: 4 * 5 = 20

// // Divide by 2: 20 / 2 = 10

// // Subtract sum of array: 10 - 7 = 3

// // ✅ Result: 3 → the missing number

// // console.log(findMissingNumber([0,1,2,4])); // Output will be 3 (as 3 is the missing number in the array)





// // 1️⃣ What each part means

// // num.length

// // This is the number of elements in your array.

// // Example: [0,1,2,4] → num.length = 4

// // num.length + 1

// // Since one number is missing, the full range should have num.length + 1 numbers.

// // Example: 4 + 1 = 5 → numbers from 0 to 4

// // Multiplication and division: num.length * (num.length + 1) / 2

// // This is the formula for sum of first n natural numbers starting from 0:
// // 	​

// // Expected sum from 0 to n → 0+1+2+3+4 = 10

// // Subtract actual sum from expected sum → 10 - 7 = 3 ✅




// //     sum += num[i];

// //         setp first 
// //         i=0
// //         sum +=num[0]
// //         //sum=0

// //         second step 
// //         i=1
// //         sum+num[1]
// //         //sum =1

// //         threed step 
// //         i=2
// //         sum+=num[2]
// //         sum=3

// //         forur step 

// //         i=3
// //         sum+=num[4]
// //         sum=7



// // ✅ Simple JavaScript Example
// // function sumNatural(n) {
// //     return (n * (n + 1)) / 2;
// // }
// // console.log(sumNatural(5));   // 15 → (5×6)/2
// // console.log(sumNatural(10));  // 55 → (10×11)/2
// // console.log(sumNatural(100)); // 5050 → (100×101)/2

// // 🧠 Step-by-step for n = 5
// // n = 5
// // n + 1 = 6
// // n × (n + 1) = 5 × 6 = 30
// // 30 ÷ 2 = 15
// // ✅ Sum = 15



// // Type: Divide and Conquer
// // Time Complexity: O(n log n)
// // Space Complexity: O(n)
// // Stability: Stable
// // Use Case: Stable sorting needed, linked list sorting

// // function mergeSort(arr) {
// //   if (arr.length < 2) return arr;
// //   let mid = Math.floor(arr.length / 2);
// //   let left = mergeSort(arr.slice(0, mid));
// //   let right = mergeSort(arr.slice(mid));
// //   let result = [];
// //   while(left.length && right.length) {
// //     if (left[0] < right[0]) result.push(left.shift());
// //     else result.push(right.shift());
// //   }
// //   return [...result, ...left, ...right];
// // }

// // console.log(mergeSort([8, 20, -2, 4, -6]));
// // Output: [-6, -2, 4, 8, 20]

// // function quickSort(arr) {


// //   if (arr.length < 2) return arr;  // base case: array of 0 or 1 element is already sorted

// //   let pivot = arr[arr.length - 1]; // choose the last element as pivot
// // console.log(pivot)

// //   let left = [];   // elements smaller than pivot
// //   let right = [];  // elements greater or equal to pivot

// //   // partition the array
// //   for (let i = 0; i < arr.length - 1; i++) {
// //     if (arr[i] < pivot) {
// //       left.push(arr[i]);
// //     } else {
// //       right.push(arr[i]);
// //     }
// //   }

// //   // recursively sort left and right, then combine
// //   return [...quickSort(left), pivot, ...quickSort(right)];
// // }

// // const arr = [20 , 30 , 40 , 10];
// // console.log(quickSort(arr)); // [-6, -2, 4, 8, 20]







// // function findMissingNumber(data) {
// //     console.log("📥 Input array:", data);
// //     let sum = 0;

// //     console.log("🔢 Calculating actual sum of elements in the array...");
// //     for (let i = 0; i < data.length; i++) {
// //         sum += data[i];
// //         console.log(`➡️ Adding data[${i}] = ${data[i]}, running sum = ${sum}`);
// //     }

// //     const n = data.length; // Since one number is missing, n should be length of array
// //     const expectedSum = (n * (n + 1)) / 2;
// //     console.log(`📊 Expected sum from 0 to ${n}: ${expectedSum}`);

// //     return expectedSum - sum;

// //         // return num.length * (num.length + 1) / 2 - 
// // }

// // console.log("✅ Missing number is:", findMissingNumber([0, 1, 2, 4]));


// // function sumOfNatural(num) {
// //     console.log("📥 Input number:", num);

// //     // 🧠 Using formula: n * (n + 1) / 2
// //     let sum = (num * (num + 1)) / 2;

// //     console.log(`📊 Sum of first ${num} natural numbers = ${sum}`);
// //     return sum;
// // }

// // // 🚀 Example usages
// // sumOfNatural(5);   // 1 + 2 + 3 + 4 + 5 = 15
// // sumOfNatural(10);  // 1 + 2 + ... + 10 = 55
// // sumOfNatural(8);   // 1 + 2 + ... + 8 = 36





// // console.log(suggestCommand("hel", ["help", "hello", "helmet", "heap"])); 
// // // var count=0

// // function Reverse(data, start = 0, end = data.length - 1) {
// //     if (start >= end) {
// //         return data;
// //     }

// //     // Swap
// //     let temp = data[start];
// //     data[start] = data[end];
// //     data[end] = temp;

// //     // Recursive call

// //     console.log(count++)
    
// //     return Reverse(data, start + 1, end - 1);
// // }

// // let data = [100, 80, 90, 70, 60, 20, 10];
// // console.log(Reverse(data)); // [10, 20, 60, 70, 90, 80, 100]

// // let temp=one // temp =10
// // one=two   // one = 20
// // two=temp // two= 10
// // console.log("One:", one, "Two:", two)







// // 🧠 FOR LOOP:
// // We'll go through each number one by one and track:



// // |  i | nums\[i] | sum += nums\[i] | Updated max? | Reset sum? | sum | max |
// // | -: | -------: | --------------- | ------------ | ---------- | --- | --- |
// // |  0 |        5 | 0 + 5 = 5       | 5 ≥ 5 → ✅    | No         | 5   | 5   |
// // |  1 |        4 | 5 + 4 = 9       | 9 > 5 → ✅    | No         | 9   | 9   |
// // |  2 |       -1 | 9 - 1 = 8       | 8 < 9 → ❌    | No         | 8   | 9   |
// // |  3 |        7 | 8 + 7 = 15      | 15 > 9 → ✅   | No         | 15  | 15  |
// // |  4 |        8 | 15 + 8 = 23     | 23 > 15 → ✅  | No         | 23  | 23  |



// // 📊 1. Stock Market Analysis
// // Goal: Find the best time to buy and sell a stock to maximize profit (if you can buy once and sell once).

// // 📈 Input: Daily stock price changes (profit/loss)



// // 💵 2. Bank Account Monitoring
// // Goal: Find the time period with the highest net deposit activity.

// // 📦 Input: Daily net balance changes (deposits - withdrawals)


// // 🎮 4. Gaming: Maximum Score Streak
// // Goal: Track the maximum scoring streak in a game.

// // 🕹️ Input: Points scored in each level or round