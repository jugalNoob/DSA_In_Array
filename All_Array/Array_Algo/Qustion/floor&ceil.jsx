function floorAndCeilSorted(arr, x) {
  let low = 0, high = arr.length - 1;
  let floor = null, ceil = null;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] === x) {
      return { floor: x, ceil: x }; // exact match
    }
    if (arr[mid] < x) {
      floor = arr[mid];
      low = mid + 1;
    } else {
      ceil = arr[mid];
      high = mid - 1;
    }
  }
  return { floor, ceil };
}

// Example
const sortedArr = [-6, -2, 4, 8, 20];
console.log(floorAndCeilSorted(sortedArr, 5));
// { floor: 4, ceil: 8 }
