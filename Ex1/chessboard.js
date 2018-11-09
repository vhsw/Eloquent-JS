function chessboard(rows, cols = rows) {
    res = ''
    for (let i = 0; i < rows; i++) {
        let row = ' #'.repeat(Math.floor(cols / 2))
        if (cols % 2) row += ' '
        let ending = ' '
        if (cols % 2) ending = '#'
        if (i % 2) row = row.substr(1) + ending
        res += row + '\n'
    }
    return res
}
console.log(chessboard(3, 2))