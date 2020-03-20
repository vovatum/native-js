// работает только с заданными условиями, но не с рандом
// function infiniteLoop(arr, d, n) {
//     for (subArr of arr) {
//         for (let i = 0; i < n; i++) {
//             if (d === "left") {
//                 subArr.shift() &&
//                 subArr.push(subArr[subArr.length - 1] >= 9
//                     ? 1
//                     : subArr[subArr.length - 1] + 1);
//             } else {
//                 subArr.pop() &&
//                 subArr.unshift(subArr[0] === 1
//                     ? 9
//                     : subArr[0] - 1);
//             }
//         }
//     }
//     return arr;
// }

function infiniteLoop(arr, d, n) {
    // let sumArr = arr.length; не пригодился
    let sumSubArr = [];
    let newArr = [];
    let resArr = [];
    for (subArr of arr) {
        sumSubArr.push(subArr.length);
        newArr.push(...subArr);
    }
    for (let i = 0; i < n; i++) {
        if (d === "left") {
            newArr.push(newArr[0]);
            newArr.shift();
        } else {
            newArr.unshift(newArr[newArr.length - 1]);
            newArr.pop();
        }
    }
    for (let i = 0, j = 0; i < newArr.length; i += sumSubArr[j], j++) {
        resArr.push(newArr.slice(i, i + sumSubArr[j]));
    }
    return resArr;
}

console.log(infiniteLoop([[1, 2, 3], [4, 5, 6], [7, 8, 9]], "left", 1));
// should
// return [[2, 3, 4], [5, 6, 7], [8, 9, 1]]
console.log(infiniteLoop([[1, 2, 3], [4, 5, 6], [7, 8, 9]], "right", 1));
// should
// return [[9, 1, 2], [3, 4, 5], [6, 7, 8]]
console.log(infiniteLoop([[1, 2], [3, 4, 5, 6], [7, 8, 9, 10]], "left", 2));
// should
// return [[3, 4], [5, 6, 7, 8], [9, 10, 1, 2]]