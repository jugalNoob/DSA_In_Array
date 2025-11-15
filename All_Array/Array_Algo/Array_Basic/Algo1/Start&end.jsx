



// let data=[10 , 20 , 30 , 40 , -50]


// for(let i=0; i<data.length; i++){

//     if(data[i]>0){

//       if(data[i] > 10){

//         console.log(data[i])

//       }
//     }
// }






let data=[10 , 20 , 30 , 40 , 50]

let start=0

let end=data.length-1
let mid=Math.floor((start+end)/2)
let count=0
console.log(data[mid])

 while(start <= mid){
    console.log(count++)

   mid--
}




let data=[10 , 20 , 30 , 40 , 50]

let start=0

let end=data.length-1
let mid=Math.floor((start+end)/2)
let count=0

 while(start <= mid){
    console.log(count++)
    // start ++
    end--
}
