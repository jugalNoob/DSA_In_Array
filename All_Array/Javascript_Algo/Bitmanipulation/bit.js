// function countsetbits(n){

//     let count=0

//     while(n){
//         count+=n&1;
//         n>>=1
//     }
//     return count;
// }

// console.log(countsetbits(13))
// console.log(countsetbits(14))



// function countsetbits(n) {
//     return n.toString(2).split('').filter(bit => bit === '1').length;
// }

// console.log(countsetbits(13)); // Output: 3
// console.log(countsetbits(14)); // Output: 3



function countsetbits(n) {
    let count = 0;
    while (n) {
        count += n & 1;
        n >>= 1;
    }
    return count;
}

console.log(countsetbits(0b0101)); // Binary 0101