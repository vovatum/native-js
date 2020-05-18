function mirrorImage(arr) {
    let a = 0, b = 0
    if (arr.some((x, i) => {
        a = arr[i]
        b = arr[i + 1]
        return a === +String(b).split('').reverse().join('')
    })) {
        return ([a, b])
    } else {
        return ([-1, -1])
    }
}

console.log(mirrorImage([11, 22, 33, 33, 22, 11])) //should return [33,33]
console.log(mirrorImage([454, 86, 57, 75, 16, 88])) //should return [57,75]
console.log(mirrorImage([454, 0, 57, 0, 16, 88])) //should return [-1,-1]

