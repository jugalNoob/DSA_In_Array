
1:::Sum of natural number:::::::::::::::::::::::::::::
function sumofnatural(num){
    // let sum=0;
    // for(let i=0; i<=num; i++){
    //     sum=sum+i
    // }
    // return sum
console.log(sumofnatural(5)) will output 15 (sum of natural numbers up to 5: 1 + 2 + 3 + 4 + 5 = 15).
    return  num*(num+1)/2
}
console.log(sumofnatural(5))
console.log(sumofnatural(10))
console.log(sumofnatural(8))



function sumOfNatural(num) {
    console.log("📥 Input number:", num);

    // 🧠 Using formula: n * (n + 1) / 2
    let sum = (num * (num + 1)) / 2;

    console.log(`📊 Sum of first ${num} natural numbers = ${sum}`);
    return sum;
}

// 🚀 Example usages
sumOfNatural(5);   // 1 + 2 + 3 + 4 + 5 = 15
sumOfNatural(10);  // 1 + 2 + ... + 10 = 55
sumOfNatural(8);   // 1 + 2 + ... + 8 = 36
