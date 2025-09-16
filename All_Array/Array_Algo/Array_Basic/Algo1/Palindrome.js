A palindrome is a word, number, phrase, or sequence that reads the 
same forward and backward.

🔹 Examples:

Words:

"madam"

"level"

"radar"

Numbers::::::: -----------------<><><><><><><></></></></></></></>

121

1331

12321

Phrases (ignoring spaces/punctuation):

"A man a plan a canal Panama"

"Never odd or even"

Palindrome string  .......................................
///////////////////////////
function pali(data){
let start=0;

console.log(start)

let end=data.length -1;

console.log(end)
let result=true;
while(end>start){
    if(data[start] !=data[end]){
        result=false;
    }
    start++;
    end--;
}
return result;
}
let str="level"
console.log(pali(str))


Step 3 — Start while (end > start) loop:
🔁 First loop: start = 0, end = 4
data[start] = 'l'

data[end] = 'l'

✅ Match: 'l' == 'l'

start++ → 1, end-- → 3

🔁 Second loop: start = 1, end = 3
data[start] = 'e'

data[end] = 'e'

✅ Match: 'e' == 'e'

start++ → 2, end-- → 2

⛔ Third check: end = 2, start = 2
Loop exits (end is not greater than start)



🧠 Step-by-Step Execution for "level":

String:
Indexes:  0   1   2   3   4  5 
Letters:  l   e   v   e   l  s



✅ Summary of Flow:


| Loop | start | end | data\[start] | data\[end] | Match? |
| ---- | ----- | --- | ------------ | ---------- | ------ |
| 1    | 0     | 4   | 'l'          | 'l'        | ✅ Yes  |
| 2    | 1     | 3   | 'e'          | 'e'        | ✅ Yes  |
| -    | 2     | 2   | —            | —          | Exit   |







const reversedStr = str.split('').reverse().join('');
console.log("Reversed:", reversedStr);
const isPalindrome = str === reversedStr;
console.log(isPalindrome ? "Palindrome" : "Not a palindrome");


let data="level"
console.log(data , "not reverse")
let pal=data.split("").reverse().join("")  
console.log(data  == pal ? 'reverse' : 'reverse not')
//console.log(data.split("").reverse().join("").split("").sort().join("")  , "reverse and sort")