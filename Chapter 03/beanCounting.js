function countChar(str, chr) {
    count = 0
    for (let element of str) {
        if (element == chr) count += 1
    }
    return count
}

function countBs(str) {
    return countChar(str, 'B')
}
console.log(countBs('BBC'))
console.log(countChar('bananas', 'a'))