function range(left, right, step = 1) {
    let arr = [];
    for (let i = left;
        (step < 0) && (i >= right) || (step > 0) && (i <= right); i += step) {
        arr.push(i)
    }
    return arr
}

function sum(arr) {
    res = 0
    for (let element of arr) {
        res += element
    }
    return res
}

console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55