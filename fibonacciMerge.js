let sequenceOne = [3, 2, 1, 13, 8, 5, 0, 1];
let sequenceTwo = [105, 79, 100, 110];

function merge(left, right) {
  let sortedArray = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      sortedArray.push(left.shift());
    } else {
      sortedArray.push(right.shift());
    }
  }

  return [...sortedArray, ...left, ...right];
}
function mergeSort(array) {
  console.log("This was printed recursively");
  if (array.length <= 1) return array;

  let middle = Math.floor(array.length / 2);

  let left = mergeSort(array.slice(0, middle));
  let right = mergeSort(array.slice(middle));

  return merge(left, right);
}

console.log(mergeSort(sequenceOne));
console.log(mergeSort(sequenceTwo));
