function pickIt(arr) {
    let odd = [], even = [];
    for (let i = 0; i < arr.length; i++) {
        arr[i] % 2 === 1 ? odd.push(arr[i]) : even.push(arr[i]);
    }
    return [odd, even];
}

console.log(pickIt([1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 13, 41]));

