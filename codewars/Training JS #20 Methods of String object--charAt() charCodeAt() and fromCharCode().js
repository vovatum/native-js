function topSecret(str) {
    let words = str.split(" ");
    let chars = words
        .map(e => e.split("")
            .map(e => String.fromCharCode(e.charCodeAt() - 3)))
        .map(e => e.join(""))
        .join(" ");
    return chars;
}

console.log(topSecret("Pb qdph lv Mrkq"));
console.log(topSecret("wklv lv dq hadpsoh"));
console.log(topSecret("Khoor Zruog!"));
console.log("A".codePointAt(0));
console.log("z".codePointAt(0));