function fibs(num) {
  if (num <= 0) return [];
  if (num === 1) return [0];

  let sequence = [0, 1];

  for (let i = 2; i < num; i++) {
    sequence.push(sequence[i - 1] + sequence[i - 2]);
  }

  return sequence;
}
// console.log(fibs(8));

function fibsRec(num) {
  if (num <= 0) return [];
  if (num === 1) return [1];
  if (num === 2) return [0, 1];

  function getFibSequence(n, sequence = [0, 1]) {
    if (sequence.length >= n) return sequence;
    sequence.push(
      sequence[sequence.length - 1] + sequence[sequence.length - 2]
    );
    return getFibSequence(n, sequence);
  }
  return getFibSequence(num);
}
console.log(fibsRec(8));
