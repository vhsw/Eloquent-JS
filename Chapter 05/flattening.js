function flattern(arr){
    return arr.reduce((a, b) => a.concat(b))
}
let arrays = [[1, 2, 3], [4, 5], [6]];

console.log(flattern(arrays))
// → [1, 2, 3, 4, 5, 6]