
function fibs(num) {

    if (num <= 0) {
        return [];
    } else if (num === 1) {
        return [0];
    }

    let sequence = [0, 1];

    for (let i = 2; i < num; i++) {
        sequence.push(sequence[i - 1] + sequence[i - 2]);
    }

    return sequence;
}

console.log(fibs(8));