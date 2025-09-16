

||||||||||||Selection Sort ------------------------------------------------
   let items = [20, 12, 53, 3,56,78,0,5,89,34];
      function selectionSort(data) {
        let minId;
        for (let i = 0; i < data.length; i++) {
          minId = i;
          for (let j = i + 1; j < data.length; j++) {
            if (data[j] < data[minId]) {
              minId = j;
            }
          }
          let temp = data[minId];
          data[minId] = data[i];
          data[i] = temp;
        }
      }

      selectionSort(items);
      console.warn(items)




      function selectionSortTrace(data) {
  for (let i = 0; i < data.length - 1; i++) {
    let minId = i;
    for (let j = i + 1; j < data.length; j++) {
      if (data[j] < data[minId]) minId = j;
    }
    console.log(`Pass ${i}: min at ${minId} (value=${data[minId]}) → swap(${i}, ${minId})`);
    [data[i], data[minId]] = [data[minId], data[i]];
    console.log('  ->', JSON.stringify(data));
  }
  return data;
}
