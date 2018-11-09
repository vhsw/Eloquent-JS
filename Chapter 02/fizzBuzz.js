function fizzBuzz() {
    let res = ''
    for (let i = 1; i <= 100; i++) {
        buf = ''
        if (i % 3 === 0) {
            buf += 'Fizz'
        }

        if (i % 5 === 0) {
            buf += 'Buzz'
        }
        if (!buf) buf = i
        res += buf + '\n'

    }
    return res
}
console.log(fizzBuzz())