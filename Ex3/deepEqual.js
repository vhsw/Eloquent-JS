function deepEqual(one, two) {
    if (typeof one == 'object' && typeof two == 'object') {
        if (Object.keys(one).length != (Object.keys(two)).length) return false
        for (let key of Object.keys(one)) {
            if (deepEqual(one[key], two[key]) == false) return false
        }
        return true
    } else {
        return one === two
    }
}

let obj = {
    here: {
        is: "an"
    },
    object: 2
};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {
    here: 1,
    object: 2
}));
// → false

console.log(deepEqual({
    here: {
        is: "an"
    },
    object: 2,
    a: 1
}, obj));
// → false

console.log(deepEqual(obj, {
    here: {
        is: "an"
    },
    object: 2
}));
// → true