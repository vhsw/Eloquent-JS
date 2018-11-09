function arrayToList(arr) {
    let list = null
    tmp = arr
    for (let element of tmp.reverse()) {
        list = {
            value: element,
            rest: list
        }
    }
    return list
}

function listToArray(list) {
    res = []
    while (list) {
        res.push(list.value)
        list = list.rest
    }
    return res
}

function prepend(value, rest) {
    return {
        value,
        rest
    }
}

function nth(list, num) {
    i = 0
    value = list.value
    for (let i = 0; i < num; i++) {
        list = list.rest
        value = list.value
    }
    return value
}
console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20