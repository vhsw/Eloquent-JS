function triange(n) {
    let res = ''
    for (let i = 1; i <= n; i++) {
        res += '*'.repeat(i) + '\n'
    }
    return res
}
console.log(triange(5))