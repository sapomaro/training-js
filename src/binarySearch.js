function binarySearch(arr, value) {
  let start = 0;
  let end = arr.length;

  if (end === 0) {
    return null;
  }

  while (start < end) {
    let mid = Math.floor((start + end) / 2);

    if (arr[mid] === value) {
      return mid;
    }

    if (arr[mid] > value) {
      end = mid;
    }
    else {
      start = mid + 1;
    }
  }

  return null;
}

console.log(binarySearch([], 1) === null);

console.log(binarySearch([1], 1) === 0);

console.log(binarySearch([1, 2], 1) === 0);

console.log(binarySearch([1, 2], 2) === 1);

console.log(binarySearch([1, 2, 4, 5, 6, 7, 8, 8, 9], 7) === 5);

console.log(binarySearch([1, 2, 4, 5, 6, 7, 8, 8, 9], 4) === 2);

console.log(binarySearch([1, 2, 4, 5, 6, 7, 8, 8, 9], 8) === 7);

console.log(binarySearch([1, 2, 4, 5, 6, 7, 8, 8, 9], 6) === 4);

console.log(binarySearch([1, 2, 4, 5, 6, 7, 8, 8, 9], 10) === null);
