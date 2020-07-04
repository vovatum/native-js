function roundIt(n) {
    let arr = n.toString().split('')
    let index = arr.indexOf('.')
    let rightSide = arr.length - 1 - index
    return index < rightSide
        ? Math.ceil(n)
        : index > rightSide
            ? Math.floor(n)
            : Math.round(n)
}

console.log(roundIt(3.45))
// , 4);
console.log(roundIt(34.5))
// , 34);
console.log(roundIt(34.56))
// , 35);
