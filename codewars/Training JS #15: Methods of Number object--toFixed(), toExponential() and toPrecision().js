function howManySmaller(arr, n) {
    let newArr = [],
        count = 0;
    for (let number of arr) {
        newArr.push(parseFloat(number.toFixed(2)));
    }
    for (let number of newArr) {
        if (number < n) {
            count += 1;
        }
    }
    return count
}

console.log(howManySmaller([1.234, 1.235, 1.228], 1.24));
console.log(howManySmaller([1.1888, 1.1868, 1.1838], 1.19));
console.log(howManySmaller([3.1288, 3.1212, 3.1205], 3.1212));

// // Test.assertSimilar(howManySmaller([1.234,1.235,1.228],1.24), 2);
// // Test.assertSimilar(howManySmaller([1.1888,1.1868,1.1838],1.19), 1);
// // Test.assertSimilar(howManySmaller([3.1288,3.1212,3.1205],3.1212), 2);
// Первая миссия: пусть все элементы в массиве сохраняют два десятичных знака (не нужно преобразовывать число n).

// Вторая
// миссия: Traversal
// arr, посчитать
// номер
// элемента, который
// меньше
// n
// и
// вернуть
// его.например
// :
// ```howManySmaller ([1.234,1.235,1.228], 1.24)
// должен возвращать 2 howManySmaller ([1.1888,1.1868,1.1838], 1.19)
// должен возвращать 1 howManySmaller ([3.1288,3.1212,3.1205], 3.1212)
// должен возвращаться 2
