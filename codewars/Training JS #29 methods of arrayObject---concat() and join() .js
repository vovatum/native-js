function bigToSmall(arr) {
    let result = []
    for (let i = 0; i < arr.length; i++) {
        result = result.concat(arr[i])
    }
    return result.sort((a, b) => b - a).join('>')
}

console.log(typeof bigToSmall([[1, 2], [3, 4], [5, 6]]))
// should return "6>5>4>3>2>1"
console.log(bigToSmall([[1, 3, 5], [2, 4, 6]]))
// should return "6>5>4>3>2>1"
console.log(bigToSmall([[1, 1], [1], [1, 1]]))
// should return "1>1>1>1>1"