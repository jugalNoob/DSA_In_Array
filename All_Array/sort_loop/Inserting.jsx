let data = [9, 6, 5, 1, 2];

console.log("Initial:", data);

for (let i = 0; i < data.length; i++) {
  let current = data[i];
  let j = i - 1;

  console.log(`\nPass ${i + 1} → current = ${current}`);

  while (j >= 0 && data[j] > current) {
    console.log(`  Compare ${data[j]} > ${current} → shift ${data[j]} right`);
    data[j + 1] = data[j];
    console.log("  Array now:", data);
    j--;
  }

  data[j + 1] = current;
  console.log(`  Insert ${current} at position ${j + 1}`);
  console.log("  Array after insert:", data);
}

console.log("\n✅ Final Sorted:", data);

Initial: [9,6,5,1,2]

Pass 1 → current = 9
  Insert 9 at position 0
  Array after insert: [9,6,5,1,2]

Pass 2 → current = 6
  Compare 9 > 6 → shift 9 right
  Array now: [9,9,5,1,2]
  Insert 6 at position 0
  Array after insert: [6,9,5,1,2]

Pass 3 → current = 5
  Compare 9 > 5 → shift 9 right
  Array now: [6,9,9,1,2]
  Compare 6 > 5 → shift 6 right
  Array now: [6,6,9,1,2]
  Insert 5 at position 0
  Array after insert: [5,6,9,1,2]

Pass 4 → current = 1
  Compare 9 > 1 → shift 9 right
  Array now: [5,6,9,9,2]
  Compare 6 > 1 → shift 6 right
  Array now: [5,6,6,9,2]
  Compare 5 > 1 → shift 5 right
  Array now: [5,5,6,9,2]
  Insert 1 at position 0
  Array after insert: [1,5,6,9,2]

Pass 5 → current = 2
  Compare 9 > 2 → shift 9 right
  Array now: [1,5,6,9,9]
  Compare 6 > 2 → shift 6 right
  Array now: [1,5,6,6,9]
  Compare 5 > 2 → shift 5 right
  Array now: [1,5,5,6,9]
  Insert 2 at position 1
  Array after insert: [1,2,5,6,9]

✅ Final Sorted: [1,2,5,6,9]




| Pass (i) | Current | Shifts Made                     | Array After       |
| -------- | ------- | ------------------------------- | ----------------- |
| 1        | 9       | None                            | `[9, 6, 5, 1, 2]` |
| 2        | 6       | 9 → right                       | `[6, 9, 5, 1, 2]` |
| 3        | 5       | 9 → right, 6 → right            | `[5, 6, 9, 1, 2]` |
| 4        | 1       | 9 → right, 6 → right, 5 → right | `[1, 5, 6, 9, 2]` |
| 5        | 2       | 9 → right, 6 → right, 5 → right | `[1, 2, 5, 6, 9]` |
