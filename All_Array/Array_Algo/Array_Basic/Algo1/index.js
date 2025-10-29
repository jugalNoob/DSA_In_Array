https://www.instagram.com/p/DPeAjXfjSAD/?img_index=20&igsh=NnF3MDA2bHJwenB4



// Visual diagrams to understand it deeper
let count=0
let data1=[1 , 2  , 2 , 3]
let data2=[7 , 8 , 9 , 10]
let data3=[]
for(let i=0; i<data1.length; i++){
    count ++
  //  console.log(data3 ,'data3') --> perfect way to understand how work
    // --->> 
    data3[i]=data1[i]   // d
    // ata3[0]=data[0]
    // data[1]=data[1]
    //data[2]=data[2]
    //data[3]=data[2]
}
// console.log(count , 'count')
console.log(data3)

debugger; for(let i=0; i<data2.length; i++){

    // console.log(data1.length+i)
    // console.log(data3 , 'data3')

    // data3[data1.length]=data2[i]

// data1.length = 4 (since data1 = [1, 2, 2, 3])

// So data3[4 + i] = data2[i] → we are appending to the end of data3.

    data3[data1.length+i]=data2[i]


}
console.log(data3)

// 🧠 Why data1.length + i?
// You already filled the first 4 indexes (0 to 3) of data3 with data1.
// So, to start adding data2 after the last index of data3, you must start from index


// 🔁 Let's Walk Through the Loop:

// | i | data2\[i] | data1.length + i | Assignment      | data3 after step           |
// | - | --------- | ---------------- | --------------- | -------------------------- |
// | 0 | 7         | 4                | `data3[4] = 7`  | \[1, 2, 2, 3, 7]           |
// | 1 | 8         | 5                | `data3[5] = 8`  | \[1, 2, 2, 3, 7, 8]        |
// | 2 | 9         | 6                | `data3[6] = 9`  | \[1, 2, 2, 3, 7, 8, 9]     |
// | 3 | 10        | 7                | `data3[7] = 10` | \[1, 2, 2, 3, 7, 8, 9, 10] |