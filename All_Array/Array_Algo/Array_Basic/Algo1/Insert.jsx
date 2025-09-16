🔹 What is Array Insert?

In arrays, insert means adding a new element at a specific position (index).

If you insert at the end, it’s like .push().

If you insert at the start, it’s like .unshift().

If you insert at a middle index, you use .splice().



1::Array Insert  ...................................
:::::::::::::::::::::::
et data=[ 9 , 8 , 7 , 6 , 5 , 4 , 3 , 2 , 1,0,100 ]
console.log(data.length)
let add=69;

let post=0;

for(let i=data.length-1; i>=0; i--){

    if(i>=post){
        
        data[i+1]=data[i]
    }if(i==post){

        data[i]=add;
    }

}

console.log(data)


// ---> Third logic 

var myArray = ["Element 1", "Element 2", "Element 3"];
var elementsToInsert = ["New Element 1", "New Element 2"];
var insertionIndexes = [1, 3];
for (var i = 0; i < elementsToInsert.length; i++) {
  var index = insertionIndexes[i];
  myArray.splice(index, 0, elementsToInsert[i]);
}
console.log(myArray);


// ---> Four Logic
let data=[2 ,  3 , 4 , 5]
data.splice(0 , 0 , 1)
console.log(data)