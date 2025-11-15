

let data = [0, 4, 5, 9];
let index = 0; // pointer for next non-zero position

for (let i = 0; i < data.length; i++) {
  if (data[i] !== 0) {
    // 🔄 swap non-zero element with 'index' position
    let temp = data[i];
    data[i] = data[index];
    data[index] = temp;
    index++;
  }
}

console.log(data); // [4, 5, 9, 0]



let data = [0, 4, 5, 9];

for (let i = 0; i < data.length - 1; i++) {
  let temp = data[i];
  data[i] = data[i + 1];
  data[i + 1] = temp;
}

console.log(data); // [4, 5, 9, 0]





// // let data = [0, 4, 5, 9];
// // let index = 0;

// // // Move non-zero elements to front

// // debugger;

for (let i = 0; i < data.length; i++) {
  if (data[i] !== 0) {
    data[index] = data[i];
    index++;
  }
}

// // // Fill remaining positions with zero
// // while (index < data.length) {
// //   data[index] = 0;
// //   index++;
// // }

// // console.log(data); // [4, 5, 9, 0]



| Step | i | data[i] | index | Array State  | Action                     |
| ---- | - | ------- | ----- | ------------ | -------------------------- |
| 1    | 0 | 0       | 0     | [0, 4, 5, 9] | skip (it’s 0)              |
| 2    | 1 | 4       | 0     | [4, 4, 5, 9] | move 4 to index 0, index=1 |
| 3    | 2 | 5       | 1     | [4, 5, 5, 9] | move 5 to index 1, index=2 |
| 4    | 3 | 9       | 2     | [4, 5, 9, 9] | move 9 to index 2, index=3 |
