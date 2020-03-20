function shuffleIt(arr, ...arrArrIndex) {
    for (arrIndex of arrArrIndex) {
        let tmpArr = [arr[arrIndex[0]], arr[arrIndex[1]]];
        arr[arrIndex[0]] = tmpArr[1];
        arr[arrIndex[1]] = tmpArr[0];
    }
    return arr;
}

console.log(shuffleIt([1, 2, 3, 4, 5], [1, 2]));
console.log(shuffleIt([1, 2, 3, 4, 5], [1, 2], [3, 4]));
console.log(shuffleIt([1, 2, 3, 4, 5], [1, 2], [3, 4], [2, 3]));

// shuffleIt([1, 2, 3, 4, 5], [1, 2])
// should
// return [1, 3, 2, 4, 5]
// shuffleIt([1, 2, 3, 4, 5], [1, 2], [3, 4])
// should
// return [1, 3, 2, 5, 4]
// shuffleIt([1, 2, 3, 4, 5], [1, 2], [3, 4], [2, 3])
// should
// return [1, 3, 5, 2, 4]