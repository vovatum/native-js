function firstToLast(str, c) {
    if (str.indexOf(c) === -1) {
        return -1
    } else {
        return str.lastIndexOf(c) - str.indexOf(c)
    }
}

console.log(firstToLast("ababc", "a"));
console.log(firstToLast("ababc", "c"));
console.log(firstToLast("ababc", "d"));

// firstToLast("ababc","a") should return 2(2-0)
// firstToLast("ababc","c") should return 0(4-4)
// firstToLast("ababc","d") should return -1
