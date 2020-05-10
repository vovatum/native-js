function threeInOne(arr) {
    let sum = 0
    let temp = []
    let resArr = []
    for (let i = 0; i < arr.length; i += 3) {
        temp = arr.slice(i, i + 3)
        for (let k = 0; k < temp.length; k++) {
            sum += temp[k]
        }
        resArr.push(sum)
        sum = 0
    }
    return resArr
}

console.log(threeInOne( [1,2,3,4,5,6,7,8,9]))