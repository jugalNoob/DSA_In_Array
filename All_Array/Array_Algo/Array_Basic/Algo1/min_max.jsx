:::::::: Min and Max Logic in array  .................
https://log2base2.com/
1. first 

let data=[1 , 2 , 3 , 4]

let min=data[0]

for(let i=0; i<data.length; i++){
    if(data[i] < min){
        min=data[i]
    }
}
console.log(min)

let max=data[0]
for(let i=0; i<data.length; i++){
   if(data[i] > max){
       max=data[i]
   }
}
console.log(max)


2.second 
let min=[40 , 20]

console.log(Math.min(...min))

let max =[40 , 60]

console.log(Math.max(...max))

3.third
const a = 10;
const b = 20;
const c = 5;

const min = Math.min(a, b, c); // Minimum value
const max = Math.max(a, b, c); // Maximum value

console.log(`Minimum: ${min}`); // Output: Minimum: 5
console.log(`Maximum: ${max}`); // Output: Maximum: 20