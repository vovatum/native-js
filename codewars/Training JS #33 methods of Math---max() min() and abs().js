function maxMin(arr1, arr2) {
    let arrCalc = []
    for (let i = 0; i < arr1.length; i++) {
        arrCalc.push(Math.abs(arr1[i] - arr2[i]))
    }
    return [Math.max(...arrCalc), Math.min(...arrCalc)]
}


console.log(maxMin([1, 3, 5], [9, 8, 7]))
// , [8,2]);
console.log(maxMin([1, 10, 100, 1000], [0, 0, 0, 0]))
// , [1000,1]);
console.log(maxMin([10, 20, 30, 40], [111, 11, 1, -111]))
// , [151,9]);
 