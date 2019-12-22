function cutIt(arr) {
    let shortString = arr[0],
        newArr = [];
    for (let string of arr) {
        if (string.length < shortString.length) {
            shortString = string
        }
    }
    for (let string of arr) {
        newArr.push(string.slice(0, shortString.length))
    }
    return newArr
}

console.log(cutIt(["ab", "cde", "fgh"]));
console.log(cutIt(["abc", "defgh", "ijklmn"]));
console.log(cutIt(["codewars", "javascript", "java"]));
// cutIt(["ab","cde","fgh"]) should return ["ab","cd","fg"]
// cutIt(["abc","defgh","ijklmn"]) should return ["abc","def","ijk"]
// cutIt(["codewars","javascript","java"]) should return ["code","java","java"]
