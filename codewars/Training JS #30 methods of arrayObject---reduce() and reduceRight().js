function tailAndHead(arr) {
    let newArr = arr.map((x, i) =>
        i === 0
            ? +String(x)[String(x).length - 1]
            : i !== arr.length - 1
            ? [+String(x)[0], +String(x)[String(x).length - 1]]
            : +String(x)[0]
    )
        .reduce((a, b) => a.concat(b), [])
    let resArr = []
    for (let i = 0; i < newArr.length; i += 2) {
        resArr.push(newArr[i] + newArr[i + 1])
    }
    return resArr.reduce((a, b) => a * b)
}

console.log(tailAndHead([123, 456, 789, 12, 34, 56, 78]))
// , 532350);
console.log(tailAndHead([1, 2, 3, 4, 5]))
// , 945);
console.log(tailAndHead([111, 2345, 66, 78, 900]))
// , 7293);
console.log(tailAndHead([35456, 782, 569, 2454, 875]))
// , 12012);
