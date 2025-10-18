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
