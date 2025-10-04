let data = [10 , 20 , 9 , 2];

for(let i = 0; i < data.length; i++) {
    let minId = i;
    // console.log(`\n🔎 Pass ${i + 1}, start from index ${i}, current array:`, data);

    // find smallest in the rest
    for (let j = i + 1; j < data.length; j++) {



      // console.log(`   Compare data[${j}] = ${data[j]} with current min data[${minId}] = ${data[minId]}`);

      if (data[j] < data[minId]) { 

  
        
        // console.log(`   👉 New minimum found: ${data[j]} at index ${j}`);
        minId = j;
      }
    }

    // swap
    // if (minId !== i) {
    //   console.log(`   🔄 Swap data[${i}] = ${data[i]} with data[${minId}] = ${data[minId]}`);
    // }



let temp = data[minId];   // temp = data[3] = 2
data[minId] = data[i];    // data[3] = data[0] = 10
data[i] = temp;           // data[0] = temp = 2

//[2 , 20 , 9 , 10]


    // console.log(`   ✅ After pass ${i + 1}:`, data);
  }



console.log("\n🎯 Final Sorted Array:", data);




// first Time Loop Run ------------------------->>>
//[10 , 20 , 9 , 2]

j = 1

// Compare: data[1] = 20 with data[minId=0] = 10

Is 20 < 10? ❌ → No update

minId stays 0.

j = 2

Compare: data[2] = 9 with data[minId=0] = 10

Is 9 < 10? ✅ → Yes

So we run:


 minId [2]=j [2] // swap in mind j value 2

minId = j;   // minId = 2
Now minId = 2 (pointing to value 9).

j = 3

Compare: data[3] = 2 with data[minId=2] = 9

Is 2 < 9? ✅ → Yes

So:

minId = j;   // minId = 3


Now minId = 3 (pointing to value elemnt of array 2).


let temp = data[minId];   // temp = data[3] = 2
data[minId] = data[i];    // data[3] = data[0] = 10
data[i] = temp;           // data[0] = temp = 2




second Pass  start Loop   -------------------------->>

Array after first pass
[2, 20, 9, 10]


i = 1 → second pass, start from index 1
minId = i = 1 → value = 20

Inner loop of second pass

j = 2
Compare: data[2] = 9 with data[minId = 1] = 20
Is 9 < 20? ✅ → Yes

minId = j;  // minId = 2


Now minId = 2 (value = 9)

j = 3
Compare: data[3] = 10 with data[minId = 2] = 9
Is 10 < 9? ❌ → No update
minId stays 2 (value = 9)

Swap at the end of second pass
let temp = data[minId];   // temp = data[2] = 9
data[minId] = data[i];    // data[2] = data[1] = 20
data[i] = temp;           // data[1] = 9


Array after swap:

[2, 9, 20, 10]


third loop::::::::::::::::::::----#>>>
of Pass 3
Array before Pass 3
[2, 9, 20, 10]


i = 2 → start 

minId = i = 2 → value = 20

Inner loop runs j = i + 1 = 3 to end of array

Inner loop

j = 3
Compare: data[3] = 10 with data[minId = 2] = 20
10 < 20? ✅ Yes → update minId = 3

Now minId points to value 10 at index 3



let temp = data[minId]; // temp = data[3] = 10

data[minId] = data[i]; // data[3] = data[2] = 20

data[i] = temp; // data[2] = temp = 10

