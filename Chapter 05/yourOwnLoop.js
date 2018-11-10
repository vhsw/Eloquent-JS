function loop(init, condition, finalExpr, statement) {
    for (let n = init; condition(n); n = finalExpr(n)) {
        statement(n)
    }
}
loop(3, n => n > 0, n => n - 1, console.log);
// → 3
// → 2
// → 1