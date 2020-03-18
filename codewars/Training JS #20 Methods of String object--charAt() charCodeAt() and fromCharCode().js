function topSecret(str) {
    let words = str.split(" ");
    let chars = words
        .map(e => e.split("")
            .map(e => 90 < e.codePointAt(0) < 97 //условие выполняется и изменяет всю строку
                ? String.fromCharCode(e.charCodeAt() - 7)
                : String.fromCharCode(e.charCodeAt() - 3)))
        .map(e => e.join(""))
        .join(" ");
    return chars;
}

console.log(topSecret("Pb qdph lv Mrkq"));
console.log(topSecret("wklv lv dq hadpsoh"));
console.log(topSecret("Khoor Zruog!"));
console.log("A".codePointAt(0));
console.log("z".codePointAt(0));
console.log("a".codePointAt(0));

// function topSecret(str) {
//     let words = str.split(" ");
//     let chars = words
//         .map(e => e.split("")
//             .map(e => String.fromCharCode(e.charCodeAt() - 3)))
//         .map(e => e.join(""))
//         .join(" ");
//     return chars;
// }
// решение без учёта символов:
// M_ name is John
// this is an e^ample
// Hello World
