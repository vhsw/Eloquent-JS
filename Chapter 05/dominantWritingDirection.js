function dominantDirection(text) {
    let scripts = require('./scripts');
    let res = {}
    for (let element of text) {
        let code = element.codePointAt(0);
        // That's gross
        for (let lang of scripts) {
            for (let range of lang.ranges) {
                if (range[0] <= code && code <= range[1]) {
                    if (res[lang.direction]) {
                        res[lang.direction] += 1
                    } else res[lang.direction] = 1
                }
            }
        }
    }
    return Object.keys(res).reduce((a, b) => res[a] > res[b] ? a : b)
}

console.log(dominantDirection("Hello!"));
// → ltr
console.log(dominantDirection("Hey, مساء الخير"));
// → rtl