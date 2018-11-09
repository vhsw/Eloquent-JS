function reverseArray(arr) {
    let res = []
    for (let i = arr.length - 1; i >= 0; i--) {
        res.push(arr[i])
    }
    return res
}

function reverseArrayInPlace(arr) {
    let res = []
    for (let i = Math.floor(arr.length / 2); i >= 0; i--) {
        // python style
        [arr[i], arr[arr.length - 1 - i]] = [arr[arr.length - 1 - i], arr[i]]
    }
}

console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// // → [5, 4, 3, 2, 1]