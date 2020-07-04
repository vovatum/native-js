function blackAndWhite(arr) {
    if (!Array.isArray(arr))
        return "It's a fake array"
    let arrOne = arr.filter(num => {
        if (num === 5) {
            return num
        }
    })
    let arrTwo = arr.filter(num => {
        if (num === 13) return num
    })
    if (arrOne.length && arrTwo.length) {
        return "It's a black array"
    } else
        return "It's a white array"
}


console.log(blackAndWhite(5, 13))
// "It's a fake array");
console.log(blackAndWhite([5, 13]))
// , "It's a black array");
console.log(blackAndWhite([5, 12]))
// , "It's a white array");